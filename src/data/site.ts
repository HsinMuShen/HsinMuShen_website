export const siteConfig = {
  name: "Hsin Mu Shen",
  /** Header icon: set to a path like "/logo.svg" or "/logo.png" to use an image; leave empty for "HM" initials */
  logo: "" as string | undefined,
  title: "Built with Logic, Shaped by Feeling",
  intro:
    "Hi, I’m Hsin Mu, a software engineer working at the intersection of structure and sensibility.",
  heroParagraphs: [
    "I approach the world through both thinking and making. Whether building digital systems or creating by hand, I see each process as a way to observe, interpret, and give form to what I experience.",
    "I have traveled solo to more than five countries, shaping how I see place, time, and connection. I am drawn to a way of living that moves across environments while staying present in each one.",
    "This space brings together my work and creations as part of an ongoing process of learning and building."
  ],
  email: "hsinmushen84@gmail.com",
  location: "Taipei and remote",
  description:
    "A personal brand website for Hsin Mu Shen, blending artistic practice and technical craft into a calm, memorable digital experience.",
};

export const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Website", href: "#website" },
  { label: "Sketching", href: "#sketching" },
  { label: "Photography", href: "#photography" },
   { label: "Travel", href: "#travel" },
  { label: "Contact", href: "#contact" },
];

export const aboutStory = {
  eyebrow: "About",
  title: "Photography, sketching, and digital craft.",
  shortBio:
    "I begin with observation and feeling, refine them through thought and structure, and bring them into form as tangible creations. Whether through handcrafted works that preserve experience or web development that builds systems, both are ways of understanding and responding to the world.\n\nI approaches work as both an artist and a builder. Photography sharpens the eye for framing. Sketching creates space for intuition. Building websites transforms ideas into living experiences.",
  mainImage: "/about/about-2.jpeg",
  mainImageAlt: "Hsin Mu Shen",
};

export const creativePassions = [
  {
    title: "Photography",
    subtitle: "Light, framing, and observation",
    description:
      "A practice of noticing mood, texture, and timing. Photography informs the visual language of every digital experience by teaching patience, restraint, and composition.",
    accent: "from-[#d97706] via-[#fbbf24] to-[#fde68a]",
  },
  {
    title: "Sketching",
    subtitle: "Ideas captured by hand",
    description:
      "Sketching keeps experimentation tactile and immediate. It is where rough concepts, environments, and visual rhythms begin before they evolve into finished work.",
    accent: "from-[#1d4ed8] via-[#60a5fa] to-[#bfdbfe]",
  },
  {
    title: "Web and Software",
    subtitle: "Systems shaped with feeling",
    description:
      "Technical work becomes more compelling when it carries emotion and intent. Software here is treated not just as functionality, but as a medium for clarity and experience.",
    accent: "from-[#0f766e] via-[#2dd4bf] to-[#ccfbf1]",
  },
];

export const technicalProjects = [
  {
    title: "Atmospheric Portfolio System",
    category: "Personal Brand Platform",
    summary:
      "A modular portfolio experience that combines editorial storytelling, immersive layouts, and reusable UI patterns for creative professionals.",
    tags: ["Next.js", "Tailwind CSS", "Motion Design"],
    link: "#",
  },
  {
    title: "Creative Workflow Dashboard",
    category: "Internal Tooling",
    summary:
      "A visual project dashboard concept that helps teams move from loose ideas to structured delivery while preserving creative context.",
    tags: ["React", "TypeScript", "UX Systems"],
    link: "#",
  },
  {
    title: "Gallery Commerce Experience",
    category: "Interactive Web Build",
    summary:
      "A refined storefront concept for visual products, blending art direction, conversion thinking, and a fast responsive frontend foundation.",
    tags: ["Frontend", "E-commerce", "Accessibility"],
    link: "#",
  },
];

// Web development work for carousel — each card: preview image, title, description, link
export const webProjects = [
  {
    title: "Nomad Sketching Website",
    description:
      "A responsive online drawing platform and personal gallery, fully designed and built by me to document urban sketches, travel studies, and an evolving visual diary.",
    image: "/website/01.gif",
    link: "https://www.nomadsketching.com/",
  },
  {
    title: "Creative Workflow Dashboard",
    description:
      "CaterPortfolio is an online resume and website editor with social features for sharing, collecting, and chatting around creative work.",
    image: "/website/02.gif",
    link: "https://caterportfolio.web.app/",
  },
  {
    title: "Web3 Learning Website",
    description:
      "A beginner-friendly, blog-style site that explains Bitcoin and Web3 fundamentals through simple lessons, stories, and diagrams.",
    image: "/website/03.gif",
    link: "https://web3-learning-website.vercel.app/",
  },
  {
    title: "Solar System Website",
    description:
      "Still in progress — an interactive solar system simulator for exploring planets and motion. Please wait for the future public release.",
    image: "/website/04.gif",
    link: "#",
  },
];

