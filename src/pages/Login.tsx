import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../config.ts";
import {toast} from "react-toastify";
import {authContext} from "../context/AuthContext.tsx";
import {HashLoader} from "react-spinners";


const Login = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    // @ts-ignore
    const {dispatch} = useContext(authContext);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});

    }

    const submitHandle = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        setLoading(true)

        try {
            const res = await axios.post(`${BASE_URL}/auth/login`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (res.status != 200) {
                throw new Error(res.data.message)
            }

            dispatch({
                type: "LOGIN_SUCCESS",
                payload: {
                    user: res.data.data,
                    role: res.data.role,
                    token: res.data.token
                }
            })
            setLoading(false);
            toast.success(res.data.message);
            console.log(res.data.data)
            console.log(res.data.role)
            console.log(res.data.token)
            navigate("/home")

        } catch (error: any) {
            return toast.error("user not found")
        }


    }


    return (
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
                                onClick={submitHandle}
                                className={"w-full  text-[18px] py-3 px-5 bg-primaryColor text-white rounded-md"}>
                            { loading ? <HashLoader size={25} color="#fff"/> : "Login"}
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