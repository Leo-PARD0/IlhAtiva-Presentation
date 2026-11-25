import { motion } from "framer-motion";

const ISLAND_PATH =
  "M292 34 C340 44 372 82 366 126 C360 168 322 190 316 226 C310 262 336 292 330 330 C324 368 288 392 282 428 C276 464 300 494 274 530 C248 566 196 582 158 560 C120 538 112 492 128 452 C144 412 178 388 176 348 C174 308 138 284 146 240 C154 196 196 176 200 134 C204 92 244 24 292 34 Z";

const PINS = [
  { x: 292, y: 130, label: "Barra Velha" },
  { x: 240, y: 206, label: "Itaquanduba" },
  { x: 200, y: 312, label: "Perequê" },
  { x: 232, y: 430, label: "Praia Grande" },
];

export default function IlhaMap({ color = "#FF8800", className }) {
  return (
    <svg
      viewBox="0 0 520 640"
      className={className}
      fill="none"
      role="img"
      aria-label="Mapa estilizado de Ilhabela com os espaços esportivos mapeados"
    >
      <defs>
        <linearGradient id="ilha-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#177A6E" />
          <stop offset="100%" stopColor="#0A3D44" />
        </linearGradient>
      </defs>

      <path d={ISLAND_PATH} fill="url(#ilha-fill)" stroke="#0B2027" strokeOpacity="0.35" strokeWidth="2" />
      <path
        d={ISLAND_PATH}
        fill="none"
        stroke="#F5F5F0"
        strokeOpacity="0.24"
        strokeWidth="1"
        transform="translate(250 300) scale(0.82) translate(-250 -300)"
      />
      <path
        d={ISLAND_PATH}
        fill="none"
        stroke="#F5F5F0"
        strokeOpacity="0.18"
        strokeWidth="1"
        transform="translate(250 300) scale(0.64) translate(-250 -300)"
      />

      <polyline
        points={PINS.map((pin) => `${pin.x},${pin.y}`).join(" ")}
        stroke={color}
        strokeOpacity="0.65"
        strokeWidth="2"
      />

      {PINS.map((pin, index) => (
        <g key={pin.label}>
          <motion.circle
            cx={pin.x}
            cy={pin.y}
            r={18}
            fill={color}
            fillOpacity="0.2"
            animate={{ r: [12, 22, 12], opacity: [0.45, 0.08, 0.45] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.35,
              ease: "easeInOut",
            }}
          />
          <circle cx={pin.x} cy={pin.y} r={6} fill="#FFD166" stroke="#0B2027" strokeWidth="2" />
          <text
            x={pin.x + 14}
            y={pin.y + 5}
            fill="#F5F5F0"
            fontSize="13"
            fontFamily="Inter, sans-serif"
          >
            {pin.label}
          </text>
        </g>
      ))}
    </svg>
  );
}