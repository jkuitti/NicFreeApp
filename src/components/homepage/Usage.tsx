const Usage = ({
  daily_pouches,
  pouches_per_can,
}: {
  daily_pouches: number;
  pouches_per_can: number;
}) => {
  return (
    <div>
      <p>{daily_pouches} </p>
      <p>{pouches_per_can}</p>
    </div>
  );
};

export default Usage;
