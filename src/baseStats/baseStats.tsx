import Stat from "./stat/stat";
import { PokemonStat } from "../types";

type BaseStatsProp = {
  stats: PokemonStat[];
};

const BaseStats = ({ stats }: BaseStatsProp) => {
  return (
    <div>
      <h3>Base Stats</h3>
      {stats.map((currentStat) => (
        <Stat name={currentStat.stat.name} value={currentStat.base_stat} />
      ))}
    </div>
  );
};

export default BaseStats;
