import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from './../firebase.init';

const Login = () => {

    const [userDetais, setUserDetails] = useState('')

    const handelLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            // setUserDetails(res.user)
            console.log(res.user)
        })
        .catch(err => console.error(err));
        
    }

    return (
<div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900 mt-[15vh]">
            <h1 className="text-3xl font-semibold tracking-tight">Sign In</h1>

            <form onSubmit={handelLogin} className="space-y-6">
                <div className="space-y-2 text-sm">
                    <label htmlFor="username" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                        Username
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="username"
                        placeholder="Enter username"
                        name="email"
                        type="email"
                        required
                    />
                </div>
                <div className="space-y-2 text-sm">
                    <label htmlFor="password" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                        Password
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                        id="password"
                        placeholder="Enter password"
                        name="password"
                        type="password"
                        required
                    />
                    <div className="flex justify-end text-xs">
                        <a href="#" className="text-zinc-700 hover:underline dark:text-zinc-300">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>
            </form>
            <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                Don&apos;t have an account?
                <Link to={"/sign-up"} className="font-semibold underline">
                    Signup
                </Link>
            </p>
        </div>
    );
};

export default Login;