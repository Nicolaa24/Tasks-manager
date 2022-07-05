import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewUser, selectUsers } from "../store/slices/RegisterSlice";
import { usersAPI } from "../API/API.service";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = React.useState({
    email: "",
    login: "",
    password: "",
  });

  const registerHandler = () => {
    dispatch(
      addNewUser({
        id: Date.now(),
        email: user.email,
        login: user.login,
        password: user.password,
      })
    );

    const isUserCreated = usersAPI.getUser(user);

    if (isUserCreated) {
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-between">
      <div className="m-auto ">
        <div className="font-bold text-6xl text-[#6a994e]">Logo</div>
        <p className="py-8 text-2xl max-w-[400px]">
          Create and optimize your tasks and get more free time{" "}
        </p>
      </div>
      <div></div>
      <form
        className="flex flex-col justify-center drop-shadow-lg max-w-[400px] p-8 px-8 rounded-lg bg-slate-50 m-auto"
        onSubmit={(e) => {
          e.preventDefault();
          registerHandler();
        }}
      >
        <div className="text-center mb-4 font-bold text-xl ">
          Create your account
        </div>
        <input
          name="email"
          type="email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          placeholder="Enter Email"
          required
        />
        <input
          name="login"
          type="text"
          value={user.login}
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          placeholder="Enter login"
          required
        />
        <input
          name="password"
          type="password"
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
