// src/Tags.tsx
import React, { useEffect, useState } from "react";

interface PokemonType {
  name: string;
}

const Tags: React.FC = () => {
  const [types, setTypes] = useState<PokemonType[]>([]);

  const fetchTypes = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/type");
    const data = await response.json();
    setTypes(data.results);
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <div>
      <ul>
        {types.map((type) => (
          <p key={type.name}>{type.name}</p>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
