import { useEffect, useSyncExternalStore } from "react";
import { EPICS, epicOfScene, findScene } from "@/utils/presentationData";

export const STORAGE_KEY = "ilhativa-stage-v1";
const CHANNEL_NAME = "ilhativa-stage";

const emptyPersona = () => ({
  name: "",
  sport: "",
  frequency: "",
  barreira: "",
  frustration: 0,
  tick: 0,
});

export const defaultState = {
  epic: 1,
  scene: "1.1",
  polo: "vitoria",
  reveal: 0,
  breath: false,
  epicTick: 0,
  story: 0,
  personas: [emptyPersona(), emptyPersona()],
};

let state = defaultState;
let hydrated = false;
let channel = null;
let storageBound = false;
const listeners = new Set();

const isBrowser = () => typeof window !== "undefined";

function emit() {
  listeners.forEach((listener) => listener());
}

function persist(next) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable */
  }
}

function connect() {
  if (!isBrowser()) return;
  if (!channel && typeof BroadcastChannel !== "undefined") {
    channel = new BroadcastChannel(CHANNEL_NAME);
    channel.onmessage = (event) => {
      if (!event.data || event.data.type !== "state") return;
      state = { ...state, ...event.data.state };
      emit();
    };
  }
  if (!storageBound) {
    storageBound = true;
    window.addEventListener("storage", (event) => {
      if (event.key !== STORAGE_KEY || !event.newValue) return;
      try {
        state = { ...state, ...JSON.parse(event.newValue) };
        emit();
      } catch {
        /* ignore malformed payload */
      }
    });
  }
}

export function getState() {
  return state;
}

export function getServerState() {
  return defaultState;
}

export function subscribe(listener) {
  listeners.add(listener);
  connect();
  return () => listeners.delete(listener);
}

export function hydrate() {
  if (!isBrowser() || hydrated) return;
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      state = { ...defaultState, ...JSON.parse(raw) };
      emit();
    }
  } catch {
    /* ignore malformed payload */
  }
  connect();
}

export function setState(patch) {
  const next = typeof patch === "function" ? patch(state) : patch;
  state = { ...state, ...next };
  persist(state);
  if (channel) channel.postMessage({ type: "state", state });
  emit();
}

export const actions = {
  setEpic(epicId) {
    const epic = EPICS.find((item) => item.id === epicId) ?? EPICS[0];
    const first = epic.scenes[0];
    setState((current) => ({
      epic: epic.id,
      scene: first.id,
      reveal: 0,
      epicTick: current.epicTick + 1,
      polo: first.polo && first.polo !== "both" ? first.polo : current.polo,
    }));
  },
  setScene(sceneId) {
    const scene = findScene(sceneId);
    const epic = epicOfScene(sceneId);
    setState((current) => ({
      scene: sceneId,
      epic: epic.id,
      reveal: 0,
      polo: scene && scene.polo !== "both" ? scene.polo : current.polo,
    }));
  },
  setPolo(polo) {
    setState({ polo });
  },
  revealNext(limit = 99) {
    setState((current) => ({ reveal: Math.min(current.reveal + 1, limit) }));
  },
  resetReveal() {
    setState({ reveal: 0 });
  },
  toggleBreath() {
    setState((current) => ({ breath: !current.breath }));
  },
  setStory(index) {
    setState({ story: index });
  },
  updatePersona(index, persona) {
    setState((current) => ({
      personas: current.personas.map((item, i) =>
        i === index ? { ...item, ...persona, tick: Date.now() } : item,
      ),
    }));
  },
  setPersonas(personas) {
    setState({
      personas: personas.map((persona) => ({
        ...emptyPersona(),
        ...persona,
        tick: Date.now(),
      })),
    });
  },
  clearPersonas() {
    setState({ personas: [emptyPersona(), emptyPersona()] });
  },
  reset() {
    setState((current) => ({
      ...defaultState,
      personas: [emptyPersona(), emptyPersona()],
      epicTick: current.epicTick + 1,
    }));
  },
};

export function usePresentation() {
  const snapshot = useSyncExternalStore(subscribe, getState, getServerState);
  useEffect(() => {
    hydrate();
  }, []);
  return snapshot;
}