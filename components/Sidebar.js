import React from 'react'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className='sidebar p-3'>
        <div className="profile flex flex-col items-center justify-center gap-4">
            <Image src='/images/profile.png' alt='profile-cwp' height={300} width={300} />
            <h2 className='text-2xl uppercase font-bold text-zinc-700'>Prince <span className='text-orange-500'>Ahmed</span></h2>
        </div>
    </div>
  )
}

export default Sidebar