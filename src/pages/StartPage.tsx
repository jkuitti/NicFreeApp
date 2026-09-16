import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/queries/useCurrentUser";
import { useNewUser } from "../hooks/mutations/useNewUser";

const StartPage = () => {
  const [pouchesDay, setPouchesDay] = useState<string>("");
  const [pouchesCan, setPouchesCan] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const newUserMutation = useNewUser();

  const navigate = useNavigate();

  const { data, error } = useCurrentUser();
  if (error) {
    throw error;
  }
  if (!data) {
    return <div>Authenticating</div>;
  }

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    newUserMutation.mutate(
      {
        started_at: new Date(),
        daily_pouches: Number(pouchesDay),
        price_per_can: Number(price),
        pouches_per_can: Number(pouchesCan),
        user_id: data.id,
      },
      {
        onSuccess: () => {
          setPouchesCan("");
          setPouchesDay("");
          setPrice("");
          navigate("/home");
        },
      },
    );
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <p className="mt-10">GZ</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3"
      >
        <p>Pouches / Day</p>
        <input
          type="text"
          className="bg-white max-w-20"
          value={pouchesDay}
          onChange={(e) => setPouchesDay(e.target.value)}
        />
        <p>Pouches / Can</p>
        <input
          type="text"
          className="bg-white max-w-20"
          value={pouchesCan}
          onChange={(e) => setPouchesCan(e.target.value)}
        />
        <p>Price / Can</p>
        <input
          type="text"
          className="bg-white max-w-20"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          type="submit"
          className="border rounded-lg text-white bg-black p-3 font-bold mt-2"
        >
          Start!
        </button>
      </form>
      <button
        className="border rounded-lg text-white bg-red-300 p-3 font-bold mt-2"
        onClick={() => navigate("/home")}
      >
        Not yet, I'm looser
      </button>
    </div>
  );
};

export default StartPage;
