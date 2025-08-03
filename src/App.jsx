import Home from "./components/Home"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import {Scrollbar} from 'smooth-scrollbar-react';
import Footer from "./components/Footer";

function App() {
  return (
     <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <Scrollbar
          damping={0.1}
          thumbMinSize={30}
          renderByPixels={true}
          alwaysShowTracks={true}
           continuousScrolling={true}
           style={{ height: "100vh" }}
        >
           <Home />
           <div className="container mt-5">
               <About />
               <Technologies />
               <Projects />
           </div>
            <Footer />
        </Scrollbar>
    </div>
  )
}

export default App
