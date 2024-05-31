import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./passButton.css";
import { TypeButton } from "../types";

type PassButtonProps = {
  fetchPokemon: (id?: number) => Promise<void>;
  id: number;
  type: TypeButton;
};

function PassButton({ fetchPokemon, id, type }: PassButtonProps) {
  const changePokemon = () => {
    const newPokemon =
      type === TypeButton.Next ? id + 1 : id === 1 ? 1 : id - 1;
    fetchPokemon(newPokemon);
  };
  return (
    <button onClick={changePokemon}>
      {type === TypeButton.Next ? <IoIosArrowForward /> : <IoIosArrowBack />}
    </button>
  );
}

export default PassButton;
