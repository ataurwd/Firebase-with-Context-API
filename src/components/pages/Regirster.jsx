import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../Context/Provider';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase.init';

const Regirster = () => {

    const {createUser} = useContext(FormContext)

    const handelRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        createUser(email, password)
       .then((res) => {
        console.log(res.user)
        const profile = {
            displayName: name,
        }
        updateProfile(auth.currentUser, profile)
        .then(() => {
            
        })
       })
       .catch(err => console.error(err));
    }
    return (
        <div className="max-w-md lg:mx-auto my-6 space-y-6 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            <div className="flex flex-col space-y-1">
                <h3 className="text-3xl font-bold tracking-tight">Sign Up</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Please fill in the form to create an account.</p>
            </div>
            <div>
                <form onSubmit={handelRegister} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                id="first_name"
                                placeholder="Enter first name"
                                name="name"
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
                    <div className="space-y-2 text-sm">
                        <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="password_">
                            Password
                        </label>
                        <input 
                            className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                            id="password_"
                            placeholder="password"
                            name="password"
                            type="password"
                        />
                    </div>
                    <p className="text-[14px] text-gray-400">
                            Already have an account ? <Link to={'/login'} className="text-blue-400">Login Now</Link>
                        </p>
                    <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Regirster;