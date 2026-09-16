import { supabase } from "../db/supabase";
import type { User } from "../types/user";
import type { NewUser } from "../types/user";

const getUserData = async (): Promise<User> => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
};

const newUser = async (newUser: NewUser): Promise<void> => {
  const { error } = await supabase.from("users").insert(newUser);

  if (error) {
    throw error;
  }
};

export { getUserData, newUser };
