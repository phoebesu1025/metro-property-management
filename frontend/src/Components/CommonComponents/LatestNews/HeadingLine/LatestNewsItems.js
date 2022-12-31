import React from 'react'
import LatestNewsArray from './LatestNewArray';

const LatestNewsItems = () => {
    const LatestNewsArrayList = LatestNewsArray;

    return (
        <div className=' flex w-full justify-between '>
            {LatestNewsArrayList.map((LatestNewsArray, index) => {
                return (
                    <div className='w-[20.4rem] h-[29rem]  bg-white rounded-md shadow-lg ' key={index}>
                        <div className='my-auto  '>
                            <img src={LatestNewsArray.imgSrc} alt={LatestNewsArray.imgAlt} className="mb-7" />
                        </div>

                        <div className='px-5'>
                            <div class='text-footerGrey text-[0.7rem] mb-2'>
                                {LatestNewsArray.author} | {LatestNewsArray.date}
                            </div>

                            <h1 className='font-bold  text-[1rem]  '>
                                {LatestNewsArray.heading}
                            </h1>
                            <p className='  text-[0.7rem] my-1 text-footerSubGrey'>{LatestNewsArray.content}
                            </p>

                            <div className='text-red2 font-bold underline text-[0.81rem] mt-6'>Read More</div>
                        </div>
                    </div>
                )
            })}

            {/*Might can divide into more components? */}
        </div>












    )
}

export default LatestNewsItems