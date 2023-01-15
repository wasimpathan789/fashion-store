import React from 'react'

const QuantityComponent = () => {
  return (
    <div className='flex gap-3'>
        <span className=''>Quantity</span>
        <div className=' flex '>
            <div className= 'bg-purple-500 cursor-pointer text-white w-6 flex justify-center items-center text-xl font-semibold rounded-l-md'>-</div>
            <div className='w-8 flex justify-center items-center border-purple-500 border-2'>1</div>
            <div className= 'bg-purple-500 cursor-pointer text-white w-6 flex justify-center items-center text-xl font-semibold rounded-r-md'>+</div>
        </div> 
    </div>
  )
}

export default QuantityComponent
