import { useState } from "react";
import Header from "./header/header";

function App() {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <Header
        id={1}
        pokemonName="Bulbasaur"
        search={search}
        setSearch={setSearch}
      />
    </>
  );
}

export default App;
