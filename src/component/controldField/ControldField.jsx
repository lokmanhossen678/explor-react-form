import React, { useState } from "react";

const ControldField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
  }
  const handlePaswordOnchange = e =>{
    console.log(e.target.value)
    setPassword(e.target.value)
    if (password.length<6){
      setError("password must be 6 character or longer")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="Email" id="" placeholder="Email" required />
        <br />
        <input type="password" name="Password" id="" placeholder="Password" defaultValue={password} onChange={handlePaswordOnchange} required/>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{color:'red'}}>
        <small> {error} </small>
      </p>
    </div>
  );
};

export default ControldField;
