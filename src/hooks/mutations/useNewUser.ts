import { useMutation } from "@tanstack/react-query";
import { newUser } from "../../api/dataApi";

export const useNewUser = () => {
  return useMutation({
    mutationFn: newUser,
  });
};
