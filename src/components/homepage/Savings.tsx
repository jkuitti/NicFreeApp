import type { User } from "../../types/user";
import { CircleEuro, Can, ShieldPlus } from "lucide-react";

type SavingsProps = {
  data: User;
};

const Savings = ({ data }: SavingsProps) => {
  // Price of one pouch
  const pricePerPouch = data.price_per_can / data.pouches_per_can;

  // Normal cost per day
  const dailyCost = data.daily_pouches * pricePerPouch;

  // Time passed since quitting, in milliseconds
  const elapsedMilliseconds = Date.now() - new Date(data.started_at).getTime();

  // Convert milliseconds to days
  const elapsedDays = elapsedMilliseconds / (1000 * 60 * 60 * 24);

  // Calculate savings
  const savings = elapsedDays * dailyCost;

  // Pouches you would have used
  const pouchesAvoided = elapsedDays * data.daily_pouches;

  // Cans you would have used
  const cansAvoided = pouchesAvoided / data.pouches_per_can;

  return (
    <div className="flex mt-5 w-full gap-2">
      <div className="rounded-xl bg-[#13191e] p-2 flex-1 flex flex-col items-center">
        <CircleEuro color="#00f5d4" />
        <p className="text-white text-lg font-bold">€{savings.toFixed(2)}</p>
        <h2 className="text-[#545f67] text-xs">Saved</h2>
      </div>
      <div className="rounded-xl bg-[#13191e] p-2 flex-1 flex flex-col items-center">
        <ShieldPlus color="#00b4d8" />

        <p className="text-white text-lg font-bold">
          {Math.floor(pouchesAvoided)}
        </p>
        <h2 className="text-[#545f67] text-xs">Pouches avoided</h2>
      </div>
      <div className="rounded-xl bg-[#13191e] p-2 flex-1 flex flex-col items-center">
        <Can color="#f4a261" />

        <p className="text-white text-lg font-bold">{cansAvoided.toFixed(1)}</p>
        <h2 className="text-[#545f67] text-xs">Cans avoided</h2>
      </div>
    </div>
  );
};

export default Savings;
