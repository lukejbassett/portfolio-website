import { Button } from "../components";
import { SectionHeader } from "../components/SectionHeader";
import { FiDownload } from "react-icons/fi";

export function About() {
  return (
    <section id="about" className="container">
      <div className="m-auto max-w-2xl rounded-2xl p-4 border border-bg-light/20 shadow-2xl">
        <div className="flex flex-col">
          <SectionHeader>Who Am I</SectionHeader>
          <p>
            Found a passion for all things technology. Since then I have self
            taught front end development, focusing on having a career in
            software development to work on projects that make a difference.
            Today, I'm working on a passion project related to Formula 1 by
            developing a stastics dashboard web app.
          </p>
          <p>
            I am currently in my final year at the University of Greater
            Manchester studying Computing. Feel free to message me in any way
            possible!
          </p>
          <div className="flex gap-4 mt-6">
            <Button href="#contact">Contact Me</Button>

            <Button
              variant="secondary"
              icon={<FiDownload size={18} />}
              href="/assets/CV Luke.pdf"
            >
              My CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
