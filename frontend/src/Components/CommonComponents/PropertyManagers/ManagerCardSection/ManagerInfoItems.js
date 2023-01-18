import { useState, useEffect } from "react";
import BookMeeting from "./Buttons/BookMeeting";
import PropertyManagersPopUp1 from "../../../Pages/MeetUs/Banner/Search/PopUp/PropertyManagersPopUp1";
import PropertyManagersPopUp2 from "../../../Pages/MeetUs/Banner/Search/PopUp/PropertyManagersPopUp2";
import PropertyManagersPopUp3 from "../../../Pages/MeetUs/Banner/Search/PopUp/PropertyManagersPopUp3";
import PropertyManagersPopUp4 from "../../../Pages/MeetUs/Banner/Search/PopUp/PropertyManagersPopUp4";
import PropertyManagersPopUp5 from "../../../Pages/MeetUs/Banner/Search/PopUp/PropertyManagersPopUp5";
import PropertyManagersPopUp6 from "../../../Pages/MeetUs/Banner/Search/PopUp/PropertyManagersPopUp6";
import CallBtn from "./Buttons/CallBtn";

const ManagerInfoItems = () => {
    const [showData, setShowData] = useState("")
    const [openPopUp1, setOpenPopUp1] = useState(false);
    const [openPopUp2, setOpenPopUp2] = useState(false);
    const [openPopUp3, setOpenPopUp3] = useState(false);
    const [openPopUp4, setOpenPopUp4] = useState(false);
    const [openPopUp5, setOpenPopUp5] = useState(false);
    const [openPopUp6, setOpenPopUp6] = useState(false);

    const sliderLeft = () => {
        let slider = document.getElementById('slider')
        console.log(slider.scrollLeft)
        slider.scrollLeft = slider.scrollLeft - 850
    }

    const sliderRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 850;
    }

    useEffect(() => {
        fetch("http://localhost:5000/propertyManagers?")
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setShowData(result)
            })
            .catch(error => console.log('error', error));
    }, []);
    return (

        <div className='flex justify-center '>
            <div>
                {openPopUp1 && <PropertyManagersPopUp1 closePopUp={setOpenPopUp1} />}
                {openPopUp2 && <PropertyManagersPopUp2 closePopUp={setOpenPopUp2} />}
                {openPopUp3 && <PropertyManagersPopUp3 closePopUp={setOpenPopUp3} />}
                {openPopUp4 && <PropertyManagersPopUp4 closePopUp={setOpenPopUp4} />}
                {openPopUp5 && <PropertyManagersPopUp5 closePopUp={setOpenPopUp5} />}
                {openPopUp6 && <PropertyManagersPopUp6 closePopUp={setOpenPopUp6} />}
            </div>

            <div className='
            my-auto mx-auto  px-2 py-2 cursor-pointer opacity-50 hover:opacity-100 ' onClick={sliderLeft}>
                <img src="./images/propertyManagers/arrow.png" alt='arrow-reverse' className=' rotate-180 w-[1rem]' />
            </div>

            <div id='slider' className=' flex w-[70rem]  justify-start px-2 gap-[4rem]  overflow-hidden scroll-smooth  
            md:gap-x-[5rem]
            md:justify-start
            '>
                {Array.from(showData).map((ManagerArrayList, index) => {
                    return (
                        <div className="w-[19.75em] px-[3rem] h-[18.375rem]  bg-white rounded-md shadow-lg ">
                            <div className="top-section flex justify-between py-8">
                                <div className="my-auto hover:animate-pulse cursor-pointer">
                                    <img src={ManagerArrayList.imgSrc} alt={ManagerArrayList.imgAlt} />
                                </div>

                                <div className="flex flex-col text-[0.6rem] font-semibold text-end text-buttonGrey">
                                    <div className="font-bold text-black">{`${ManagerArrayList.successfulClient} Successful Clients`}</div>
                                    <div>{ManagerArrayList.email}</div>
                                    <div>{ManagerArrayList.phone}</div>
                                </div>
                            </div>

                            <div>
                                <h1 className="font-bold text-[0.9rem] mb-3  ">
                                    {ManagerArrayList.name}
                                </h1>
                                <p className=" w-[13.5rem]  text-[0.6rem] leading-4 mb-7 text-buttonGrey">
                                    {ManagerArrayList.detail} <br />
                                    <span className="font-bold text-black">{`Available to meet on ${ManagerArrayList.availableDate}`}</span>
                                </p>
                            </div>

                            <div className='flex justify-between w-full gap-x-2'>
                                <CallBtn />
                                <button className='text-footerSubGrey2 bg-none w-[3.938rem] px-[0.3rem] text-[0.57rem] rounded-md font-bold border-footerSubGrey2 border-opacity-80 border-[0.1rem] hover:opacity-50'
                                    onClick={() => {
                                        if (ManagerArrayList.id == "1") {
                                            return setOpenPopUp1("true")
                                        } else if (ManagerArrayList.id == "2") {
                                            return setOpenPopUp2("true")
                                        } else if (ManagerArrayList.id == "3") {
                                            return setOpenPopUp3("true")
                                        } else if (ManagerArrayList.id == "4") {
                                            return setOpenPopUp4("true")
                                        } else if (ManagerArrayList.id == "5") {
                                            return setOpenPopUp5("true")
                                        } else if (ManagerArrayList.id == "6") {
                                            return setOpenPopUp6("true")
                                        }
                                    }}>
                                    Message
                                </button>
                                <BookMeeting />
                            </div>
                        </div>
                    )
                })}
                {/*Might can divide into more components? */}
            </div>



            <div className='my-auto hover:cursor-pointer  mx-auto px-2 py-2  cursor-pointer opacity-50 hover:opacity-100' >
                <img src="./images/propertyManagers/arrow.png" alt='arrow' className='w-[1rem] ' onClick={sliderRight} />
            </div>
        </div>

    )
}

export default ManagerInfoItems