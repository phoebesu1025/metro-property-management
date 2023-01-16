import { React, useState } from 'react'
import TenancyApplicationBanner from './Common/TenancyApplicationBanner'
import ProcessBar1 from '../../CommonComponents/TenancyApplication/Common/ProcessBar1'
import ProcessBar2 from '../../CommonComponents/TenancyApplication/Common/ProcessBar2'
import ProcessBar3 from '../../CommonComponents/TenancyApplication/Common/ProcessBar3'
import ProcessBar4 from '../../CommonComponents/TenancyApplication/Common/ProcessBar4'
import PropertyComponents from './PropertyComponents/PropertyComponents'
import All from "./Form1/All"
import All2 from "./Form2/All2"
import All3 from "./Form3/All3"
import All4 from "./Form4/All4"
const YourDetails = () => {
    const [page, setPage] = useState(0);


    function Page1() {
        setPage(0)
    }
    function Page2() {
        setPage(1)
    }
    function Page3() {
        setPage(2)
    }
    function Page4() {
        setPage(3)
    }




    const FormProcessBar = [
        <ProcessBar1 passTwo={Page2} passThree={Page3} passFour={Page4} />,
        <ProcessBar2 passOne={Page1} passThree={Page3} passFour={Page4} />,
        <ProcessBar3 passOne={Page1} passTwo={Page2} passFour={Page4} />,
        <ProcessBar4 passOne={Page1} passTwo={Page2} passThree={Page3} />
    ]

    const FormMainContext = [<All />, <All2 />, <All3 />, <All4 />]
    return (
        <div>
            <TenancyApplicationBanner />
            {FormProcessBar[page]}
            {FormMainContext[page]}





            <div className='flex'>
                <div className='w-full flex justify-start lg: mb-10 mx-[10rem]'>
                    <button className={`flex justify-between align-center px-[1.14rem] rounded-md border-buttonGrey border-[0.05rem] text-buttonGrey w-[8.27rem] h-[2.448rem] 
                active:opacity-50 ${(page === 0) ? "hidden" : ""}`} onClick={() => { setPage((currPage) => currPage - 1) }}>
                        <img src="./images/tenancyApplication/back.png" alt="plus" className='my-auto' />
                        <p className='my-auto text-[0.938rem] font-semibold'>Back </p>

                    </button>
                </div>




                <div className='mx-[10rem] '>
                    <div className='w-full flex justify-end lg: mb-10'>
                        <button className={`flex justify-between align-center px-[1.14rem] rounded-md bg-red1 text-white w-[8.27rem] h-[2.448rem] active:opacity-50 ${page === 3 ? "hidden" : ""}`}


                            onClick={() => { setPage((currPage) => currPage + 1) }} >
                            <p className='my-auto text-[0.938rem] font-semibold'>Next </p>
                            <img src="./images/tenancyApplication/next.png" alt="plus" className='my-auto' />
                        </button>
                    </div>
                </div>
                <PropertyComponents />
            </div>
        </div >
    )
}

export default YourDetails