import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="portfolio-bg min-h-screen">

      {/* Background effects */}
      <div className="glow -right-40 -top-40" />
      <div className="grain" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Connect />

        <Footer />

      </main>

    </div>
  );
}

export default App;