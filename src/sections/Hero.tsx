import { HeroAnimation, Logo, Navbar, NextSection } from "../components";

export function Hero() {
  return (
    <>
      <section className="h-screen flex flex-col p-12">
        <header className="flex justify-between items-center">
          <Logo name="Luke"/>
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
