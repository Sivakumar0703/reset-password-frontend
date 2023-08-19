import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from "axios";
import "../resetPassword/ResetPassword.css"
import { useParams } from 'react-router-dom';

const ResetPassword = () => {

    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const params = useParams();
    const verification = params.verification;
    const token = params.token;


    function reset(){
        console.log(verification , token)
        if(password !== cpassword){
            return toast("Confirm Password doesn't Match")
        }
        axios.patch(`https://reset-password-lxyv.onrender.com/user/reset_password/${verification}/${token}` , {password})
        .then(res => {
            toast(res.data?.message)
            setPassword('')
            setCpassword('')   
            })
        .catch(err => toast(err.response?.data?.message))
    }

    useEffect(()=>{
        axios.post("https://reset-password-lxyv.onrender.com/user/verify_code" , {verificationCode:verification})
        .then(res => toast(res.data.message))
        .catch(err => {
            toast(err.response.data.message)
        })

    },[])

    return (
        <div className=' reset-password-container row'>
            <div className='reset-password-form col-11 col-md-6'>
                <div>
                    <p className="m-3 title" >RESET PASSWORD</p>
                </div>
                <div className='reset-password-form'>
                    <label className="input-text">ENTER NEW PASSWORD</label>
                    <div>
                        <input placeholder='Enter New Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <br/>
                    <label className="input-text">CONFIRM PASSWORD</label>
                    <div>
                        <input  placeholder='Confirm Password' type='password' value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
                    </div>
                    <br/>
                    <div className='m-3 reset-button d-flex' style={{justifyContent:"center"}}>
                        <button className='btn btn-warning' onClick={reset}>RESET</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ResetPassword