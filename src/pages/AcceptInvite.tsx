import { supabase } from "../db/supabase";
import { useState } from "react";
import { useCurrentUser } from "../hooks/queries/useCurrentUser";

const AcceptInvite = () => {
  const [password, setPassword] = useState("");

  const { data, error } = useCurrentUser();
  if (error) {
    throw error;
  }
  console.log(data?.email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      console.error(error);
      return;
    }

    // Navigate to your app
  };

  return (
    <form onSubmit={handleSubmit} className="text-white">
      <h1>Welcome to NicFree</h1>

      <p>Create a password to finish setting up your account.</p>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Create account</button>
    </form>
  );
};

export default AcceptInvite;
