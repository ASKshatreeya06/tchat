import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from '@firebase/util';
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';
function Register() {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];


        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            //file uploaad function


            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);


            uploadTask.on(
                (error) => {
                    setErr(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,

                        });

                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");

                    });
                }
            );

        } catch (err) {
            setErr(true);
        }



    }
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Tchat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='displayName' placeholder='Display name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='password' />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src="https://static.thenounproject.com/png/1231023-200.png" alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button type="submit">Sign up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You have an account? <Link to="/login"> login </Link></p>
            </div>

        </div>
    )
}

export default Register
