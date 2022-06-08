import React, {useState} from 'react'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../config/Myservice';
export default function Signup() {
    const [userData, setUserData] = useState({name:'', email:'', mobile:'', errorMsg:''});
    const navigate = useNavigate();

    const handler = (event) =>{
        const {name, value} = event.target;
        setUserData({...userData, [name]:value})
    }
    

    const getUserData = (event) =>{
        event.preventDefault();
        //console.log(userData);
        let nameRegex = /^[A-Za-z ]+$/;
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
        let mobileRegex = /^[6-9][0-9]{9}$/;

        if (userData.name!=='' && userData.email!=='' && userData.mobile!==''){
            setUserData({...userData, errorMsg:''})

            //console.log(nameRegex.test(userData.fname));
            if(nameRegex.test(userData.name)){
                //console.log(emailRegex.test(userData.email))
                if(emailRegex.test(userData.email)){
                    //console.log(mobileRegex.test(userData.mobile));
                        if(mobileRegex.test(userData.mobile)){
                            //setUserData({...userData, errorMsg:''})
                            console.log(userData);
                            createUser(userData).then(res=>
                                navigate("/"))
                            

                            }
                            else{
                                setUserData({...userData, errorMsg:"Enter a valid 10 digit number"});
                            }
                        }
                else{
                    setUserData({...userData, errorMsg:"Enter a valid email address"});
                }

            }
            else{
                setUserData({...userData, errorMsg:"Only Alphabets allow in this field"});
            }

        }
        else{
            setUserData({...userData, errorMsg:"Please fiil the input field"});

        }
        

    }
  return (
    <>
    <Navbar/>
    <div className="container">
        <h2>Sign Up</h2>
        {userData.errorMsg!=='' &&
    <p style={{color:'red'}}>{userData.errorMsg}</p>}
        <form onSubmit={getUserData}>
        <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="name" onChange={handler}  />
            </div>
            <div className="form-group">
                <label>E-mail Address</label>
                <input type="email" className="form-control" name="email" onChange={handler} />
            </div>
            <div className="form-group">
                <label>Mobile Number</label>
                <input type="number" className="form-control" name="mobile" onChange={handler} />
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-success m-2" value="Submit"/>
            </div>
        </form>
    </div>
    </>
  )
}
