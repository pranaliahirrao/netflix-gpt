import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setInSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setInSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="bg-black absolute p-12 w-3/12 my-36 mx-auto right-0 left-0  text-white bg-opacity-80 rounded">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-[#333] text-[#8c8c8c] rounded"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-[#333] text-[#8c8c8c] rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-[#333] text-[#8c8c8c] rounded"
        />
        <button className="p-4 my-6 bg-red-600 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already registered? Sign In now ..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
