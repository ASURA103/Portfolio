import {GitHubCalendar} from "react-github-calendar";

function Contributions({ theme }) {
  return (
    <div
      className={`border-2 w-[74%] rounded-lg ${
        theme !== "light" ? "border-brdr" : "border-red-300"
      } p-8`}
    >
      <h2
        className="text-2xl mb-6 font-semibold"
        style={{ color: "#858B96" }}
      >
        My GitHub Contributions
      </h2>

      <GitHubCalendar
        username="Abishek-Newar"
        style={{
          minWidth: "100%",
          minHeight: "100%",
          color: "#858B96",
        }}
        colorScheme={theme === "light" ? "light" : "dark"}
      />
    </div>
  );
}

export default Contributions;