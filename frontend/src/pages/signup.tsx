import { useState } from "react"
import { BottomWarning } from "../components/bottomwarning"
import Button from "../components/button"
import { Heading } from "../components/heading"
import { InputBox } from "../components/inputbox"
import { SubHeading } from "../components/subheading"
import {Link, useNavigate} from "react-router-dom"
import axios,{AxiosError} from "axios";

export function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [status, setStatus] = useState("idle");
    const [errormsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    return <div className="h-screen w-screen bg-gray-200 flex items-center justify-center">
        <div className="bg-white h-[750px] w-[1200px] rounded-[20px] flex flex-col">
            <div className="border-b-[1px] border-gray-200 basis-1/12 rounded-t-2xl flex justify-between items-center ">
                <div className="text-2xl font-bold px-[40px] ">
                    Paytm
                </div>

                <Link className="mx-[40px] text-lg font-semibold" to={"/signin"}>
                    Log in
                </Link>
            </div>

            <div className=" basis-11/12 rounded-b-2xl flex justify-center ">
                <div className="w-[400px] flex flex-col justify-center items-center">
                    <Heading label={"Sign Up"} />
                    <SubHeading subheading={"Enter your information to create an account"} />
                    <InputBox onchange={(e : any)=>{
                        setEmail(e.target.value);
                    }} text={"Email"} placeholder={"Email address"} />
                    <InputBox onchange={(e : any)=>{
                        setPassword(e.target.value);
                    }} text={"Password"} placeholder={"Password"} />
                    <InputBox onchange={(e : any)=>{
                        setFirstname(e.target.value)
                    }} text={"Firstname"} placeholder={"Firstname"} />
                    <InputBox onchange={(e : any)=>{
                        setLastname(e.target.value);
                    }} text={"Lastname"} placeholder={"Lastname"} />
                    <Button onClick={async  ()=>{

                        setStatus("loading")

                        try{
                            await axios.post("http://localhost:3000/api/v1/user/signup",{
                            email,
                            password,
                            firstname,
                            lastname
                        })

                        setStatus("success")

                        setTimeout(() => {
                            navigate('/signin')
                        }, 2000);


                        } catch(e){
                            const error = e as AxiosError<{ msg: string }>;

                            setStatus("error")
                            setErrorMsg(error.response?.data?.msg || "Something went wrong");
                        }

                    }} text={status === "loading" ? "processing..." : "Continue"} />
                    <BottomWarning text={"Already have an account?"} buttontext={"Signin"} to={"/signin"} />
                    
                    {status === "success" && (
                        <div className="fixed bottom-6 right-6 flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg text-white z-50 bg-green-600">
                            <div>✅</div>
                            <div>
                                <div className="font-semibold">Signup successful!</div>
                                <div className="text-sm">Redirecting to signin...</div>
                            </div>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="fixed bottom-6 right-6 flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg text-white z-50 bg-gray-900">
                            <div>⚠️</div>
                            <div>
                                <div className="font-semibold">Signup failed</div>
                                <div className="text-sm text-gray-300">{errormsg}</div>
                            </div>
                        </div>
                    )}
                
                </div>
            </div>
        </div> 
    </div>
}