import React from 'react'
//linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%));
//linear-gradient(to bottom, hsl(256, 72%, 46%), hsla(241, 72%, 46%, 0)) #4E21CA #2421CA
const Results = () => {
  return (
    <div className=' text-center h-[48vh] rounded-3xl   bg-gradient-to-b from-[#7857FF] to-[#2E2BE9] '>
    <p className='text-resultText text-xl  font-bold pt-5'>Your Result</p>
    <div className='flex flex-col m-auto justify-center shadow-sm my-5   w-40 h-40 rounded-full bg-gradient-to-b from-[#4E21CA] to-[#2421ca00]'>
    <span className='text-5xl text-white '>76</span>
    <a className='mt-2 text-circleGray'>of 100</a>
    
    </div>
    <div className='flex flex-col   '>
    <a className='text-3xl text-white font-semibold'>Great</a>
    
    <p className='mt-3 text-resultText mx-auto px-10 '> You scored higher than 65% of the people who have taken these tests.</p>


    </div>
   

    </div>
  )
}

export default Results