import React, { useState } from 'react'
import { Step1 } from './Step1'
import { Step2 } from './Step2'

 const MulLebelForm = () => {
    const [currentStep, setCurrentStep] =useState(0)
    const [errors,setError] = useState({
      name:'',
      email:"",
      age: 0,
      address:''
    })
  const [step1, setStep1] = useState({
    name:'',
    email:''
  })
  const [step2, setStep2] = useState({
    age:0,
    address:''
  })
  const handlePrevius =()=>{
    if(errors.name ==='' || errors.email ===""){
      alert("Name or email is empty")
      return
    }
    if(currentStep===1){
      setCurrentStep(0)
    }
  }
  const handleNext = () =>{
    if(errors.age ===0 || errors.age ==='' || errors.address ===""){
      alert("age or address is empty")
      return
    }
    if(currentStep===0){
      setCurrentStep(1)
    }
  }
  return (
    <div>
         <button onClick={handlePrevius}>Previous</button>

          {currentStep ===0 && <Step1 step1={step1} setStep1={setStep1}/>}
          {currentStep ===1 &&  <Step2 step2={step2} setStep2={setStep2}/>}
        <button onClick={handleNext}>Next</button>

    </div>
  )
}
export default MulLebelForm;