// @ts-ignore
import { Key } from 'react';
// @ts-ignore
import {doctors} from '../../assets/data/doctors.js'
import DoctorCard from "./DoctorCard.tsx";

const DoctorList = () => {
    return (
        <>
            <div
                className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"}>

                {
                    doctors.map((doctor: any, index: Key | null | undefined)=>{
                   return(
                       <DoctorCard doctor={doctor}  key={index} />
                   )
                })
            }

        </div>
        </>
    )
}
export default DoctorList;