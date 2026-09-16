import type { User } from "../../types/user";
import { CircleCheck, CircleDot, Circle } from "lucide-react";

const milestoneList = [
  {
    hours: 4,
    title: "4 Hours",
    description:
      "Cravings and other nicotine withdrawal symptoms can start within hours.",
  },
  {
    hours: 72,
    title: "3 days",
    description:
      "Withdrawal symptoms are often strongest during the first few days.",
  },
  {
    hours: 168,
    title: "1 week",
    description: "You have completed your first week without nicotine.",
  },
  {
    hours: 672,
    title: "4 weeks",
    description:
      "Nicotine withdrawal symptoms have usually eased considerably by this point.",
  },
  {
    hours: 2160,
    title: "3 months",
    description:
      "You have gone three months without nicotine. Cravings are often less frequent as old habits and routines fade.",
  },
  {
    hours: 8760,
    title: "1 year",
    description:
      "One year without nicotine — a major milestone in breaking your nicotine dependence.",
  },
];

type MilestoneProps = {
  data: User;
};

const Milestones = ({ data }: MilestoneProps) => {
  const elapsedHours =
    (Date.now() - new Date(data.started_at).getTime()) / (1000 * 60 * 60);

  const nextMilestoneIndex = milestoneList.findIndex(
    (milestone) => elapsedHours < milestone.hours,
  );

  const getSymbol = (
    index: number,
    hours: number,
    title: string,
    desc: string,
  ) => {
    if (elapsedHours >= hours) {
      return (
        <div className="flex gap-2">
          <CircleCheck size={30} className="shrink-0" color="#05b9a2" />
          <div>
            <p className="text-[#05b9a2] font-bold">{title}</p>
            <p className="text-white text-xs">{desc}</p>
          </div>
        </div>
      );
    }

    if (index === nextMilestoneIndex) {
      return (
        <div className="flex gap-2">
          <CircleDot size={30} className="shrink-0" color="#02a4c5" />
          <div>
            <p className="text-[#02a4c5] font-bold">{title}</p>
            <p className="text-white text-xs">{desc}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="flex gap-2 ">
        <Circle size={30} className="shrink-0" color="#3d4a52" />
        <div>
          <p className="text-[#3d4a52]">{title}</p>
          <p className="text-[#3c454b] text-xs">{desc}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#13191e] mt-5 p-2 rounded-xl text-sm font-bold flex flex-col gap-5">
      <h2 className="text-white">Health timeline</h2>
      {milestoneList.map((milestone, index) => (
        <div key={milestone.hours} className="flex flex-col">
          <div className="flex gap-3">
            {elapsedHours >= milestone.hours}
            {getSymbol(
              index,
              milestone.hours,
              milestone.title,
              milestone.description,
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Milestones;
