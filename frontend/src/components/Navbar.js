import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-300 flex justify-between items-center p-3'>
        <div className='mx-2'>
            <div className='text-3xl font-semibold mx-2'>BookStore</div>
        </div>
        <div className='flex gap-5 mx-2 text-xl font-semibold'>
            <Link to={"/"}><div>Home</div></Link>
            <Link to={"/book"}><div>Books</div></Link>
            <Link to={"/addBook"}><div>AddBooks</div></Link>
        </div>
    </div>
  )
}

export default Navbar