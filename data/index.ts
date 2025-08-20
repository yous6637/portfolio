import { AZURE_SAS } from "@/lib/consts";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Youtube Clone",
    des: "A Youtube clone built with Next.js, Tailwind CSS, and the Youtube API.",
    img: `/assets/images.avif`,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  
];

export const testimonials = [
  {
    quote:
      "Collaborating with Youcef was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Youcef's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Youcef is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Youcef was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Youcef's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Youcef is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Youcef was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Youcef's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Youcef is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Youcef was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Youcef's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Youcef is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Youcef was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Youcef's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Youcef is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];



export const workExperience = [
  {
    id: 1,
    title: "Oracle DBA Intern - Sonatrach",
    desc: "Worked as an Oracle DBA intern at Sonatrach, the largest oil company in Africa.",
    className: "md:col-span-2",
    thumbnail: `assets/GroupmentSonatrachEni.jpg`,
  },
  {
    id: 2,
    title: "Web app development intern - Sonatrach",
    desc: "Developed a web app for the company's internal use.",
    className: "md:col-span-2",
    thumbnail: `/assets/logo.svg`,
  },
 
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];


export const technologies = [
  { name : "Azure"  ,src : `/assets/azure.png`},
  { name : "MySql"  ,src : `/assets/mysql.png`},
  { name : "NextJs"  ,src : `/assets/nextjs.png`},
  { name : "Postegresql"  ,src : `/assets/postegresql.png`},
  { name : "React.js"  ,src : `/assets/react.png`},
  { name : "Supabase"  ,src : `/assets/supabase.png`},
  { name : "Tailwind"  ,src : `/assets/tailwind.png`},


]
