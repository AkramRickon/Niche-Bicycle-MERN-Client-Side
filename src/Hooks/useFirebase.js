
import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import initializeFirebase from '../Pages/Login/FireBase/firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin,setAdmin]=useState(false);
    const auth = getAuth();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                const newUser = { email, displayName: name }
                setUser(newUser);
                //Send Name to Firebase 
                setUserName(name);
                // Save user to database
                saveUser(email, name);

                setError('');
                history.replace('/');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => { setIsLoading(false) })
    }

    // send name to firebase after creation
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => { })
            .catch(error => {
                setError(error.message);
            })
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = result.user;
                console.log(user);
                setError('');

            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => { setIsLoading(false) })
    }


    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);

        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => { setIsLoading(false) })
    }

    // Save registered user to database 
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://lit-fjord-01579.herokuapp.com/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    //Check Admin

    useEffect(()=>{
        fetch(`https://lit-fjord-01579.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])

    return {
        registerUser,
        loginUser,
        logOut,
        user,
        admin,
        isLoading,
        error
    }
}

export default useFirebase;