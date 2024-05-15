
const SidePanel = () => {
    return(
        <div>
            <div className={"shadow-panelShadow p-3 lg:p-5 rounded-md"}>
                <div className={"flex items-center justify-between"}>
                    <p className={"text_para mt-0 font-semibold "}>Ticket Price</p>
                    <span className={"text-[16px] leading-7 lg:text-[22px] text-headingColor font-bold"}>5000 Rs</span>
                </div>
                <div className={"mt-[30px]"}>
                   <p className={"text-[14px] lg:text-[15px] font-bold text-headingColor"}>Available time slots</p>

                    <ul className={"mt-[30px]"}>
                        <li className={"flex items-center justify-between mb-2"}>
                            <p className={"text-[15px] leading-6 text-textColor font-semibold "}>sunday</p>
                            <p className={"text-[14px] leading-6 text-textColor font-semibold "}>4.00PM - 9.30PM</p>
                        </li>
                        <li className={"flex items-center justify-between mb-2"}>
                            <p className={"text-[15px] leading-6 text-textColor font-semibold "}>Monday</p>
                            <p className={"text-[14px] leading-6 text-textColor font-semibold "}>4.00PM - 9.30PM</p>
                        </li>
                        <li className={"flex items-center justify-between mb-2"}>
                            <p className={"text-[15px] leading-6 text-textColor font-semibold "}>Friday</p>
                            <p className={"text-[14px] leading-6 text-textColor font-semibold "}>4.00PM - 9.30PM</p>
                        </li>
                    </ul>
                </div>
                <button className={"btn w-full rounded-md "}> Book Appointment</button>
            </div>
        </div>

    )
}
export default SidePanel;