import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abroor Rizky",
  initials: "AR",
  url: "https://abroorrizky.vercel.app",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description: "a Frontend Developer",
  summary:
    "Experienced Frontend Developer with a demonstrated history of working in the computer software industry. Skilled in React, Next.js, Typescript, Node.js, Python, and Go. Strong engineering professional with a Bachelor's Degree in Information Systems from the Open University.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Golang",
    "Postgres",
    "MySQL",
    "CSS",
    "HTML",
    "PHP",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abroorforwork@gmail.com",
    tel: "+62 821-1310-7659",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abrooriznoo",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abroor-rizky/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/arzportfolio.jsx/",
        icon: Icons.instagram,
        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      Email: {
        name: "Send Email",
        url: "mailto:abroorforwork@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "CV. Insipirasi Software",
      href: "#",
      badges: ["Freelance"],
      location: "Bekasi, Indonesia",
      title: "Frontend Developer",
      logoUrl: "/Company/company.webp",
      start: "August 2025",
      end: "Present",
      description:
        "Building custom software solutions for small and medium businesses to help them digitize their operations and improve efficiency. Technologies used include React, Node.js, Golang and PostgreSQL.",
    },
    {
      company: "PT. Jakarta Cakratunggal Steel Mills",
      badges: ["Internship"],
      href: "https://www.cakrasteel.co.id/",
      location: "Jakarta, Indonesia",
      title: "IT Support Technician",
      logoUrl: "/Company/cakrasteel.webp",
      start: "August 2017",
      end: "October 2017",
      description:
        "Provided technical support for over 200 employees across multiple departments including HR, Finance, and Operations. Managed and maintained company hardware and software systems, ensuring minimal downtime and optimal performance.",
    },
  ],
  education: [
    {
      school: "Open University of Jakarta",
      href: "https://www.ut.ac.id/",
      degree: "Bachelor of Science (B.Sc.) in Information Systems",
      logoUrl: "/Educations/ut.png",
      start: "2024",
      end: "2026",
      scores: ["GPA: 3.75/4.00"],
    },
    {
      school: "SMK AL-BAHRI",
      href: "https://www.albahri.sch.id/",
      degree: "Rekayasa Perangkat Lunak",
      logoUrl: "/Educations/ab.png",
      start: "2016",
      end: "2019",
      scores: ["FINAL EXAM: 81.81/100"],
    },
  ],
  projects: [
    {
      title: "Manufacturing System",
      href: "http://72.60.96.218:5173/",
      dates: "November 2025 - Present",
      active: true,
      description:
        "Developed a comprehensive web-based manufacturing management system to streamline production processes, inventory tracking, and order management. The system features real-time data analytics, user-friendly dashboards, and automated reporting tools. Built using React for the frontend and Node.js with PostgreSQL for the backend, ensuring scalability and robust performance.",
      technologies: [
        "React",
        "TailwindCSS",
        "JavaScript",
        "PostgreSQL",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "http://72.60.96.218:5173/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Projects/pusat-print.png",
      video: "",
    },
    {
      title: "Attendance with Face Recognition",
      href: "https://fe-absensi.vercel.app/login",
      dates: "August 2025 - November 2025",
      active: true,
      description:
        "Developed a web application for employee attendance tracking using facial recognition technology. The system captures employee images via webcam, processes them using a Python-based backend with OpenCV, and stores attendance records in a MySQL database. The frontend is built with React and TailwindCSS for a responsive user interface.",
      technologies: [
        "React",
        "TailwindCSS",
        "JavaScript",
        "MySQL",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://fe-absensi.vercel.app/login",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Projects/attendance.png",
      video: "",
    },
    {
      title: "My PDDB",
      href: "https://my-ppdb.vercel.app/",
      dates: "September 2025 - October 2025",
      active: true,
      description:
        "Developed a web application for managing student admissions and registrations for educational institutions. The system allows administrators to create and manage admission forms, track applicant status, and communicate with applicants. Built with React.js and TailwindCSS for a responsive frontend, and Node.js with PostgreSQL for the backend.",
      technologies: [
        "React",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://my-ppdb.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/Projects/my-ppdb.png",
      video: "",
    },
    {
      title: "Weather App",
      href: "https://weather-app-eight-rouge-37.vercel.app/",
      dates: "November 2025",
      active: true,
      description:
        "Developed a web application that provides real-time weather information for any location worldwide. Users can search for cities to view current weather conditions, forecasts, and other meteorological data. The app is built using React.js for the frontend and integrates with the OpenWeatherMap API to fetch accurate weather data.",
      technologies: [
        "React",
        "JavaScript",
        "RESTful API",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://weather-app-eight-rouge-37.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abrooriznoo/weather-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Projects/weather.png",
      video: "",
    },
  ],
  training: [
    {
      title: "Pusat Pelatihan Kerja Pengembangan Industri (PPKPI)",
      dates: "September - November, 2025",
      location: "Jakarta Timur, Indonesia",
      description:
        "The Fullstack Junior Web Developer training program at the Center for Industrial Development Work Training (PPKPI) is a comprehensive, hands-on course designed to equip participants with the skills and knowledge necessary to excel in both frontend and backend web development. The curriculum covers a wide range of technologies, including HTML, CSS, JavaScript, Node.js, and databases, with a strong emphasis on practical application through real-world projects. Graduates of this program will be well-prepared to enter the workforce as competent and versatile fullstack web developers.",
      image: "/Bootcamp/PPKPI.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Pusat Pelatihan Kerja Daerah (PPKD) - Jakarta Utara",
      dates: "July - August, 2025",
      location: "Jakarta Utara, Indonesia",
      description:
        "The Junior Web Developer training program at the Regional Work Training Center (PPKD) in North Jakarta is an intensive, competency-based initiative designed to equip participants with essential, industry-relevant skills in modern web development. Focusing heavily on practical application, the curriculum covers core technologies such as HTML, CSS, and JavaScript, ensuring graduates are proficient in building functional, responsive web applications and prepared to enter the workforce as certified and job-ready junior developers.",
      image: "/Bootcamp/PPKD-JU.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "BNSP Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1UrsibYSfXqXGLZqe3QQfXbabD7OwX1Aa/view?usp=sharing",
        },
        {
          title: "Training Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1vZ5qtMX07KY6b5OzpZQBxQQXnfyVxZRS/view?usp=sharing",
        },
      ],
    },
    {
      title: "Pusat Pelatihan Kerja Daerah (PPKD) - Jakarta Pusat",
      dates: "February - April, 2025",
      location: "Jakarta Pusat, Indonesia",
      description:
        "The Fullstack Junior Web Developer training program at the Regional Work Training Center (PPKD) in Central Jakarta is a comprehensive, hands-on course designed to equip participants with the skills and knowledge necessary to excel in both frontend and backend web development. The curriculum covers a wide range of technologies, including HTML, CSS, JavaScript, Node.js, and databases, with a strong emphasis on practical application through real-world projects. Graduates of this program will be well-prepared to enter the workforce as competent and versatile fullstack web developers.",
      icon: "public",
      image: "/Bootcamp/PPKD-JP.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "BNSP Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1__TCztkvMfxZW7wm9Zddo9I_EX7gtYUb/view?usp=sharing",
        },
        {
          title: "Training Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1OB0D6GXP8O3VtoTiQxPu8m1u20D4L_ZQ/view?usp=sharing",
        },
      ],
    },
  ],
} as const;
