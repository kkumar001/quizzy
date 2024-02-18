import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

const Leaderboard = () => {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    return (
        <div className='w-full h-[325px] bg-[#454d42] rounded-lg border border-[#565d58] mt-4 overflow-auto'>
            <div className='w-full top-0 sticky h-[40px] bg-[#525957] flex items-center border border-[#6a7562] rounded-lg'>
                <p className='ml-4 text-sm font-light'>Leaderboard</p>
            </div>
            <div className='w-full h-auto px-4 pb-2 flex flex-col overflow-auto'>
                {array.map((n) => (
                    <div key={n} className='w-full h-[40px] mt-2 flex items-center rounded-lg hover:bg-gradient-to-b from-[#6f7a60] to-[#617672] bg-[#505855] border border-[#5f6664]'>
                        <p className='ml-2 text-sm font-normal text-[#f1fe96]'>{n < 10 ? `0${n}.` : `${n}.`}</p>
                        <FontAwesomeIcon icon={faMedal} className='ml-1 w-3 text-[#f8dd92]' />
                        <div className='w-[250px] flex justify-between'>
                            <p className='ml-1 text-sm font-normal'>Name</p>
                            <p className='mr-2 text-sm font-normal'>0/233 <span className='text-[#f1fe96] font-medium'>XP</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Leaderboard