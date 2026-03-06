import { Navbar, Footer } from "./components";
import { About, Contact, Hero, Projects } from "./sections";

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
