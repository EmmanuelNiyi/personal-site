import { WATER_PATHS } from "./water-paths";

export function WaterBackground() {
  return (
    <div className="water" aria-hidden="true">
      <div className="water-drift">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="none" style={{ display: "block" }}>
          <defs>
            <filter
              id="waterRipple"
              x="-25%"
              y="-25%"
              width="150%"
              height="150%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence type="fractalNoise" baseFrequency="0.0055 0.011" numOctaves={2} seed={9} result="noise">
                <animate
                  attributeName="baseFrequency"
                  dur="28s"
                  values="0.0055 0.011;0.0098 0.0072;0.0055 0.011"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale={78} xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <linearGradient id="waterFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity={0} />
              <stop offset="22%" stopColor="#fff" stopOpacity={1} />
              <stop offset="78%" stopColor="#fff" stopOpacity={1} />
              <stop offset="100%" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
            <mask id="waterMask">
              <rect x="0" y="0" width="1440" height="900" fill="url(#waterFade)" />
            </mask>
          </defs>
          <g filter="url(#waterRipple)" mask="url(#waterMask)">
            {WATER_PATHS.map(([d, width, opacity]) => (
              <path
                key={d}
                d={d}
                fill="none"
                stroke="var(--accent-500)"
                strokeWidth={width}
                opacity={opacity}
              />
            ))}
          </g>
        </svg>
      </div>
      <div className="water-glow" />
    </div>
  );
}
