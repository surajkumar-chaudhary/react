import React from "react";
import './formvalidate.css'

const FormValidate = (props) => {
    const {label, errormessage, onChange, id , ...inputprops} = props;
    return(
        <div className="FormValidate">
         <label>{label}</label>
         <input
         {...inputprops} onChange={onChange}/>
         <span>{errormessage}</span>
        </div>
    )
};


export default FormValidate;