import React from "react";
import { useState } from "react";
import hamburger from '../Assest/hamburger.png'
import close from '../Assest/close.png'
import { Link , useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
   
  }
  const handleclick = () =>{
    navigate('/');
  }
   const handlelogin = ()=>{
    setIsMenuOpen(false);
    navigate('/Login')
   }
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div className="navbar max-w-screen-2xl h-16 bg-white z-50 border sticky top-0  shadow-md">
        <div className="content lg:flex lg:justify-between   ">


          <div className="hamburger lg:hidden ml-2 mt-3 cursor-pointer">
            <img onClick={handleHamburger} className="w-[20px] h-[30px] " src={ isMenuOpen ? close : hamburger} alt="" />
          </div>
          
      
          <div onClick={handleclick} className="logo lg:flex flex justify-center items-center lg:mt-1 -mt-9 cursor-pointer       ">
          <img  className="w-[200px] lg:ml-2 "   src="https://medmate.com.au/wp-content/uploads/2021/02/medmate-blue-logo.png" alt="medmate-blue-logo"/>
            
          </div>

          <div className={`options ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className={`child lg:gap-7 lg:flex lg:text-black text-white  lg:mt-3 font-semibold text-xl lg:mr-20 lg:static absolute lg:bg-white bg-blue-950 w-[260px]  lg:h-auto lg:rounded-none rounded-lg h-[580px] left-0  pb-2 lg:w-auto lg:opacity-100  transition-all ease-in duration-500 ${isMenuOpen ? 'opacity-100 top-16' : 'opacity-0 top-[-400px]'} `}>
            <li className=" lg:hidden lg:hover:text-blue-800 font-serif hover:text-black lg:pt-0 pt-7  lg:my-0 mt-3 lg:mx-0 mx-7 "><Link to='/' onClick={closeMenu}>Home</Link></li>
                <li className="lg:hover:text-blue-800 font-serif hover:text-black lg:pt-0 pt-7  lg:my-0 mt-3 lg:mx-0 mx-7 "><Link to='/FindDoctor' onClick={closeMenu}>Find Doctors</Link></li>
                <li className="lg:hover:text-blue-800 hover:text-black lg:pt-0 pt-7   lg:my-0  mx-7 lg:mx-0 my-4 font-serif" ><Link to='/AIDoctor' onClick={closeMenu}>AI Doctors</Link></li>
                <li className="lg:hover:text-blue-800 hover:text-black lg:pt-0 pt-7  lg:my-0 mx-7 lg:mx-0 my-4 font-serif"><Link to='/VideoConsultant ' onClick={closeMenu}>Book Appointment</Link></li>
                <li className="lg:hover:text-blue-800 hover:text-black  lg:pt-0 pt-7   lg:my-0 mx-7 lg:mx-0 my-4 font-serif"><Link to='/MedicalConsultant' onClick={closeMenu}>Medical Insights</Link></li>
                <li><button onClick={handlelogin} className=" lg:border font-serif lg:w-[90px] w-[130px] h-10 rounded-lg  tracking-wide  lg:hover:text-white   hover:text-black   lg:-mt-2 mt-3 lg:mx-0 mx-7 lg:hover:bg-blue-800 lg:border-black   ">Sign In</button></li>
               
            </ul>
          </div>

           

        </div>
      </div>
    </>
  );
};

export default Navbar;
