import React from 'react'

const SizeFilterComponent = () => {
  return (
    <div className=' flex  items-center gap-3'>
      <span>
      Size 

      </span>
      <select className='border-yellow-400 cursor-pointer border-2 rounded-md outline-none'>
        <option selected disabled>Select</option>
        <option value="">Small</option>
        <option value="">Medium</option>
        <option value="">Large</option>
        <option value="">Extra Large</option>
        <option value="">Extra Small</option>

      </select>
      
    </div>
  )
}

export default SizeFilterComponent
