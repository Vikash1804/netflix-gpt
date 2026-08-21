import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { adduser, removeuser } from '../utils/UserSlice';
import { auth } from '../utils/firebase';
import { app_logo, USER_LOGO } from '../utils/Constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
 
  const handleClick = ()=>{
    const auth = getAuth();
  signOut(auth).then(() => {

}).catch((error) => {
 
});

  }

  useEffect(()=>{
     onAuthStateChanged(auth, (user) => {
        if (user) {
        const {email , uid , displayName}= user;
         dispatch(adduser({email : email , uid : uid , displayName : displayName}));
         navigate("/browse")
       } else {

    dispatch(removeuser());
    navigate("/")
    // ...
  }
});
    },[])
  return (
    <div className="  w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src={app_logo}
        alt="Netflix Logo"
        className="w-44"
      />
      {user &&(
      <div className='felx'>
      <img className='w-14' src={USER_LOGO}/>   
      <button  onClick={handleClick}>Sign Out</button>
      </div>)
}
    </div>

  )
}

export default Header