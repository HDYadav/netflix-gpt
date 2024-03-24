import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useRequireAuth = () => {
  const user = useSelector((state) => state.user); // Assuming user state is stored in Redux

  const Navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Redirect to the login page if user is not logged in
      Navigate("/");
    }
  }, [user, Navigate]);

  return user; // Return user state for further usage in components
};

export default useRequireAuth;
