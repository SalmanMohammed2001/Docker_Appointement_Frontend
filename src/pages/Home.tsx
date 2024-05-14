import  heroImg from '../assets/images/hero-img01.png'
import  heroImg2 from '../assets/images/hero-img02.png'
import  heroImg3 from '../assets/images/hero-img03.png'
import  icon1 from '../assets/images/icon01.png'
import  icon2 from '../assets/images/icon02.png'
import  icon3 from '../assets/images/icon03.png'
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import About from "../components/about/About.tsx";
import ServicesList from "../components/services/ServicesList.tsx";
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
                        <p className={"text_para text-center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam</p>
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

        </div>
    )
}
export default Home;