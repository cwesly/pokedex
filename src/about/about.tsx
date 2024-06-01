import { Pokemon } from "../types";
import { GiWeight } from "react-icons/gi";
import { TfiRuler } from "react-icons/tfi";

type AboutProp = {
  pokemon: Pokemon;
};

const About = ({ pokemon: { weight, height, stats } }: AboutProp) => {
  const weightKg = weight * 0.1;
  const heightMt = height * 0.1;
  return (
    <div>
      <h3>About</h3>
      <div>
        <div>
          <GiWeight />
          <p>{weightKg.toFixed(2)} Kg</p>
        </div>
        <div>
          <TfiRuler />
          <p>{heightMt.toFixed(2)} M</p>
        </div>
      </div>
    </div>
  );
};

export default About;
