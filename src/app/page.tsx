import Threads from "@/app/components/Threads";
import NavBar from "@/app/components/NavBar";
import Header from "@/app/components/Header";
import { About } from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import {SmoothCursor} from "@/components/ui/smooth-cursor";
export default function Home() {
  return (
    <>
      {/* Background Threads Animation - Fixed to cover entire viewport */}
      <div className="fixed inset-0 z-[-1] w-full h-full">
        <Threads
          amplitude={3}
          distance={0.5}
          enableMouseInteraction={true}
          color={[0.1, 0.1, 0.1]}
        />
      </div>
        {/*<SmoothCursor/>*/}
      {/* Main content */}
      <div className="relative min-h-screen">
        <NavBar />
        <Header />
        <About />
          <Projects />
          <Contact/>
      </div>
    </>
  );
}
