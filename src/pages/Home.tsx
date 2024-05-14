import heroImg from '../assets/images/hero-img01.png'
import heroImg2 from '../assets/images/hero-img02.png'
import heroImg3 from '../assets/images/hero-img03.png'
import icon1 from '../assets/images/icon01.png'
import icon2 from '../assets/images/icon02.png'
import icon3 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import videoImg from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import faqImg from '../assets/images/faq-img.png'
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import About from "../components/about/About.tsx";
import ServicesList from "../components/services/ServicesList.tsx";
import DoctorList from "../components/doctor/DoctorList.tsx";
import FaqList from "../components/faq/FaqList.tsx";
import Testimonial from "../components/testimonial/Testimonial.tsx";

const Home = () => {
    return (
        <div>
            {/*==============hero section=============================*/}
            <section className={"hero_section  pt-[60px] 2xl:h-[800px]"}>
                <div className="container">
                    <div className={"flex   flex-col lg:flex-row gap-[60px] items-center justify-between "}>
                        <div>
                            <div className={" lg:w-[570px] "}>
                                <h1 className={"text-[36px] leading-[66px]  text-headingColor font-[800] md:text-[60px]"}>We
                                    Help patient live a healthy longer life</h1>

                                <p className={"text_para"}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur excepturi
                                    omnis qui, quidem sapiente sunt suscipit. Animi architecto blanditiis earum
                                    explicabo
                                    fugiat harum impedit ipsa, magni neque perspiciatis sunt voluptatum.
                                </p>
                                <button className={"btn"}>Request Appointment</button>
                            </div>

                            <div
                                className={"mt-[30px] lg:mt-[70px]   flex items-start flex-col lg:flex-row lg: lg:items-center gap-5 lg:gap-[30px]"}>
                                <div>
                                    <h2 className={"text-[36px] leading-[56px] md:text-[44px] lg:leading-[54px] font-[700] text-headingColor"}>30+</h2>
                                    <span
                                        className={"w-[100px] h-2 bg-yellowColor rounded-full block  mt-[5px]"}></span>
                                    <p className={"text_para"}>Year Of Experience</p>
                                </div>
                                <div>
                                    <h2 className={"text-[36px] leading-[56px] md:text-[44px] lg:leading-[54px] font-[700] text-headingColor"}>30+</h2>
                                    <span
                                        className={"w-[100px] h-2 bg-purpleColor rounded-full block  mt-[5px]"}></span>
                                    <p className={"text_para"}>Clinic Location</p>
                                </div>
                                <div>
                                    <h2 className={"text-[36px] leading-[56px] md:text-[44px] lg:leading-[54px] font-[700] text-headingColor"}>30+</h2>
                                    <span
                                        className={"w-[100px] h-2 bg-irisBlueColor rounded-full block  mt-[5px]"}></span>
                                    <p className={"text_para"}>Patient Satisfaction</p>
                                </div>
                            </div>

                        </div>


                        <div>
                            {/*========hero section============*/}

                            <div className={"flex gap-[30px]  justify-end"}>
                                <div>
                                    <img src={heroImg} alt=""/>
                                </div>
                                <div className={"mt-[30px]"}>
                                    <img src={heroImg2} alt="" className={"w-full mb-[30px]"}/>
                                    <img src={heroImg3} className={"w-full"} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*==============hero section end=============================*/}

            {/*==============hero service section start=============================*/}
            <section>
                <div className="container">
                    <div className={"lg:w-[470px] mx-auto"}>
                        <h2 className={"heading text-center"}>Providing the best Medical service</h2>
                        <p className={"text_para text-center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci aliquam</p>
                    </div>
                </div>

                <div
                    className={"grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-5 mt-[30px] lg:gap-[30px] lg:mt-[50px]"}>
                    <div className={"py-[30px] px-5 "}>
                        <div className={"flex  items-center justify-center"}>
                            <img src={icon1} alt=""/>
                        </div>
                        <div className={"mt-[30px]"}>
                            <h2 className={"text-[26px] leading-9 text-textColor font-[700]  text-center"}>Find a
                                Doctor</h2>
                            <p className={"text-center text-[16px] leading-7 text-textColor font-[400] mt-4 "}>Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit.
                                A accusantium aperiam autem dolore fugit, id illo non .</p>


                            <Link to={'/doctors'}
                                  className={"w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] " +
                                      " mx-auto flex items-center justify-center  group hover:bg-primaryColor hover:border-none"}>
                                <BsArrowRight className={"group-hover:text-white w-6"}/>
                            </Link>
                        </div>

                    </div>

                    <div className={"py-[30px] px-5 "}>
                        <div className={"flex  items-center justify-center"}>
                            <img src={icon2} alt=""/>
                        </div>
                        <div className={"mt-[30px]"}>
                            <h2 className={"text-[26px] leading-9 text-textColor font-[700]  text-center"}>Find a
                                Doctor</h2>
                            <p className={"text-center text-[16px] leading-7 text-textColor font-[400] mt-4 "}>Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit.
                                A accusantium aperiam autem dolore fugit, id illo non .</p>


                            <Link to={'/doctors'}
                                  className={"w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] " +
                                      " mx-auto flex items-center justify-center  group hover:bg-primaryColor hover:border-none"}>
                                <BsArrowRight className={"group-hover:text-white w-6"}/>
                            </Link>
                        </div>

                    </div>

                    <div className={"py-[30px] px-5 "}>
                        <div className={"flex  items-center justify-center"}>
                            <img src={icon3} alt=""/>
                        </div>
                        <div className={"mt-[30px]"}>
                            <h2 className={"text-[26px] leading-9 text-textColor font-[700]  text-center"}>Find a
                                Doctor</h2>
                            <p className={"text-center text-[16px] leading-7 text-textColor font-[400] mt-4 "}>Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit.
                                A accusantium aperiam autem dolore fugit, id illo non .</p>


                            <Link to={'/doctors'}
                                  className={"w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] " +
                                      " mx-auto flex items-center justify-center  group hover:bg-primaryColor hover:border-none"}>
                                <BsArrowRight className={"group-hover:text-white w-6"}/>
                            </Link>
                        </div>

                    </div>


                </div>

            </section>
            {/*==============hero service section end=============================*/}

            {/*====================about=========================*/}

            <About/>
            {/*====================about=========================*/}


            {/*====================service section=========================*/}
            <section>
                <div className="container">
                    <div className={"xl:w-[470px] mx-auto"}>
                        <h2 className={"heading text-center"}>Our Medical Service</h2>
                        <p className={"text_para text-center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci aliquam</p>
                    </div>
                    <ServicesList/>
                </div>
            </section>

            {/*====================service section=========================*/}


            {/*====================feature section=========================*/}
            <section>
                <div className="container">
                    <div className={"flex justify-between items-center flex-col lg:flex-row"}>
                        <div className={"xl:w-[670px] "}>
                            <h2 className={"heading"}>
                                Get Virtual treatment
                            </h2>
                            <ul className={"pl-4"}>
                                <li className={"text_para"}> 1. Schedule the appointment directly</li>
                                <li className={"text_para"}> 2. Search for you physician here and contact their office
                                </li>
                                <li className={"text_para"}> 3. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Accusamus beatae cumque
                                    deserunt dolorem expedita
                                </li>

                                <Link to={"/"}>
                                    <button className={"btn"}>Learn More</button>
                                </Link>
                            </ul>
                        </div>

                        {/*==================feature image==================*/}
                        <div className={" relative flex justify-end z-20 mt-[50px] lg:mt-0 xl:w-[770px]  "}>
                            <img src={featureImg} className={"w-3/3"} alt=""/>

                            <div
                                className={"w-[150px] lg:w-[240px] bg-white absolute   bottom-[50px]  left-[150px] md:py-1 md:px-1  hidden  xl:block  rounded-[10px]  px-2 py-2 "}>
                                <div className={"flex items-center justify-between "}>
                                    <div className={"flex items-center gap-[6px] lg:gap-3 px-5 py-2"}>
                                        <p className={"text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor"}>Tue
                                            ,24</p>
                                        <p className={"text-[10px] leading-[10px] lg:text-[14px] lg:leading-7 text-textColor font-[400]"}> 10.00AM</p>
                                    </div>
                                    <span
                                        className={"w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-2 px-1"}>
                                      <img src={videoImg} alt=""/>
                                  </span>
                                </div>

                                <div
                                    className={"w-[65px]  lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full"}>
                                    Consultation
                                </div>

                                <div className={"flex items-center  gap-6 mt-3"}>
                                    <img src={avatarIcon} alt=""/>
                                    <h4 className={"font-[700] text-textColor"}> Mohammed Salman</h4>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>

            </section>

            {/*====================feature section=========================*/}


            {/*====================our great doctor=========================*/}
            <section>
                <div className="container">
                    <div className={"xl:w-[470px] mx-auto"}>
                        <h2 className={"heading text-center"}>Our Great Doctor</h2>

                        <p className={"text_para text-center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci aliquam</p>
                    </div>
                    <DoctorList/>
                </div>
            </section>

            {/*====================our great doctor=========================*/}

            {/*====================faq section=========================*/}
            <section>
                <div className="container">
                    <div className={"flex justify-between  gap-[50px] lg:gap-0"}>
                        <div className={" w-1/2 hidden  md:block"}><img src={faqImg} alt=""/></div>
                        <div className={" w-full md:w-1/2 "}>
                            <h1 className={"heading"}>Most Question bu our beloved patient</h1>
                            <FaqList/>
                        </div>
                    </div>


                </div>
            </section>
            {/*====================faq section=========================*/}


            {/*====================intestinal  section=========================*/}
            <section>
                <div className="container">
                    <div className={"xl:w-[470px] mx-auto"}>
                        <h2 className={"heading text-center"}>Our Great Doctor</h2>

                        <p className={"text_para text-center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci aliquam</p>
                    </div>
                    <Testimonial/>
                </div>
            </section>

            {/*====================intestinal  section=========================*/}
        </div>
    )
}
export default Home;