import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import imgLogo from '../assets/images/logo.png';
const Navbar = () => {
  return (
    <div className='parent-div flex justify-between shadow-md h-[70px]'>
        <div className='left-div flex justify-center p-2 cursor-pointer '>
            <img className=' h-10 w-10 rounded-md' src={imgLogo} alt="" />
            <span className='mt-2 mx-2 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 text-xl font-bold'>Royal Fashion Store</span>
            {/* text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 */}
        </div>
        <div className='center-div'>
          <input type="text" />

        </div>
        <div className='right-div flex justify-center space-x-2 p-4 cursor-pointer'>
          <div className='bg-gradient-to-br cursor-pointer from-pink-300 to-red-600 px-4 pt-2 pb-2 rounded-md flex justify-center  '> New ?</div>
          <div className='bg-gradient-to-br cursor-pointer from-pink-300 to-red-600 px-4 pt-2 pb-2 rounded-md flex justify-center  '> Sign In</div>
        
          <ShoppingCartIcon/>

          

        </div>
      
    </div>
  )
}

export default Navbar
