import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about.js";
import Home from "./home.js";
import USESTATE from "./USESTATE.js";
import USEEFFECT from "./USEEFFECT.js";
import USECONTEXT from "./USECONTEXT.jsx";
import DynamicRouting from "./dynamicrouting.jsx";
import { useState, createContext } from "react";
import Higherorder from "./higherorder.jsx";
import NewPage from "./newpage.jsx";
// import UseReducer from "./UseReducer.jsx"
export let Globalimfo = createContext();


function App() {
  const [ Multiplier, setMultiplier] = useState(1);
  return (
    <Globalimfo.Provider value={[ Multiplier , setMultiplier ] }>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/USESTATE" element={<USESTATE />} />
          <Route path="/USEEFFECT" element={<USEEFFECT />} />
          <Route path="/USECONTEXT" element={<USECONTEXT />} />
          <Route path="/highorder" element={<Higherorder />} />
          <Route path="/dynamicrouting/:iddata" element={<DynamicRouting />} />
          <Route path="/p/:iddata" element={<NewPage />} />
          {/* <Route path="/useReducer" element={<UseReducer />} /> */}
          

          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
        >

      } /> */}
        </Routes>
      </BrowserRouter>
    </Globalimfo.Provider>
  );
}

export default App;
