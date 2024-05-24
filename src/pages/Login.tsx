import {useState} from "react";
import {Link} from "react-router-dom";

const Login = () => {

    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});

    }

        return(
            <section>
                <div className={" w-full max-w-[570px] mx-auto  p-5 rounded-md shadow-md md:p-10 "}>
                    <h1 className={"text-headingColor font-bold leading-9 text-[22px] mb-10"}>Hello! <span
                        className={"text-primaryColor"}>Welcome</span> Back </h1>


                    <form action="">
                        <div className={"mb-5"}>
                            <input type="email" placeholder={"Enter the email"} name={"email"} value={formData.email}
                                   onChange={handleInputChange}
                                   className={"w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"}
                            />

                        </div>
                        <div className={"mb-5"}>
                            <input type="email"
                                   placeholder={"Enter The password"}
                                   name={"password"}
                                   className={"w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"}
                                   value={formData.password}
                                   onChange={handleInputChange}
                                   required

                            />


                        </div>

                        <div className={"mt-7"}>
                            <button type={"submit"}
                                    className={"w-full  text-[18px] py-3 px-5 bg-primaryColor text-white rounded-md"}>Login
                            </button>
                        </div>

                        <div>
                            <p className={"mt-5 text-center text-textColor cursor-pointer"}>
                                Dont have an account? <Link to={"/register"}
                                                            className={"text-primaryColor font-medium"}> Register</Link>
                            </p>
                        </div>
                    </form>

                </div>


            </section>
        )
}
export default Login;