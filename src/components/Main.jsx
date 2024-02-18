import React from 'react'
import Card from './Card'

const Main = () => {
    return (
        <div className='lg:w-[calc(100vw-375px)] w-full h-full bg-gradient-to-br flex flex-col gap-[32px]' style={{ backgroundImage: 'linear-gradient(135deg, #303932 0%, #2b2b2b 25%, #2b2b2b 75%, #303932 100%)' }}>
            <div className='h-auto px-10 sm:ml-5 mt-2 sm:text-start text-center'>
                <h3 className='text-[#fff] text-[42px] font-bold'>Hey, <span className='text-[#f1fe96]'>Name!</span><br />
                    How's your prep for the <span className='text-[#f1fe96]'>March SAT</span>
                </h3>
            </div>
            <div className='px-10 flex flex-col sm:ml-5'>
                <div className='w-full sm:h-[290px] flex sm:flex-row flex-col sm:items-start items-center'>
                    <Card title={'Practice'} />
                    <Card title={'Mock'} />
                </div>
                <div className='w-full sm:h-[290px] flex sm:flex-row flex-col sm:items-start items-center'>
                    <Card title={'Title Text'} />
                    <Card title={'Title Text'} />
                </div>
            </div>
        </div>
    )
}

export default Main