import "./App.css";
import Navbar from "./components/navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events.jsx";
import About from "./pages/About.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Footer from "./components/Footer.jsx"
import Member from "./pages/Member.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Member" element={<Member />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
