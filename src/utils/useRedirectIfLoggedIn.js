import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useRedirectIfLoggedIn = () => {
  const user = useSelector((state) => state.user); // Assuming user state is stored in Redux

  const Navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // Redirect to the dashboard if user is logged in
      Navigate("/browse");
    }
  }, [user, Navigate]);

  return user; // Return user state for further usage in components
};

export default useRedirectIfLoggedIn;
