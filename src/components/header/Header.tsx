import logo from "../../assets/images/logo.png"
import userImg from "../../assets/images/doctor-img01.png"
import {BiMenu} from  "react-icons/bi";
import {Link, NavLink} from "react-router-dom";
import {useEffect, useRef} from "react";


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

    const headerRef=useRef(null);
    const menuRef=useRef<any>(null);


    const handleMenuClick = () => {
        window.addEventListener('scroll',()=>{

         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
             // @ts-ignore
             headerRef.current.classList.add("sticky_header");
         }else {
             // @ts-ignore
             headerRef.current.classList.remove("sticky_header");
         }
        })
    }

    useEffect(()=>{
       handleMenuClick();

       return ()=>window.removeEventListener('scroll',handleMenuClick);
    });

    const toggleMenu=()=>{
        menuRef.current.classList.toggle('show_menu')
    }

    return (
        <header className={"header  flex items-center"} ref={headerRef}>
            <div className=" container ">
                <div className={"flex items-center justify-between"}>
                    <div>
                        <img src={logo} alt=""/>
                    </div>

                    {/*========menu========================*/}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className={"menu flex  items-center gap-[2.7rem]"}>
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
                        <div className={"hidden"}>
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
                        <div className={"md:hidden"} onClick={toggleMenu}>
                            <BiMenu className={"w-6 h-6 cursor-pointer"}/>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Header