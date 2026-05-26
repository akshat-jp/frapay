import axios,{AxiosError} from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signin(){

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("idle");
    const [errormsg, setErrorMsg] = useState("");

    return (
    <div className="bg-white md:bg-[#F2D0F4] flex items-center justify-center min-h-screen w-full overflow-x-hidden px-4 py-10">

        {/* WHITE BOX */}
        <div className="bg-white w-full max-w-[480px] rounded-4xl flex flex-col px-6 sm:px-[35px] py-8 sm:py-[50px] gap-6 sm:gap-8 shadow-sm">
            
            <div className="flex flex-col leading-none">
                <span className="font-bold text-[36px] sm:text-[45px]">Welcome!</span>
                <span className="font-bold text-[36px] sm:text-[45px] text-[#909090]">Please Sign In</span>
            </div>

            <div className="flex flex-col gap-[12px] sm:gap-[15px]">
                <input className="border w-full h-[48px] sm:h-[50px] border-gray-300 text-gray-500 pl-[15px] rounded-xl text-[16px] sm:text-[18px]" type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
                <input className="border w-full h-[48px] sm:h-[50px] border-gray-300 text-gray-500 pl-[15px] rounded-xl text-[16px] sm:text-[18px]" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
            </div>

            <div className="flex flex-col gap-2">
                <button className="w-full h-[48px] sm:h-[50px] rounded-full text-white font-bold bg-[#272727] hover:bg-[#454545] cursor-pointer text-[16px] sm:text-[18px]" 
                onClick={async ()=>{

                    setStatus("loading")

                    try{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                        email,
                        password
                    })

                    localStorage.setItem("token", response.data.token)

                    setStatus("success")

                    setTimeout(() => {
                        navigate('/dashboard')
                    }, 2000);

                    } catch(e){
                        const error = e as AxiosError<{ msg: string }>;

                        setStatus("error");
                        setErrorMsg(error.response?.data?.msg || "Something went wrong");

                    }
                    
                }}>
                    {status === "loading" ? "processing..." : "Submit !"}
                </button>
                <div className="flex gap-2 pl-[4px] text-[14px] sm:text-[16px]">
                    <span>Don't have an Account ?</span>
                    <span className="underline cursor-pointer hover:text-[#909090]" onClick={() => navigate('/signup')}>Sign Up</span>
                </div>

                    {status === "success" && (
                        <div className="fixed bottom-6 right-6 flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg text-white z-50 bg-green-600">
                            <div>✅</div>
                            <div>
                                <div className="font-semibold">Signin successful!</div>
                                <div className="text-sm">Redirecting to signin...</div>
                            </div>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="fixed bottom-6 right-6 flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg text-white z-50 bg-gray-900">
                            <div>⚠️</div>
                            <div>
                                <div className="font-semibold">Signin failed</div>
                                <div className="text-sm text-gray-300">{errormsg}</div>
                            </div>
                        </div>
                    )}
            </div>

        </div>
    </div>
);
}

