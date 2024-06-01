type StatProps = {
  name: string;
  value: number;
};

const Stat = ({ name, value }: StatProps) => {
  return (
    <div>
      <p>{name.toUpperCase()}:</p>
      <p>{value}</p>
    </div>
  );
};

export default Stat;
