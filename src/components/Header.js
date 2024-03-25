import React from 'react';
import { LOGOUT_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import useRequireAuth from "../utils/useRequireAuth";
 

const Header = () => {

  const Navigate = useNavigate();
  const user = useRequireAuth();
 //  const user = useSelector((state) => state.user);
   //console.log(user);

  const dispatch = useDispatch(); 
  
  const handleSignOut = async () => {
   const Authtoken = user.token;
  try {
    const response = await fetch(LOGOUT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Authtoken}`, // Assuming a Bearer token
      },
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }
     dispatch(removeUser(null));  
     
    Navigate("/");
  } catch (error) {
    console.error("Logout failed:", error.message);
 
  }
};

 

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>

      {user && <p>Hi, {user.name}</p>}

      {user && (
        <button onClick={handleSignOut} className="font-bold text-white">
          Sign out
        </button>
      )}
    </div>
  );
}

export default Header