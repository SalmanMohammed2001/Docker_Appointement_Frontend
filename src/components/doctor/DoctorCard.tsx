
import startIcon from '../../assets/images/Star.png'
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";

// @ts-ignore
const DoctorCard = ({doctor}) => {
    const{name,avgRating,totalRating,photo,specialization,totalPatients,hospital}=doctor
    return(
        <>
        <div className={"p-3 lg:p-5"}>
            <img src={photo} className={"w-full"} alt=""/>
            <h2 className={"text-[18px] leading-[30px] lg:text-[26px lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5 "}>{name}</h2>
            <div className={"mt-2 lg:mt-4 flex items-center justify-between"}>
                <span className={"bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded"}>{specialization}</span>

                <div className={"flex items-center gap-[6px]"}>
                    <span className={"flex items-center gap-2 text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor"}><img src={startIcon} alt=""/> {avgRating}</span>
                    <span className={"text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor"}>{totalRating}</span>
                </div>
            </div>
            <div className={"flex items-center justify-between mt-[30px] "}>
                <div>
                    <h2 className={"text-[14px] lg:text-[16px] text-headingColor leading-7 lg:leading-[30px] font-semibold"}>+{totalPatients} patients</h2>
                    <p className={"text-textColor text-[14px] leading-6 font-[400]"}>{hospital}</p>
                </div>

                <Link to={"/"} className={"w-[44px] h-[44px] border border-solid border-[#181A1E]  rounded-full bg-primaryColor  flex items-center justify-center hover:border-none hover:bg-primaryColor"}>
                    <BsArrowRight className={"w-5 h-5 group-hover:text-white"}/>  </Link>
            </div>
        </div>
        </>
    )
}
export default DoctorCard;