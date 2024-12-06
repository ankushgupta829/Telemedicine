import React, { useContext, useEffect, useState } from "react";
import { Telecontext } from "../../Context/Telecontext";
import { useNavigate } from "react-router-dom";

const AppointDoctor = ({ specialty }) => {
    const navigate = useNavigate();
  console.log(specialty);
  const { doctors } = useContext(Telecontext);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  useEffect(() => {
    const filterDoctors = () => {
      console.log("specialty:", specialty);
      console.log("Doctors:", doctors);

      if (specialty) {
        const filtered = doctors.filter((doctor) => {
          console.log("Comparing:", doctor.specialty, specialty);
          return doctor.specialty === specialty;
        });
        setFilteredDoctors(filtered);
        console.log("Filtered Doctors:", filtered);
      }
    };

    filterDoctors();
  }, [doctors, specialty]);

  let special = "";
  if (filteredDoctors.length > 0) special = filteredDoctors[0].specialty;

  console.log(special);

  const handleclick = (id)=>{
    navigate(`/VideoConsultant/doctors/${id}`)
  }

  return (
    <>
      <div className="profiles w-[96vw] ml-[2vw] mt-4 md:w-[80vw] md:ml-[10vw] border h-auto md:h-auto md:mt-5 rounded-xl shadow-lg">
        <div className="header md:[80vw] rounded-t-xl bg-blue-200 lg:h-[10vw] h-[25vw]  ">
          <p className="md:ml-[2vw] text-blue-800 md:text-3xl md:font-semibold font-bold md:pt-5 text-xl ml-[3vw] font-serif pt-[3px]">
            Find a Doctor
          </p>
          <p className="l md:ml-[2vw] ml-[3vw]  font-serif md:text-xl text-lg md:pt-5 text-blue-800 pt-2">
            <strong className="font-sans text-xl">
              {filteredDoctors.length}
            </strong>{" "}
            {special} specialists were found{" "}
          </p>
        </div>

        <div className="doctors">
          <p className="ml-3 mt-3 font-serif md:text-lg text-gray-600">
            {filteredDoctors.length} providers found
          </p>
          {filteredDoctors.map((item) => {
            return (
              <div
                key={item.id}
                className="card mb-[4vw] ml-[5vw] mt-5 md:w-[72vw] md:pb-[3vw] pb-[5vw]  lg:pb-[2vw] border rounded-lg shadow-md shadow-neutral-400 w-[90vw]  "
              >
                <div className="img flex ">
                  <div className="i md:w-[20vw] md:h-[20vw] rounded-lg  border  w-[20vw] h-[20vw] ml-[2vw] mt-[2vw] ">
                    <img
                      className=" w-[20vw] h-[20vw] rounded-lg  md:w-[20vw] md:h-[20vw] "
                      src={item.photo}
                      alt=""
                    />
                  </div>
                  <div className="name mt-[2vw] ml-[3vw]">
                    <p className="name md:text-3xl md:font-semibold tracking-wide text-lg font-bold font-serif">
                      {item.name}
                    </p>
                    <p className="special text-gray-600 md:pt-2 font-serif md:text-xl">
                      {item.specialty}
                    </p>
                    <p className="adress text-gray-600 md:pt-2 font-serif md:text-xl">
                      {item.hospital}
                    </p>
                     
                     <p className="acc md:flex hidden    md:pt-2 font-serif md:text-lg"> Accepting New Patients</p>
                     <p className="acc md:flex hidden    md:pt-2 font-serif md:text-lg">  Offers Telehealth</p>
                     <div className="lang hidden md:flex gap-1  mt-1 ">
                        <div className="l font-semibold font-serif">Languages Spoken</div>
                        <div className="font-serif">Hindi / English</div>
                    </div>
                   
                   <div onClick={()=>{handleclick(item.id)}} className="button bg-blue-500 text-white rounded-lg  cursor-pointer lg:w-[10vw] lg:rounded-lg font-serif flex justify-center items-center md:w-[15vw] md:ml-[5vw] lg:ml-4   lg:h-[2vw] md:mt-[2vw] lg:mt-[2vw] mt-[7vw] w-[50vw] ">
                    View Profile
                   </div>
                    


                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AppointDoctor;
