import { useState } from "react";

const StatefulForm = () => {
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [name,setName] = useState('Rojoni Klanto');
    // giving a default name


    // validate error
    const [error,setError] = useState("");
    const handleSubmit = e => {
       e.preventDefault();
       if(password.length < 6){
         setError("Password must be at least 6 characters long");
       }
       console.log(email,password,name);
    }

    const handleEmailChange = e => {
      console.log(e.target.value);
      setEmail(e.target.value);
    };

    const handleNameChange = e => {
       console.log(e.target.value);
       setName(e.target.value); 
    }

    const handlePasswordChange = e => {
      console.log(e.target.value);
      setPassword(e.target.value);
    };

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" />
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required/>
                <br />
                <input type="submit" name="submit" />
                {
                  error && <p className="error">{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;