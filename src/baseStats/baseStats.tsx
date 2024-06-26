import Stat from "./stat/stat";
import { PokemonStat } from "../types";
import "./baseStats.css";

type BaseStatsProp = {
  stats: PokemonStat[];
  type: string;
};

const BaseStats = ({ stats , type }: BaseStatsProp) => {
  return (
    <div className="base-stats">
      <h3 style={{ color: `var(--${type}-color)` }}>Base Stats</h3>
      {stats.map((currentStat) => (
        <Stat
          name={currentStat.stat.name}
          value={currentStat.base_stat}
          key={currentStat.stat.name}
        />
      ))}
    </div>
  );
};

export default BaseStats;
