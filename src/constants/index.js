const navLinks = [
  {
    name: "About Me",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// const techStackImgs = [
//   {
//     name: "React Developer",
//     imgPath: "/images/logos/react.png",
//   },
//   {
//     name: "Python Developer",
//     imgPath: "/images/logos/python.svg",
//   },
//   {
//     name: "Backend Developer",
//     imgPath: "/images/logos/node.png",
//   },
//   // {
//   //   name: "Interactive Developer",
//   //   imgPath: "/images/logos/three.png",
//   // },
//   {
//     name: "Project Manager",
//     imgPath: "/images/logos/git.svg",
//   },
// ];

const techStackIcons = [
  {
    name: "JavaScript",
    modelPath: "/models/js-transformed.glb",
    scale: 250,
    rotation: [0, 0, 0],
  },
  {
    name: "React.js",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Vue.js",
    modelPath: "/models/vue_js-transformed.glb",
    scale: 250,
    rotation: [0, 0, 0],
  },
  {
    name: "OpenLayers",
    modelPath: "/models/openlayers-transformed.glb",
    scale: 150,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Laravel",
    modelPath: "/models/laravel-transformed.glb",
    scale: 5,
    rotation: [0, 0, Math.PI],
  },
  {
    name: "MongoDB",
    modelPath: "/models/mongodb-transformed.glb",
    scale: 250,
    rotation: [0, Math.PI / 2, 0],
  },
  {
    name: "PostgreSQL",
    modelPath: "/models/postgresql-transformed.glb",
    scale: 65,
    rotation: [0, 0, Math.PI],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    // imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "GIS Development - GEO LAMBERT SARL",
    date: "Oct 2024 – Oct 2025",
    responsibilities: [
      "Developed web applications using React.js, Node.js, Python, and OpenLayers.",
      "Designed and managed PostgreSQL databases.",
      "Built and consumed RESTful APIs, ensuring smooth front-end and back-end integration",
      "Automated data processing workflows using Python.",
      "Used GitHub for version control and team collaboration",
      "Designed user interfaces and prototypes with Figma",
      "Wrote and maintained technical documentation",
    ],
  },
  {
    logoPath: "/images/logo2.png",
    title: "GIS Development Intern – Q8MAPS",
    date: "Apr 2024 – Sep 2024",
    responsibilities: [
      "Developed web applications using Vue.js, React.js, Laravel, and Leaflet.",
      "Managed and maintained PostgreSQL databases.",
      "Collaborated with the team on GIS-based application features.",
    ],
  },
  {
    logoPath: "/images/logo3.png",
    title: "Front-End Development Intern – Nostrum Media",
    date: "Dec 2023 – Dec 2023",
    responsibilities: [
      "Built responsive web interfaces using Vue.js and Tailwind CSS.",
      "Integrated APIs and collaborated closely with the back-end team.",
      "Used Git and GitHub for source code management and version control.",
    ],
  },
  {
    logoPath: "/images/logo4.png",
    title: "Final Year Project Intern (PFE) – PETALENS",
    date: "Fev 2023 – Aout 2023",
    responsibilities: [
      "Enhanced a marketing decision-support web application using Vue.js, Vuex, Vuetify, and Laravel.",
      "Integrated Google Maps and managed data with PostgreSQL.",
      "Containerized the application using Docker to standardize development and deployment environments.",
      "Used GitHub for version control and team collaboration.",
      "Worked in an Agile / Scrum environment (user stories, sprints, backlog, daily meetings).",
    ],
  },
];

const socialImgs = [
  {
    name: "GitHub",
    imgPath: "/images/github.png",
    link: "https://github.com/hafsa2022",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/hafsa-el-akhdar-92b446198/",
  },
];

const myProjects = [
  {
    id: 1,
    title: "AI Resume Analyzer",
    description: "",
    subDescription: [
      "AI-powered resume analysis",
      "ATS score calculation to evaluate compatibility with recruitment systems",
      "Resume ↔ job description matching",
      "Simple dashboard to visualize results and key statistics",
      "Clean and intuitive user interface",
    ],
    href: "https://ai-resume-analyser-roan.vercel.app/",
    logo: "",
    image: "/images/project1.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/images/react.svg",
      },
      {
        id: 2,
        name: "React Router",
        path: "/images/react_router.png",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/images/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Puter.js",
        path: "/images/puter_js.png",
      },
      {
        id: 5,
        name: "Git",
        path: "/images/git.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Urban Dashboard",
    description:
      "Interactive GIS Dashboard for Urban Facility Monitoring and Spatial Analysis.",
    subDescription: [
      "A web-based GIS dashboard for monitoring and analyzing urban facilities.",
      "Built with React.js, supabase and OpenLayers.",
      "Provides interactive maps and data.",
    ],
    href: "https://urbandashboard-jet.vercel.app/",
    logo: "",
    image: "/images/project2.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/images/react.svg",
      },
      {
        id: 2,
        name: "Supabase",
        path: "/images/supabase.png",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/images/tailwindcss.svg",
      },
      {
        id: 4,
        name: "OpenLayers",
        path: "/images/openlayers.png",
      },
      {
        id: 5,
        name: "Git",
        path: "/images/git.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Movie Search Project",
    description: "A simple web page that allows users to search for movies.",
    subDescription: [],
    href: "https://movies-project-seven-psi.vercel.app/",
    logo: "",
    image: "/images/project3.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/images/react.svg",
      },
      {
        id: 2,
        name: "Appwirte",
        path: "/images/appwirte.png",
      },
      {
        id: 3,
        name: "TMDB API",
        path: "/images/tmdb_api.png",
      },
      {
        id: 4,
        name: "Git",
        path: "/images/git.svg",
      },
    ],
  },

  {
    id: 4,
    title: "Job Board",
    description:
      "A web application that allows users to search and get new opportunities easy and fast.",
    subDescription: [],
    href: "https://www.linkedin.com/posts/hafsa-el-akhdar-92b446198_codsoft-angular-bootstrap-activity-7134948433550815233-NnpR?utm_source=share&utm_medium=member_desktop",
    logo: "",
    image: "/images/project4.png",
    tags: [
      {
        id: 1,
        name: "Angular",
        path: "/images/angular.png",
      },
      {
        id: 2,
        name: "Laravel",
        path: "/images/laravel.png",
      },
      {
        id: 3,
        name: "JWT Auth",
        path: "/images/jwt.png",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/images/postgresql.png",
      },
      {
        id: 5,
        name: "Git",
        path: "/images/git.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Invoice Management App",
    description: "",
    subDescription: [
      "An application that allows users to perform various operations such as searching, creating, updating, uploading, and deleting invoices.",
      "It provides the functionality to switch between French and English languages.",
    ],
    href: "https://drive.google.com/file/d/1gRq4IS3QGc1CGuP4lUEA0WhLgKYJARH6/view?usp=sharing",
    logo: "",
    image: "/images/project5.png",
    tags: [
      {
        id: 1,
        name: "Vue.js",
        path: "/images/vuejs.png",
      },
      {
        id: 2,
        name: "Vuetify",
        path: "/images/vuetify.png",
      },
      {
        id: 3,
        name: "Vuex",
        path: "/images/vuex.png",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/images/postgresql.png",
      },
      {
        id: 5,
        name: "Git",
        path: "/images/git.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Product Management App",
    description:
      "This web application allows users to search, create, update, and delete products.",
    subDescription: [],
    href: "",
    logo: "",
    image: "/images/project6.png",
    tags: [
      {
        id: 1,
        name: "Vue.js",
        path: "/images/vuejs.png",
      },
      {
        id: 2,
        name: "Vuetify",
        path: "/images/vuetify.png",
      },
      {
        id: 3,
        name: "Vuex",
        path: "/images/vuex.png",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/images/postgresql.png",
      },
      {
        id: 5,
        name: "Git",
        path: "/images/git.svg",
      },
    ],
  },
  {
    id: 7,
    title: "Ecommerce Web",
    description:
      "The E-Commerce project built with Spring Boot, Angular, JWT Authentication, and MariaDB is an innovative web application that allows users to browse and purchase a wide range of products.",
    subDescription: [],
    href: "https://github.com/hafsa2022/ecommerce-website-frontend",
    logo: "",
    image: "/images/project7.png",
    tags: [
      {
        id: 1,
        name: "Angular",
        path: "/images/angular.png",
      },
      {
        id: 2,
        name: "Spring Boot",
        path: "/images/spring_boot.png",
      },
      {
        id: 3,
        name: "MariaDB",
        path: "/images/mariadb.png",
      },
      {
        id: 4,
        name: "JWT Auth",
        path: "/images/jwt.png",
      },
      {
        id: 5,
        name: "Git",
        path: "/images/git.svg",
      },
    ],
  },
  {
    id: 8,
    title: "URL Shortener",
    description:
      "A web page that allows users to shorten long URLs into shorter and easy-to-share links.",
    subDescription: [],
    href: "https://github.com/hafsa2022/url-shortener-frontend",
    logo: "",
    image: "/images/project8.png",
    tags: [
      {
        id: 1,
        name: "Angular",
        path: "/images/angular.png",
      },
      {
        id: 2,
        name: "Laravel",
        path: "/images/laravel.png",
      },
      {
        id: 3,
        name: "CSS",
        path: "/images/css3.svg",
      },
      {
        id: 4,
        name: "Git",
        path: "/images/git.svg",
      },
    ],
  },
];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: "/images/html5.svg",
//   },
//   {
//     name: "CSS 3",
//     icon: "/images/css3.svg",
//   },
//   {
//     name: "JavaScript",
//     icon: "/images/javascript.png",
//   },
//   {
//     name: "TypeScript",
//     icon: "/images/typescript.png",
//   },
//   {
//     name: "React JS",
//     icon: "/images/react.svg",
//   },
//   // {
//   //   name: "Redux Toolkit",
//   //   icon: "/images/redux.png",
//   // },
//   {
//     name: "Vue JS",
//     icon: "/images/vuejs.png",
//   },
//   // {
//   //   name: "Vuetify",
//   //   icon: "/images/vuetify.png",
//   // },
//   // {
//   //   name: "Vuex",
//   //   icon: "/images/vuex.png",
//   // },
//   {
//     name: "Angular",
//     icon: "/images/angular.png",
//   },
//   {
//     name: "Openlayers",
//     icon: "/images/openlayers.png",
//   },
//   {
//     name: "Tailwind CSS",
//     icon: "/images/tailwindcss.svg",
//   },
//   {
//     name: "Node JS",
//     icon: "/images/nodejs.png",
//   },
//   {
//     name: "MongoDB",
//     icon: "/images/mongodb.png",
//   },
//   {
//     name: "PostgreSQL",
//     icon: "/images/postgresql.png",
//   },
//   {
//     name: "git",
//     icon: "/images/git.svg",
//   },
//   {
//     name: "figma",
//     icon: "/images/figma.png",
//   },
//   {
//     name: "docker",
//     icon: "/images/docker.png",
//   },
// ];

export {
  words,
  expCards,
  socialImgs,
  techStackIcons,
  // technologies,
  // techStackImgs,
  navLinks,
  myProjects,
};
