import { Navbar } from "../components";
import { HeroAnimation, NextSection } from "../animations";

export function Hero() {
  return (
    <>
      <section className="h-screen flex flex-col p-12">
        <header className="flex justify-between items-center">
          <span className="text-4xl font-semibold tracking-widest font-code">
            Luke
          </span>
          <Navbar />
        </header>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <HeroAnimation>Hey!</HeroAnimation>
          <HeroAnimation>
            I'm <span className="text-accent">Luke</span>
          </HeroAnimation>
        </div>
        <NextSection />
      </section>
    </>
  );
}
