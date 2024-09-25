import {
  shebin,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  Iti,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  NTI,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink ="https://drive.google.com/file/d/1dciqJrPjxiUA8iR4QCpDPsI10m1S91ef/view?usp=sharing";
export const repoLink = "https://github.com/ModAllama";



export const callToAction = "https://www.linkedin.com/in/mahmoud-allama-bb71281bb/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: shebin,
    title: "Shebin-elkom Engineering, Menoufia University",
    degree: "Bachelor of Engineering",
    duration: "October 2020 - August 2025",
    content1: "Major: Electronics and Mechatronics Engineering",
  },
  {
    id: "education-2",
    icon: Iti,
    title: "DEPI",
    degree: "Mern WEB Develement",
    duration: "May 2024 - Octobr 2024",
    content1:
      "Crafting engaging and responsive web applications by harnessing the full stack, delivering unparalleled user experiences and cutting-edge solutions.",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: polkadot,
    event: "The Nationwide Blockchain hackathon 🥇",
    position: "Smart Contract Category",
    content1:
      "Blockchain Hackathon: Training, discussions, and innovative solutions await participants",
    article:
      "https://drive.google.com/file/d/1oR8xA7A-_GfAnIj9I88DRoYvtZ1VZN5o/view?usp=sharing",
  },
  {
    id: "a-2",
    icon: lightspeed,
    event: "ASME AUC Student Chapter",
    position: "1st Runner Up",
    content1:
      "Menoufia team developed renewable energy-powered robots, showcasing innovative sustainable engineering solutions.",
    article: "https://site.pheedloop.com/event/EFxCairo2024/home",
  },
  {
    id: "a-3",
    icon: Iti,
    event: "ITI Maker Spaces",
    position: "Winner",
    content1:
      "Utilize 3D printers for new models and develop specialized mechatronics projects.",
    article:
      "http://apps.iti.gov.eg/ManagementSystem/iti-service/Makerspace.html",
  },
  {
    id: "a-4",
    icon: manipal,
    event: "Menofia Racing Team",
    position: "suspension designer",
    content1: "Top 10 among 500+ teams globally",
    content2:
      "As a member of the suspension engineering team, we are building a racing car from scratch. We learn from books, start designs, create prototypes, work on improvements, and then implement in workshops and factories while participating in competitions.",
    article: "https://www.facebook.com/MenofiaRT/",
  },
];


export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-4",
        icon: FaGolang,
        name: "Go",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-11",
        icon: SiSolidity,
        name: "Solidity",
      },
      
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-7",
        icon: SiGraphql,
        name: "GraphQL",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];
export const experiences = [
  {
    organisation: "NTI",
    logo: NTI,
    link: "https://www.nti.sci.eg/",
    positions: [
      {
        title: "Software Engineer Intern",
        duration: "2021",
        content: [
          {
            text: "Participated in the AI track program, gaining 120 hours of hands-on experience in Python, Machine Learning, and Deep Learning.",
            link: "",
          },
          {
            text: "Acquired fundamental knowledge of databases, SQL, and Python programming basics.",
            link: "",
          },
        ],
      },
      {
        title: "MEAN Stack Developer",
        duration: "2024",
        content: [
          {
            text: "Developed full-stack web applications using MongoDB, Express.js, Angular, and Node.js as part of the NTI MEAN Stack program.",
            link: "",
          },
          {
            text: "Gained hands-on experience in building RESTful APIs and managing databases, improving backend and frontend proficiency.",
            link: "",
          },
        ],
      },
    ],
  },

  {
    organisation: "ITI",
    logo: Iti, 
    link: "https://www.iti.gov.eg/",
    positions: [
      {
        title: "Python & Django Developer",
        duration: "2020",
        content: [
          {
            text: "Completed an extensive course in Python and Django, gaining practical knowledge in backend development and building scalable web applications.",
            link: "",
          },
          {
            text: "Developed hands-on projects using Django to enhance web development skills.",
            link: "",
          },
        ],
      },
      {
        title: "Participant, Software Algorithms & Programming",
        duration: "2020",
        content: [
          {
            text: "Acquired in-depth knowledge of software algorithms, problem-solving techniques, and programming languages such as C and Python.",
            link: "",
          },
        ],
      },
    ],
  },

  {
    organisation: "Ressala Organization",
    logo: shebin, 
    link: "https://www.ressala.org/",
    positions: [
      {
        title: "Programming Trainer",
        duration: "2020",
        content: [
          {
            text: "Volunteered as a programming trainer, teaching the CS50 course to beginners.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Sumz.ai",
    github: "",
    link: "https://famous-belekoy-b5b237.netlify.app/",
    image: icon,
    content:
      "Convert any academic/news/boring text into cool comic strips using GPT-3.5 and Stable Diffusion!",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI",
      },
    ],
  },
  {
    id: "project-2",
    title: "GreenTrust",
    github: "",
    link: "https://green-trust-fantom.netlify.app/",
    image: greentrust,
    content:
      "Winning project at 3 hackathons, GreenTrust offers a novel solution for obtaining certification in organic farming by organizing credible and decentralized Participatory Guarantee Systems (PGSs).",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "icon-4",
        icon: SiIpfs,
        name: "IPFS",
      },
      {
        id: "icon-5",
        icon: SiSolidity,
        name: "Solidity",
      },
      {
        id: "icon-6",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol",
      },
    ],
  },
  {
    id: "project-10",
    title: "Portfolio",
    github: "",
    link: "",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];


//here add your latest Updates
// export const extraCurricular = [
//   {
//     organisation: "Devfolio",
//     title: "UniDAO Lead",
//     duration: "December 2021 - Present",
//     content: [
//       {
//         text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
//         link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
//       },
//       {
//         text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
//         link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
//       },
//     ],
//     logo: devfolio,
//   },
//   {
//     organisation: "Google Developer Student Club, NITK",
//     title: "Co-Chair",
//     duration: "December 2021 - Present",
//     content: [
//       {
//         text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
//         link: "",
//       },
//       {
//         text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
//         link: "https://incident.nitk.ac.in/",
//       },
//     ],
//     logo: gdsc,
//   },
//   {
//     organisation: "Genesis, NITK",
//     title: "Competitions Head",
//     duration: "Sep 2021 - Present",
//     content: [
//       {
//         text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
//         link: "",
//       },
//       {
//         text: "Won 7 inter-college solo dance competitions",
//         link: "",
//       },
//     ],
//     logo: genesis,
//   },

// ];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/mahmoud-allama-bb71281bb/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/ModAllama",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:mahmoudallama22@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://x.com/AllamaMahmoud",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/mahmoudallama2/",
  },
];

export const aboutMe = {
    name: "Mahmoud Allama",
    tagLine: "AI-First Full-Stack Developer",
    intro: "Driven Software Developer dedicated to mastering cutting-edge AI technologies and pioneering the next groundbreaking innovations."
}
