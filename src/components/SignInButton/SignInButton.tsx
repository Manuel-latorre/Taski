'use client'

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import style from './SignInButton.module.css'

const SignInButton = () => {

    const {data: session} = useSession()

    
    
    if(session && session.user) {
        const imageUrl = session.user.image ?? undefined;
        return (
            <div className={style.signOut}>
                <button className={style.btnSignOut} onClick={() => signOut({callbackUrl: '/'})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                    Sign out
                </button>
                    <img className={style.imgUser} src={imageUrl} alt="image" style={{width:40, height:40, borderRadius: 100}}/>
            </div>
        )
    }

  return (
    <div>
        <button  className={style.btnSignIn} onClick={() => signIn()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign in
        </button> 
    </div>
  )
}

export default SignInButton
