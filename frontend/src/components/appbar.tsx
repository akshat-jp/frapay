import { useEffect, useState } from "react"
import { UserLogo } from "../logos/user"
import { Navigate, useNavigate } from "react-router-dom"


export function AppBar({user} : any){
    const navigate = useNavigate();
    

    return <div className="flex justify-between py-[10px]">
        <div className="flex items-center gap-[6px]">
            <UserLogo size="md" />
            <div className="text-[24px]">
                {user.firstname} {user.lastname}
            </div>
        </div>
        <div>
            <button onClick={()=>{
                console.log(user)
                navigate("/transfer?id=" + user._id + "&name=" + user.firstname);
            }} className=" h-[35px] w-[125px] rounded-md bg-gray-700 text-white">Send Money</button>
        </div>
    </div>
}