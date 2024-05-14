

// @ts-ignore
import { Key } from "react";
// @ts-ignore
import {faqs} from "../../assets/data/faqs.js";
import FaqItems from "./FaqItems.tsx";

// @ts-ignore
const FaqList = () => {

    return (
        <div>
            <ul className={"mt-[38px]"}>
                {
                    faqs.map((item: any, index: Key | null | undefined) => {
                        return (
                            <FaqItems item={item} key={index}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FaqList;