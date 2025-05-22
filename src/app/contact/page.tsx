import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-black'>
        <div className=' text-white  rounded-2xl p-6 flex-col  '>
        <h1 className='font-semibold text-xl'>Contact Me:</h1>
        <p className='font-semibold text-xl'>+91 84 3956 9625</p>

            <Link href="/">
            <button className='bg-emerald-700 px-3 py-2 '>Go Back</button></Link>

        </div>
    </div>
  )
}

export default page