import { NavLink } from "./NavLink";

export function Navbar() {
  return (
    <nav>
      <ul className="flex gap-8 text-xl font-semibold uppercase tracking-wider">
        <li>
          <NavLink href="#about">About</NavLink>
        </li>
        <li>
          <NavLink href="#">Projects</NavLink>
        </li>
        <li>
          <NavLink href="#">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
