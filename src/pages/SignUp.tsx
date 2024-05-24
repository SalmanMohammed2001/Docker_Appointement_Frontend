import signup from '../assets/images/signup.gif'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from 'axios'
import uploadImageCloudinary from "../utils/uploadImageCloudinary.ts";
import {BASE_URL} from "../config.ts";
import {toast} from "react-toastify";
import {HashLoader} from "react-spinners";

const SignUp = () => {

    const [selectFile, setSelectFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const[loading,setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        photo: selectFile,
        gender: '',
        role: 'patient'
    });

    const navigate=useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleFileInputChange = async (e: any) => {
        const file: any = e.target.files[0]
        const data = await uploadImageCloudinary(file)
         setPreviewUrl(data.url)
         setSelectFile(data.url)
         setFormData({...formData,photo:data.url})

    }
    const submitHandle = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        setLoading(true);


        try{
       const   res  =   await  axios.post(`${BASE_URL}/auth/register`,formData,{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
          if(res.status === 200){
                setLoading(false);
              toast.success(res.data.message)
                navigate('/login')
          }
        }catch(error){
           // @ts-ignore
             toast.error("User Already Exists")
            setLoading(false);

        }


    }

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <section className={"px-5  xl:px-0"}>
            <div className={" w-full max-w-[1170px] mx-auto"}>
                <div className={"grid grid-cols-1 lg:grid-cols-2"}>
                    <div className={"hidden lg:block bg-primaryColor rounded-l-lg"}>
                        <figure className={"rounded-l-lg"}>
                            <img src={signup} alt="" className={"w-full rounded-l-lg"}/>
                        </figure>
                    </div>

                    <div className={"rounded-l-lg lg:pl-16 py-10"}>
                        <h3 className={"text-[22px] leading-9 font-bold mb-10 "}>Create an <span
                            className={"text-primaryColor"}>Account</span></h3>

                        <form action="" onSubmit={submitHandle}>
                            <div className={"mb-5"}>
                                <input type="text"
                                       value={formData.name}
                                       onChange={handleInputChange}
                                       placeholder={"Enter the Full Name"} name={"name"}
                                       className={"w-full px-4 py-3 border-b border-solid border-[#0066ff61] " +
                                           "focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 " +
                                           "text-headingColor placeholder:text-textColor rounded-md cursor-pointer"}
                                />

                            </div>

                            <div className={"mb-5"}>
                                <input type="email"
                                       placeholder={"Enter the Email"}
                                       name={"email"}
                                       onChange={handleInputChange}
                                       value={formData.email}
                                       className={"w-full px-4 py-3 border-b border-solid border-[#0066ff61] " +
                                           "focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 " +
                                           "text-headingColor placeholder:text-textColor rounded-md cursor-pointer"}
                                />

                            </div>

                            <div className={"mb-5"}>
                                <input type="password"
                                       placeholder={"Enter the password"}
                                       name={"password"}
                                       onChange={handleInputChange}
                                       value={formData.password}
                                       className={"w-full px-4 py-3 border-b border-solid border-[#0066ff61] " +
                                           "focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 " +
                                           "text-headingColor placeholder:text-textColor rounded-md cursor-pointer"}
                                />

                            </div>
                            <div className={"mb-5 flex items-center justify-between "}>
                                <label htmlFor="" className={"text-headingColor font-bold text-[16px] leading-7"}>
                                    Are You a:
                                    <select
                                        name={"role"} value={formData.role} onChange={handleInputChange}
                                        className={"text-headingColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"}
                                    >
                                        <option > Select</option>
                                        <option value={"patient"}> Patient</option>
                                        <option value={"doctor"}> Doctor</option>

                                    </select>
                                </label>
                                <label htmlFor="" className={"text-headingColor font-bold text-[16px] leading-7"}>
                                    Gender:
                                    <select
                                        name="gender" value={formData.gender} onChange={handleInputChange}
                                        className={"text-headingColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"}
                                    >
                                        <option> Select</option>
                                        <option value={"male"}> Male</option>
                                        <option value={"female"}> Female</option>
                                        <option value={"other"}> Other</option>

                                    </select>
                                </label>
                            </div>


                            <div className={"mb-5 flex items-center gap-3"}>
                                { selectFile && <figure
                                    className={"w-[60px] h-[60px] rounded-full border-2 border-primaryColor border-solid flex items-center justify-center"}>
                                    <img src={previewUrl} alt="" className={"w-full rounded-full "}/>
                                </figure>}

                                <div className={"relative w-[160px] h-[50px]"}>
                                    <input
                                        type="file"
                                        name={"photo"}
                                        id={"customFile"}
                                        onChange={handleFileInputChange}
                                        className={"absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"}
                                    />
                                    <label htmlFor="customFile"
                                           className={"absolute top-0 left-0 w-full h-full flex items-center " +
                                               "px-[0.75rem] text-[15px] leading-6 " +
                                               "overflow-hidden bg-[#0066ff46] " +
                                               "text-headingColor font-semibold rounded-lg truncate cursor-pointer"}>
                                        upload photo
                                    </label>

                                </div>
                            </div>

                            <div className={"mt-7"}>
                                <button
                                    disabled={loading && true}
                                    type={"submit"}
                                        className={"w-full bg-primaryColor text-white text-[16px] px-4 py-3 rounded-lg "}>{loading ? <HashLoader size={35} color='#ffffff'/> : 'Signup'}
                                </button>
                            </div>

                            <p className={"mt-5 text-center text-textColor cursor-pointer"}>
                                Already have an account? <Link to={"/login"}
                                                               className={"text-primaryColor font-medium"}> Login</Link>
                            </p>


                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignUp;