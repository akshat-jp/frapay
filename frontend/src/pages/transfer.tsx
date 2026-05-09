import Button from "../components/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios,{ AxiosError } from "axios"
import {  useState } from "react";


export function Transfer(){

    const navigate = useNavigate();
    
    const [searchParams] = useSearchParams();
    const [money, setMoney] = useState("");
    const name = searchParams.get("name");
    const id = searchParams.get("id");
    const [status, setStatus] = useState("idle"); 
    const [errormsg, setErrorMsg] = useState("");


    return <div className="h-screen w-screen bg-gray-200 flex items-center justify-center ">
        <div className="bg-white rounded-[20px] h-[500px] w-[500px] flex flex-col justify-center items-center">
            <div className="pb-[60px] font-bold text-[35px]">
                Send Money
            </div>

            <div className="flex flex-col gap-[5px]">
                <div className="flex items-center gap-[10px] py-[10px]">
                    <div className="bg-gray-300 rounded-full h-[35px] w-[35px] flex items-center justify-center">{name?.[0].toUpperCase()}</div>
                    <div className="text-[25px] font-semibold">{name}</div>
                </div>

                <div>
                    <div className="text-[17px]">Amount (in Rs)</div>
                    <input onChange={(e)=>{
                        setMoney(e.target.value);
                    }} className="border py-[6px] w-[315px] rounded-md px-4 my-[4px]" type="text" id="amount" placeholder="Enter amount"></input>
                </div>

                <Button onClick={async ()=>{

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

                
                text={status === "loading" ? "processing..." : "Initiate Transfer"} ></Button>

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
}