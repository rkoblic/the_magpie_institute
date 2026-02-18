export const principles = [
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

export const connections = [
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

export const centerConnections = [
  {
    to: "thresholds",
    label:
      "Thresholds are the specific conditions under which the in-between becomes productive",
  },
  {
    to: "coherence",
    label:
      "Coherence measures what emerges from the generative space between things",
  },
  {
    to: "parallax",
    label:
      "Displaced perspectives create the in-between — the space where depth appears",
  },
  {
    to: "embodiment",
    label:
      "The body is what makes the in-between a felt space, not just a concept",
  },
  {
    to: "animacy",
    label:
      "The in-between is alive because both sides participate — neither knower nor known is passive",
  },
  {
    to: "recursive",
    label:
      "Self-observation turns the in-between into a learning space rather than a static gap",
  },
];

export const roleLabels = {
  where: "the where",
  when: "the when",
  how: "the how",
  measure: "the measure",
  substrate: "the substrate",
  nature: "the nature of things",
  life: "what makes it alive",
};
