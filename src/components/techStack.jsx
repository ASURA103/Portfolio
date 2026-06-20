

export default function TechStack() {
    const techs = [{
        name: "React",
        link: "https://skillicons.dev/icons?i=react"
    }, {
        name: "Node",
        link: "https://skillicons.dev/icons?i=nodejs"
    }, {
        name: "Tailwind",
        link: "https://skillicons.dev/icons?i=tailwind"
    }, {
        name: "javaScript",
        link: "https://skillicons.dev/icons?i=javascript"
    }, {
        name: "mongoDB",
        link: "https://skillicons.dev/icons?i=mongo"
    }, {
        name: "github",
        link: "https://skillicons.dev/icons?i=github"
    }]
    const skills = [{
        name: "Frontend",
        skill: ["HTML", "CSS", "React", "Tailwind"],
    }, {
        name: "Backend",
        skill: ["Node.js", "Express", "MongoDB"]
    }, {
        name: "Others",
        skill: ["JavaScript", "Python", "Java", "PHP", "Git", "Github", "AWS"]
    }]

    const theme = localStorage.getItem("modes");
    return <div className={`${theme != "light" ? "bg-bgds text-white" : "bg-white text-bgds"} mx-auto select-none `}>
        <h1 className="text-center text-4xl font-semibold mb-10  ">Tech Stack</h1>
        <div className={`flex flex-wrap gap-4 justify-center mb-32`}>
            {techs.map((tech,index) => (
                <div key={index} className={`group transition-all ease-in-out duration-500 w-24 h-24 border-2  ${theme != "light" ? "border-brdr hover:bg-forHover" : "border-red-300 hover:bg-red-300"} flex items-center justify-center rounded-lg `}>
                    <img className="transition-all ease-in-out duration-500  group-hover:scale-110" src={tech.link} alt={tech.name} />
                </div>
            ))}
        </div>
        <div className="flex flex-wrap gap-8 p-10 font-chill  justify-center ">

            {
                skills.map((item, index) => (
                    <div key={index} className={`border-2 w-112.5 h-87.5   p-16 rounded-lg transition-all ease-in-out duration-500 ${theme != "light" ? "bg-bgds border-brdr hover:bg-forHover" : "bg-white border border-red-300 hover:bg-red-300"} `}>
                        <h1 className="text-center text-lg font-semibold mb-10">{item.name}</h1>
                        <div className="flex flex-wrap justify-center gap-4">
                            {item.skill.map((front, index) => (
                                <div key={index} className={`border rounded-md h-8 items-center ${item.name == "Others" && front == "Wordpress Plugin Development" ? 'w-auto p-2' : 'w-20'} flex py-1 justify-center transition-all ease-in-out duration-500  ${theme != "light" ? "bg-forHover border-brdr hover:bg-bgds" : "bg-red-300 border-white hover:bg-white"} `}>
                                    <h3 className="text-xs font-light">{front}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}