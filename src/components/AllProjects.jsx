import ProjectCom from "./projectCom";

const AllProjects = () => {
  const mode = localStorage.getItem("modes");

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

  return (
    <div
      className={`${
        mode !== "light"
          ? "bg-bgds text-white"
          : "bg-white text-bgds"
      } flex flex-col items-center gap-8 font-chill py-44 px-[5%]`}
    >
      <h1 className="text-center text-5xl font-semibold font-chill">
        Projects
      </h1>

      <h2 className="text-center text-3xl font-semibold font-chill">
        Full Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects
          .filter((item) => item.category === "Full Stack")
          .map((item, index) => (
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

      <h2 className="text-center text-3xl font-semibold font-chill">
        Frontend
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects
          .filter((item) => item.category === "Frontend")
          .map((item, index) => (
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

      {/* 
      <div className="flex justify-center mt-10">
        <Link to="/projects">
          <button
            className={`px-5 py-3 font-chill font-semibold rounded-md uppercase transition-all ease-in-out duration-500 ${
              mode !== "light"
                ? "bg-white text-bgds hover:bg-forHover hover:text-white"
                : "bg-bgds text-white hover:bg-red-300"
            }`}
          >
            More Projects
          </button>
        </Link>
      </div>
      */}
    </div>
  );
};

export default AllProjects;