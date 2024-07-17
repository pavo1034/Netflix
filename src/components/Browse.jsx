import React from 'react'
import Header from './Header'
import {useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';

const Browse = () => {
  const name =useSelector((store)=> store.user);
  const navigate =useNavigate()
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      console.log("signedout")
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <div className=' flex justify-between'>
      <span><Header/></span>
     <span className='flex items-center'>
     {/* <p className='text-bold mr-5'>{name?.email}</p> */}
     {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm82GdfDmESFQdfzulsrfOv8d22eyxyfj22JeT6jRk7ckZ_ipZwfjCOB8lz2hmezQCXFw&usqp=CAU" alt="" className='w-14 h-12'/> */}
     <img src={name?.photoURL} alt="" className='w-10 h-10 rounded-full'/>
     <button className='text-bold mr-2 hover:bg-gray-400 hover:text-white rounded h-6 px-1'onClick={handleSignOut} >Sign Out</button>
     </span>
    </div>
  )
}

export default Browse