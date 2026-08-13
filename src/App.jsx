import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Experience } from "@/sections/Experience"
import { Projects } from "@/sections/ProjectsV2"
import { Testimonials } from "@/sections/Testimonials"
import { Contact } from "@/sections/Contact"
import { Footer } from "./layout/Footer"



function App() {

  return <div className="min-h-screen overflow-x-hidden">
    <Navbar/>
      <main>
        <Hero/>
        <About />
        <Projects />
        <Experience />
        {/* <Testimonials /> Add when needed */}
        <Contact />
        
        
      </main>
    <Footer />
  </div>
}

export default App
