import React from 'react';
import  './Inputform.css'


const InputForm = (props) => {
    return (
        <div className='inputform'>
        <input placeholder={props.placeholder} />
        </div>
    )
        
}

export default InputForm;