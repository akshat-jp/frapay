import axios,{AxiosError} from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Transfer(){

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [money, setMoney] = useState("");
    const name = searchParams.get("name");
    const id = searchParams.get("id");
    const [status, setStatus] = useState("idle"); 
    const [errormsg, setErrorMsg] = useState("");

        useEffect(()=>{
                const token = localStorage.getItem("token");
                if(!token){
                    navigate("/signin")
                    return;
                }
            },[])

    return (
    <div className="bg-white md:bg-[#F2D0F4] flex items-center justify-center min-h-screen w-full overflow-x-hidden px-4 py-10">

        {/* WHITE BOX */}
        <div className="bg-white w-full max-w-[480px] rounded-4xl flex flex-col px-6 sm:px-[35px] py-8 sm:py-[50px] gap-6 sm:gap-8 shadow-sm">
            
            <div className="flex flex-col leading-none pb-[20px]">
                <span className="font-bold text-[36px] sm:text-[50px]">Send!</span>
                <span className="font-bold pl-[40px] text-[36px] sm:text-[50px] text-[#909090]">Money</span>
            </div>

            <div className="flex flex-col  sm:gap-[15px]">
                <div className="flex flex-col gap-3">
                    <div className="bg-[#000000] text-white text-[24px] h-[40px] w-[40px] rounded-full flex justify-center ">
                        {name?.[0].toUpperCase()}
                    </div>
                    <span className="font-Manrope text-[17px]">Amount (in Rs)</span>
                </div>
                <div>
                    <input className="border w-full h-[48px] sm:h-[50px] border-gray-300 text-gray-500 pl-[15px] rounded-xl text-[16px] sm:text-[18px]" type="text" placeholder="Enter Amount" onChange={(e)=>{setMoney(e.target.value)}} />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <button className="w-full h-[48px] sm:h-[50px] rounded-full text-white font-bold bg-[#272727] hover:bg-[#454545] cursor-pointer text-[16px] sm:text-[18px]" 
                onClick={async ()=>{

                    setStatus("loading")

                    try {
                        await axios.post("http://localhost:3000/api/v1/accounts/transfer",{
                        to : id,
                        amount : Number(money),
                    },{
                        headers :{
                            Authorization : localStorage.getItem("token")
                        }
                    })

                    setStatus("success");

                    setTimeout(() => {
                        navigate("/dashboard")
                    }, 2000);


                    } catch(e){
                        const error = e as AxiosError<{ msg: string }>;
                        setStatus("error");
                        setErrorMsg(error.response?.data?.msg || "Something went wrong");
                    }

                }}
                >
                    {status === "loading" ? "processing..." : "Initiate Transfer"}
                </button>
                

                 {status === "success" && (
                        <div className="fixed bottom-6 right-6 flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg text-white z-50 bg-green-500">
                            <div>✅</div>
                            <div>
                                <div className="font-semibold">Transfer Successfull!</div>
                                <div className="text-sm">Redirecting to Dashboard...</div>
                            </div>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="fixed bottom-6 right-6 flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg text-white z-50 bg-gray-900">
                            <div>⚠️</div>
                            <div>
                                <div className="font-semibold">Transfer failed</div>
                                <div className="text-sm text-gray-300">{errormsg}</div>
                            </div>
                        </div>
                    )}
            </div>

        </div>
    </div>
);
}