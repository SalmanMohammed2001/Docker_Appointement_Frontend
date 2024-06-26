

import ServicesCard from "../components/services/ServicesCard.tsx";
import  {services} from "../assets/data/services"
import {Key} from "react";
const Service = () => {
    return (
        <section>
            <div className="container">
                <div
                    className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-[30px] "}>

                    {
                        services.map((item: any, index: Key | null | undefined) => {
                            return (
                                <ServicesCard item={item} index={index} key={index}/>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}
export default Service;