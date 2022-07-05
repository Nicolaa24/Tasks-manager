import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../store/slices/LoginSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    dispatch(logIn(user));
  };

  return (
    <div className="flex justify-between">
      <div className="m-auto ">
        <div className="font-bold text-6xl text-[#6a994e]">Logo</div>
        <p className="py-8 text-2xl max-w-[400px]">
          Create and optimize your tasks and get more free time{" "}
        </p>
      </div>
      <form
        className="flex flex-col justify-center drop-shadow-lg max-w-[400px] p-8 px-8 rounded-lg bg-slate-50 m-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className="text-center mb-4 font-bold text-xl ">Login</div>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          placeholder="Enter Email"
          required
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          placeholder="Enter password"
          required
        />
        <button
          type="submit"
          className="rounded-xl bg-[#6a994e] p-2 mt-2 hover:bg-lime-900 hover:text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
