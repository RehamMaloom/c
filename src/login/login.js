import axios from 'axios'
import React ,{useState} from 'react'

 function App(){
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
 
    async function login(event){
     
            event.preventDefault();
            console.log("dasas")
       await axios.post('https://aa-0d6k.onrender.com/user/login',
         {
                email , password
            }
        ).then((result) => {
          if(result){
            console.log("finidh")
            localStorage.setItem('token', result.data)
          window.location.href="/home"
            
          }
        }).catch((err) => {
         
            console.log(err)
        });
    }
  return (
    <div>
        <h1>login</h1>
    <form >
 <input
 type="email"
 value={email}
 onChange={(e)=>setEmail(e.target.value)}
 
 /><br/>
 <input
 type="password"
 value={password}
 onChange={(e)=>setPassword(e.target.value)}
 
 />
 <button type='Submit' onClick={login}>Login</button>
    </form >
    </div>
  );
}

export default App;
