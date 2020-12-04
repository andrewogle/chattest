import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { signup } from '../helpers/auth';
import useSignUpForm from '../customhooks/CustomHooks.js';

export default function Signup() {
    const signup = () => {
        alert(`User Created!
               Name: ${inputs.firstName} ${inputs.lastName}
               Email: ${inputs.email}`);
      }
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);
    return (
        <div>
             <form onSubmit={handleSubmit}>
          <h1>
            Sign Up to
          <Link to="/">Chatty</Link>
          </h1>
          <p>Fill in the form below to create an account.</p>
          <div>
            <input placeholder="Email" name="email" type="email" onChange={handleInputChange} value={inputs.email}></input>
          </div>
          <div>
            <input placeholder="Password" name="password" onChange={handleInputChange} value={inputs.password} type="password"></input>
          </div>
          <div>
            {/* {this.state.error ? <p>{this.state.error}</p> : null} */}
            <button type="submit">Sign up</button>
          </div>
          <hr></hr>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>   
        </div>
    )
}
