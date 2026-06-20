import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";

export default function Navbar() {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "PROJECTS", link: "/projects" },
  ];

  function modes() {
    const modeC = localStorage.getItem("modes");

    if (modeC === "light") {
      localStorage.setItem("modes", "dark");
    } else {
      localStorage.setItem("modes", "light");
    }

    window.location.reload();
  }

  const theme = localStorage.getItem("modes");

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed flex items-center justify-around w-full select-none z-30">
      <div
        className={`flex flex-col lg:flex-row w-full justify-between ${
          theme !== "light"
            ? "text-white border-forHover"
            : "text-bgds border-red-300"
        } bg-transparent backdrop-blur-sm px-10 py-10 h-auto lg:mx-56 my-7 border-[0.1px] rounded-lg`}
      >
        <h2 className="font-sixtyFour text-xl">Rahul Rajput</h2>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-7 top-9 text-3xl lg:hidden"
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>

        <nav
          className={`flex-col lg:flex-row items-center font-chill text-end gap-10 transition-all ease-linear duration-300 ${
            open ? "flex" : "hidden"
          } lg:flex`}
        >
          {Links.map((link, index) => (
            <h3
              key={index}
              className="md:ml-8 text-sm md:my-0 my-7"
            >
              <a href={link.link}>{link.name}</a>
            </h3>
          ))}

          <div
            onClick={modes}
            className={`h-8 w-8 flex items-center justify-center rounded-lg transition-all ease-in-out duration-500 ${
              theme !== "light"
                ? "hover:bg-forHover"
                : "hover:bg-red-300"
            } cursor-pointer`}
          >
            <FaSun />
          </div>
        </nav>
      </div>
    </div>
  );
}