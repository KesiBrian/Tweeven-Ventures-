import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import CoreValues from "./components/CoreValues";
import Objectives from "./components/Objectives";
import Services from "./components/Services";
import TechnicalServices from "./components/TechnicalServices";
import Policy from "./components/Policy";
import Equipment from "./components/Equipment";
import Leadership from "./components/Leadership";
import Experience from "./components/Experience";
import Compliance from "./components/Compliance";
import Partners from "./components/Partners";
import Conclusion from "./components/Conclusion";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative bg-white selection:bg-tweveen-orange selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <CoreValues />
      <Objectives />
      <Services />
      <TechnicalServices />
      <Policy />
      <Equipment />
      <Leadership />
      <Experience />
      <Compliance />
      <Partners />
      <Conclusion />
      <Contact />
    </main>
  );
}