import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../api/dataApi";
import type { User } from "../../types/user";

export const useGetUserData = () => {
  return useQuery<User>({
    queryKey: ["user"],
    queryFn: getUserData,
  });
};
