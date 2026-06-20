import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt, FaRegFolder } from "react-icons/fa";

const ProjectCom = ({ title, description, tech, github, link }) => {
  const theme = localStorage.getItem("modes");

  return (
    <div
      className={`border-2 w-[450px] rounded-lg p-10 flex flex-col gap-10 ${
        theme !== "light" ? "border-brdr" : "border-red-300"
      }`}
    >
      <div className="flex justify-between items-center">
        <FaRegFolder className="w-8 h-8" />

        <div className="flex gap-3">
          <a target="_blank" rel="noopener noreferrer" href={link}>
            <FaExternalLinkAlt />
          </a>

          <a target="_blank" rel="noopener noreferrer" href={github}>
            <FiGithub />
          </a>
        </div>
      </div>

      <div>
        <h1 className="text-4xl text-texts font-semibold mb-4">
          {title}
        </h1>

        <h3 className="font-light text-md text-texts">
          {description}
        </h3>
      </div>

      <div className="flex gap-4">
        {tech.map((item, index) => (
          <p key={index} className="text-texts text-xs">
            {item.n}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCom;