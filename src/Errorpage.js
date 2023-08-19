import React from 'react'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { useNavigate } from 'react-router-dom';

const Errorpage = () => {

    const navigate = useNavigate()

    function gotoHome(){
        navigate('/')
    }

  return (
    <div className='container-fluid'>

        <div className='frown-image' style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , marginTop:'50px'}}>
            <div className='d-flex' style={{justifyContent:'center' , alignItems:'center'}}>
            <SentimentDissatisfiedIcon 
            style={{fontSize:'150px' , color:'gray'}}
            />
            </div>

            <p style={{fontSize:'100px' , color:'gray' , display:'flex' , justifyContent:'center' }}>404</p>

            <p style={{fontSize:'50px' , color:'gray' , display:'flex' , justifyContent:'center' }}>PAGE NOT FOUND</p>

            <p style={{color:'gray'}}>The page you are looking for doesn't exist. Click the button below to go back.</p>
            <button onClick={gotoHome} className='btn btn-primary'>Go Back</button>
           

            

        </div>
        
    </div>
  )
}

export default Errorpage