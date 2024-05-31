import { IoIosArrowForward } from "react-icons/io";
type NextButtonProps = {
  fetchPokemon: (id?: number) => Promise<void>;
  id: number;
};

function NextButton({ fetchPokemon, id }: NextButtonProps) {
  return (
    <button onClick={() => fetchPokemon(id + 1)}>
      <IoIosArrowForward />
    </button>
  );
}

export default NextButton;
