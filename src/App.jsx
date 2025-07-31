import Home from "./Home"
import Technologies from "./Technologies"
import Projects from "./Projects"
import {Scrollbar} from 'smooth-scrollbar-react';

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
          <Technologies />
          <Projects />
        </Scrollbar>
    </div>
  )
}

export default App
