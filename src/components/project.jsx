import { Link } from "react-router-dom";
import ProjectCom from "./projectCom";

export default function Project() {
  const projects = [
     {
      title: "DreamStay",
      description:
        "Welcome To DreamStay, A hotel management system for booking, managing bookings",
      tech: ["React", "Tailwind", "Node", "Express", "MongoDB", "AWS"],
      github: "https://github.com/ASURA103/hotel-managment-system",
      category: "Full Stack",
      link: "https://asura-dreamstay-hotelsite.vercel.app/",
    },
    {
      title: "Ecommerce",
      description:
        "Welcome To SHOPSY, Your Go-To Platform for Shopping, clothings",
      tech: ["React", "Tailwind","css"],
      github: "https://github.com/ASURA103/Ecommerce",
      category: "Frontend",
      link: "https://ecommerce-shopsy-app.vercel.app/",
    },
    {
      title: "TaskFlow",
      description:
        "Welcome To TaskFlow, Your Go-To Platform for managing your Tasks",
      tech: ["React", "Tailwind", "Node", "Express", "MongoDB"],
      github: "https://github.com/ASURA103/Task-Management-Web-Application",
      category: "Full Stack",
      link: "https://asura-taskflaw.vercel.app/",
    },
  ];

  const theme = localStorage.getItem("modes");

  return (
    <div
      className={`${
        theme !== "light"
          ? "bg-bgds text-white"
          : "bg-white text-bgds"
      } font-chill py-32`}
    >
      <h1 className="text-center text-4xl font-semibold font-chill mb-24">
        Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((item, index) => (
          <ProjectCom
            key={index}
            title={item.title}
            description={item.description}
            tech={item.tech}
            github={item.github}
            link={item.link}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/projects">
          <button
            className={`px-5 py-3 font-chill font-semibold rounded-md uppercase transition-all ease-in-out duration-500 ${
              theme !== "light"
                ? "bg-white text-bgds hover:bg-forHover hover:text-white"
                : "bg-bgds text-white hover:bg-red-300 hover"
            }`}
          >
            More Projects
          </button>
        </Link>
      </div>
    </div>
  );
}