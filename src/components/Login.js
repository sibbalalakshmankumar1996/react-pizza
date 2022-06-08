import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../config/Myservice';
export default function Login() {
    const [loginData, setLoginData] = useState({email:'', password:'', errorMsg:''})
    const [jsonUserData, setJsonUserData] = useState();
    const navigate = useNavigate();

    const handler = (event) =>{
        const {name, value} = event.target;
        setLoginData({...loginData, [name]:value})
    }
    useEffect(()=>{
        getUser()
        .then(res=> setJsonUserData(res.data))
        .catch(err=> console.log(err))

    })

    const getLoginData = event =>{
        event.preventDefault();
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
        let passwordRegex = /^[A-Za-z0-9@#$%^&-+=()]{8,20}$/;

        if(loginData.email!=='' && loginData.password!==''){
            setLoginData({...loginData, errorMsg:''})

            if(emailRegex.test(loginData.email)){
                if(passwordRegex.test(loginData.password)){
                    console.log(jsonUserData);
                    let arr = jsonUserData.map(user=> user.email)
                     console.log(arr)
                     console.log(arr.includes(loginData.email))
                    if(arr.includes(loginData.email)){
                   navigate("/mainsection")
               }else{
                setLoginData({...loginData, errorMsg:"User not completed signup process yet"})

               }
                }
                else{
                    setLoginData({...loginData, errorMsg:"Password should contain minimum 8 characters and atmost 20 characters"})
                }
            }
            else{
                setLoginData({...loginData, errorMsg:"Enter a valid email address"});
            }
         }
        else{
            setLoginData({...loginData, errorMsg:"Please fiil the input field"});
        }
    }
  return (
    <>
    <Navbar/>
    <h2>Login</h2>
    {loginData.errorMsg!=='' &&
    <p style={{color:'red'}}>{loginData.errorMsg}</p>}
    <form onSubmit={getLoginData}>
        <div className="form-group m-2">
            <input type="email" className="form-control" placeholder="Email Address" name="email" onChange={handler} />
        </div>
        <div className="form-group m-2">
            <input type="password" className="form-control" placeholder="Password" name="password" onChange={handler} />
        </div>
        <div className="form-group m-2">
            <input type="submit" className="btn btn-dark text-white" value="Login" />
        </div>
    </form>
    </>
  )
}


