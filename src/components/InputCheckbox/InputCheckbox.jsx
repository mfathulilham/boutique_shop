import React from 'react';
import './InputCheckbox.scss';

function Checkbox({title, name, register, required, ...props}) {
  return (
    <label className="checkbox-content">{title}
      <input
        type="checkbox"
        name={name}
        {...register(name, {required})}
        {...props}
      />
      <span className="checkmark"></span>
    </label>
  )
}

export default Checkbox