import { useNavigate } from "react-router-dom";

import "../styles/Events.css";
import HeroSlider from "../components/HeroSlider.jsx";

const Events = () => {
  const navigate = useNavigate();

  return (
    <>
    <HeroSlider />
     
    </>
   
  );
};

export default Events;
