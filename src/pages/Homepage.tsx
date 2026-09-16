import { useGetUserData } from "../hooks/queries/useGetUserData";
import { useNavigate } from "react-router-dom";
import Timer from "../components/homepage/Timer";
import { Leaf } from "lucide-react";
import Savings from "../components/homepage/Savings";
import Milestones from "../components/homepage/Milestones";

const Homepage = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetUserData();
  if (error) {
    return <div>Error loading data</div>;
  }
  if (isLoading) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      {data ? (
        <div>
          <div className="flex gap-1 p-5">
            <Leaf color="#00f5d4" />
            <p className="text-white font-bold">NicFree</p>
          </div>

          <Timer data={data} />
          <Savings data={data} />
          <Milestones data={data} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div
            className="bg-black text-white p-5 mt-50 rounded"
            onClick={() => navigate("/startpage")}
          >
            Start Nicotine Free Life
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
