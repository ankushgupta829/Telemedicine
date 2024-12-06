import React ,{useState ,useEffect} from 'react'

const Feedback = () => {
  const [array, setarray] = useState([])
  const [string, setstring] = useState("")
  const [rating, setrating] = useState(0)
  
  
  

  const handlestar = (index)=>{
    setrating(index)
  }
  const handlesubmit = ()=>{
    const data = {rate : rating , text : string , date : new Date().toLocaleDateString()}
    const updatedData = [...array , data]
    setarray(updatedData)
    localStorage.setItem('reviews',JSON.stringify(updatedData))
    setrating(0)
    setstring("")
    
  }
    useEffect(() => {
      const SavedData  = localStorage.getItem('reviews')
      if(SavedData)setarray(JSON.parse(SavedData))
      
    }, [])
    


  return (
    <div className='font-serif mt-4 ml-1 md:ml-2'>
      {array.length === 0 ?<div className='font-semibold text-lg'> Write a review </div> :  <div className="head font-semibold text-xl">Customer  Reviews ({array.length})</div>}


      <div className="likhai mt-3">
          {array.map((item ,index)=>{
            return(
              <div key={index} className="profile">
              <div className="flex md:gap-5 gap-3 ">
                <div className="p flex gap-3">
                <i className="fa fa-user mt-1" style={{ fontSize: '30px', color: '#333' }}></i>
                 <div className="">
                  <p className="n text-sm text-blue-700 font-semibold">John Wick</p>
                  <p className="date text-sm">7 June 2024</p>
                  <p className="text md:mt-1 md:ml-1 pb-3">{item.text}</p>
                 </div>
                </div>
                <div className="star">
                  {Array(item.rate).fill(0).map((_,index)=>{
                  return(
                    <span id='index'>
                      <i className='fa fa-star text-[25px] w-[25px] text-yellow-300'></i>
                    </span>
                  )
                  })}
                </div>
              </div>
              </div>
            )
            
          })}
      </div>



      <div className="rating mt-9">
      <p className="rate font-semibold">Rate your experience</p>
      {[1,2,3,4,5].map((index)=>{
        return (
          <span className='' key={index}>
          <i
            onClick={() => { handlestar(index) }}
            className={`cursor-pointer text-[25px] w-[30px] fa fa-star ${index <= rating ? 'text-yellow-300' : 'text-gray-300'}`}
          ></i>
        </span>
        
        )
      })}

      </div>

      <div className="review mt-5">
        <div className="w font-semibold">Write Your review & Suggestions</div>
        <textarea value={string} onChange={(e)=>{setstring(e.target.value)}} type="text" className="md:w-[40vw]  md:h-[150px] rounded-lg w-[95%] md:ml-1 mt-5 h-[100px]" ></textarea>


      </div>

      <div onClick={handlesubmit} className="submit bg-blue-600 text-white pt-1 pl-6 cursor-pointer rounded-md  ml-24 md:ml-60 mt-5 w-[110px] h-[30px] border">Submit</div>
     
     
    </div>
  )
}

export default Feedback
