import React from 'react'

const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className='mb-20 bg-slate-700  
    dark:bg-gray-800'>
        <div className="container backdrop-blur-sm py-10">
            <div className="space-y-6 max-w-xl mx-auto">
                <h1 className="text-2xl text-center sm:text-left 
                sm:text-4xl font-semibold">Get Notified About New Products</h1>
                <input type="email" data-aos="fade-up" placeholder='Enter Your email' 
                className='w-full p-3 text-black bg-amber-50' />
            </div>
        </div>
    </div>
  )
}

export default Subscribe;