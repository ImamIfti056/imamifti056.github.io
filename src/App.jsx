import Navbar, {MobileNavbar} from "./components/Navbar";
import ColorPicker from "./components/ColorPicker";
import ScrollSync from "./components/ScrollToNavigate";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Extracurricular from "./components/Extracurricular";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() { 
  return (   
    <div className="app-shell">
      <div className="app-frame">
        <Navbar/>
        <MobileNavbar/>
        <ColorPicker/>

        <div className="content-shell">
          <ScrollSync />
          <main className="route-panel">
            <Intro />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Blogs />
            <Experience />
            <Extracurricular />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
