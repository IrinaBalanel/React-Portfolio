import HomeScreen from "../components/HomeScreen";
import About from "../components/About";
import Tech from "../components/Tech";
import Contact from "../components/Contact";
import ProjectsCTA from "../components/ProjectsCTA";
// import {useEffect} from "react"


export default function Home() {
    // useEffect(() => {
    //   document.title = "Home | Portfolio"
    // }, []);
  
    return(
      <main id="main">
        <HomeScreen />
        <About />
        <Tech />
        <ProjectsCTA />
        <Contact />
      </main>
    )
}