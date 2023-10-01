import {
  mobile,
  // backend,
  // creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  // nodejs,
  // mongodb,
  git,
  // figma,
  // docker,
  meta,
  react,
  // tesla,
  webDeveloper,
  movix,
  cuisinecastle,
  whetherapp,
  // threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React.js Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "React",
    icon: react,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining interactive web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Test and debug code to ensure the quality and reliability of applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Keep up with the latest trends and technologies in React and front-end development",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Web Developer",
    icon: webDeveloper,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Optimizing websites for search engines, improving visibility and ranking by implementing SEO best practices.",
      "Address browser-specific quirks and ensure that web applications function consistently across various web browsers and versions.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const projects = [
  {
    name: "Movix",
    description:
      "Dynamic Movix App, powered by ReactJS, is your gateway to an immersive world of real-time entertainment. With a sleek multipage interface and seamless API integration, it offers a captivating experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "tmdb-api",
        color: "pink-text-gradient",
      },
    ],
    image: movix,
    project_link: "https://uk04-movix.vercel.app",
    source_code_link: "https://github.com/yuvrajsinghnegi012/movix",
  },
  {
    name: "Cusine Castle",
    description:
      "This full-stack restaurant web app, powered by ReactJS, Tailwind CSS, and Firebase, offers seamless admin menu management, secure login/logout functionality, and complete responsiveness across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: cuisinecastle,
    project_link: "https://uk04-cuisinecastle.vercel.app",
    source_code_link: "https://github.com/yuvrajsinghnegi012/Cuisine-Castle",
  },
  {
    name: "Whether App",
    description:
      "Developed using HTML, CSS, and JavaScript. Featuring two convenient tabs, one for your personalized weather data and another for seamless location searches. Get real-time weather updates effortlessly.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "whether-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: whetherapp,
    project_link: "https://uk04-whetherapp.vercel.app",
    source_code_link: "https://github.com/yuvrajsinghnegi012/Weather-App",
  },
];

export { services, technologies, experiences, projects };
