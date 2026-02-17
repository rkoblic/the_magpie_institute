import { useState, useEffect, useRef, useCallback } from "react";

const principles = [
  {
    id: "in-between",
    name: "The In-Between",
    role: "where",
    short: "The substance of things is in the space between them.",
    description:
      "Not a byproduct of interaction but a generative place in its own right — Ma, transitional space, the field between person and material, between person and machine, between two minds. The in-between is not empty. It is where reality gets made.",
    color: "#E8D5B7",
    angle: null,
    disciplines: [
      "Japanese Aesthetics (Ma)",
      "Object Relations Theory",
      "Liminal Studies",
      "Negative Space",
      "Zen Buddhism",
      "Proxemics",
      "Transitional Phenomena",
      "Taoism",
      "Spatial Design",
      "Silence Studies",
    ],
  },
  {
    id: "thresholds",
    name: "Generative Thresholds",
    role: "when",
    short: "The most interesting dynamics occur at edges.",
    description:
      "The edge of chaos, the zone of proximal development, phase transitions, the precipice of understanding where language breaks down. Thresholds are not obstacles — they are the specific locations where systems reorganize into something new. Entropy is the cost. Transformation is the payoff.",
    color: "#D4A574",
    angle: 270,
    disciplines: [
      "Chaos Theory",
      "Phase Transitions",
      "Thermodynamics",
      "Complex Adaptive Systems",
      "Zone of Proximal Development",
      "Tipping Points",
      "Self-Organization",
      "Nonlinear Dynamics",
      "Evolutionary Biology",
      "Scaffolding Theory",
    ],
  },
  {
    id: "coherence",
    name: "Coherence",
    role: "measure",
    short: "Pattern, beauty, and truth are related but not identical.",
    description:
      "Genuine coherence holds across scales — fractally, topologically — and can be distinguished from performed coherence, fluency, or hallucination. Coherence is dynamic, not static — a kaleidoscope, not a photograph. Does it hold together and does it hold together with everything else?",
    color: "#A8B8A0",
    angle: 330,
    disciplines: [
      "Topology",
      "Fractal Geometry",
      "Pattern Languages",
      "Symmetry Theory",
      "Music Theory",
      "Aesthetics",
      "Harmonic Analysis",
      "Crystallography",
      "Wave Mechanics",
      "Generative Art",
    ],
  },
  {
    id: "parallax",
    name: "Parallax",
    role: "how",
    short: "Depth becomes visible only through displacement.",
    description:
      "Art, science, design, engineering. Analytical, associative, embodied, intuitive. The tension between frames is not a problem to resolve but the mechanism by which dimensionality appears. Polyphonic cognition — holding multiple frames simultaneously — is the practice this principle demands.",
    color: "#8FA8BD",
    angle: 30,
    disciplines: [
      "Epistemology",
      "Phenomenology",
      "Hermeneutics",
      "Stereoscopy",
      "Frame Analysis",
      "Interdisciplinary Studies",
      "Perspective Theory",
      "Cognitive Flexibility",
      "Art-Science Integration",
      "Design Thinking",
    ],
  },
  {
    id: "embodiment",
    name: "Embodiment",
    role: "substrate",
    short: "The physical substrate of knowing matters.",
    description:
      "Cognition situated in a body is categorically different from cognition that is not. The fighter pilot feels the right move. The wine is both intellectual and sensory. Humans navigate unpredictability in ways inseparable from having a body. This is not a preference — it is a claim about the nature of intelligence.",
    color: "#C4A0B0",
    angle: 90,
    disciplines: [
      "Embodied Cognition",
      "Phenomenology",
      "Enactivism",
      "Somatic Psychology",
      "Ecological Psychology",
      "Extended Mind Theory",
      "Proprioception",
      "Motor Cognition",
      "Haptic Design",
      "Contemplative Practice",
    ],
  },
  {
    id: "animacy",
    name: "Animacy",
    role: "nature",
    short: "Materials, systems, and knowledge are not inert.",
    description:
      "They have tendencies, affordances, and something like desire. Brick wants to be an arch. Nature is the client. The corpus of human knowledge wants to birth certain ideas. The things we interact with participate in what they become. Design, at its best, is listening for what something wants to be.",
    color: "#B8A8C4",
    angle: 150,
    disciplines: [
      "Object-Oriented Ontology",
      "Affordance Theory",
      "Material Ecology",
      "Actor-Network Theory",
      "New Materialism",
      "Craft Theory",
      "Animism Studies",
      "Bio-Inspired Design",
      "Vitalism",
      "Indigenous Epistemology",
    ],
  },
  {
    id: "recursive",
    name: "Recursive Self-Shaping",
    role: "life",
    short: "Living systems observe themselves and change.",
    description:
      "Feedback, metacognition, the system that sees itself and responds. This distinguishes a learning conversation from an exchange of information. It is also the source of Gödel's problem — you cannot fully evaluate a system from within it — which means self-shaping is always incomplete, always reaching, always requiring an outside perspective.",
    color: "#A0B0A8",
    angle: 210,
    disciplines: [
      "Cybernetics",
      "Metacognition",
      "Autopoiesis",
      "Feedback Systems",
      "Strange Loops",
      "Gödel's Incompleteness",
      "Second-Order Cybernetics",
      "Neural Plasticity",
      "Reinforcement Learning",
      "Homeostasis",
    ],
  },
];

