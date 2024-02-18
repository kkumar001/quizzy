import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';


const Card = ({ title }) => {
  return (
    <div className='w-[300px] h-[260px] hover:bg-transparent bg-[#3f4141dd] rounded-lg border border-[#515451] flex flex-col p-4 justify-between sm:mr-[30px] sm:mb-0 mb-[30px]'>
      <p className='text-[#959794] text-sm'>Last Practice Linear etc etc 28/02/23</p>
      <div className=''>
        <FontAwesomeIcon icon={faArrowTrendUp} className='text-white h-[70px] mb-2' />
        <h3 className='text-white text-[30px] font-medium'>{title}</h3>
      </div>
      <p className='text-white text-sm'>A description of the above parameter goes here.</p>
    </div>
  )
}

export default Card