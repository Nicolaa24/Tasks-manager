import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../store/slices/LoginSlice";
import { getCurrentUser } from "../store/slices/LoginSlice";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector(getCurrentUser);

  const exitHandler = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <span className="font-bold text-lg mx-3">Home</span>
        <div className="flex items-start">
          {currentUser?.email && (
            <div className="px-2 text-lg">
              Current logged user: {currentUser.email}
            </div>
          )}
          <div>
            <button
              onClick={exitHandler}
              className="rounded-xl bg-[#6a994e] px-5 hover:bg-lime-900 hover:text-white mx-3"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
