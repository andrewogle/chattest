import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";
import useSignUpForm from '../customhooks/CustomHooks.js';



export default function Login() {
    const signup = () => {
        alert(`User Created!
               Name: ${inputs.firstName} ${inputs.lastName}
               Email: ${inputs.email}`);
      }
      const googleSignIn = useEffect(()=>{
     (  async ()=> {
        try {
          await signInWithGoogle();
        } catch (error) {
          this.setState({ error: error.message });
        }
      })()
    })
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm();
    return (
        <div>
            <form
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h1>
            Login to
            <Link to="/">
              Chatty
            </Link>
          </h1>
          <p>
            Fill in the form below to login to your account.
          </p>
          <div>
            <input
              placeholder="Email"
              name="email"
              type="email"
              onChange={handleInputChange}
              value={inputs.email}
            />
          </div>
          <div>
            <input
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={inputs.password}
              type="password"
            />
          </div>
          <div>
           
            <button type="submit">Login</button>
          </div>
          <hr />
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          <p>Or</p>
            <button onClick={googleSignIn} type="button">
                Sign up with Google
            </button>
        </form>
        </div>
    )
}