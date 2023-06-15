import React from 'react';
import './Checkbox.scss';

function Checkbox({title, ...props}) {
  return (
    <label className="checkbox-content">{title}
      <input
        type="checkbox"
        className="checkbox"
        {...props}
      />
      <span className="checkmark"></span>
    </label>
  )
}

export default Checkbox