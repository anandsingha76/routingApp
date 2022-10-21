import { useState } from "react";
import { useNavigate } from "react-router";
// import Home from "./components/Home";

function Login(props) {
    let nav=useNavigate()

    function handleSubmit(e) {
                e.preventDefault();
                if(firstname.length===0 ){
                    alert("value is required");
                } else {
                    nav("./Home",true)
                }

                
             
                // console.log(e.target[0].value);
                // console.log(e.target[1].value);
                // console.log(e.target[2].value);
                // console.log(e.target[3].value);
            }
        
            const[formData, setFormData] = useState ({
                firstname: "",
                lastname: "",
                email: "",
                password: ""
            });
            
            const {firstname} = formData;
            const {lastname} = formData;
            const {email} = formData;
            const {password} = formData;
        
            function change(e) {
             e.preventDefault();
             const{name,value} = e.target;
             setFormData({...formData,[name]:value});
           
            console.log(formData)
        }
        
            //  if (firstname.value===" " ) {
            //     alert("value is required")
            //  }


return(
    <>
    <h2>testing</h2>


    <form onSubmit={handleSubmit} className="login-form">
            <div>
                    <label>Enter firstname</label>
                    <input type="text" name="firstname" onChange={change} value={firstname}/>
                </div>
                <div>
                    <label>Enter lastname</label>
                    <input type="text" name="lastname" onChange={change} value={lastname}/>
                </div>
                <div>
                    <label>Enter email</label>
                    <input type="email" name="email" onChange={change} value={email}/>
                </div>
                <div>
                    <label>Enter password</label>
                    <input type="password" name="password" onChange={change} value={password}/>
                </div>
                <button type="submit">Login</button>
            </form> 




    </>
)
}

export default Login