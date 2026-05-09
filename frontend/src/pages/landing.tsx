import { useNavigate } from "react-router-dom"
import HeroElement from "../images/newelement.png"

export function LandingPage(){

    const navigate = useNavigate();

    return <div className="h-screen w-screen bg-gray-200 flex flex-col  items-center">
        <div className="flex justify-between gap-[1400px] h-[82px] items-center">
            <div>
                <span className="text-gray-500 text-[30px] font-semibold">Pay</span>
                <span className="text-black text-[30px] font-semibold">Tm</span>
            </div>
            <div>
                <button onClick={()=>{
                    navigate("/signin") 
                }} className="cursor-pointer bg-white rounded-xl py-[8px] px-[50px]">SignIn</button>
            </div>
        </div>

        <div className="bg-white h-[750px] w-[1200px] rounded-[20px] flex flex-col justify-center items-center">
            <div className="basis-1/10 flex items-center justify-center pt-[25px]">
                <div className="bg-gray-200 rounded-xl py-[5px] px-[15px] text-[15px]">
                    Money App
                </div>
            </div>

            <div className="basis-3/10 text-[70px] text-center">
                <div>
                    <span className="text-gray-500 font-semibold tracking-tight">A New Way to </span>
                    <span className="text-black font-semibold tracking-tight">Move and </span>
                </div>
                <div>
                    <span className="text-black font-semibold tracking-tight">Make Money</span>
                </div>
            </div>
            
            <img src={HeroElement} />
            {/* <div className="basis-6/10 bg-red-100">
                
            </div> */}
        </div>

    </div>
}


