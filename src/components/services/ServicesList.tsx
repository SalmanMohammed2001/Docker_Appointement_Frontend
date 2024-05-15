import { Key } from "react";
// @ts-ignore
import {services} from "./../../assets/data/services";
import ServicesCard from "./ServicesCard.tsx";

const servicesList = () => {
    return (
        <div>

            <div
                className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-[30px] "}>

                {
                    services.map((item: any, index: Key | null | undefined)=>{
                        return(
                            <ServicesCard item={item} index={index} key={index} />
                        )
                        })
                }

            </div>

        </div>
    )

}
export default servicesList;