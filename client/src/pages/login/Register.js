import React from "react"
import "./login.css"
import back from "../../Assets/images/my-account.jpg"
import {Link} from "react-router-dom"
function Register (){
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>Please Register to Proceed!</h1>
            </div>
          </div>

          <form>
            <span>*Email address </span>
            <input type='text' required />
            <span>*Username </span>
            <input type='text' required />
            <span>*Password </span>
            <input type='password' required />
            <span>*Confirm Password </span>
            <input type='password' required />
            <button className='button'>Register</button>
            <Link to = '/login'><span style = {{color: '#000'}}> Have an account</span>Login</Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register