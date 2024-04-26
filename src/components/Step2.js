import React from 'react'

export const Step2 = ({step2,setStep2}) => {
    const handleAgeChange =(e)=>{
        setStep2(e.target.value)
     }
     const handleAddressChange =(e)=>{
         setStep2(e.target.value)
      }
  return (
    <div>
        <label> Age:</label>
            <input type='text' name='age' value={step2.age} onChange={handleAgeChange} />

        <label> Address:</label>
            <input type='text-area' name='address' value={step2.address} onChange={handleAddressChange} />
    </div>
  )
}
