import React, { useContext, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Telecontext } from "../../Context/Telecontext";
import cardio from "../Assest/cardiologist.png";
import psycho from "../Assest/psychiatrist.png"
import ophtha from "../Assest/ophthalmologist.png"
import nphro from "../Assest/nephrologist.png"
import anesthesia from "../Assest/anesthesiologist.png"
import ortho from "../Assest/orthopedics.png"
const Appointment = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(Telecontext);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
    fetchSuggestions(inputValue);
  };

  const fetchSuggestions = (inputValue) => {
    if (!inputValue) return;

    const suggestions = doctors
      .filter((doctor) =>
        doctor.specialty.toLowerCase().includes(inputValue.toLowerCase())
      )
      .map((doctor) => ({
        label: doctor.specialty,
        value: doctor.id,
      }));

    const uniqueSuggestions = Array.from(
      new Set(suggestions.map((s) => s.label))
    ).map((label) => {
      return suggestions.find((s) => s.label === label);
    });

    setOptions(uniqueSuggestions);
  };

  const handleOptionSelect = (selectedOption) => {
   
    navigate("/VideoConsultant/doctors", { state: { selectedOption } });
  };

  return (
    <div className="Sepecialty">
      <div className="main lg:text-4xl font-semibold font-serif lg:w-[90vw] w-screen lg:h-[150px] h-[20vw] lg:ml-20 lg:mt-5 bg-blue-100 rounded-lg tracking-wide text-blue-900 pl-5 pt-3 lg:pt-5 text-xl shadow-md">
        Find a Doctor
      </div>
      <div className="input">
        <div className="content md:flex">
          <div className="svg md:block md:ml-60 md:mt-10 flex justify-center mt-2">
            <svg
              width="80"
              height="80"
              viewBox="0 0 111 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M98.1091 79.222H68.7761C68.1011 79.222 67.5537 78.6749 67.5537 77.9996V70.6664C67.5537 69.9912 68.1009 69.4441 68.7761 69.4441H72.4427L72.4409 41.5908L72.4378 41.4809C72.4287 40.8662 72.8778 40.3405 73.4863 40.2533C74.1452 40.1586 74.8083 40.1108 75.4574 40.1108H85.5613C93.1545 40.1108 99.3318 46.2881 99.3318 53.881V77.9996C99.3315 78.6746 98.7844 79.222 98.1091 79.222ZM69.9982 76.7775H96.887V53.881C96.887 47.6359 91.8061 42.5553 85.5613 42.5553H75.4574C75.2688 42.5553 75.0784 42.5604 74.8872 42.5703V70.6664C74.8872 71.3414 74.34 71.8886 73.6648 71.8886H69.9982V76.7775Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M73.6673 71.8883H34.5564C33.8814 71.8883 33.334 71.3414 33.334 70.6662V41.6586C33.334 34.0657 39.5113 27.8884 47.1042 27.8884H61.1192C68.5947 27.8884 74.7697 33.9694 74.8843 41.4441L74.8863 41.5047C74.8879 41.5559 74.8897 41.6071 74.8897 41.6586V70.6662C74.8897 71.3414 74.3425 71.8883 73.6673 71.8883ZM35.7787 69.4441H72.4452L72.4434 41.5911L72.4403 41.4809C72.3459 35.3344 67.2675 30.3331 61.1192 30.3331H47.1042C40.8591 30.3331 35.7785 35.4138 35.7785 41.6589V69.4441H35.7787Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M68.7786 101.222H39.4453C38.7703 101.222 38.2231 100.675 38.2231 99.9999V70.6666C38.2231 69.9913 38.7703 69.4442 39.4453 69.4442H68.7786C69.4535 69.4442 70.0009 69.9911 70.0009 70.6666V99.9999C70.0007 100.675 69.4535 101.222 68.7786 101.222ZM40.6674 98.7775H67.5562V71.8887H40.6674V98.7775Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M93.7094 101.222H68.7761C68.1011 101.222 67.5537 100.675 67.5537 100V77.9999C67.5537 77.3249 68.1009 76.7777 68.7761 76.7777H93.7094C94.3843 76.7777 94.9317 77.3246 94.9317 77.9999V100C94.9315 100.675 94.3843 101.222 93.7094 101.222ZM69.9982 98.7776H92.487V79.222H69.9982V98.7776Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M54.1119 23.0001C48.0466 23.0001 43.1118 18.0656 43.1118 12.0001C43.1118 5.9345 48.0463 1 54.1119 1C60.1774 1 65.1119 5.93476 65.1119 12.0001C65.1119 18.0653 60.1777 23.0001 54.1119 23.0001ZM54.1119 3.44474C49.3944 3.44474 45.5563 7.2826 45.5563 12.0003C45.5563 16.7178 49.3944 20.5559 54.1119 20.5559C58.8293 20.5559 62.6674 16.7178 62.6674 12.0003C62.6677 7.2826 58.8296 3.44474 54.1119 3.44474Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M82.2203 35.2225C76.8287 35.2225 72.4424 30.8362 72.4424 25.4448C72.4424 20.0534 76.8287 15.6671 82.2203 15.6671C87.6117 15.6671 91.998 20.0534 91.998 25.4448C91.9977 30.8362 87.6114 35.2225 82.2203 35.2225ZM82.2203 18.1113C78.1765 18.1113 74.8869 21.401 74.8869 25.4445C74.8869 29.4881 78.1765 32.778 82.2203 32.778C86.2638 32.778 89.5535 29.4883 89.5535 25.4445C89.5533 21.4013 86.2636 18.1113 82.2203 18.1113Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M39.4451 79.222H10.1118C9.43681 79.222 8.88965 78.6749 8.88965 77.9996V53.881C8.88965 46.2881 15.067 40.1108 22.6599 40.1108H32.7638C33.4129 40.1108 34.0759 40.1589 34.7349 40.2533C35.3436 40.3405 35.7924 40.8662 35.7834 41.4809L35.7785 41.6589V69.4441H39.4451C40.12 69.4441 40.6674 69.991 40.6674 70.6665V77.9996C40.6672 78.6746 40.12 79.222 39.4451 79.222ZM11.3339 76.7775H38.2227V71.8886H34.5561C33.8811 71.8886 33.3337 71.3417 33.3337 70.6665V42.5703C33.1425 42.5604 32.9521 42.5553 32.7635 42.5553H22.6596C16.4145 42.5553 11.3339 47.6359 11.3339 53.881V76.7775Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M39.4449 101.222H14.5117C13.8367 101.222 13.2896 100.675 13.2896 100V77.9999C13.2896 77.3249 13.8367 76.7777 14.5117 76.7777H39.4449C40.1199 76.7777 40.6673 77.3246 40.6673 77.9999V100C40.6671 100.675 40.1199 101.222 39.4449 101.222ZM15.7338 98.7776H38.2226V79.222H15.7338V98.7776Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M26.0008 35.2225C20.6095 35.2225 16.2231 30.8362 16.2231 25.4448C16.2231 20.0534 20.6095 15.6671 26.0008 15.6671C31.3922 15.6671 35.7785 20.0534 35.7785 25.4448C35.7788 30.8362 31.3925 35.2225 26.0008 35.2225ZM26.0008 18.1113C21.9573 18.1113 18.6674 21.401 18.6674 25.4445C18.6674 29.4881 21.957 32.778 26.0008 32.778C30.0443 32.778 33.334 29.4883 33.334 25.4445C33.334 21.4013 30.0443 18.1113 26.0008 18.1113Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M54.1121 45C53.8759 45 53.6395 44.9314 53.4341 44.7946L38.7674 35.0169C38.2058 34.6425 38.0542 33.8835 38.4285 33.3219C38.8029 32.7602 39.5619 32.6086 40.1233 32.983L54.1119 42.3087L68.1005 32.983C68.6624 32.6084 69.4209 32.7605 69.7955 33.3219C70.1698 33.8835 70.0182 34.6423 69.4563 35.0169L54.7897 44.7946C54.5851 44.9317 54.3486 45 54.1121 45Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M54.1118 57.2224C53.4368 57.2224 52.8896 56.6753 52.8896 56V43.7779C52.8896 43.1029 53.4368 42.5555 54.1118 42.5555C54.7867 42.5555 55.3341 43.1029 55.3341 43.7779V56C55.3341 56.675 54.787 57.2224 54.1118 57.2224Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M54.1095 62.1114C52.0877 62.1114 50.4429 60.4668 50.4429 58.4448C50.4429 56.4228 52.0877 54.7779 54.1095 54.7779C56.1312 54.7779 57.7763 56.4225 57.7763 58.4448C57.7763 60.4668 56.1315 62.1114 54.1095 62.1114ZM54.1095 57.2227C53.4358 57.2227 52.8874 57.7709 52.8874 58.445C52.8874 59.1187 53.4358 59.6672 54.1095 59.6672C54.7834 59.6672 55.3318 59.119 55.3318 58.445C55.3318 57.7709 54.7834 57.2227 54.1095 57.2227Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M81.0026 101.222C80.3277 101.222 79.7803 100.675 79.7803 100V85.3334C79.7803 84.6584 80.3274 84.111 81.0026 84.111C81.6779 84.111 82.225 84.6582 82.225 85.3334V100C82.225 100.675 81.6776 101.222 81.0026 101.222Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M27.2231 101.222C26.5481 101.222 26.001 100.675 26.001 100V85.3334C26.001 84.6584 26.5481 84.111 27.2231 84.111C27.898 84.111 28.4455 84.6582 28.4455 85.3334V100C28.4455 100.675 27.8983 101.222 27.2231 101.222Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M54.1118 101.222C53.4368 101.222 52.8896 100.675 52.8896 100V77.9999C52.8896 77.3249 53.4368 76.7777 54.1118 76.7777C54.7867 76.7777 55.3341 77.3246 55.3341 77.9999V100C55.3341 100.675 54.787 101.222 54.1118 101.222Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M105.445 111H5.22335C4.54839 111 4.00098 110.453 4.00098 109.778C4.00098 109.102 4.54813 108.555 5.22335 108.555H105.445C106.12 108.555 106.668 109.102 106.668 109.778C106.668 110.453 106.121 111 105.445 111Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M87.1114 71.8886C84.4154 71.8886 82.2227 69.6956 82.2227 66.9999V60.8888C82.2227 60.2139 82.7696 59.6665 83.4448 59.6665H90.7782C91.4532 59.6665 92.0006 60.2136 92.0006 60.8888V66.9999C92.0001 69.6956 89.8071 71.8886 87.1114 71.8886ZM84.6669 62.111V66.9997C84.6669 68.3475 85.7635 69.4442 87.1114 69.4442C88.459 69.4442 89.5556 68.3475 89.5556 66.9997V62.111H84.6669Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
              <path
                d="M21.1119 71.8886C18.4162 71.8886 16.2231 69.6956 16.2231 66.9999V60.8888C16.2231 60.2139 16.7703 59.6665 17.4455 59.6665H24.7787C25.4537 59.6665 26.0011 60.2136 26.0011 60.8888V66.9999C26.0008 69.6956 23.8078 71.8886 21.1119 71.8886ZM18.6676 62.111V66.9997C18.6676 68.3475 19.7643 69.4442 21.1121 69.4442C22.46 69.4442 23.5566 68.3475 23.5566 66.9997V62.111H18.6676Z"
                fill="#4062BB"
                stroke="#4062BB"
                stroke-width="2"
              ></path>
            </svg>
          </div>
          <div className="para md:mt-9">
            <p className="special font-serif md:text-5xl md:ml-7 md:font-semibold text-2xl ml-[5vw] font-bold">
              Speciality
            </p>
            <p className="md:ml-7 md:mt-3 md:text-xl font-medium font-serif ml-[5vw]">
              Are you looking for a specific type of specialist for your
              condition?
            </p>
          </div>
        </div>
        <div className="bar">
          <Select
            onInputChange={handleInputChange}
            className="md:ml-[22vw] md:w-[45vw] md:mt-6 rounded-xl w-[80vw] ml-[8vw] mt-5"
            type="search"
            value={inputValue}
            placeholder="Search for speciality"
            onChange={handleOptionSelect}
            options={options}
          />
        </div>
      </div>

      <div className="bottom mt-[5vw] md:mt-[3vw]">
        <div className="popular  flex text-xl justify-center md:text-3xl font-serif font-semibold">
          Our Popular Consults
        </div>

        <div className="cards lg:ml-[15vw] lg:gap-[20px] md:flex flex-wrap">
          <div className="card lg:w-[350px] md:ml-[0vw]   pl-5 pb-1  gap-5  flex ml-[5vw]  mt-[5vw] w-[86vw]   rounded-lg    border">
            <img
              className=" ml-[5vw] md:ml-[1vw] h-auto w-[10vw]  md:w-[4vw] md:h-auto"
              src={cardio}
              alt=""
            />
            <p className="font-serif md:pt-6 pt-3 font-medium text-xl md:text-3xl">
              Cardiologist
            </p>
          </div>

          <div className="card lg:w-[350px] md:ml-[0vw] lg:pl-1  pl-5 pb-1  gap-5  flex ml-[5vw]  mt-[5vw] w-[86vw]   rounded-lg    border">
            <img
              className=" ml-[5vw] md:ml-[1vw] h-auto w-[10vw]  md:w-[4vw] md:h-auto"
              src={anesthesia}
              alt=""
            />
            <p className="font-serif md:pt-6 pt-3 font-medium text-xl md:text-3xl">
              Anesthesiologist
            </p>
          </div>
          <div className="card lg:w-[350px] md:ml-[0vw]  pl-5 pb-1  gap-5  flex ml-[5vw]  mt-[5vw] w-[86vw]   rounded-lg    border">
            <img
              className=" ml-[5vw] md:ml-[1vw] h-auto w-[10vw]  md:w-[4vw] md:h-auto"
              src={ortho}
              alt=""
            />
            <p className="font-serif md:pt-6 pt-3 font-medium text-xl md:text-3xl">
              Orthologist
            </p>
          </div>

          <div className="card lg:w-[350px] md:ml-[0vw]  pl-5 pb-1  gap-5  flex ml-[5vw]  mt-[5vw] w-[86vw]   rounded-lg    border">
            <img
              className=" ml-[5vw] md:ml-[1vw] h-auto w-[10vw]  md:w-[4vw] md:h-auto"
              src={nphro}
              alt=""
            />
            <p className="font-serif md:pt-6 pt-3 font-medium text-xl md:text-3xl">
              Nephrologist
            </p>
          </div>

          <div className="card lg:w-[350px] md:ml-[0vw]  pl-5 pb-1  gap-5  flex ml-[5vw]  mt-[5vw] w-[86vw]   rounded-lg    border">
            <img
              className=" ml-[5vw] md:ml-[1vw] h-auto w-[10vw]  md:w-[4vw] md:h-auto"
              src={ophtha}
              alt=""
            />
            <p className="font-serif md:pt-6 pt-3 font-medium text-xl md:text-3xl">
              Ophthalmologist
            </p>
          </div>

          <div className="card lg:w-[350px] md:ml-[0vw]  pl-5 pb-1  gap-5  flex ml-[5vw]  mt-[5vw] w-[86vw]   rounded-lg    border">
            <img
              className=" ml-[5vw] md:ml-[1vw] h-auto w-[10vw]  md:w-[4vw] md:h-auto"
              src={psycho}
              alt=""
            />
            <p className="font-serif md:pt-6 pt-3 font-medium text-xl md:text-3xl">
              Psychitarist
            </p>
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default Appointment;
