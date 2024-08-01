/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import Input from "./Input.jsx"

const Login = () => {
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState("")
    const login = async(data) => {

        setError("")
        const Info = {
            "person" : data.person,
            "email" : data.email,
            "password" : data.password,
        }
        setError("")
        try {
            const response = await axios.post("http://localhost:3000/api/v1/login",Info);
            console.log('response',response);
            setError(response.data.message);
        } catch (error) {
            setError(error.response.data.data);
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                    label="Are you Admin / Vendor : "
                    placeholder="Enter your Designation"
                    {...register("person", {
                        required: true,
                    })}
                />
                <Input
                    label="Email: "
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                />
                <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: true,
                    })}
                />
                <button
                type="submit"
                className="w-full  bg-blue-600 text-wrap px-4 py-2 rounded-lg"
                >Sign in</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login