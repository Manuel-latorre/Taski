'use client'
import {useState} from 'react'

import Link from "next/link"
import Image from "next/image"
import taski from './taski.png'
import SignInButton from '../SignInButton/SignInButton'
import  './Navbar.css'





const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='nav'>


        <div>
          <Image className='taski' src={taski} alt="taski"/>
        </div>
        
        <div className={`nav_toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)} >
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className={`nav_items ${isOpen && 'open'}`}>
        <Link className='link' href='/'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
              Tasks
          </Link>
          <Link className='link' href='/new'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
             New task
          </Link> 
        <div>
          <SignInButton/>
        </div>
        </div>

    </nav>
  )
}

export default Navbar