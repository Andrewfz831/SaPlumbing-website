import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/homePage";
import About from "./views/about";
import Services from "./views/servicesView";
import Contact from "./views/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About-SAPlumbing" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
