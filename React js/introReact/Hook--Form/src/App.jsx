import { useState } from 'react'
import {useForm} from 'react-hook-form'

import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState:{errors, isSubmitting},
  } = useForm();
  async function onSubmit(data){
    //Api call simulate krta hai
    await new Promise((resolve)=>setTimeout(resolve,5000));
    console.log("submitting the form",data )
  }


  

  return (
    <form onSubmit ={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input className={errors.firstName ? 'input-error':""} 
        {...register('firstName',{required:true , minLength:{value:3, message:'Min Length Atleast three '}
        ,maxLength:6})}/>
      
        {errors.firstName  && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>

       <div>
        <label>Middle Name: </label>
        <input className={errors.firstName ? 'input-error':""} {...register('MiddleName')}/>
      </div>

       <div>
        <label>Last Name: </label>
        <input className={errors.lastName ? 'input-error':""} {...register('lastName',{pattern: {value:/^[A-Za-z]+$/i,
          message:"Last Name is not as per the rules"
        }})}/>
        {errors.lastName  && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <input type='submit' disabled ={isSubmitting} value ={isSubmitting ? "Submitting":"Submit"}/>
    </form>
    )
}

export default App
