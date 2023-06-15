import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './SignIn.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required('Email is required').email('Email is not valid'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
}).required();

function SignIn({isOpen, handleClose, handleSignUp}) {

  const { register, handleSubmit, formState:{ errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });
  
  const onSubmit = data => alert(`email: ${data.email}, password: ${data.password}`);
  let [passwordType, setPasswordType] = useState('password');

  const handleShowPass = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
    } else setPasswordType('password') 
  }

  const mystyle = {
    color: "red",
    fontSize: '12px',
    fontWeight: '400',
  };
  
  return (
    <>
      { isOpen && 
      <div className="modal" id="modal">
        <div className={'login'}>
          <div className="login-head">
            <p className="title">Welcome Back</p>
            <span className="title-2">Sign in with your email and password.</span>
            <button className="btn-close" onClick={handleClose}>
              <img src="assets/icon/close.svg" alt="menu-close"/>
            </button>
          </div>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label" htmlFor="email">Email / Username</label>
              <Input
                type="email"
                name="email"
                register={register}
                required
                className={`form-input ${errors.email ? 'is-active' : ''}`}
                placeholder="ex: johndoe@email.com"
                noValidate
              />
            </div>
            { errors.email &&<div className='error-message'></div>}
            <span style={mystyle}>
              {errors.email?.message}
            </span>
            <div className="form-control">
              <label className="label" htmlFor="password">Password</label>
              <div className="input-wrapper">
                <Input
                  type={passwordType}
                  name="password"
                  register={register}
                  // onKeyUp={handleKeyUp}
                  className={`form-input ${errors.password ? 'is-active' : ''}`}
                  placeholder="ex: ******"
                />
                <button type="button" className="img-button" onClick={handleShowPass}>
                  <img className="img-form" src="assets/icon/eye-off.svg" alt="icon-eye"/>
                </button>
              </div>
              { errors.password &&<div className='error-message'></div>}
              <span style={mystyle}>
                {errors.password?.message}
              </span>
              {/* <span className="email-validation"> */}
              {/* </span> */}
              <Link to="#" className="forgot">Forgot Password</Link>
            </div>
            <div className="login-footer">
              <div className='btn-login'>
                <Button 
                  type="submit"
                  className={`btn btn__gold ${isValid === false ? 'is-disable' : ''}`}
                  disabled={!isValid}
                >
                  Login
                </Button>
              </div>
              <span className="text">New Customer? <Link to="#" onClick={handleSignUp} className="link-signup">Sign Up</Link></span>
            </div>
          </form>
        </div>
      </div>
      }
    </>
  )
}

export default SignIn