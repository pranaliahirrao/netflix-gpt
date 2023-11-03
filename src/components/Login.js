import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";




const Login = () => {
  const [isSignInForm, setInSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setInSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data

    // console.log(email.current.value);
    // console.log(password.current.value);
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMsg(msg);
    // console.log(msg);

    // when Validation error is there, return that
    if (msg) return;

    // if no error msg : all mail, pswd ok, go ahead with resp
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR 
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser ;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute p-12 w-3/12 my-36 mx-auto right-0 left-0  text-white bg-opacity-80 rounded"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-[#333] text-[#8c8c8c] rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-[#333] text-[#8c8c8c] rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-[#333] text-[#8c8c8c] rounded"
        />
        <p className="text-red-600 font-bold text-xl py-2">{errorMsg}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full"
          onClick={handleButtonClick}
        >
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
