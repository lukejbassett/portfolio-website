import { Footer, Header } from "./components";
import { Contact, Education, Hero, Projects, Work } from "./sections";

export function App() {
  return (
    <>
      {/* might not even need a navbar or about */}
      {/* <Navbar /> */}
      <Header />
      <main className="w-full max-w-4xl mx-auto px-4 py-2 font-inter">
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
