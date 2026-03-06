import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { ContactForm } from "../components";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export function Contact() {
  return (
    <section>
      <div>
        <FiMessageSquare />
        <h2>Contact Me</h2>
      </div>
      <ul>
        <li>
          <MdOutlineEmail />
          <a href="#">Email</a>
        </li>
        <li>
          <FaLinkedin />
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <FaGithub />
          <a href="#">Github</a>
        </li>
      </ul>
      <ContactForm />
    </section>
  );
}
