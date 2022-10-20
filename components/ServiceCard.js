import React from 'react'
import {AiOutlineCloudServer } from 'react-icons/ai'
const ServiceCard = ({data}) => {
    const { title, details , icon} = data
  return (
    <div className='service-card hover:scale-105 ease-in-out duration-300 hover:shadow-2xl flex items-center gap-4 bg-white rounded-xl p-5 shadow-lg cursor-pointer'>
        <div className="icons text-orange-500">
            {icon}
        </div>
        <div className="s-details">
            <h4 className='text-xl font-bold text-zinc-700'>{title}</h4>
            <p className='text-lg font-semibold text-zinc-600'>{details}</p>
        </div>
    </div>
  )
}

export default ServiceCard