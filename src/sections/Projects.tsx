import { FaRegFolderOpen } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiOutlineLink } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";

export function Projects() {
  return (
    <section>
      <div className="flex gap-2 items-center mt-8 mb-4">
        <FaRegFolderOpen className="text-accent" size={28} />
        <h2 className="text-2xl">Projects</h2>
      </div>
      <ul className="">
        <li className="flex gap-6">
          <div className="flex flex-col items-center gap-4 justify-between">
            <img
              src="src\assets\blankScreen.png"
              alt=""
              className="w-60 h-auto"
            />
            <div className="flex gap-2">
              <a
                href="https://github.com/lukejbassett/racing-statition-dashboard"
                target="_blank"
                className="flex rounded-md transition-colors px-4 py-2 gap-2 bg-accent/20 hover:bg-accent/30 border border-grey/50 hover:border-grey w-auto items-center"
              >
                <IoCodeSlashOutline />
                Code
              </a>
              <a
                href="/"
                className="flex rounded-md transition-colors items-center gap-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 border border-grey/50 hover:border-grey w-fit"
              >
                <HiOutlineLink />
                Demo
              </a>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <h3 className="text-xl">Racing Statition</h3>
              <span className="font-code text-md text-grey">Web App</span>
              <p className="py-6">
                Formula 1 Stats Dashboard Web App. Displays season results,
                standings, drivers, teams and circuits. There are related F1
                minigames too. All made with the{" "}
                <a
                  href="https://github.com/jolpica/jolpica-f1"
                  className="text-accent underline hover:text-accent/60"
                >
                  Jolpica API
                </a>
                .
              </p>
              <div>
                <span className="text-grey font-code">const stack = {"["}</span>
                <ul className="flex gap-4 text-grey py-2">
                  <li className="flex gap-1 items-center">
                    <FaReact className="text-accent" size={20} />
                    React
                  </li>
                  <li className="flex gap-1 items-center">
                    <TbBrandTypescript className="text-accent" size={20} />
                    Typescript
                  </li>
                </ul>
                <span className="text-grey font-code">{"]"}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
