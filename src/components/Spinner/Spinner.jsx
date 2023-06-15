import React from 'react';
import './Spinner.scss';

function Spinner() {
  // let [error, setError] = useState(false)
  
  // setTimeout(() => {
  //   setError(true)
  // }, 5000);

  return (
    <>
      {/* { error && 
        <p className='error_loader'>Please check your connection !</p>
      } */}
      <div className={`loader`}></div>
    </>
  )
}

export default Spinner