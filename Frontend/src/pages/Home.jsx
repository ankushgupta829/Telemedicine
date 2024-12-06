import React from "react";
import bg from "../Components/Assest/homebg.jpg";
import card1 from "../Components/Assest/card1.png";
import card2 from "../Components/Assest/card2.png";
import card3 from "../Components/Assest/card3.png";
import card4 from "../Components/Assest/card4.png";
import boy from "../Components/Assest/boy.jpg";
import query from "../Components/Assest/question.png";
import { useNavigate } from "react-router-dom";
import women from "../Components/Assest/women1.jpg"

const Home = () => {
  const navigate = useNavigate();

  const onclick1 = () => {
    navigate("/FindDoctor");
  };

  const onclick2 = () => {
    navigate("/AIDoctor");
  };

  return (
    <>
      <div className="home">
        <div className="small-screen md:hidden relative">
          <img className="h-[70vw] w-screen" src={boy} alt="" />
          <div className="absolute top-5 sm:top-20 left-1 sm:left-5 flex flex-col gap-2 ">
            <div className="flex gap-1 sm:gap-4">
              <img className="w-[7vw] invert" src={query} alt="" />
              <p className="text-white text-base font-serif sm:text-xl font-medium tracking-wide sm:tracking-widest">
                {" "}
                Need to find a doctor ?{" "}
              </p>
            </div>
            <p className="text-2xl sm:ml-5 ml-1 sm:text-4xl font-serif text-white  font-bold">
              Find a telehealth <br />
              consult with a <br />
              doctor in minutes.{" "}
            </p>

            <div
              onClick={onclick1}
              className="btn ml-2 flex justify-center items-center cursor-pointer text-white font-semibold mt-5 w-[42vw] h-[40px] bg-blue-900 rounded-lg tracking-wider shadow-lg  font-serif sm:mt-10"
            >
              Find A Doctor
            </div>
          </div>
        </div>
        <div className="bg md:flex hidden">
          <div className="left w-full lg:w-1/2">
            <div className="lg:block flex">
              <p className="lg:text-6xl font-bold text-3xl font-serif md:text-4xl md:ml-10   text-blue-500  lg:ml-28 lg:mt-36 mt-10 tracking-wide  ">
                Enabling hybrid care at Scale
              </p>
            </div>

            <p className="mt-3 lg:ml-28 text-2xl md:ml-10 font-semibold font-serif text-blue-950">
              One Platform . One Partner.
            </p>

            <div className="flex md:mt-5">
              <div
                onClick={onclick1}
                className="find text-white  lg:ml-28 w-[170px] h-[50px] border mt-3 rounded-lg  ml-1 flex justify-center items-center text-2xl bg-blue-500 md:ml-10  font-semibold cursor-pointer font-serif  "
              >
                Find Doctor
              </div>
              <div
                onClick={onclick2}
                className="find lg:ml-2 w-[150px] h-[50px] border mt-3 rounded-lg  ml-1 flex justify-center items-center text-2xl bg-white text-blue-500  font-semibold cursor-pointer font-serif  "
              >
                AI Doctor
              </div>
            </div>
          </div>
          <div className="right w-full hidden lg:block lg:w-1/2">
            <img src={bg} alt="" />
          </div>
        </div>

        <div className="cards lg:mt-0 mt-5   ">
          <h1 className="text-blue-950 lg:text-4xl text-2xl font-serif font-extrabold flex justify-center mt-5 ">
            How can We Help You Today
          </h1>

          <div className="cards flex flex-wrap md:gap-7 lg:gap-[2vw] lg:ml-40 ">
            <div className="card ml-7 mt-5 bg-gray-100 rounded-lg md:ml-0 w-[85vw] lg:ml-[2vw] md:w-[45vw] h-[330px] lg:w-[23vw] lg:h-[300px]   flex flex-col">
              <img className="w-[100px] ml-5 mt-5" src={card1} alt="" />
              <h1 className="text-2xl text-blue-950 font-medium ml-5 mt-3 font-serif">
                Video Consultation
              </h1>
              <p className="ml-5 mt-2 font-serif font-extralight text-justify ">
                {" "}
                Connect with a registered health practitioner via phone or video
                consultation within a hour  Our aim is to provide consultation
                with doctor at your finger tip .{" "}
              </p>

              <div className="box cursor-pointer text-white flex font-serif justify-center items-center text-lg  mt-5 ml-2 w-[80vw] h-[40px] rounded-lg bg-blue-900 font-semibold md:w-[40vw] lg:w-[20vw] lg:ml-7 lg:mt-5 ">
                Video Consultancy
              </div>
            </div>

            <div className="card ml-7 mt-5 bg-gray-100 rounded-lg w-[85vw] lg:ml-[2vw] md:ml-0 md:w-[45vw] h-[330px] lg:w-[23vw] lg:h-[300px]  flex flex-col">
              <img className="w-[67px] ml-5 mt-5" src={card2} alt="" />
              <h1 className="text-2xl text-blue-950 font-medium ml-5 mt-3 font-serif">
                Video Consultation
              </h1>
              <p className="ml-5 text-justify mt-2 font-serif font-extralight ">
                {" "}
                Connect with a registered health practitioner via phone or video
                consultation within a hour  Our aim is to provide consultation
                with doctor at your finger tip{" "}
              </p>

              <div className="box cursor-pointer text-white flex font-serif justify-center items-center text-lg  mt-5 ml-2 w-[80vw] h-[40px] rounded-lg bg-blue-900 font-semibold md:w-[40vw] lg:w-[20vw] lg:ml-7 lg:mt-5 ">
                Video Consultancy
              </div>
            </div>

            <div className="card ml-7 mt-5 bg-gray-100 rounded-lg w-[85vw] lg:ml-[2vw] md:ml-0 md:w-[45vw] h-[330px] lg:w-[23vw] lg:h-[300px]   flex flex-col">
              <img className="w-[67px] ml-5 mt-5" src={card3} alt="" />
              <h1 className="text-2xl text-blue-950 font-medium ml-5 mt-3 font-serif">
                Video Consultation
              </h1>
              <p className="ml-5 text-justify mt-2 font-serif font-extralight ">
                {" "}
                Connect with a registered health practitioner via phone or video
                consultation within a hour . Our aim is to provide consultation
                with doctor at your finger tip{" "}
              </p>

              <div className="box cursor-pointer text-white flex font-serif justify-center items-center text-lg  mt-5 ml-2 w-[80vw] h-[40px] rounded-lg bg-blue-900 font-semibold md:w-[40vw] lg:w-[20vw] lg:ml-7 lg:mt-5  ">
                Video Consultancy
              </div>
            </div>
          </div>
        </div>

        <div className="process mt-10">
          <div className="top lg:flex">
            <div className="l1 lg:ml-44 lg:w-[30vw] ml-2 text-2xl lg:text-4xl font-serif font-bold tracking-wider text-blue-950">
              Your Telehealth journey Explained ...
            </div>
            <div className="r1 ml-2 lg:mt-0 mt-2 text-justify text-blue-950 lg:w-[50vw] font-medium font-serif text-xl  lg:ml-5">
              {" "}
              Through our Website users are able to search for doctors by
              location. We ensure that aou search results are up to date and
              secure.User are able to find each doctor's contact details
              practice adress.
            </div>
          </div>
          <div className="bottom md:flex">
            <div className="l flex flex-col gap-10 md:gap-16 ml-2 mt-2  md:ml-[10vw] ">
              <div className="1 flex gap-5">
                <div className="num w-[50px] h-[50px] border-blue-500 border flex justify-center items-center text-blue-500 font-semibold rounded-full">
                  1
                </div>
                <div className="con flex flex-col">
                  <p className="1 font-serif font-semibold text-xl text-blue-950">Find Doctor</p>
                  <p className="2 font-serif">Consult with a doctor within minute</p>
                </div>
              </div>
              <div className="2 flex gap-5">
                <div className="num w-[50px] h-[50px] border-blue-500 border flex justify-center items-center text-blue-500 font-semibold rounded-full">
                  2
                </div>
                <div className="con flex flex-col">
                  <p className="1 font-serif font-semibold text-xl text-blue-950">AI Doctor</p>
                  <p className="2 font-serif">Predict disease according to symptom </p>
                </div>
              </div>
              <div className="3 flex gap-5">
                <div className="num w-[50px] h-[50px] border-blue-500 border flex justify-center items-center text-blue-500 font-semibold rounded-full">
                  3
                </div>
                <div className="con flex flex-col">
                  <p className="1 font-serif font-semibold text-xl text-blue-950">Video Consultancy</p>
                  <p className="2 font-serif">Provides video calling facility </p>
                </div>
              </div>
              <div className="4 flex gap-5">
                <div className="num w-[50px] h-[50px] border-blue-500 border flex justify-center items-center text-blue-500 font-semibold rounded-full">
                  4
                </div>
                <div className="con flex flex-col">
                  <p className="1 font-serif font-semibold text-xl text-blue-950">Medical Insights</p>
                  <p className="2 font-serif">Provides health related videos</p>
                </div>
              </div>
            </div>
            <div className="r ">
              <img className="md:w-[49vw] md:h-[27vw] w-[90vw] ml-5 mt-2 md:ml-[10vw]   rounded-lg" src={women} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
