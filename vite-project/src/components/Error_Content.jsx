import React from 'react'
import { Link } from 'react-router-dom'

const Error_Content = () => {
  return (
    <div className='mt-10 flex justify-center items-center flex-col '> 
        <div className='flex flex-col justify-center items-center '>
            <h1 className='text-9xl font-bold text-[#FFCF00]'>404</h1>
            <span className='text-4xl my-10'>OOps! This is Missing</span>
            <h1 className='text-2xl font-reguler'>Sorry, the page you’re looking for is not available or has been moved.</h1>
        </div>
        <div className='flex justify-center items-center  '>
            <img className='h-[343px] w-[928px] object-center object-cover' src="imgs/error.png" alt="" />
        </div>

        <div className='mt-10 mb-30'>
            <button className='bg-[#FFCF00] text-white px-10 py-3 rounded-4xl text-xl '><Link to='/'>Go To Home</Link></button>
        </div>
    </div>
  )
}

export default Error_Content