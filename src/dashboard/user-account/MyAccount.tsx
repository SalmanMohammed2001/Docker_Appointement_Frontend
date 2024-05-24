import userImg from '../../assets/images/doctor-img01.png'
import {useContext, useState} from "react";
import {authContext} from "../../context/AuthContext.tsx";
import MyBooking from "./MyBooking.tsx";
import ProfileSetting from "./ProfileSetting.tsx";

export const MyAccount = () => {
    const {dispatch} = useContext(authContext)
    const [tab, setTab] = useState('booking');

    function handleLogOut() {
        dispatch({type: "LOGIN_OUT"})
    }

    return (
        <section>
            <div className={"max-w-[1170px] mx-auto px-5 "}>
                <div className={"grid md:grid-cols-3 gap-10"}>
                    <div className={"pb-[50px] px-[30px] rounded-md"}>
                        <div className={"flex items-center justify-center"}>
                            <figure
                                className={"w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor"}>
                                <img src={userImg} className={"w-full h-full rounded-full"} alt=""/>
                            </figure>
                        </div>
                        <div className={"text-center mt-4"}>
                            <h3 className={"text-[18px] leading-[30px] text-headingColor font-bold"}>Mohammed
                                Salman</h3>
                            <p className={"text-[15px] leading-6 text-textColor font-medium"}>example@gmail.com</p>
                            <p className={"text-[15px] leading-6 text-textColor font-medium"}>
                                Blood Type: <span className={"ml-2 text-headingColor text-[22px] leading-8"}>O-</span>
                            </p>
                        </div>
                        <div className={"mt-[50px] md:mt-[100px]"}>
                            <button onClick={handleLogOut}
                                    className={"w-full bg-black  p-3 mb-3 leading-7 text-[16px] rounded-md text-white"}>LogOut
                            </button>
                            <button
                                className={"w-full bg-red-700 leading-7  p-3 text-[16px] rounded-md text-white"}>Delete
                                Account
                            </button>
                        </div>

                    </div>

                    <div className={"md:col-span-2 md:px-[30px] m-5"}>
                        <div>
                            <button onClick={() => setTab('booking')}
                                    className={` ${tab == 'booking' && 'bg-primaryColor text-white font-normal'} p-2 px-5 mr-2 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>My
                                Booking
                            </button>
                            <button onClick={() => setTab('setting')}
                                    className={`${tab == 'setting' && 'bg-primaryColor text-white font-normal'} py-2 px-5  rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>My
                                Profile Setting
                            </button>
                        </div>

                        {
                            tab == 'booking' && <MyBooking/>
                        }
                        {
                            tab == 'setting' && <ProfileSetting/>
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
export default MyAccount;