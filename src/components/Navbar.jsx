import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex justify-evenly bg-black text-white h-10 items-center'>
    <img src="../assets/react.svg" alt="" />
    <ul className='w-full flex justify-evenly cursor-pointer'>
        <li><Link to="/Home"> Home </Link></li>
        <li><Link to="/Products"> Products </Link></li>
        <li><Link to="/About"> About </Link></li>
        <li><Link to="/Contact"> Contact </Link></li>
    </ul>
    </div>
  )
}

export default Navbar