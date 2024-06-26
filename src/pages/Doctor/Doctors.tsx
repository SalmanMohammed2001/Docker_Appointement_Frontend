
import DoctorCard from "../../components/doctor/DoctorCard.tsx";
// @ts-ignore
import {doctors} from "../../assets/data/doctors";
import Testimonial from "../../components/testimonial/Testimonial.tsx";


const Doctors = () => {
        return(
            <div>
                <section className={"bg-[#fff9ea] "}>
                    <div className={"container text-center"}>
                        <h2 className={"heading"}>Find a Doctor</h2>
                      <div className={"max-w-[570px]  mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between "}>
                          <input type="search" placeholder={"search doctor"} className={" py-4  pl-4  pr-2  bg-transparent w-full " +
                              " focus:outline-none  cursor-pointer placeholder:text-textColor"}/>

                          <button className={"btn mt-0 rounded-[0px] rounded-r-md"}>Search</button>
                      </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"}>
                            {
                                doctors.map((doctor: any, index: number) => {
                                    return(
                                        <DoctorCard doctor={doctor} key={index} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
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
export default Doctors;