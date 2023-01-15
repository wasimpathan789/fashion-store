import React from 'react'

const PriceFilterComponent = () => {
  return (
    <div className='flex  items-center gap-3'>
    <span>
    Price 

    </span>
    <select className='border-yellow-400 cursor-pointer border-2 rounded-md outline-none'>
      <option selected disabled>Select</option>
      <option value="">Low to High</option>
      <option value="">High to Low</option>
      <option value="">Newest First</option>
      <option value="">Oldest First</option>

    </select>
    
  </div>
  )
}

export default PriceFilterComponent
