import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import './SignUp.scss';
import InputCheckbox from '../../components/InputCheckbox/InputCheckbox';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import InputRadio from '../../components/InputRadio/InputRadio';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  first: yup.string().trim().required('First Name is required'),
  second: yup.string().trim().required('Second Name is required'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  contact: yup.number("Contact Must be valid number").required('Contact Number is required'),
  date: yup.date().max(new Date(), ("Date of Birth must below " + new Date().toDateString())).required('Date of Birth is required'),
  gender: yup.string().matches('Male', 'Gender must be Male').required(),
  pass: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  pass_confirm: yup.string().min(8, 'Password Confirm must be at least 8 characters').oneOf([yup.ref('pass')], 'Passwords does not match').required('Password Confirm is required'),
  check1: yup.bool().oneOf([true]),
  check2: yup.bool().oneOf([true])
}).required();

schema.isValid({ gender: 'male' });

function SignUp({isOpen, handleClose, handleSignIn}) {

  const { register, handleSubmit, formState:{ errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });
  
  const onSubmit = data => {
    alert(`first: ${data.first}, second: ${data.second}, email: ${data.email}, contact: ${data.contact}, date: ${data.date.toDateString()}, gender: ${data.gender}, password: ${data.pass}, password confirm: ${data.pass_confirm}`)
  }
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
    marginTop: '12px'
  };

  return (
    <>
      { isOpen && 
        <div className='modal' id="modal">
          <div className={'register'}>
            <div className="register-head">
              <p className="title">Create an Account</p>
              <span className="title-2">Save your information to check out faster</span>
              <button className="btn-close" onClick={handleClose}>
                <img src="assets/icon/close.svg" alt="menu-close"/>
              </button>
            </div>
            <form className="regis-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control-2">
                <div className="left-form">
                  <label className="label" htmlFor="first">First Name</label>
                  <Input
                    type="text"
                    name='first'
                    register={register}
                    // className="first-name"
                    className={`form-input ${errors.first ? 'is-active' : ''}`}
                    placeholder="ex: john"
                  />
                  { errors.first &&<div className='error-message'></div>}
                  <span style={mystyle}>
                    {errors.first?.message}
                  </span>
                </div>
                <div className="right-form">
                  <label className="label" htmlFor="second">Second Name</label>
                  <Input 
                    type="text"
                    name='second'
                    register={register}
                    className={`form-input ${errors.second ? 'is-active' : ''}`}
                    placeholder="ex: doe"
                  />
                  { errors.second &&<div className='error-message'></div>}
                  <span style={mystyle}>
                    {errors.second?.message}
                  </span>
                </div>
              </div>
              <span className="first-validation">First Name cannot contain numbers</span>
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
                <label className="label" htmlFor="contact">Contact Number</label>
                <Input
                  type="number"
                  name='contact'
                  register={register}
                  className={`form-input ${errors.contact ? 'is-active' : ''}`}
                  placeholder="ex: +62812 3456 7890"
                />
              </div>
              { errors.contact &&<div className='error-message'></div>}
              <span style={mystyle}>
                {errors.contact?.message}
              </span>
              <div className="form-control">
                <label className="label" htmlFor="date">Date of Birth</label>
                <div className="date-wrapper">
                  <Input
                    type="date"
                    name="date"
                    register={register}
                    className={`form-input ${errors.date ? 'is-change' : ''}`}
                    placeholder="DD/MM/YY"
                  />
                  <img className="img-icon" src="assets/icon/calendar.svg" alt="icon-calendar"/>
                  <span className="border-calendar"></span>
                </div>
              </div>
              { errors.date &&<div className='error-message'></div>}
              <span style={mystyle}>
                {errors.date?.message}
              </span>
              
              <div className="form-control">
                <label className="label" htmlFor="gender">Gender</label>
                <div className="inputradio__list">
                  <InputRadio
                    type="radio"
                    name="gender"
                    label="Female"
                    value="Female"
                    register={register}
                    className="input__radio"
                    defaultChecked
                  />
                  <InputRadio 
                    type="radio"
                    name="gender"
                    label="Male"
                    value="Male"
                    register={register}
                    className="input__radio"
                  />
                </div>
                { errors.first &&<div className='error-message'></div>}
                <span style={mystyle}>
                  {errors.gender?.message}
                </span>
              </div>
              
              <div className="form-control">
                <label className="label" htmlFor="password-regis`">Password</label>
                <div className="input-wrapper">
                  <Input
                    type={passwordType}
                    name='pass'
                    className={`form-input ${errors.pass ? 'is-active' : ''}`}
                    register={register}
                    placeholder="ex: ******"
                  />
                  <button type="button" className="img-button" onClick={handleShowPass}>
                    <img className="img-form" src="assets/icon/eye-off.svg" alt="icon-eye"/>
                  </button>
                </div>
                { errors.pass &&<div className='error-message'></div>}
                <span style={mystyle}>
                  {errors.pass?.message}
                </span>
              </div>
              <div className="form-control">
                <label className="label" htmlFor="password2-regis`">Confirm Password</label>
                <div className="input-wrapper">
                  <Input
                    type={passwordType}
                    register={register}
                    name='pass_confirm'
                    className={`form-input ${errors.pass_confirm ? 'is-active' : ''}`}
                    placeholder="ex: ******"
                  />
                  <button type="button" className="img-button" onClick={handleShowPass}>
                    <img className="img-form" src="assets/icon/eye-off.svg" alt="icon-eye"/>
                  </button>
                </div>
                { errors.pass_confirm &&<div className='error-message'></div>}
                <span style={mystyle}>
                  {errors.pass_confirm?.message}
                </span>
              </div>
              <div className="form-control-3">
                <div className="checkbox__wrapper">
                  <InputCheckbox
                    title="Send me Artsy Collective new arrival updates, offers, and more."
                    type="checkbox"
                    name="check1"
                    register={register}
                    className="checkbox"
                  />
                </div>
                <div className="checkbox__wrapper-2">
                  <InputCheckbox
                    title="I agree to Artsy Collective Terms & Conditions and Privacy Policy."
                    type="checkbox"
                    name="check2"
                    register={register}
                    className="checkbox"
                  />
                </div>
              </div>

              <div className="register-footer">
                <div className='btn-register'>
                  <Button 
                    type="submit"
                    className={`btn btn__gold ${isValid === false ? 'is-disable' : ''}`}
                    disabled={!isValid}
                    >
                    Create Account
                  </Button>
                </div>
                <span className="text">Already have accout? <Link to="#" onClick={handleSignIn} className="link-signup">Sign In</Link></span>
              </div>

            </form>
          </div>
        </div>
      }
    </>
  )
}

export default SignUp