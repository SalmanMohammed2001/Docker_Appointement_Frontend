import {formatDate} from "../../utils/formateDate.ts";

const doctorAbout = () => {
    // @ts-ignore
    return (
        <div>
            <div>
                <h3 className={"text-[20px] font-semibold leading-[30px] text-headingColor  flex items-center gap-2 "}> About
                    of
                    <span className={"text-irisBlueColor font-bold text-[24px] leading-9"}> Mohammed Salman</span>
                </h3>
                <p className={"text_para"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa deleniti dicta doloribus
                    eaque est, excepturi explicabo id laboriosam, magnam neque nobis nostrum nulla odio quibusdam sunt
                    voluptatem voluptatibus! Velit?</p>
            </div>

            <div className={"mt-12"}>
                <h3 className={"ext-[20px] font-semibold leading-[30px] text-headingColor"}>Education</h3>
                <ul className={"pl-4 md:p-5"}>
                    <li className={"flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"}>
                        <div>
                            <span
                                className={"text-[15px] leading-6 font-semibold text-irisBlueColor"}>{formatDate('10-04-2025')}</span>
                            <p className={"text-[16px] leading-6 font-medium text-textColor"}> PHD in surgeon</p>
                        </div>
                        <p className={"text-[14px] leading-5 font-medium text-textColor"}>
                            New Apollo Hospital,New York Carolina
                        </p>
                    </li>
                    <li className={"flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"}>
                        <div>
                            <span
                                className={"text-[15px] leading-6 font-semibold text-irisBlueColor"}>{formatDate('12-04-2020')}</span>
                            <p className={"text-[16px] leading-6 font-medium text-textColor"}> PHD in surgeon</p>
                        </div>
                        <p className={"text-[14px] leading-5 font-medium text-textColor"}>
                            New Apollo Hospital,New York Carolina
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default doctorAbout;