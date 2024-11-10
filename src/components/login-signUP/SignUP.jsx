import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";


const SignUP = () => {
    const [sucess, setSucess] = useState(false)
    const [error, setError] = useState(null)
    const [password, setPassword] = useState(false)

    const handelSignUp = (e) => {
        e.preventDefault();
        const firstName = e.target.first_name.value;
        const lastName = e.target.last_name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(firstName, lastName, email, password);


        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user.user)

            const profile = {
                displayName: `${firstName} ${lastName}`,
            }

            updateProfile(auth, profile)
            .then(() => {
                console.log('User profile updated successfully!')
                setSucess(true)
                setError('')
                return
            })
            setSucess(true)
            setError('')
            return
        })
        .catch((err) => {
            setError(err.message)
            setSucess(false)
            return
        });
    }
    return (
<div className="max-w-md mx-auto mt-[8vh] space-y-6 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            <div className="flex flex-col space-y-1">
                <h3 className="text-3xl font-bold tracking-tight">Sign Up</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Please fill in the form to create an account.</p>
            </div>
            <div>
                <form className="space-y-6" onSubmit={handelSignUp}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                First Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                id="first_name"
                                placeholder="Enter first name"
                                name="first_name"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="last_name">
                                Last Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                id="last_name"
                                placeholder="Enter last name"
                                name="last_name"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                            id="email"
                            placeholder="Enter your email"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2 text-sm relative">
                        <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="password_">
                            Password
                        </label>
                        <input 
                            className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                            id="password_"
                            placeholder="password"
                            name="password"
                            type={password ? 'text' : "password"}
                        />
                        <p className='absolute top-8 right-4 cursor-pointer' onClick={() => setPassword(!password)}>
                            {
                                password ? <FaRegEyeSlash size={18}/> : <FaRegEye size={18}/>
                            }
                        </p>
                    </div>
                    {
                        error && 
                        <p className="text-red-500 text-sm">{error}</p>
                    }
                    {
                        sucess && 
                        <p className="text-green-500 text-sm">Registration Successful</p>
                    }
                    <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>
                </form>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                Don&apos;t have an account?
                <Link to={"/"} className="font-semibold underline">
                    Login Now
                </Link>
            </p>
            </div>
        </div>
    );
};

export default SignUP;