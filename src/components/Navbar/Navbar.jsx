import React, { useState } from 'react'
import './Navbar.css'

import { LuSunMedium } from "react-icons/lu";
import { CiDark } from "react-icons/ci";


export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className='navbar'>
            <div className='main-part'>
                <h1>KPJ</h1>
                <div className="pages">
                    <a href="">Home</a>
                    <a href="">Blog</a>
                    <a href="">About</a>
                    <a href="">Newsletter</a>
                </div>
            </div>


            {darkMode ? (
                <button onClick={toggleDarkMode} className='btn'>
                    <LuSunMedium size={25} className='icon'></LuSunMedium>

                </button>
            )
                : (
                    <button onClick={toggleDarkMode} className='btn'>
                        <CiDark size={25} className='icon'></CiDark>

                    </button>
                )}


        </div>
    )
}
