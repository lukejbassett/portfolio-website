import * as React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="
          relative
          hover:opacity-70
          transition-colors
          after:absolute
          after:left-0
          after:-bottom-0.5
          after:h-0.5
          after:w-full
          after:bg-accent
          after:origin-left
          after:scale-x-0
          after:transition-transform
          after:duration-300
          hover:after:scale-x-100
        "
    >
      {children}
    </a>
  );
}
