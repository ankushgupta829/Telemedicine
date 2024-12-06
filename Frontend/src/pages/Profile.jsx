import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Telecontext } from "../Context/Telecontext";
import left from "../Components/Assest/left.png";
import star from "../Components/Assest/str.png";
import About from "../Components/About/About";
import Feedback from "../Feedback/Feedback";
import axios from 'axios'

const Profile = () => {
  const navigate = useNavigate();
  const [doctor, setdoctor] = useState(null);
  const [tab, settab] = useState("about")
  const { id } = useParams();
  const { doctors } = useContext(Telecontext);

  const bookappointment = async () => {
    try {
      const response = await axios.post('https://telemedicine-h9ms.onrender.com/payment');
      if (response && response.status === 200) {
        window.location.href = response.data.url
        console.log(response.data);
      }
    } catch (error) {
      console.error('Error during payment request:', error);
    }
  };

  useEffect(() => {
    const handleProfile = () => {
      const data = doctors.find((item) => item.id === id);
      setdoctor(data);
    };

    handleProfile();
  }, [doctors, id]);

  if (!doctor) {
    return <div>Loading...</div>;
  }

  console.log(doctor);

  return (
    <>
      <div className="profile">
        <div className="header ml-[3vw] w-[94vw] pb-[2vw] rounded-b-lg  md:ml-[6vw] md:w-[90vw] md:pb-[1vw] border  ">
          <div className="head w-[100%] h-[12vw] md:h-[5vw] bg-blue-100">
            <div
              onClick={() => {
                navigate(-1);
              }}
              className="flex ml-4 pt-1 md:ml-5 lg:pt-4 gap-2 cursor-pointer"
            >
              <img src={left} alt="" />
              <p className="font-serif  hidden text-blue-500 md:pt-0 pt-1 md:text-xl">
                Back to results
              </p>
            </div>
          </div>

          <div className="appoint   ">
            <div className="imag flex ">
              <div className="img mt-2 ml-3 w-[115px] h-[115px] md:ml-5 md:mt-3 rounded-lg md:w-[150px] md:h-[150px] border  ">
                <img
                  className="md:w-[150px] md:h-[150px] w-[115px] h-[115px] rounded-lg "
                  src={doctor.photo}
                  alt=""
                />
              </div>
              <div className="para ml-2 mt-1  md:ml-7 md:mt-3 ">
                <p className="md:text-xl md:pt-2 text-lg font-serif md:tracking-wide   font-semibold ">
                  {doctor.name}
                </p>
                <p className="md:text-lg md:pt-1    font-serif md:tracking-wide md:font-semibold">
                  {doctor.hospital}
                </p>
                <p className="md:text-lg   font-serif md:tracking-wide font-normal md:font-semibold">
                  Specialties :{doctor.specialty}
                </p>
                <div className="flex  gap-1">
                  <p className="font-serif md:font-semibold md:text-lg">Rating :</p>
                  <div className="flex gap-1">
                    <p className="font-serif">{doctor.avgRating}</p>
                    <img className="w-[18px] pb-1 md:pb-0" src={star} alt="" />
                  </div>
                </div>
                <p className="md:text-lg md:font-semibold  md:flex hidden  font-serif md:tracking-wide font-normal ">
                  Total Patients:{doctor.totalPatients}
                </p>

                
                  
     



                  


                  





              </div>
            </div>
            <div className="button gap-3 flex ml-5 mt-3 ">
                  <div onClick={()=>{settab("about")}} className= {` ${tab === "about" && "border-b-2 border-b-blue-700"} about font-serif text-gray-600 cursor-pointer md:text-[20px]`}>About</div>
                  <div onClick={()=>{settab("review")}} className={` ${tab === "review" && "border-b-2 border-b-blue-700"} about font-serif text-gray-600 cursor-pointer md:text-[20px]`}>Reviews</div>
                 
                </div>
                <div className="line ml-3 mt-3 w-[85vw] h-[1px] border border-gray-500"></div>

                
                <div className=" md:flex">
                <div className="details mt-2 ml-4  md:mt-4 md:ml-2   md:w-[70%]   ">
                  {tab === "about" && <About name = {doctor.name}/>}
                  {tab === "review" && <Feedback/>}
                </div>
                <div className="payment md:ml-3 md:h-[220px] h-[200px] ml-5 w-[90%]  md:w-[28%] mt-12 border rounded-lg shadow-lg ">
                  <div className="flex justify-between mt-1 ">
                  <p className="c font-serif    pl-2 tracking-wider">Ticket Price  </p>
                  <div className="flex mr-2 gap-[2px]">
                  <i className="fa fa-inr mt-1 "></i>
                  <span className=" font-mono">1000</span>
                  </div>
                  </div>
                  <p className="header ml-2 mt-1 font-semibold font-serif">Available  Time  Slots:</p>
                   <div className="flex justify-between ml-2 pt-1 font-serif">
                    <p className="q text-sm">Saturday</p>
                    <p className="s text-sm pr-1">5:10 pm - 5:45 pm</p>
                   </div>
                   <div className="flex justify-between ml-2 pt-1 font-serif">
                    <p className="q text-sm">Sunday</p>
                    <p className="s text-sm pr-1">6:10 pm - 6:45 pm</p>
                   </div>
                   <div className="flex justify-between ml-2 pt-1 font-serif">
                    <p className="q text-sm">Tuesday</p>
                    <p className="s text-sm pr-1">7:10 pm - 7:30 pm</p>
                   </div>
                   
                   <div onClick={bookappointment} className="btn ml-2 md:ml-3 md:mt-12 text-white cursor-pointer rounded-lg bg-blue-600 mt-4 w-[95%] md:h-[29px] h-[35px] items-center  border  font-serif flex justify-center">Book Appointment</div>

                  
                </div>

                </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
