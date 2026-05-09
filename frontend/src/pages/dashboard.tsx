// export function Dashboard(){
//     return <div>
//         <div>app bar component</div>
//         <div className="m-8">
//             <div>balance = 8000</div>
//             <div>all the users</div>
//         </div>
//     </div>
// }

import { useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";
import { UserLogo } from "../logos/user"
import { AppBar } from "../components/appbar"


export function Dashboard(){

        const [users, setUsers] = useState([]);
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

    return <div className="h-screen w-screen bg-gray-200 flex items-center justify-center">
        <div className="bg-white h-[750px] w-[1200px] rounded-[20px] flex flex-col">
            <div className="border-b-[1px] border-gray-200 basis-1/12 rounded-t-2xl flex justify-between items-center ">
                <div className="text-2xl font-bold px-[40px] ">
                    Paytm
                </div>

                <div className="flex">
                    <div className="text-lg font-semibold">
                        Hello {currentUser?.firstname}
                    </div>
                    <Link className="mx-[40px] text-lg font-semibold" to={"/signin"}>
                        <UserLogo size="md" />
                    </Link>
                </div>

                
            </div>

            <div className=" basis-11/12 rounded-b-2xl flex flex-col">
                <div className=" h-[70px] flex items-center pl-[80px] text-xl font-semibold ">
                    <div className="pr-5">
                        Your Balance
                    </div>
                    <div>
                        Rs {balance}
                    </div>
                </div>
                    <div className="h-[618px] rounded-b-2xl overflow-y-auto">
                    <div className="px-[80px]">
                        <div className="text-2xl font-bold py-[8px]">
                            Users
                        </div>

                        <div>
                            <input onChange={(e)=>{
                                setFilter(e.target.value);
                            }} className="h-[35px] w-[1040px] border border-[2px] border-gray-500 rounded-md my-[5px] " type="text" placeholder="Search Users..."></input>
                        </div>

                        <div>
                            {users.map(user => <AppBar user={user} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
}