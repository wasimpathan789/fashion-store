import React from 'react'
import Categories from '../Components/Categories'

const CategoryPage = () => {
  return (
    <div className='container p-8'>
        <div className=' text-2xl mt-4 font-bold text-green-600' >Fashion Category</div>
       
        <div className='mt-8'>
        <Categories/>


        </div>

      
    </div>
  )
}

export default CategoryPage
