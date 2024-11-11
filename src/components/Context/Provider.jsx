import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './../../firebase.init';

export const FormContext = createContext(null)

const Provider = ({children}) => {

    const [user, setUser] = useState(null)
    //create uer
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign out user
    const singOutUser = () => {
        return signOut(auth)
    }

    onAuthStateChanged(auth, currentUser => {
        if (currentUser) {
            // User is signed in, do something here
            console.log(currentUser)
            setUser(currentUser)
        } else {
            // User is signed out
            console.log("No user signed in")
        }
    })

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, currentUser => {
            console.log('current user is unsubscribed', currentUser)
            setUser(currentUser)
        })

        return () => {
            unSubscribed()
        }

    }, [])


    const info = {
       createUser,
       signInUser,
       user,
       singOutUser,
    }

    return (
        <FormContext.Provider value={info}>
            {children}
        </FormContext.Provider>
    );
};

export default Provider;