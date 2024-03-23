import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isInSingFrom, setisInSingFrom] = useState(true);


    const toggleSignForm = () => {
        setisInSingFrom(!isInSingFrom);
    }
    


  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login"
        ></img>
      </div>

      <form
        action=""
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-3 ">
          {isInSingFrom ? "Sign in" : "Sign up"}
        </h1>
        {!isInSingFrom && (
          <input
            type="text"
            name="name"
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
          name="email"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          name="passsword"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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