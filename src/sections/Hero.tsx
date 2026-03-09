export function Hero() {
  return (
    <>
      <div className="grid grid-cols-[auto_1fr] items-center gap-6">
        <img
          src="src\assets\IMG_20190211_112944.jpg"
          alt=""
          className="rounded-full w-32 h-32 object-cover place-self-start mt-2 shadow-2xl "
        />
        <div>
          <span className="text-grey text-sm">const developer = {"{"}</span>
          <div className="ml-4">
            <h1 className="text-4xl">Hey, I'm</h1>
            <p className="text-5xl">
              <strong className="text-accent">Luke</strong> Bassett
            </p>
          </div>
          <span className="text-grey text-sm">{"}"}</span>
          <p className="my-4 ml-4">
            Fascinated by the world of Tech since high school. Self taught
            programmer to aspiring Software Developer. I want to work on
            projects that make a difference. Currently studying Computing (BSC
            Hons) at University.
          </p>
          <span className="text-grey text-sm">const findUser = {"["}</span>
          <div className="flex gap-2 my-2 mx-4 font-code">
            <a
              href="/"
              className="flex items-center justify-center gap-2 rounded-md transition-colors px-4 py-2 bg-accent/20 hover:bg-accent/30 border border-grey/50 hover:border-grey text-xs w-auto"
            >
              Download CV
            </a>
            <a
              href="/"
              className="flex items-center justify-center gap-2 rounded-md transition-colors px-4 py-2 bg-accent/20 hover:bg-accent/30 border border-grey/50 hover:border-grey text-sm w-auto"
            >
              Contact Me
            </a>
          </div>
          <span className="text-grey text-sm">{"]"}</span>
        </div>
      </div>
    </>
  );
}
