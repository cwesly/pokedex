import { IoIosArrowBack } from "react-icons/io";

type BackButtonProps = {
  fetchPokemon: (id?: number) => Promise<void>;
  id: number;
};

function BackButton({ fetchPokemon, id }: BackButtonProps) {
  return (
    <button onClick={() => fetchPokemon(id === 1 ? 1 : id - 1)}>
      <IoIosArrowBack />
    </button>
  );
}

export default BackButton;
