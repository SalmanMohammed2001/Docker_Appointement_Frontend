import  heroImg from '../assets/images/hero-img01.png'
import  heroImg2 from '../assets/images/hero-img02.png'
import  heroImg3 from '../assets/images/hero-img03.png'
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
        </div>
    )
}
export default Home;