import React from 'react'
import logo from '../Images/logo.svg'
import { NavLink } from 'react-router-dom'
import PrimaryBtn from './PrimaryBtn'
import { RiMenu3Fill } from "react-icons/ri";

function Navbar() {
  return (
    <div>
      <div className='flex justify-between  items-center flex-wrap py-7'>
        <img className='md:h-8 h-6' src={logo} alt="" />

        <ul className=' hidden lg:flex space-x-6 text-[18px] font-light text-white/80 '>
            <li className='hover:text-white'><NavLink to="/">Home</NavLink></li>
            <li className='hover:text-white'><NavLink to="/about">About</NavLink></li>
            <li className='hover:text-white'><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <div className='hidden lg:flex space-x-4 text-[0.9rem]'>
            <PrimaryBtn name="Login" />
            <PrimaryBtn name="Sign Up"/>
        </div>
        <div className='visible lg:hidden'>
            <RiMenu3Fill/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
