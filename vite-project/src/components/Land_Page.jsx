import React from 'react'

const Land_Page = () => {
  return (
    <>
      <div className=' h-screen w-screen  bg-cover bg-[url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] relative'>
    </div>
    <div className="content absolute top-0 left-0 h-full w-full bg-black/70 text-white">
        <div className='flex justify-between py-10 px-10 '>
        <div>
          <h1 className='text-4xl cursor-pointer font-semibold'>Diverse Food</h1>
        </div>
        <div className='flex gap-5 text-2xl font-bold'>
        <h3 className='cursor-pointer'>Home</h3>
        <h3 className='cursor-pointer'>Menu</h3>
        <h3 className='cursor-pointer'>About Us</h3>
        <h3 className='cursor-pointer'>Best Seller</h3>
        </div>
      </div>
      <div className='px-10 absolute top-66.25'>
        <h1 className='text-6xl font-sans font-normal'>Welcom to </h1>
        <span className='text-8xl font-bold font-sans text-[#00a890]'>Diverse Restaurant</span>
      </div>
      <div className='px-10 absolute top-128 font-normal text-4xl w-216.25'> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nostrum labore ut enim.</p></div>
      <div className='px-10 absolute top-174'> 
        <button className=' w-67.5 h-16.25 bg-[#00A890] rounded-4xl text-2xl '>Order Now</button>
        </div>
    </div>
    </>
  )
}

export default Land_Page