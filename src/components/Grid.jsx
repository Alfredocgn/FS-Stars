import { useState } from "react"


export const Grid = () => {

  const [stars,setStars] =useState([1,2,3,4,5,6,7,8,9]) 
  const currentMonth = new Date().getMonth() + 1 
  console.log(currentMonth)

  // const moveStars = () => {

  //   setStars(stars.map(star => {
  //     return(
  //       star - 1 <= 0 ? star - 1 + 9 : star -1
  //     )
  //   }))

  // }
  // console.log(stars)


      
  return (
    <div className="flex flex-row ">
    <div className="w-1/9 ">
      <div className="h-16 w-16 border-2 border-black flex justify-center items-center text-2xl relative">2 <span className='text-sm absolute top-0 right-1 text-red-600 font-semibold'>3</span ><span className='text-sm absolute top-0 left-1 text-red-600 font-semibold'>SE</span></div>
      <div className="h-16 w-16 border-2 border-black flex justify-center items-center text-2xl relative">1 <span className='text-sm absolute top-0 right-1 text-red-600 font-semibold'>2</span><span className='text-sm absolute top-0 left-1 text-red-600 font-semibold'>E</span></div>
      <div className="h-16 w-16 border-2 border-black flex justify-center items-center text-2xl relative">6 <span className='text-sm absolute top-0 right-1 text-red-600 font-semibold'>7</span><span className='text-sm absolute top-0 left-1 text-red-600 font-semibold'>NE</span></div>

    </div>
    <div className="w-1/9">
      <div className="h-16 w-16 border-2 border-black flex justify-center items-center text-2xl relative">7 <span className='text-sm absolute top-0 right-1 text-red-600 font-semibold'>8</span><span className='text-sm absolute top-0 left-1 text-red-600 font-semibold'>S</span></div>
      <div className="h-16 w-16 border-2 border-black flex justify-center items-center text-2xl relative">3 <span className='text-sm absolute top-0 right-1 text-red-600 font-semibold'>4</span><span className='text-sm absolute top-0 left-1 text-red-600 font-semibold'>C</span></div>
      <div className="h-16 w-16 border-2 border-black flex justify-center items-center text-2xl relative">8 <span className='text-sm absolute top-0 right-1 text-red-600 font-semibold'>9</span><span className='text-sm absolute top-0 left-1 text-red-600 font-semibold'>N</span></div>

    </div>
    <div className="w-1/9">
      <div className="h-16 w-16 border-2 border-black flex justify-center items-center text-2xl relative">9 <span className='text-sm absolute top-0 right-1 text-red-600 font-semibold'>1</span><span className='text-sm absolute top-0 left-1 text-red-600 font-semibold'>SO</span></div>
      <div className="h-16 w-16 border-2 border-black flex justify-center items-center text-2xl relative">5 <span className='text-sm absolute top-0 right-1 text-red-600 font-semibold'>6</span><span className='text-sm absolute top-0 left-1 text-red-600 font-semibold'>O</span></div>
      <div className="h-16 w-16 border-2 border-black flex justify-center items-center text-2xl relative">4 <span className='text-sm absolute top-0 right-1 text-red-600 font-semibold'>5</span><span className='text-sm absolute top-0 left-1 text-red-600 font-semibold'>NO</span></div>
    </div>
  </div>
  )
}
