type StatProps = {
  name: string;
  value: number;
};

const Stat = ({ name, value }: StatProps) => {
  return (
    <div className="base-stat-ifo">
      <p>{name.toUpperCase()}:</p>
      <p>{value}</p>
    </div>
  );
};

export default Stat;
