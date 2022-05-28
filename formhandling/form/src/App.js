import FormValidate from './components/FormValidate';
import React from 'react';
import './App.css';
import { useState } from 'react';
import Inputs from './components/Inputs';

function App() {

  const [value , setValue]= useState({
    username:"",
    email:"",
    password:"",
    conformPassword:""

  });

  
  const handleSubmit = (e) => {
     e.preventDefault();
  }

  const onChange = (e) => {
    setValue({...value, [e.target.name]: e.target.value});
  };
   
  console.log(value);

  return (
    <div className="app">
           
           
            <form 
                   onSubmit={handleSubmit}>
                      {Inputs.map( input => {

                    return  <FormValidate key={input.id} {...input} value={value[input.name]}
                      onChange={onChange}
                      />
                      
                      
                    })}

<button>Submit</button>
            </form>
           
    </div>
    
  );
}

export default App;
