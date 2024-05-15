import doctorImg from '../../assets/images/doctor-img01.png'
import StarImg from '../../assets/images/Star.png'
import {useState} from "react";

import Feedback from "./Feedback.tsx";
import DoctorAbout from "./DoctorAbout.tsx";
const DoctorDetails = () => {

    const [tab,setTab] = useState('about')

        return(
            <section>
                <div className={"max-w-[1170px] px-5 mx-auto  "}>
                    <div className={"grid md:grid-cols-3 gap-[50px]"}>
                        <div className={"md:col-span-2"}>
                            <div className={"flex items-center  gap-5"}>
                                <figure className={"max-w-[200px] max-h-[200px]"}>
                                    <img src={doctorImg} alt="" className={"w-full"}/>
                                </figure>
                                <div>
                                    <span className={"bg-[#CCF0F3]  text-irisBlueColor py-1 px-3 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] rounded leading-4 lg:leading-7 font-semibold"}>Surgeon</span>
                                    <h3 className={"mt-3 text-[22px] text-headingColor  leading-9 font-bold"}>Mohammed Salman</h3>

                                    <div className={"flex items-center gap-[6px] "}>
                                        <span className={"flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor"}> <img src={StarImg} alt=""/></span>
                                        <span className={"text-[14px] leading-5 lg:text-[16px]  lg:leading-7 font-[400]"}>(272)</span>
                                    </div>

                                    <p className={"text_para text-[14px] md:text-[15px] lg:max-w-[400px] leading-5"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Ab amet as</p>
                                </div>

                            </div>


                            <div className={"mt-[50px] border-b border-solid border-[#0066ff34]"}>
                                <button onClick={()=>setTab('about')}
                                    className={`${tab=="about" && "border-b border-solid border-primaryColor"}
                                    py-2 px-5 text-headingColor font-semibold text-[16px]  mr-5 leading-7 `}>About
                                </button>
                                <button onClick={()=>setTab('feedback')}
                                    className={` ${tab=="feedback" && " border-b border-solid border-primaryColor"}
                                    py-2 px-5 text-headingColor font-semibold text-[16px]  mr-5 leading-7 `}>Feedback
                                </button>
                            </div>

                            <div className={"mt-[50px]"}>
                                {
                                    tab=='about'&& <DoctorAbout/>
                                }
                                {
                                    tab=='feedback'&& <Feedback/>
                                }

                            </div>

                        </div>




                    </div>
                </div>
            </section>
        )
}
export default DoctorDetails;