import React, { useState } from "react";

const ControldField = () => {
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
  }
  const handlePaswordOnchange = ()=>{

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
    </div>
  );
};

export default ControldField;
