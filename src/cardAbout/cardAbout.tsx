import About from "../about/about";
import BaseStats from "../baseStats/baseStats";
import Tags from "../tags/Tags";
import { Pokemon } from "./../types";
import "./cardAbout.css";

type CardAboutProps = {
  typeColor: string;
  pokemon: Pokemon;
};
function CardAbout({ typeColor, pokemon }: CardAboutProps) {
  return (
    <section className="container-about">
      <Tags types={pokemon.types} />
      <About pokemon={pokemon} type={typeColor} />
      <BaseStats stats={pokemon.stats} type={typeColor} />
    </section>
  );
}

export default CardAbout;
