const Inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"username",
      errormessage:"error message should be 3-16 characters and shouldn't include any special characters",
      label:"Username"
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"email",
      errormessage:"It should be a valid email address!",
      label:"Email"
    },
    
    {
      id:3,
      name:"birthdate",
      type:"text",
      placeholder:"birthdate",
      label:"Birthdate"
    },
    
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"password",
      errormessage:"Password should be 8-20 characters and include at least 1 letter , 1 number and 1 special characters",
      label:"password"
    },
    
    {
      id:5,
      name:"ConformPassword",
      type:"password",
      placeholder:"ConformPassword",
      errormessage:"Password don't mactch",
      label:"ConformPassword"
    }

  ]

  export default Inputs;