import  avatar from '../../assets/images/avatar-icon.png'
import {AiFillStar} from "react-icons/ai";
import {useState} from "react";
import FeedbackFrom from "./FeedbackFrom.tsx";
const FeedbackPage=()=> {
    const[feedback,setFeedback]=useState(false)

    return(
        <div>
            <div className={"mt-[50px]"}>
                <h2 className={"text-[16px] font-semibold leading-[30px] text-headingColor  flex items-center gap-2 "}>All
                    Reviews (242)</h2>
                <div className={"flex justify-between gap-2  mb-[30px] "}>
                    <div className={"flex gap-3 mt-3"}>
                        <figure className={" w-10 h-10 rounded-full"}>
                            <img src={avatar} className={"w-full"} alt=""/>
                        </figure>
                        <div>
                            <h4 className={"text-primaryColor leading-3 font-semibold text-[14px]"}>Salman</h4>
                            <p className={"text-textColor text-[11px] leading-6"}>Feb 14,2023</p>
                            <p className={"text_para mt-3 font-medium text-[15px]"}>Good Service highly recommended </p>
                        </div>
                    </div>

                    <div className={"flex gap-1"}>
                        {
                            [...Array(5).keys()].map((_, index) => (
                                <AiFillStar key={index} color="#0067FF"/>
                            ))
                        }
                    </div>
                </div>
            </div>
            {
                !feedback && <div className={"text-center"}>
                    <button className={"btn"} onClick={() => setFeedback(true)}> Give Review</button>
                </div>}

            {
                feedback && <FeedbackFrom/>
            }
        </div>
    )
}
export default FeedbackPage;