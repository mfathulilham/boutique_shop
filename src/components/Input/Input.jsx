import React from 'react';
import './Input.scss';

function Input({name, register, required, ...props}) {
  return (
    <input
      name={name}
      {...register(name, {required})}
      {...props}
    />
  )
}

export default Input