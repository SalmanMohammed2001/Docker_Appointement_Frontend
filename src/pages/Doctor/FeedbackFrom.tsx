import {AiFillStar} from "react-icons/ai";
import {useState} from "react";

const FeedbackFromPage=() => {
    const[rating,setRating]=useState(0);
    const[hover,setHover]=useState(0);
    const[review,setReview]=useState("");

    const handlesubmitReview= async (e: { preventDefault: () => void; }) =>{
        e.preventDefault()
        console.log(review)

    }

    return(
        <div>
            <form action="">
                <div>
                    <h3 className={"text-[14px] leading-6 font-semibold  text-headingColor mb-4 mt-0"}>How would you rate the
                        overall experience?*</h3>

                <div>
                    {[...Array(5).keys()].map((_, index) => {
                            index = index + 1;
                        return <button
                            key={index}
                            type={"button"}
                            className={`${index <=((rating && hover ) || hover) 
                                ? "text-yellowColor" 
                                : "text-gray-500"
                            } bg-transparent border-none text-[22px] cursor-pointer`}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setRating(index)}
                            onMouseLeave={() => setHover(rating)}
                            onDoubleClick={() =>{
                                setHover(0);
                                setRating(0) }}
                        ><

                            span><AiFillStar/></span></button>
                        }

                    )}
                </div>
                </div>

                <div className={"mt-[30px]"}>
                    <h3 className={"text-[14px] leading-6 font-semibold  text-headingColor mb-4 mt-0"}>How would you
                        Share your feedback or suggestions*</h3>

                    <textarea className={"border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"} rows={5}
                              placeholder={"share Your feedback"} onChange={(e)=>setReview(e.target.value)}></textarea>
                </div>

                <button className={"btn"} type={"button"} onClick={handlesubmitReview}> Submit Review  </button>
            </form>
        </div>
    )
}

export default FeedbackFromPage