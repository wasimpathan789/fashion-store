import React from 'react'
// import mensJeans from '../../public/assets/images/1.jpg'
import {CatogeryApi} from '../Api/CatogeryApi'
const Categories = () => {
  return (
    <div className='grid grid-cols-3  gap-4 '>

        {
            CatogeryApi.map((category,index)=>{
                return(
                    <div className='w-[100%]  rounded-md overflow-hidden h-72 flex justify-center bg-red-500 items-center relative'>
                    <img className='w-[100%] h-[100%] object-cover' src={category.src} alt="" />
                    <div className=' absolute flex space-y-3 flex-col justify-center items-center'>
                    <span className='text-3xl font-semibold text-white'>{category.title}</span>
                    <button className='btn'> Shop Now</button>

                    </div>
                    
                </div>

                )
            })
        }
       
        
      
    </div>
  )
}

export default Categories
