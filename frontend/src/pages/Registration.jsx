import React from 'react'

const Registration = () => {
  return (
    <div className='form'>

      <input type='email' name="email" placeholder='Email' onChange = {handleChange} />
      <input type='password' name="password" placeholder='Password' onChange = {handleChange} />
      <input onClick={handleLogin} type='submit'/>
  
    </div>
  )
}

export default Registration