import React from 'react'
import bg from "../Assest/medicalbg.png"
import video1 from "../Assest/video1.webp"
import video2 from "../Assest/video2.webp"
import video3 from "../Assest/video3.webp"
import video4 from "../Assest/video4.webp"
import video5 from "../Assest/video5.webp"
import video6 from "../Assest/video6.webp"
import video7 from "../Assest/video7.webp"
import video8 from "../Assest/video8.webp"
import video9 from "../Assest/video9.webp"
import video10 from "../Assest/video10.jpg"
import video11 from "../Assest/video11.jpg"
import video12 from "../Assest/video12.jpg"



const Medical = () => {

   


  return (
    
    <div className='medical bg-gray-50 max-w-screen-2xl min-h-screen '  >

        <div className="header flex font-serif pt-4 md:pt-10 justify-center md:text-6xl text-4xl font-bold ">Watch and Learn</div>
        <div className="hi md:block hidden">
        <div className="para flex justify-center text-xl  text-blue-950 md:pt-5 pt-2 font-serif ">Watch our expert-led videos to learn about various health-related issues and improve your well-being </div>
        </div>
      
      <div className="cards md:ml-[10vw] ml-5  flex md:gap-12 flex-wrap ">

        <a href="https://youtu.be/Um67DBL3ZRA?si=iWT2UuXTvnVpHHZo" target="_blank">
            <div className="card bg-white rounded-lg mt-2 md:mt-6 md:w-[25vw] md:h-[16vw] border w-[89vw] h-[57vw] ">
                <img className='  w-[94%] md:ml-3 md:mt-1  ml-2' src={video1} alt="" />
                <p className="head ml-2 mt-1 font-serif font-semibold text-lg">About Typhoid</p>

            </div>
        </a>

        <a href="https://youtu.be/iia_SIEnnvY?si=euPbuzqpY_rkriYU" target="_blank">
            <div className="card bg-white rounded-lg mt-4 md:mt-6 md:w-[25vw] md:h-[16vw] border w-[89vw] h-[57vw] ">
                <img className='  w-[94%] mt-1 md:ml-3 md:mt-1  ml-2' src={video2} alt="" />
                <p className="head ml-2 mt-1 font-serif font-semibold text-lg">Common Diseases</p>

            </div>
        </a>

        <a href="https://www.youtube.com/watch?v=UCjD3zz7v00" target="_blank">
            <div className="card bg-white rounded-lg mt-4 md:mt-6 md:w-[25vw] md:h-[16vw] border w-[89vw] h-[57vw] ">
                <img className=' mt-1  w-[94%] md:ml-3 md:mt-1  ml-2' src={video3} alt="" />
                <p className="head ml-2 mt-1 font-serif font-semibold text-lg">About Tuberculosis</p>

            </div>
        </a>
        <a href="https://youtu.be/P-kod5tn7iw?si=ymQwAcK5Ggl_XC2W" target="_blank">
            <div className="card bg-white rounded-lg mt-4 md:mt-6 md:w-[25vw] md:h-[16vw] border w-[89vw] h-[57vw] ">
                <img className=' mt-1  w-[94%] md:ml-3 md:mt-1  ml-2' src={video4} alt="" />
                <p className="head ml-2 mt-1 font-serif font-semibold text-lg">Psoriasis Skin condition</p>

            </div>
        </a>

        <a href="https://youtu.be/tw6rkIswzzc?si=QSjIqylAg6jp0A6X" target="_blank">
            <div className="card bg-white rounded-lg mt-4 md:mt-6 md:w-[25vw] md:h-[16vw] border w-[89vw] h-[57vw] ">
                <img className=' mt-1  w-[94%] md:ml-3 md:mt-1  ml-2' src={video5} alt="" />
                <p className="head ml-2 mt-1 font-serif font-semibold text-lg">Arthritis</p>

            </div>
        </a>

        <a href="https://youtu.be/UteddgqD6wU?si=02YbyNeRwMJ0TtFo" target="_blank">
            <div className="card bg-white rounded-lg mt-4 md:mt-6 md:w-[25vw] md:h-[16vw] border w-[89vw] h-[57vw] ">
                <img className='mt-1  w-[94%] md:ml-3 md:mt-1  ml-2' src={video6} alt="" />
                <p className="head ml-2 mt-1 font-serif font-semibold text-lg">Urine Infection</p>

            </div>
        </a>

        <a href="https://youtu.be/Q4JAjF1WDOo?si=0S-wyYOcul80D7bz" target="_blank">
            <div className="card bg-white rounded-lg mt-4 md:mt-6 md:w-[25vw] md:h-[16vw] border w-[89vw] h-[57vw] ">
                <img className='mt-1  w-[94%] md:ml-3 md:mt-1  ml-2' src={video7} alt="" />
                <p className="head ml-2 mt-1 font-serif font-semibold text-lg">Common STDs</p>

            </div>
        </a>

        <a href="https://youtu.be/x6PDPpaS_PA?si=ug89eDEXdJ6zZfkk" target="_blank">
            <div className="card bg-white rounded-lg mt-4 md:mt-6 md:w-[25vw] md:h-[16vw] border w-[89vw] h-[57vw] ">
                <img className='mt-1  w-[94%] md:ml-3 md:mt-1  ml-2' src={video8} alt="" />
                <p className="head ml-2 mt-1 font-serif font-semibold text-lg">Fungal Infection</p>

            </div>
        </a>

        <a href="https://youtu.be/nXWVqGLqp7c?si=_hkhu9CD6AGoiUiu" target="_blank">
            <div className="card bg-white rounded-lg mt-4 md:mt-6 md:w-[25vw] md:h-[16vw] border w-[89vw] h-[57vw] ">
                <img className='mt-1  w-[94%] md:ml-3 md:mt-1  ml-2' src={video9} alt="" />
                <p className="head ml-2 mt-1 font-serif font-semibold text-lg">Urticaria</p>

            </div>
        </a>

        <a href="https://youtu.be/onV7supPaPc?si=SzQWO9COBajIwGM4" target="_blank">
            <div className="card bg-white rounded-lg mt-4 md:mt-6 md:w-[25vw] md:h-[16vw] border w-[89vw] h-[57vw] ">
                <img className='mt-1  w-[94%] md:ml-3 md:mt-1  ml-2' src={video10} alt="" />
                <p className="head ml-2 mt-1 font-serif font-semibold text-lg">Sore Throat</p>

            </div>
        </a>

        <a href="https://youtu.be/8bPK548DsSc?si=XAKcBQoxs5F6oFqI" target="_blank">
            <div className="card bg-white rounded-lg mt-4 md:mt-6 md:w-[25vw] md:h-[16vw] border w-[89vw] h-[57vw] ">
                <img className='mt-1  w-[94%] md:ml-3 md:mt-1  ml-2 ' src={video11} alt="" />
                <p className="head ml-2 mt-1 font-serif font-semibold text-lg">About Allergy Medicines</p>

            </div>
        </a>

        <a href="https://youtu.be/kF2iu8ld_H8?si=FvN-25FTORiaPq4d" target="_blank">
            <div className="card bg-white rounded-lg mt-4 md:mt-6 md:w-[25vw] md:h-[16vw] border w-[89vw] h-[57vw] ">
                <img className='mt-1  w-[94%] md:ml-3 md:mt-1  ml-2' src={video12} alt="" />
                <p className="head ml-2 mt-1 font-serif font-semibold text-lg">About Diarrohea</p>

            </div>
        </a>
        
      </div>
        
          

        

    </div>
    
    
  )
}

export default Medical
