type SectionHeaderProps = {
  children: React.ReactNode;
};

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="text-4xl font-code tracking-wide font-semibold pb-6">
      {children}
    </h2>
  );
}
