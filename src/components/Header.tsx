export function Header() {
  return (
    <header className="font-inter w-full max-w-5xl mx-auto px-4 py-2 flex justify-between ">
      <div className="flex gap-3 items-center">
        <a href="/" className="text-xl text-accent">
          Luke
        </a>
        <span className="font-code text-sm text-grey">~/portfolio</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-grey text-sm">status: </p>
        <span className="rounded-full h-2 w-2 bg-green-500"></span>
        <p className="text-sm text-green-500">Open to Work</p>
      </div>
    </header>
  );
}
