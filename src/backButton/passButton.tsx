import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./passButton.css"

type PassButtonProps = {
  fetchPokemon: (id?: number) => Promise<void>;
  id: number;
  type: "next" | "back";
};

function PassButton({ fetchPokemon, id, type }: PassButtonProps) {
  const changePokemon = () => {
    const newPokemon = type === "next" ? id + 1 : id === 1 ? 1 : id - 1;
    fetchPokemon(newPokemon);
  };
  return (
    <button onClick={changePokemon}>
      {type === "next" ? <IoIosArrowForward /> : <IoIosArrowBack />}
    </button>
  );
}

export default PassButton;
