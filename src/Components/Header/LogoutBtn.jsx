import React from "react";
import { useDispatch } from "react-redux";
import authservice from "../../appWrite/auth";
import { logout } from "../../Feature/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    authservice
      .logout()
      .then((res) => {
        dispatch(logout(res));
      })
      .catch((err) => console.error(err));
  };
  return (
    <button
      className="m-3 flex items-center rounded-md p-3  text-sm font-semibold "
      onClick={logOutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
