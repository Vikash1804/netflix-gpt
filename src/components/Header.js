import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const user = useSelector(store => store.user);

console.log("HEADER USER:", user);
  const naviagte = useNavigate();
  const handleClick = ()=>{
    const auth = getAuth();
  signOut(auth).then(() => {
    naviagte("/");

  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className="  w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="w-44"
      />
      {user &&(
      <div className='felx'>
      <img className='w-14' src='https://imgs.search.brave.com/T9PZOvRozceMFZ0S8Ohs4TUe-si7wgdJUEOZKYnKEqM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMTE4Mi9Q/TkcvOTYvMTQ5MDEy/OTMyOS1yb3VuZGVk/MzhfODIyMDMucG5n'/>   
      <button  onClick={handleClick}>Sign Out</button>
      </div>)
}
    </div>

  )
}

export default Header