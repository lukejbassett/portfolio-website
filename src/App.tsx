import { Footer, Header } from "./components";
import { Contact, Education, Hero, Projects, Work } from "./sections";

export function App() {
  return (
    <>
      {/* might not even need a navbar or about */}
      {/* <Navbar /> */}
      <Header />
      <main>
        <Hero />
        {/* <About /> */}
        <Projects />
        <Education />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