// Sketching — Pinterest-style masonry; image-first, minimal text
export const sketchingItems = [
  { id: "s1", image: "/sketches/appworks-school-window-view.jpg", caption: "AppWorks School window view" },
  { id: "s2", image: "/sketches/hvar-island.jpg", caption: "Hvar Island" },
  { id: "s3", image: "/sketches/manhattan-1.jpg", caption: "Manhattan 1" },
  { id: "s4", image: "/sketches/manhattan-2.jpg", caption: "Manhattan 2" },
  { id: "s5", image: "/sketches/xiatan-home.jpg", caption: "Xiatan home" },
  { id: "s6", image: "/sketches/jinan-temple.jpg", caption: "Jinan Temple" },
  { id: "s7", image: "/sketches/taipei-window-facade.jpg", caption: "Taipei window facade" },
  { id: "s8", image: "/sketches/favorite-sky.jpg", caption: "Favorite sky" },
  { id: "s9", image: "/sketches/keelung-temple-and-sky.jpg", caption: "Keelung temple and sky" },
  { id: "s10", image: "/sketches/keelung-station-building.jpg", caption: "Keelung station building" },
  { id: "s11", image: "/sketches/keelung-mountain-view.jpg", caption: "Keelung mountain view" },
  { id: "s12", image: "/sketches/mazu-house-collage.jpg", caption: "Mazu house collage" },
  { id: "s13", image: "/sketches/puji-lantern-alley.jpg", caption: "Puji lantern alley" },
  { id: "s14", image: "/sketches/puji-dramatic-scene.jpg", caption: "Puji dramatic scene" },
  { id: "s15", image: "/sketches/tamsui-temple-roof.jpg", caption: "Tamsui temple roof" },
  { id: "s16", image: "/sketches/qingshui-ziyun-temple.jpg", caption: "Qingshui Ziyun Temple" },
  { id: "s17", image: "/sketches/wanhua-circular-community.jpg", caption: "Wanhua circular community" },
  { id: "s18", image: "/sketches/xianjun-sky.jpg", caption: "Xianjun sky" },
  { id: "s19", image: "/sketches/kaiyuan-road-temple.jpg", caption: "Kaiyuan Road temple" },
  { id: "s20", image: "/sketches/hong-kong-tsim-sha-tsui.jpg", caption: "Hong Kong Tsim Sha Tsui" },
  { id: "s21", image: "/sketches/lucao-motorcycle-shop.jpg", caption: "Lucao motorcycle shop" },
];

// Photography — elegant gallery; large, premium presentation
export const photographyItems = [
  { id: "p1", image: "/photography/photography-01.jpeg", title: "Photo 1" },
  { id: "p2", image: "/photography/photography-02.jpeg", title: "Photo 2" },
  { id: "p3", image: "/photography/photography-03.jpeg", title: "Photo 3" },
  { id: "p4", image: "/photography/photography-04.jpeg", title: "Photo 4" },
  { id: "p5", image: "/photography/photography-05.jpeg", title: "Photo 5" },
  { id: "p6", image: "/photography/photography-06.jpeg", title: "Photo 6" },
  { id: "p7", image: "/photography/photography-07.jpeg", title: "Photo 7" },
  { id: "p8", image: "/photography/photography-08.jpg", title: "Photo 8" },
  { id: "p9", image: "/photography/photography-09.jpeg", title: "Photo 9" },
  { id: "p10", image: "/photography/photography-10.jpeg", title: "Photo 10" },
  { id: "p11", image: "/photography/photography-11.jpeg", title: "Photo 11" },
  { id: "p12", image: "/photography/photography-12.jpg", title: "Photo 12" }
];

export const galleryShowcase = [
  {
    title: "Street Light Study",
    type: "Photography",
    note: "Placeholder series exploring cinematic light, distance, and city atmosphere.",
    style: "from-[#0f172a] via-[#4338ca] to-[#f59e0b]",
    image: "/gallery-photo-01.svg",
  },
  {
    title: "Notebook Fragments",
    type: "Sketchbook",
    note: "Placeholder sketches focused on environments, gestures, and unfinished visual ideas.",
    style: "from-[#faf5ff] via-[#e9d5ff] to-[#c4b5fd]",
    image: "/gallery-sketch-01.svg",
  },
  {
    title: "Silent Corners",
    type: "Photography",
    note: "Placeholder compositions of architecture, empty spaces, and quiet transitions.",
    style: "from-[#1f2937] via-[#4b5563] to-[#cbd5e1]",
    image: "/gallery-photo-02.svg",
  },
  {
    title: "Interface Motions",
    type: "Visual Study",
    note: "Placeholder experiments where interface details are treated like choreography and rhythm.",
    style: "from-[#052e16] via-[#15803d] to-[#86efac]",
    image: "/gallery-motion-01.svg",
  },
];

export const philosophy = {
  quote:
    "I want the things I make to feel like they were touched by a person who pays attention.",
  body:
    "The most memorable work often lives between disciplines. When visual sensitivity meets technical rigor, the result can be both emotionally resonant and highly functional.",
  pillars: [
    "Make room for atmosphere, not just information",
    "Let craft support meaning instead of decoration",
    "Build experiences that feel calm, intuitive, and lasting",
  ],
};

export const skillGroups = [
  {
    title: "Creative Tools",
    items: ["Photography Direction", "Sketching", "Visual Storytelling", "Art Direction"],
  },
  {
    title: "Design and Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Working Style",
    items: [
      "Creative Strategy",
      "Interface Systems",
      "Responsive Design",
      "Cross-disciplinary Thinking",
    ],
  },
];

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/eiectrycity/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hsin-mu-shen/" },
  { label: "GitHub", href: "https://github.com/HsinMuShen" },
  { label: "Email", href: "mailto:hsinmushen84@gmail.com" },
];
