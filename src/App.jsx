import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events.jsx";
import EventPage from "./components/EventPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/events/:eventKey" element={<EventPage />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
