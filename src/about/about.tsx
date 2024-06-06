import { Pokemon } from "../types";
import { GiWeight } from "react-icons/gi";
import { TfiRuler } from "react-icons/tfi";
import "./about.css";
type AboutProp = {
  pokemon: Pokemon;
};

const About = ({ pokemon: { weight, height } }: AboutProp) => {
  const weightKg = weight * 0.1;
  const heightMt = height * 0.1;
  return (
    <div className="about">
      <h3>About</h3>
      <div className="about-ifo">
        <div>
          <GiWeight />
          <p>{weightKg.toFixed(1)} Kg</p>
        </div>
        <div>
          <TfiRuler />
          <p>{heightMt.toFixed(1)} M</p>
        </div>
      </div>
    </div>
  );
};

export default About;