const connections = [
  {
    from: "thresholds",
    to: "coherence",
    label:
      "Coherence is tested at thresholds — phase shifts reveal whether patterns hold",
  },
  {
    from: "coherence",
    to: "parallax",
    label:
      "Multiple perspectives are needed to distinguish genuine coherence from performed coherence",
  },
  {
    from: "parallax",
    to: "embodiment",
    label:
      "The body is an irreducible perspective — sensing what thinking alone cannot reach",
  },
  {
    from: "embodiment",
    to: "animacy",
    label:
      "Embodied knowers can sense the tendencies and desires of their materials",
  },
  {
    from: "animacy",
    to: "thresholds",
    label:
      "Materials at their own edges of transformation invite new forms into being",
  },
  {
    from: "thresholds",
    to: "recursive",
    label:
      "Self-observation is what allows a system to recognize it has reached a threshold",
  },
  {
    from: "recursive",
    to: "coherence",
    label:
      "Feedback loops refine coherence over time — each iteration tests and deepens the pattern",
  },
  {
    from: "recursive",
    to: "parallax",
    label:
      "Seeing yourself from outside requires the displacement of perspectives",
  },
  {
    from: "parallax",
    to: "animacy",
    label:
      "Listening for what something wants to be requires seeing it from its own vantage point",
  },
  {
    from: "embodiment",
    to: "recursive",
    label:
      "The body provides the felt sense that drives self-correction — intuition as feedback",
  },
  {
    from: "coherence",
    to: "animacy",
    label:
      "Beauty emerges when design honors the tendencies inherent in the material",
  },
  {
    from: "thresholds",
    to: "embodiment",
    label:
      "The body knows the edge before the mind does — felt instability precedes conceptual understanding",
  },
];

const roleLabels = {
  where: "the where",
  when: "the when",
  how: "the how",
  measure: "the measure",
  substrate: "the substrate",
  nature: "the nature of things",
  life: "what makes it alive",
};

