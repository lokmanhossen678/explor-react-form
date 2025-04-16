import React from 'react';

const SimpleForm = () => {
    const handleSubmite = (e)=>{
        e.preventDefault(); 
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmite}>
                <input type="text" name='name' placeholder='Your name'  />
                <br />
                <input type="text" placeholder='Your email' name='email'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;