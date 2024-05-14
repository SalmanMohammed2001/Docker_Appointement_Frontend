import about from '../../assets/images/about.png'
import aboutcard from '../../assets/images/about-card.png'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className={"flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0   flex-col lg:flex-row"}>
                    <div className={"relative w=3/4 lg:w-1/2 xl:w-[770px] z-10  order-2  lg:order-1 "}>
                        <img src={about} alt=""/>
                        <div
                            className={"absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[30%]  md:right-[7%] lg:right-[22%]"}>
                            <img src={aboutcard} alt=""/>
                        </div>
                    </div>
                    <div className={"w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2"}>
                        <h2 className={"heading"}> Proud to be one of the nation best</h2>
                        <p className={"text_para"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                            cupiditate doloribus dolorum
                            earum eum ex incidunt iure maxime necessitatibus neque, nulla obcaecati officiis, omnis
                            perspiciatis, quas soluta suscipit voluptates voluptatibus.</p>

                        <p className={"text_para"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur, at corporis enim
                            esse exercitationem id laboriosam magnam natus placeat quidem, ratione, rerum saepe sed sunt
                            totam vitae voluptate voluptatem!</p>

                        <button className={"btn"}>Learn More</button>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default About;