import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Leaderboard from './Leaderboard';
import DoughnutChart from './DoughnutChart';

const Sidebar = () => {

    return (
        <>
            <div
                className={`lg:flex hidden w-[375px] text-[#fff] h-full bg-gradient-to-b from-[#3a4841] to-[#2c2c2c] py-4 px-6 shadow-black flex-col`}
            >
                <h3 className='text-xl font-light'>Chat<span className='font-bold'>SAT</span></h3>
                <div className='bg-[#515d58] w-full h-[40px] px-4 pt-2 mt-6 rounded-lg border border-[#6c776d]'>
                    <p>New Thread</p>
                </div>
                <div className='w-full h-[120px] px-4 py-2 mt-4 rounded-lg border border-[#6c776d] bg-[#515d58] flex justify-between items-center '>
                    <div className='w-[40%] h-full'>
                       <DoughnutChart />
                    </div>
                    <div className='w-[60%] h-full flex flex-col gap-2 justify-center items-end'>
                        <div className='flex w-full gap-2 justify-end'>
                            <FontAwesomeIcon icon={faMedal} className='w-5 text-[#f1fe96]' />
                            <h3 className='text-2xl font-medium'>0/223 <span className='font-bold text-[#f1fe96]'>XP</span></h3>
                        </div>
                        <button className='text-[#f1fe96] hover:bg-transparent hover:border hover:border-[#7e8a84] font-light bg-[#7e8a84] text-sm w-[55%] h-[35px] rounded-lg'>Take a Quiz</button>
                    </div>
                </div>
                <Leaderboard />
                <div className='mt-4 text-[24px] font-light'>
                    Name
                </div>
                <div className='mt-1 text-[16px] font-light flex'>
                    <FontAwesomeIcon icon={faRightFromBracket} className='h-[20px]' />
                    <p className='ml-2'>Sign Out</p>
                </div>
            </div>
        </>
    )
}

export default Sidebar