import React from 'react'
import { useState,useRef } from 'react'
import { checkValidation, } from '../utils/Validate'
import { createUserWithEmailAndPassword ,  getAuth,  signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { adduser } from '../utils/UserSlice';
import { useDispatch } from 'react-redux';

const Form = () => {

         const navigate = useNavigate();

        const [isSignedIn, setIsSignedIn] = useState(true);
        const [errorMessage, setErrorMessage] = useState(null);

        const email = useRef();
        const password = useRef();
        const name = useRef();

        const handlebuttonClick = (e)=>{
            e.preventDefault();
            const message = checkValidation(email.current.value, password.current.value, isSignedIn ? null : name.current.value);
            setErrorMessage(message);

            if(message===null){
                if(!isSignedIn){
                  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                  .then((userCredential) => {
                     const user = userCredential.user;
                     const auth = getAuth();
updateProfile(user, {
  displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
 
  navigate("/browse")
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});

                     navigate("/browse");
                     console.log(user);
    // ...
  })
              .catch((error) => {
                    const errorCode = error.code;
                  const errorMessage = error.message;
    // ..
              });
                }
                else{
                  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse")
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
                }

        }
      }
      

    const Istoogled = () => {
        setIsSignedIn(!isSignedIn);
    }
  return (
    <div>
       <form className=" w-3/12 p-12 my-36 mx-auto right-0 left-0 absolute bg-black bg-opacity-80 rounded "
        onSubmit={handlebuttonClick}>
      <h1 className="text-3xl font-bold mb-4 text-white">
        {isSignedIn ? "Sign In" : "Sign Up"}
      </h1>
       {!isSignedIn &&
      <input
        ref={name}
          type="text"
          placeholder="Name"
          className="p-4 my-4 border rounded w-full text-black"
        />
       }
        <input 
        ref={email}
          type="email"
          placeholder="Email"
          className="p-4 my-4 border rounded w-full text-black"
        />
        <input
          ref={password}    
          type="password"
          placeholder="Password"
          className="p-4 my-4 border rounded w-full text-black"
        />

        <p className="text-red-600 font-bold text-sm">
            {errorMessage}
        </p>
        <button className="p-4 my-6 bg-red-600 text-white rounded w-full"
        >
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p>
            {isSignedIn && "New to Netflix?"} <span className="text-blue-600 cursor-pointer"
            onClick={Istoogled}>{isSignedIn ? "Sign up now" : "Already have an account?"}</span>
        </p>
      </form>
    </div>
  )
}

export default Form;
