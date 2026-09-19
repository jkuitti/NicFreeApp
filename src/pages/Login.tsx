import { useState } from "react";
import { useLogin } from "../hooks/mutations/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginMutation = useLogin();

  const navigate = useNavigate();

  const handleLogin = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginMutation.mutate(
      {
        email: email,
        password: password,
      },
      {
        onSuccess: () => {
          (setEmail(""), setPassword(""));
          navigate("/home");
        },
      },
    );
  };

  return (
    <div className="flex flex-col items-center bg-[#13181e] w-fit">
      <form
        onSubmit={handleLogin}
        className="flex flex-col m-10 gap-5 justify-center items-center"
      >
        <p className="text-white">Email</p>
        <input
          type="text"
          className="bg-gray-300 text-black p-2 min-w-60"
          onChange={(v) => setEmail(v.target.value)}
        />
        <p className="text-white">Password</p>
        <input
          type="password"
          className="bg-gray-300 text-black p-2 min-w-60"
          onChange={(v) => setPassword(v.target.value)}
        />
        <button
          type="submit"
          className="font-bold mt-5 px-6 py-1 cursor-pointer rounded-lg border bg-[#2c3946] text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
