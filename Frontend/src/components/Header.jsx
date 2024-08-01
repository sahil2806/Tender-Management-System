/* eslint-disable no-unused-vars */
import React from 'react'
import {useNavigate}  from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    const navItems = [
        {
            name: 'Home',
            slug: "/",
        },
        {
            name: "Login",
            slug: "/login"
        },
        {
            name: "Signup",
            slug: "/signup",
        },
        
    ]
  return (
    <header className='py-3 shadow bg-gray-500  sticky  top-0 z-50 '>
        <div className="w-full max-w-7xl mx-auto  px-4 " >
            <nav className='flex '>
                <ul className='flex ml-auto'>
                    {navItems.map((item) =>
                    (
                    <li key={item.name}>
                        <button
                        onClick={() => navigate(item.slug)}
                        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                        >{item.name}</button>
                    </li>
                    ) 
                    )}
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header