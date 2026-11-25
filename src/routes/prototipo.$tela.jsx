import { createFileRoute } from "@tanstack/react-router";
import SpaceStatusScreen from "@/components/prototype/SpaceStatusScreen";
import GroupScreen from "@/components/prototype/GroupScreen";
import DiscoverScreen from "@/components/prototype/DiscoverScreen";

const SCREENS = {
  "tela-1": SpaceStatusScreen,
  "tela-2": GroupScreen,
  "tela-3": DiscoverScreen,
};

export const Route = createFileRoute("/prototipo/$tela")({
  component: PrototypeRoute,
  head: () => ({ meta: [{ title: "IlhAtiva · Protótipo" }] }),
});

function PrototypeRoute() {
  const { tela } = Route.useParams();
  const Screen = SCREENS[tela] ?? SpaceStatusScreen;
  return <Screen />;
}