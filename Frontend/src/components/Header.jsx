/* eslint-disable no-unused-vars */
import React ,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoutBtn from './LogoutBtn.jsx'
 

const Header = () => {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    let personInfo = useSelector((state) => state.auth.userData);
    const [info  ,setInfo] =useState(null);
    console.log('personInfo',personInfo)
    useEffect(() => {
        setInfo(personInfo?.data?.data);
    }, [authStatus,personInfo]);
    
    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active : true,
            person:true

        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
            person:true
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
            person:true
        },
        {
            name : "Create Tender",
            slug : "/create-tender",
            person : (info == "Admin"),
            active : authStatus,
            // person : true
        },
        {
            name : "All Tender Admin",
            slug : "/all-tender",
            person : (info == "Admin"),
            active : authStatus,
            //  person : true
        },
        {
            name : "Bid Tender",
            slug : "/create-tender",
            person : (info == "Vendor"),
            active : authStatus,
            // person : true
        },
        {
            name : "All Tender vendor",
            slug : "/all-tender",
            person : (info == "Vendor"),
            active : authStatus,
            // person : true
        } 
        
        
    ]
  return (
    <header className='py-3 shadow bg-gray-500  sticky  top-0 z-50 '>
        <div className="w-full max-w-7xl mx-auto  px-4 " >
            <nav className='flex '>
                <ul className='flex ml-auto'>
                    {navItems.map((item) =>
                    (
                    item.active && item.person ? (<li key={item.name}>
                        <button
                        onClick={() => navigate(item.slug)}
                        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                        >{item.name}</button>
                    </li>): null
                    ) 
                    )}
                    {authStatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )} 
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header