import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";

export function Work() {
  return (
    <>
      <section>
        <div>
          <MdOutlineWorkOutline />
          <h2>Work Experience</h2>
        </div>
        <div>
          <h3>Role</h3>
          <p>Company Name</p>
          <div>
            <FaRegCalendar />
            <p>April 2025- Present</p>
          </div>
        </div>
        <p>job description</p>
        <ul>
          <li>job resopnsibility</li>
          <li>job resopnsibility</li>
          <li>job resopnsibility</li>
        </ul>
      </section>
    </>
  );
}
