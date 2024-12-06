import React from 'react'

const About = (props) => {
  return (
    <div className='font-serif '>
       <div className="name md:ml-1">
        <div className="head flex gap-2">
            <p className='font-semibold md:text-2xl tracking-wide text-lg'>About of </p>
            <p className='text-blue-400 md:text-2xl tracking-wide text-lg font-semibold'>{props.name}</p>
        </div>
        <div className="jankari text-justify md:text-lg">Dr Priya Iyer is a dedicated accredited practising dietitian and passionate researcher with a profound commitment to advancing nutritional care in spinal cord injury (SCI). With extensive clinical experience spanning over two decades, predominantly as a clinical lead within a leading spinal and traumatic brain injury rehabilitation facility in NSW for most of that time, Priya continues to actively pursue research in SCI nutrition. Priya’s vision is to radically transform nutrition care and improve health outcomes for persons with SCI.  </div>
       </div>
        
        <div className="edu mt-7 md:ml-1">
        <div className="education text-blue-400 tracking-wider  text-xl font-semibold ">Education</div>
          <div className="college mt-3 md:ml-5">
               <p className="year font-mono text-blue-400">2000 - 20005</p>
                <div className="flex gap-10 md:gap-[20vw]">
                  <p className='text-gray-600 '>BSC from Neurologist</p>
                  <p className="cla text-gray-600">AIMS Delhi</p>
                </div>
          </div>
          <div className="college mt-3 md:ml-5">
               <p className="year font-mono text-blue-400">2000 - 20005</p>
                <div className="flex gap-10 md:gap-[20vw]">
                  <p className='text-gray-600 '>BSC from Neurologist</p>
                  <p className="cla text-gray-600">AIMS Delhi</p>
                </div>
          </div>
          <div className="college mt-3 md:ml-5">
               <p className="year font-mono text-blue-400">2000 - 20005</p>
                <div className="flex gap-10 md:gap-[20vw]">
                  <p className='text-gray-600 '>BSC from Neurologist</p>
                  <p className="cla text-gray-600">AIMS Delhi</p>
                </div>
          </div>
        </div>

        <div className="expirence mt-7 md:ml-1">
        <div className="education text-blue-400 tracking-wider  text-xl font-semibold ">Experience</div>
        <div className="cards md:gap-[3vw] md:flex-wrap md:flex md:w-[37vw] w-[90%] ">
          <div className="card rounded-lg md:ml-3 mt-3 md:w-[16vw] w-[100%] h-[100px] bg-yellow-100 border">
            <p className="c font-mono  text-yellow-900 ml-1">2015 - 2018</p>
            <p className="a mt-1 text-gray-700 ml-1">Associate Professor</p>
            <p className="l ml-1 text-gray-700">Tata Memorial Hospital Mumbai</p>
          </div>

          <div className="card rounded-lg md:ml-3 mt-3 md:w-[16vw] w-[100%] h-[100px] bg-yellow-100 border">
            <p className="c font-mono  text-yellow-900 ml-1">2015 - 2018</p>
            <p className="a mt-1 text-gray-700 ml-1">Associate Professor</p>
            <p className="l ml-1 text-gray-700">Tata Memorial Hospital Mumbai</p>
          </div>

          <div className="card rounded-lg md:ml-3 mt-3 md:w-[16vw] w-[100%] h-[100px] bg-yellow-100 border">
            <p className="c font-mono  text-yellow-900 ml-1">2015 - 2018</p>
            <p className="a mt-1 text-gray-700 ml-1">Associate Professor</p>
            <p className="l ml-1 text-gray-700">Tata Memorial Hospital Mumbai</p>
          </div>

          
        </div>


        </div>
            
    </div>
  )
}

export default About
