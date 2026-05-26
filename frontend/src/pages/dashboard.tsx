import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";


export function Dashboard(){

        const [users, setUsers] = useState<{_id: string, firstname: string, lastname: string}[]>([]);
        const [currentUser, setCurrentUser] = useState<{firstname: string, lastname: string, balance: number} | null>(null);
        const [balance, setBalance] = useState(0);
        const [filter, setFilter] = useState("");
        const navigate = useNavigate();


            useEffect(()=>{
            const token = localStorage.getItem("token");
            if(!token){
                navigate("/signin")
                return;
            }

            axios.get("http://localhost:3000/api/v1/user/me",{
                headers:{
                    Authorization : token,
                }
            })
            .then((response)=>{
                setCurrentUser(response.data)
                console.log("response.data.firstname = " + response.data.firstname)
                
            })

        },[])

        useEffect(()=>{
            const token = localStorage.getItem("token")
            axios.get("http://localhost:3000/api/v1/accounts/balance",{
                headers:{
                    Authorization : token,
                }
            })
            .then((response)=>{
                setBalance(response.data.balance)
                console.log("response.data.balance = " + response.data.balance)
            })
        },[])

    
        useEffect(()=>{
            axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter,{
                headers:{
                    Authorization : localStorage.getItem("token")
                }
            })
                .then((response)=>{
                    console.log("success:", response.data);
                    setUsers(response.data);
                })
                .catch((error)=>{
                    console.log("error:", error);
                })
                
        },[filter])

    

    return (
        <div className="min-h-screen w-full relative flex">
            {/* Dashed Top Fade Grid */}
            <div
                className="absolute inset-0 z-0"
                style={{
                backgroundImage: `
                    linear-gradient(to right, #e7e5e4 1px, transparent 1px),
                    linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 0",
                maskImage: `
                    repeating-linear-gradient(
                        to right,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        repeating-linear-gradient(
                        to bottom,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
                `,
                WebkitMaskImage: `
            repeating-linear-gradient(
                        to right,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        repeating-linear-gradient(
                        to bottom,
                        black 0px,
                        black 3px,
                        transparent 3px,
                        transparent 8px
                        ),
                        radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
                `,
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
                }}
            />

            {/* LEFT */}
            <div className="bg-[#f8f6f4] flex flex-col justify-between py-[30px] px-[32px] pr-[15px] w-[200px] border-r border-dashed border-gray-200 z-10">
                <div className="font-extrabold text-[32px] cursor-pointer font-Manrope">
                    PayTm
                </div>
                <div>
                    <div className="flex gap-2 cursor-pointer hover:bg-[#EFEFEF] px-[15px] py-[8px] rounded-lg pr-[35px] text-gray-600" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                            </svg>
                        <button onClick={()=>{
                            localStorage.removeItem("token");
                            navigate('/')
                        }} className="cursor-pointer font-semibold ">Logout</button>
                    </div>
                </div>
                
            </div>

            {/* RIGHT */}
            <div className="w-full relative min-h-screen">

                {/* TOP - Glass floating panel */}
                <div
                    className="flex items-center justify-between mx-[400px] h-[90px] pl-[70px] pr-[50px] rounded-b-4xl transition-transform duration-300 ease-out hover:scale-[1.03] cursor-pointer"
                    style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(240,236,230,0.3) 100%)",
                        backdropFilter: "blur(20px) saturate(180%)",
                        WebkitBackdropFilter: "blur(20px) saturate(180%)",
                        border: "1px solid rgba(255,255,255,0.7)",
                        borderTop: "none",
                        boxShadow: `
                            0 8px 32px rgba(0,0,0,0.12),
                            0 2px 8px rgba(0,0,0,0.08),
                            inset 0 1px 0 rgba(255,255,255,0.9),
                            inset 0 -1px 0 rgba(255,255,255,0.3),
                            inset 1px 0 0 rgba(255,255,255,0.6),
                            inset -1px 0 0 rgba(255,255,255,0.6)
                        `,
                    }}
                >

                    {/* balance */}
                        <div className=" font-semibold text-[25px] font-Manrope">
                            Your Balance : Rs {balance}
                        </div>

                    {/* hi user */}
                        <div className=" flex gap-3 items-center text-[25px] font-Manrope">
                            <div>
                                Hello {currentUser?.firstname}
                            </div>

                            <div >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                            
                        </div>
                
                </div>

                

                {/* MIDDLE */}
                <div className="flex justify-center pt-[130px] pb-[35px] font-Manrope text-[70px]">
                    Search users across the platform.
                </div>

                {/* BOTTOM - Glass floating panel */}
                <div
                    className="flex justify-center absolute bottom-0 left-0 right-0 mx-[250px] py-[20px] h-[910px] rounded-t-4xl"
                    style={{
                    background: "linear-gradient(160deg, rgba(255,255,255,0.6) 0%, rgba(240,236,230,0.35) 40%, rgba(220,215,208,0.25) 100%)",
                    backdropFilter: "blur(24px) saturate(200%)",
                    WebkitBackdropFilter: "blur(24px) saturate(200%)",
                    border: "1px solid rgba(255,255,255,0.65)",
                    borderBottom: "none",
                    boxShadow: `
                        0 -8px 40px rgba(0,0,0,0.10),
                        0 -2px 12px rgba(0,0,0,0.07),
                        0 -40px 80px rgba(255,255,255,0.15),
                        inset 0 1px 0 rgba(255,255,255,0.95),
                        inset 0 2px 4px rgba(255,255,255,0.5),
                        inset 1px 0 0 rgba(255,255,255,0.7),
                        inset -1px 0 0 rgba(255,255,255,0.7)
                    `,
                    }}>

                        {/* Inner glass sheen — top highlight streak */}
                        <div
                        className="absolute top-0 left-[10%] right-[10%] h-[2px] rounded-full"
                        style={{
                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9) 70%, transparent)",
                            filter: "blur(0.5px)",
                        }}/>
                        
                        {/* Inner subtle reflection band */}
                        <div
                        className="absolute top-[1px] left-[5%] right-[5%] h-[60px] rounded-t-4xl flex justify-center"
                        style={{
                            background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 100%)",
                            pointerEvents: "none",
                        }}/>
                            
                            <div className=" relative z-10 w-full mt-[50px] flex justify-center">
                                <div className="absolute">
                                    
                                    <input
                                        className="w-[1200px] h-[80px] rounded-2xl pl-[60px] pr-[20px] py-[16px] text-[22px] outline-none"
                                        onChange={(e)=>{
                                            setFilter(e.target.value);
                                        }}
                                        
                                        type="text"
                                        placeholder="Search Users"
                                        style={{
                                            background: "rgba(255,255,255,0.7)",
                                            border: "1px solid rgba(255,255,255,0.8)",
                                            boxShadow: `
                                                0 4px 24px rgba(0,0,0,0.06),
                                                0 1px 4px rgba(0,0,0,0.04),
                                                inset 0 1px 0 rgba(255,255,255,0.9),
                                                inset 0 -1px 0 rgba(0,0,0,0.03)
                                            `,
                                        }}
                                        />

                                        <div className="absolute left-[20px] top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                            </svg>  
                                        </div>

                                        <div className="absolute right-[40px]  top-1/2 -translate-y-1/2 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="m12 8l-5 5l1.4 1.4l2.6-2.575V22h2V11.825l2.6 2.575L17 13l-5-5Zm-8.35 9.5q-.8-1.225-1.225-2.625T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 1.475-.425 2.875T20.35 17.5l-1.45-1.45q.55-.925.825-1.95T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 1.075.275 2.1t.825 1.95L3.65 17.5Z"/>
                                            </svg>
                                        </div>
  
                                </div>

                                <div className="mt-[150px] w-[1100px]  flex flex-col gap-5 overflow-y-auto ">
                                    {users.map(user => (<div className=" flex justify-between items-center px-[70px] ">
                                        <div className="text-[30px] font-Manrope">
                                            {user.firstname} {user.lastname}
                                        </div>
                                        <div>
                                            <button onClick={()=>{
                                                console.log(user)
                                                navigate("/transfer?id=" + user._id + "&name=" + user.firstname);
                                            }} className="cursor-pointer bg-black text-white text-[18px] py-[8px] px-[24px] font-Manrope shadow-lg shadow-gray-400">Transfer</button>
                                        </div>
                                    </div>) )}
                                    

                                </div>
                            </div>
                           
                        

                </div>
            </div>
        </div>
    );
}