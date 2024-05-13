import logo from "../../assets/images/logo.png"
import userImg from "../../assets/images/doctor-img01.png"
import {BiMenu} from  "react-icons/bi";
import {Link, NavLink} from "react-router-dom";


const navLinks = [
    {
        path: '/home',
        display: 'Home',
    },
    {
        path: '/doctors',
        display: 'Find a doctor',
    },
    {
        path: '/service',
        display: 'Services',
    },
    {
        path: '/contact',
        display: 'Contact',
    },


]


const Header = () => {
    return (

        <header className={"header  flex items-center"}>
            <div className=" container ">
                <div className={"flex items-center justify-between"}>
                    <div>
                        <img src={logo} alt=""/>
                    </div>

                    {/*========menu========================*/}
                    <div className={"navigation "}>
                        <ul className={"flex  items-center gap-[2.7rem]"}>
                            {
                                navLinks.map((link, index) => <li key={index}>
                                    <NavLink to={link.path}
                                             className={navClass => navClass.isActive ?
                                                 'text-primaryColor text-[16px] leading-7 font-[600]' :
                                                 'text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor'}>{
                                        link.display}</NavLink>
                                </li>)
                            }
                        </ul>
                    </div>


                    {/*========nav right========================*/}
                    <div className={"flex items-center gap-4"}>
                        <div>
                            <Link to={"/"}>
                                <figure className={"w-[35px] h-[35px] rounded-full cursor-pointer"}>
                                    <img src={userImg} alt="" className={"rounded-full w-full"}/>
                                </figure>
                            </Link>
                        </div>

                        <Link to={"/login"}>
                            <button
                                className={"bg-primaryColor text-white py-2 px-6 font-[600] rounded-[50px] flex items-center justify-center h-[44px]"}>Login
                            </button>
                        </Link>

                        <div className={"md:hidden"}>
                            <BiMenu className={"w-6 h-6 cursor-pointer"}/>
                        </div>
                    </div>




                </div>
            </div>

        </header>
    )
}
export default Header