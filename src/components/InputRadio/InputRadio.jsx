import React from 'react';
import './InputRadio.scss';

function InputRadio({label, name, register, required, ...props}) {  
  return (
    <label className="inputradio">{label}
      <input
        name={name}
        {...register(name, {required})}
        {...props}
      />
      <span className="radio__check"></span>
    </label>
  )
}

export default InputRadio