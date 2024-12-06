
import React ,{useState , useContext} from 'react'
import SignUp from '../Components/SignUp/SignUp'
import Register from '../Components/Register/Register'
import { Telecontext } from '../Context/Telecontext'

const Login = () => {
  const{Tab , setTab} = useContext(Telecontext)
  
  return (
    <>
    <div className="login ">

      {Tab === 'login' ? <SignUp/> : <Register/>}
      



    </div>
    
    </>
  )
}

export default Login
