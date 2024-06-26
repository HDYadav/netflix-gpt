import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'; 
import { BG_IMG, LOGIN_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';  
import useRedirectIfLoggedIn from "../utils/useRedirectIfLoggedIn";


const Login = () => {
  useRedirectIfLoggedIn();

    const dispatch = useDispatch(); 
    const [isInSingFrom, setisInSingFrom] = useState(true);
    const Navigate = useNavigate();

    
    const email = useRef(null);
    const password = useRef(null);

    const [errorMessage, setErrorMessage] = useState(null);
 
 

  const handleButtomClick = async () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
    if (message) return; // if validation failed return error

    const formData = {
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      dispatch(addUser(data?.data));
    //  localStorage.setItem("accessToken", data?.data.token);
      Navigate("/browse");
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };


    const toggleSignForm = () => {
        setisInSingFrom(!isInSingFrom);
    } 

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMG} alt="background"></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-3 ">
          {isInSingFrom ? "Sign in" : "Sign up"}
        </h1>
        {!isInSingFrom && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        {!isInSingFrom && (
          <input
            type="text"
            name="mobile"
            placeholder="Mobile No"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          ref={email}
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <p className="text-red-700">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtomClick}
        >
          {isInSingFrom ? "Sign in" : "Sign up"}
        </button>
        <h1 className="p-4 cursor-pointer" onClick={toggleSignForm}>
          {isInSingFrom
            ? "Alerady registed Sign in"
            : "New to Neflix?  Sign up"}
        </h1>
      </form>
    </div>
  );
}

export default Login