export default function MagpiePrinciples() {
  const [selected, setSelected] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [hoveredConnection, setHoveredConnection] = useState(null);
  const [hoveredDiscipline, setHoveredDiscipline] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(0);
  const [expandProgress, setExpandProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime((t) => t + 0.005);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let animFrame;
    const animate = () => {
      setExpandProgress((prev) => {
        const target = expanded ? 1 : 0;
        const diff = target - prev;
        if (Math.abs(diff) < 0.01) return target;
        return prev + diff * 0.12;
      });
      animFrame = requestAnimationFrame(animate);
    };
    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [expanded]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const w = Math.min(containerRef.current.offsetWidth, 800);
        setDimensions({ width: w, height: w });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const cx = dimensions.width / 2;
  const cy = dimensions.height / 2;
  const radius = dimensions.width * 0.34;
  const nodeRadius = dimensions.width * 0.055;
  const spokeDistance = dimensions.width * 0.17;

  const getPosition = useCallback(
    (principle) => {
      if (principle.id === "in-between") return { x: cx, y: cy };
      const baseAngle = (principle.angle * Math.PI) / 180;
      const drift = Math.sin(time + principle.angle * 0.1) * 0.015;
      const angle = baseAngle + drift;
      const rDrift =
        radius + Math.sin(time * 0.7 + principle.angle * 0.05) * 3;
      return {
        x: cx + rDrift * Math.cos(angle),
        y: cy + rDrift * Math.sin(angle),
      };
    },
    [cx, cy, radius, time]
  );

  const getDisciplinePositions = useCallback(
    (principle, progress) => {
      if (!principle.disciplines) return [];
      const pos = getPosition(principle);
      const count = principle.disciplines.length;

      // Center node: orbiting ring
      if (principle.id === "in-between") {
        const orbitRadius = radius * 0.52 * progress;
        const rotationOffset = time * 0.15; // slow rotation
        return principle.disciplines.map((name, i) => {
          const baseAngle = ((Math.PI * 2) / count) * i + rotationOffset;
          // slight individual wobble
          const wobble = Math.sin(time * 0.4 + i * 2.3) * 4 * progress;
          const r = orbitRadius + wobble;
          const angle = baseAngle;
          return {
            name,
            x: pos.x + Math.cos(angle) * r,
            y: pos.y + Math.sin(angle) * r,
            opacity: progress,
            angle,
            isOrbiting: true,
          };
        });
      }

      // Outer nodes: fan spokes with staggered distances
      const angleFromCenter = Math.atan2(pos.y - cy, pos.x - cx);
      const spreadAngle = Math.PI * 1.1;
      const startAngle = angleFromCenter - spreadAngle / 2;

      return principle.disciplines.map((name, i) => {
        const t = count > 1 ? i / (count - 1) : 0.5;
        const angle = startAngle + spreadAngle * t;
        // Stagger: even items closer, odd items farther
        const tierMultiplier = i % 2 === 0 ? 1 : 1.35;
        const dist = spokeDistance * progress * tierMultiplier;

        const jitter = Math.sin(time * 0.3 + i * 1.7) * 2 * progress;

        return {
          name,
          x: pos.x + Math.cos(angle) * (dist + jitter),
          y: pos.y + Math.sin(angle) * (dist + jitter),
          opacity: progress,
          angle,
          isOrbiting: false,
        };
      });
    },
    [getPosition, cx, cy, radius, spokeDistance, time]
  );

  const active = selected || hovered;
  const activePrinciple = active
    ? principles.find((p) => p.id === active)
    : null;

  const isConnected = (id) => {
    if (!active) return true;
    if (id === active) return true;
    return connections.some(
      (c) =>
        (c.from === active && c.to === id) || (c.to === active && c.from === id)
    );
  };

  const isConnectionActive = (conn) => {
    if (!active) return true;
    return conn.from === active || conn.to === active;
  };

  const handlePrincipleClick = (id) => {
    if (expanded === id) {
      setExpanded(null);
      setSelected(null);
    } else {
      setExpanded(id);
      setSelected(id);
    }
  };

  const centerPulse = 0.4 + Math.sin(time * 0.8) * 0.15;
  const centerPulse2 = 0.25 + Math.sin(time * 0.5 + 1) * 0.1;

  const showConnectionLabel = hoveredConnection && !selected;
  const activeConnection = hoveredConnection
    ? connections.find(
        (c) =>
          (c.from === hoveredConnection.from &&
            c.to === hoveredConnection.to) ||
          (c.to === hoveredConnection.from &&
            c.from === hoveredConnection.to)
      )
    : null;

  const expandedPrinciple = expanded
    ? principles.find((p) => p.id === expanded)
    : null;
  const disciplinePositions = expandedPrinciple
    ? getDisciplinePositions(expandedPrinciple, expandProgress)
    : [];

  const isExpanding = expandProgress > 0.01;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0E1117",
        color: "#E8E4DF",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px 60px",
        overflow: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&family=Instrument+Serif:ital@0;1&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 12,
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-20px)",
          transition: "all 1s ease",
        }}
      >
        <h1
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            margin: 0,
            color: "#E8E4DF",
          }}
        >
          The Magpie Institute
        </h1>
        <p
          style={{
            fontSize: "clamp(13px, 2vw, 16px)",
            color: "#8A8580",
            fontWeight: 300,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginTop: 8,
          }}
        >
          Principles
        </p>
      </div>

      {/* Diagram */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          maxWidth: 800,
          position: "relative",
          aspectRatio: "1",
          overflow: "visible",
        }}
      >
        <svg
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.5s ease 0.3s",
            overflow: "visible",
          }}
        >
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor="#E8D5B7"
                stopOpacity={active === "in-between" ? 0.14 : 0.07}
              />
              <stop offset="60%" stopColor="#E8D5B7" stopOpacity={0.02} />
              <stop offset="100%" stopColor="#E8D5B7" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="centerGlow2" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor="#E8D5B7"
                stopOpacity={centerPulse2 * 0.4}
              />
              <stop offset="100%" stopColor="#E8D5B7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient center glow */}
          <circle cx={cx} cy={cy} r={radius * 0.75} fill="url(#centerGlow)" />
          <circle
            cx={cx}
            cy={cy}
            r={radius * 0.35 + Math.sin(time * 0.6) * 8}
            fill="url(#centerGlow2)"
          />

          {/* Orbital ring */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="#2A2520"
            strokeWidth="0.5"
            strokeDasharray="2 12"
            opacity={0.4}
          />

          {/* Connection lines to center */}
          {principles
            .filter((p) => p.id !== "in-between")
            .map((p) => {
              const pos = getPosition(p);
              const isActive2 = active === p.id || active === "in-between";
              return (
                <line
                  key={`center-${p.id}`}
                  x1={cx}
                  y1={cy}
                  x2={pos.x}
                  y2={pos.y}
                  stroke={p.color}
                  strokeWidth={isActive2 ? 1 : 0.5}
                  opacity={
                    isExpanding
                      ? expanded === p.id || expanded === "in-between"
                        ? 0.35
                        : 0.05
                      : isActive2
                      ? 0.35
                      : 0.12
                  }
                  style={{
                    transition:
                      "opacity 0.5s ease, stroke-width 0.5s ease",
                  }}
                />
              );
            })}

          {/* Outer connection lines */}
          {connections.map((conn) => {
            const fromP = principles.find((p) => p.id === conn.from);
            const toP = principles.find((p) => p.id === conn.to);
            const fromPos = getPosition(fromP);
            const toPos = getPosition(toP);
            const isActiveConn = isConnectionActive(conn);
            const isHoveredConn =
              hoveredConnection &&
              ((hoveredConnection.from === conn.from &&
                hoveredConnection.to === conn.to) ||
                (hoveredConnection.from === conn.to &&
                  hoveredConnection.to === conn.from));

            const midX = (fromPos.x + toPos.x) / 2;
            const midY = (fromPos.y + toPos.y) / 2;
            const dx = toPos.x - fromPos.x;
            const dy = toPos.y - fromPos.y;
            const len = Math.sqrt(dx * dx + dy * dy);
            const nx = -dy / len;
            const ny = dx / len;
            const curve = 15 + Math.sin(time + conn.from.length) * 3;
            const ctrlX = midX + nx * curve;
            const ctrlY = midY + ny * curve;

            const expandFade = isExpanding ? 0.04 : 1;

            return (
              <g key={`${conn.from}-${conn.to}`}>
                <path
                  d={`M ${fromPos.x} ${fromPos.y} Q ${ctrlX} ${ctrlY} ${toPos.x} ${toPos.y}`}
                  fill="none"
                  stroke="transparent"
                  strokeWidth="20"
                  style={{ cursor: isExpanding ? "default" : "pointer" }}
                  onMouseEnter={() =>
                    !isExpanding &&
                    setHoveredConnection({ from: conn.from, to: conn.to })
                  }
                  onMouseLeave={() => setHoveredConnection(null)}
                />
                <path
                  d={`M ${fromPos.x} ${fromPos.y} Q ${ctrlX} ${ctrlY} ${toPos.x} ${toPos.y}`}
                  fill="none"
                  stroke={isHoveredConn ? "#E8E4DF" : fromP.color}
                  strokeWidth={
                    isHoveredConn ? 1.5 : active ? (isActiveConn ? 1 : 0.3) : 0.6
                  }
                  opacity={
                    (isHoveredConn
                      ? 0.7
                      : active
                      ? isActiveConn
                        ? 0.35
                        : 0.06
                      : 0.18) * expandFade
                  }
                  style={{
                    transition:
                      "opacity 0.5s ease, stroke-width 0.3s ease, stroke 0.3s ease",
                    pointerEvents: "none",
                  }}
                />
                {!active && !isExpanding && (
                  <circle
                    cx={ctrlX * 0.5 + midX * 0.5}
                    cy={ctrlY * 0.5 + midY * 0.5}
                    r={isHoveredConn ? 3 : 1.5}
                    fill={isHoveredConn ? "#E8E4DF" : fromP.color}
                    opacity={isHoveredConn ? 0.8 : 0.25}
                    style={{
                      transition: "all 0.3s ease",
                      pointerEvents: "none",
                    }}
                  />
                )}
              </g>
            );
          })}

          {/* Orbit ring for In-Between when expanded */}
          {expandedPrinciple && expandedPrinciple.id === "in-between" && expandProgress > 0.1 && (
            <circle
              cx={cx}
              cy={cy}
              r={radius * 0.52 * expandProgress}
              fill="none"
              stroke={expandedPrinciple.color}
              strokeWidth="0.5"
              strokeDasharray="3 10"
              opacity={expandProgress * 0.2}
              style={{ transition: "opacity 0.3s ease" }}
            />
          )}

          {/* Discipline spokes / orbiting ring */}
          {expandedPrinciple &&
            disciplinePositions.map((d, i) => {
              const parentPos = getPosition(expandedPrinciple);
              const isHoveredDisc = hoveredDiscipline === i;

              if (d.isOrbiting) {
                // Orbiting ring for In-Between
                const normalizedAngle = ((d.angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
                const isLeftSide = normalizedAngle > Math.PI / 2 && normalizedAngle < (3 * Math.PI) / 2;
                const labelOffset = isHoveredDisc ? 12 : 9;
                return (
                  <g key={`disc-${i}`}>
                    {/* Dot */}
                    <circle
                      cx={d.x}
                      cy={d.y}
                      r={isHoveredDisc ? 4.5 : 2.5}
                      fill={expandedPrinciple.color}
                      opacity={d.opacity * (isHoveredDisc ? 0.9 : 0.4)}
                      style={{ cursor: "default", transition: "all 0.2s ease" }}
                      onMouseEnter={() => setHoveredDiscipline(i)}
                      onMouseLeave={() => setHoveredDiscipline(null)}
                    />
                    {/* Label */}
                    {d.opacity > 0.5 && (
                      <text
                        x={d.x + (isLeftSide ? -labelOffset : labelOffset)}
                        y={d.y}
                        textAnchor={isLeftSide ? "end" : "start"}
                        dominantBaseline="central"
                        fill={expandedPrinciple.color}
                        fontSize={Math.max(8, dimensions.width * 0.0115)}
                        fontFamily="'DM Sans', sans-serif"
                        fontWeight={isHoveredDisc ? 400 : 300}
                        opacity={d.opacity * (isHoveredDisc ? 0.9 : 0.5)}
                        style={{ pointerEvents: "none", transition: "opacity 0.2s ease" }}
                      >
                        {d.name}
                      </text>
                    )}
                  </g>
                );
              }

              // Fan spokes for outer principles
              return (
                <g key={`disc-${i}`}>
                  {/* Spoke line */}
                  <line
                    x1={parentPos.x}
                    y1={parentPos.y}
                    x2={d.x}
                    y2={d.y}
                    stroke={expandedPrinciple.color}
                    strokeWidth={isHoveredDisc ? 1 : 0.5}
                    opacity={d.opacity * (isHoveredDisc ? 0.5 : 0.2)}
                    style={{ pointerEvents: "none" }}
                  />
                  {/* Discipline dot */}
                  <circle
                    cx={d.x}
                    cy={d.y}
                    r={isHoveredDisc ? 5 : 3.5}
                    fill={expandedPrinciple.color}
                    opacity={d.opacity * (isHoveredDisc ? 0.9 : 0.5)}
                    style={{ cursor: "default", transition: "r 0.2s ease" }}
                    onMouseEnter={() => setHoveredDiscipline(i)}
                    onMouseLeave={() => setHoveredDiscipline(null)}
                  />
                  {/* Discipline label */}
                  {d.opacity > 0.5 && (
                    <text
                      x={d.x + (d.angle > Math.PI / 2 && d.angle < (3 * Math.PI) / 2 ? -10 : 10)}
                      y={d.y}
                      textAnchor={
                        d.angle > Math.PI / 2 && d.angle < (3 * Math.PI) / 2
                          ? "end"
                          : "start"
                      }
                      dominantBaseline="central"
                      fill={expandedPrinciple.color}
                      fontSize={Math.max(8, dimensions.width * 0.012)}
                      fontFamily="'DM Sans', sans-serif"
                      fontWeight={isHoveredDisc ? 400 : 300}
                      opacity={d.opacity * (isHoveredDisc ? 0.95 : 0.6)}
                      style={{ pointerEvents: "none", transition: "opacity 0.2s ease" }}
                    >
                      {d.name}
                    </text>
                  )}
                </g>
              );
            })}

          {/* Nodes */}
          {principles.map((p) => {
            const pos = getPosition(p);
            const isCenter = p.id === "in-between";
            const isActive = active === p.id;
            const connected = isConnected(p.id);
            const r = isCenter ? nodeRadius * 1.3 : nodeRadius;
            const isExpanded = expanded === p.id;

            const dimmed =
              isExpanding && !isExpanded && p.id !== "in-between";

            if (isCenter) {
              return (
                <g
                  key={p.id}
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePrincipleClick(p.id)}
                  onMouseEnter={() => !isExpanding && setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={r + 10}
                    fill="transparent"
                  />

                  {/* Breathing dashed rings */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={r + Math.sin(time * 0.5) * 4}
                    fill="none"
                    stroke={p.color}
                    strokeWidth="0.5"
                    strokeDasharray="2 8"
                    opacity={centerPulse * 0.5 * (dimmed ? 0.25 : 1)}
                    style={{ transition: "opacity 0.5s ease" }}
                  />
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={r * 0.6 + Math.sin(time * 0.7 + 2) * 3}
                    fill="none"
                    stroke={p.color}
                    strokeWidth="0.3"
                    strokeDasharray="1 10"
                    opacity={centerPulse2 * 0.6 * (dimmed ? 0.25 : 1)}
                    style={{ transition: "opacity 0.5s ease" }}
                  />

                  <text
                    x={pos.x}
                    y={pos.y - 6}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={isActive ? p.color : "#8A8580"}
                    fontSize={Math.max(10, dimensions.width * 0.014)}
                    fontFamily="'DM Sans', sans-serif"
                    fontWeight={isActive ? 500 : 300}
                    letterSpacing="0.04em"
                    style={{
                      transition: "fill 0.5s ease, opacity 0.5s ease",
                      pointerEvents: "none",
                      opacity: dimmed ? 0.3 : 1,
                    }}
                  >
                    The
                  </text>
                  <text
                    x={pos.x}
                    y={pos.y + 10}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={isActive ? p.color : "#8A8580"}
                    fontSize={Math.max(10, dimensions.width * 0.014)}
                    fontFamily="'DM Sans', sans-serif"
                    fontWeight={isActive ? 500 : 300}
                    letterSpacing="0.04em"
                    style={{
                      transition: "fill 0.5s ease, opacity 0.5s ease",
                      pointerEvents: "none",
                      opacity: dimmed ? 0.3 : 1,
                    }}
                  >
                    In-Between
                  </text>

                  {isActive && !isExpanding && (
                    <text
                      x={pos.x}
                      y={pos.y + r + 20}
                      textAnchor="middle"
                      fill={p.color}
                      fontSize={Math.max(8, dimensions.width * 0.012)}
                      fontFamily="'DM Sans', sans-serif"
                      fontWeight={300}
                      fontStyle="italic"
                      opacity={0.7}
                      style={{ pointerEvents: "none" }}
                    >
                      {roleLabels[p.role]}
                    </text>
                  )}
                </g>
              );
            }

            return (
              <g
                key={p.id}
                style={{
                  cursor: "pointer",
                  opacity: dimmed
                    ? 0.15
                    : active && !connected
                    ? 0.12
                    : 1,
                  transition: "opacity 0.5s ease",
                }}
                onClick={() => handlePrincipleClick(p.id)}
                onMouseEnter={() => !isExpanding && setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Expanded ring */}
                {isExpanded && (
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={r + 8 + expandProgress * 4}
                    fill="none"
                    stroke={p.color}
                    strokeWidth="0.5"
                    strokeDasharray="3 6"
                    opacity={0.4 * expandProgress}
                  />
                )}

                {/* Outer glow on active */}
                {isActive && !isExpanded && (
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={r + 8}
                    fill="none"
                    stroke={p.color}
                    strokeWidth="0.5"
                    opacity={0.4}
                  />
                )}

                {/* Node */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={r}
                  fill="#13171D"
                  stroke={p.color}
                  strokeWidth={isActive || isExpanded ? 1.5 : 0.8}
                  opacity={isActive || isExpanded ? 1 : 0.6}
                  style={{ transition: "all 0.3s ease" }}
                />

                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={r - 2}
                  fill={p.color}
                  opacity={isActive || isExpanded ? 0.06 : 0}
                  style={{ transition: "opacity 0.3s ease" }}
                />

                {/* Label */}
                <text
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={isActive || isExpanded ? p.color : "#A0A0A0"}
                  fontSize={Math.max(9, dimensions.width * 0.0125)}
                  fontFamily="'DM Sans', sans-serif"
                  fontWeight={isActive || isExpanded ? 500 : 400}
                  letterSpacing="0.02em"
                  style={{
                    transition: "fill 0.3s ease",
                    pointerEvents: "none",
                  }}
                >
                  {p.name.split(" ").length > 2 ? (
                    <>
                      <tspan x={pos.x} dy="-0.5em">
                        {p.name
                          .split(" ")
                          .slice(0, Math.ceil(p.name.split(" ").length / 2))
                          .join(" ")}
                      </tspan>
                      <tspan x={pos.x} dy="1.2em">
                        {p.name
                          .split(" ")
                          .slice(Math.ceil(p.name.split(" ").length / 2))
                          .join(" ")}
                      </tspan>
                    </>
                  ) : (
                    p.name
                  )}
                </text>

                {/* Role label on active */}
                {isActive && !isExpanding && (
                  <text
                    x={pos.x}
                    y={pos.y + r + 16}
                    textAnchor="middle"
                    fill={p.color}
                    fontSize={Math.max(8, dimensions.width * 0.011)}
                    fontFamily="'DM Sans', sans-serif"
                    fontWeight={300}
                    fontStyle="italic"
                    opacity={0.6}
                    style={{ pointerEvents: "none" }}
                  >
                    {roleLabels[p.role]}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Description Panel */}
      <div
        style={{
          maxWidth: 600,
          width: "100%",
          minHeight: 140,
          padding: "0 20px",
          textAlign: "center",
          marginTop: -20,
        }}
      >
        {showConnectionLabel && activeConnection ? (
          <div
            key={`conn-${activeConnection.from}-${activeConnection.to}`}
            style={{ animation: "fadeIn 0.3s ease" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: principles.find(
                    (p) => p.id === activeConnection.from
                  )?.color,
                  fontWeight: 400,
                }}
              >
                {
                  principles.find((p) => p.id === activeConnection.from)
                    ?.name
                }
              </span>
              <span style={{ color: "#4A4540", fontSize: 12 }}>⟷</span>
              <span
                style={{
                  fontSize: 13,
                  color: principles.find(
                    (p) => p.id === activeConnection.to
                  )?.color,
                  fontWeight: 400,
                }}
              >
                {
                  principles.find((p) => p.id === activeConnection.to)
                    ?.name
                }
              </span>
            </div>
            <p
              style={{
                fontSize: "clamp(13px, 2vw, 15px)",
                fontWeight: 300,
                color: "#9A9590",
                lineHeight: 1.7,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              {activeConnection.label}
            </p>
          </div>
        ) : activePrinciple ? (
          <div key={activePrinciple.id} style={{ animation: "fadeIn 0.4s ease" }}>
            <div
              style={{
                display: "inline-block",
                padding: "3px 12px",
                border: `1px solid ${activePrinciple.color}35`,
                borderRadius: 20,
                fontSize: 11,
                color: activePrinciple.color,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 300,
                marginBottom: 12,
                opacity: 0.8,
              }}
            >
              {roleLabels[activePrinciple.role]}
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(22px, 4vw, 32px)",
                fontWeight: 400,
                color: activePrinciple.color,
                margin: "0 0 10px",
                letterSpacing: "-0.01em",
              }}
            >
              {activePrinciple.name}
            </h2>
            <p
              style={{
                fontSize: "clamp(13px, 2vw, 15px)",
                fontWeight: 300,
                color: "#A0A09A",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {activePrinciple.description}
            </p>
            {isExpanding && expandProgress > 0.5 && (
              <p
                style={{
                  fontSize: 11,
                  color: "#5A5550",
                  fontWeight: 300,
                  fontStyle: "italic",
                  marginTop: 16,
                  animation: "fadeIn 0.5s ease",
                }}
              >
                click again to collapse
              </p>
            )}
          </div>
        ) : (
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 1.5s ease 1s",
            }}
          >
            <p
              style={{
                fontSize: 13,
                color: "#4A4540",
                fontWeight: 300,
                fontStyle: "italic",
                marginTop: 20,
                lineHeight: 1.7,
              }}
            >
              Hover to explore · Click to expand disciplines
            </p>
          </div>
        )}
      </div>

      {/* Bottom legend */}
      <div
        style={{
          marginTop: 36,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "6px 20px",
          maxWidth: 700,
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.5s ease 0.8s",
        }}
      >
        {principles
          .filter((p) => p.id !== "in-between")
          .map((p) => (
            <button
              key={p.id}
              onClick={() => handlePrincipleClick(p.id)}
              onMouseEnter={() => !isExpanding && setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 0",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: p.color,
                  opacity: active === p.id ? 1 : 0.4,
                  transition: "opacity 0.3s",
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  color: active === p.id ? p.color : "#5A5550",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                  transition: "color 0.3s",
                }}
              >
                {p.name}
              </span>
            </button>
          ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
