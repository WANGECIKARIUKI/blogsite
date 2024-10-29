import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import {nav} from '../../Assets/data/data'
import logo from '../../Assets/images/logo.svg'
import User from './User'

function Header() {

    //add a scroll event listener

    window.addEventListener('scroll', function() {
      const header = this.document.querySelector('.header');
      header.classList.toggle('active', this.window.scrollY >= 100)
    });
  return (
    <div>
        <header className = "header">
            <div className = "scontainer flex">
                <div className = 'logo'>
                    <img src = {logo} alt = "logo" width = "100px" />
                </div>
                <nav>
                    <ul>{nav.map((link) => (
                        <li key = {link.id}>
                            <Link to = {link.url}>{link.text}</Link>
                        </li>
                    ))}</ul>
                </nav>
                <div className = "account flexCenter">
                    <User />
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header