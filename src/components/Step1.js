import React from 'react'

export const Step1 = ({step1,setStep1}) => {
const handleChange =(e)=>{
   setStep1(e.target.value)
}
const handleEmailChange =(e)=>{
    setStep1(e.target.value)
 }
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
        <div>
            <label> Name:</label>
            <input type='text' name='name' value={step1.name} onChange={handleChange} />
        </div>

        <div>
            <label> Email:</label>
            <input type='email' name='name' value={step1.email} onChange={handleEmailChange} />
        </div>
    </div>
  )
}
