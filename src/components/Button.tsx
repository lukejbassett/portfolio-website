type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = "primary",
  href,
  icon,
  className = "",
  ...rest
}: ButtonProps) => {
  const variants: Record<Variant, string> = {
    primary: `
      text-zinc-50
      bg-gradient-to-tr from-zinc-900 to-zinc-700
      hover:shadow-zinc-500/30
      dark:text-zinc-900
      dark:from-zinc-50
      dark:to-zinc-200
      dark:hover:shadow-zinc-700/30
    `,
    secondary: `
      border border-zinc-300
      bg-white
      hover:bg-zinc-100
      dark:bg-zinc-900
      dark:border-zinc-700
      dark:hover:bg-zinc-800
    `,
    ghost: `
      bg-transparent
      hover:bg-zinc-100
      dark:hover:bg-zinc-800
    `,
  };

  const classes = `
    group relative overflow-hidden rounded-lg
    w-32 h-12
    font-medium
    transition-all duration-300
    hover:scale-105 hover:shadow-lg active:scale-95
    flex items-center justify-center gap-2
    font-inter tracking-wide
    ${variants[variant]}
    ${className}
  `;

  const content = (
    <>
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{children}</span>
      <span className="absolute inset-0 flex size-full justify-center transform-[skew(-14deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-14deg)_translateX(100%)]">
        <span className="relative h-full w-8 bg-white/20 dark:bg-black/10" />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button {...rest} className={classes}>
      {content}
    </button>
  );
};
