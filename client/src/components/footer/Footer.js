import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

function Footer() {
  return (
    <div>
        <footer className = "boxItems">
            <div className = "container flex">
                <p>Blogsite</p>
                <div className = "socials">
                    <BsFacebook className = "icon" />
                    <RiInstagramFill className = "icon" />
                    <AiFillTwitterCircle className = "icon" />
                    <AiFillLinkedin className = "icon" />
                </div>
            </div>

        </footer>
    </div>
  )
}

export default Footer