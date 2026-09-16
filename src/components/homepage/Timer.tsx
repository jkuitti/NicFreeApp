import { useEffect, useState } from "react";
import type { User } from "../../types/user";

type TimerProps = {
  data: User;
};

const Timer = ({ data }: TimerProps) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const diff = now.getTime() - new Date(data.started_at).getTime();

  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const getMessage = (elapsedHours: number) => {
    if (elapsedHours < 4) {
      return "You’ve started. Keep going.";
    }

    if (elapsedHours < 72) {
      return "You’re doing incredible. Keep going.";
    }

    if (elapsedHours < 168) {
      return "You made it through the hardest first days.";
    }

    if (elapsedHours < 672) {
      return "One week down. You’re building momentum.";
    }

    if (elapsedHours < 2160) {
      return "You’re building a nicotine-free life.";
    }

    if (elapsedHours < 8760) {
      return "Three months nicotine-free. That’s incredible.";
    }

    return "One year nicotine-free. What an achievement.";
  };

  const elapsedHours =
    (Date.now() - new Date(data.started_at).getTime()) / (1000 * 60 * 60);

  const format = (value: number) => String(value).padStart(2, "0");

  return (
    <div className="bg-[#13191e] p-3 rounded-xl">
      <div className="flex flex-col items-center gap-2">
        <p className="text-[#00f5d4] text-xs font-bold">
          NICOTINE-FREE JOURNEY
        </p>
        <p className="text-white font-bold text-sm">
          {getMessage(elapsedHours)}
        </p>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-white">{days}</p>
              <p className="text-[#7d8a94] text-xs">DAYS</p>
            </div>
            <p className="text-[#7d8a94] text-lg">:</p>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-white">{format(hours)}</p>
              <p className="text-[#7d8a94] text-xs">HRS</p>
            </div>
            <p className="text-[#7d8a94] text-lg">:</p>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-white">{format(minutes)}</p>
              <p className="text-[#7d8a94] text-xs">MINS</p>
            </div>
            <p className="text-[#7d8a94] text-lg">:</p>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-white">{format(seconds)}</p>
              <p className="text-[#7d8a94] text-xs">SECS</p>
            </div>
          </div>

          <p className="bg-[#1c242b] text-sm rounded-lg p-1 text-[#85939e] self-center">
            Since {new Date(data.started_at).toLocaleDateString("fi-FI")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
