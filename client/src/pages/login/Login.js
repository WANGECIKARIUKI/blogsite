import React from "react"
import "./login.css"
import back from "../../Assets/images/my-account.jpg"
import {Link} from "react-router-dom"


function Login (){
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>Welcome Back!</h1>
            </div>
          </div>

          <form>
            <span>*Username or email address</span>
            <input type='text' required />
            <span>*Password</span>
            <input type='password' required />
            <button className='button'>Log in</button>
            <Link to = '/register'><span style = {{color: '#000'}}>Don't have an account</span> Register Here</Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login