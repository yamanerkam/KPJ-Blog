import React, { useState, useContext, useEffect } from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom';
import { LuSunMedium } from "react-icons/lu";
import { CiDark } from "react-icons/ci";
import { ThemeContext } from '../../Contexts/ThemeContext/ThemeContext';

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    useEffect(() => {
        document.body.classList.toggle('light-theme', theme === 'light');
        document.body.classList.toggle('dark-theme', theme === 'dark');
    }, [theme]);
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
                        <Link to={'/contact-me'}>Contact Me</Link>
                    </a>

                </div>
            </div>


            <button onClick={toggleTheme} className='btn'>
                {theme === 'light' ? (
                    <CiDark color='#3b7aa2' size={25} className='icon'></CiDark>
                ) : (
                    <LuSunMedium color='white' size={25} className='icon'></LuSunMedium>
                )}
            </button>


        </div>
    )
}
