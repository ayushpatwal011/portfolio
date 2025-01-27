import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full p-4 bg-emerald-950 text-gray-200 flex justify-center items-center'>
        <nav className=' flex justify-center items-center gap-5 font-semibold'>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>Contect</Link>
        </nav>
    </div>
  )
}

export default Navbar