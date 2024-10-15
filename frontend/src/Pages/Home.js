import React from 'react'

const Home = () => {
  return (
    <div className='flex h-auto items-center m-2 justify-around mx-10'>
        <div className=''>
            <div className='text-7xl font-bold'>BOOK STORE</div>
            <div className='text-4xl font-bold'>FOR YOU</div>
            <div className='my-2'>check out the books from here</div>
            <button className='font-semibold rounded-sm hover:bg-gray-200 py-2 px-3 border border-black'>View Books</button>
        </div>
        <div className='mx-2'>
            <img className='h-[89vh] w-30vw' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnuPsisqa_wuoUhi0ogowQCQrPAp_mvspGCA&s" alt="Girl Reading The Book image" />
        </div>
    </div>
  )
}

export default Home