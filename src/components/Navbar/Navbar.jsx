import React, { useState } from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom';
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

                    <a>
                        <Link to={'/'}>Home</Link>
                    </a>

                    <a>
                        <Link to={'/blog'}>Blog</Link>
                    </a>

                    <a>
                        <Link to={'/about'}>About</Link>
                    </a>

                    <a>
                        <Link to={'/Newsletter'}>Newsletter</Link>
                    </a>

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
