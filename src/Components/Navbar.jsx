import React from 'react'
const Navbar = () => {
  return (
    <div className='flex flex-row justify-between w-4/5 mx-auto rounded-md my-1 bg-slate-800 text-orange-200 mb-5 py-2' >
      <h3 className='mx-10 font-extrabold hover:cursor-pointer'>MyTask</h3>
      <ul className='flex gap-5  text-lg mx-10'>
        <li className='hover:font-bold hover:cursor-pointer'>Home</li>
        <li className='hover:font-bold hover:cursor-pointer'>Tasks</li>
      </ul>
    </div>
  )
}

export default Navbar
