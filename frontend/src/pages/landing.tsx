import { useNavigate } from "react-router-dom";
import Element1 from "../images/pngegg2.png"
import Element2 from "../images/pngegg3.png"
import Element3 from "../images/pngegg4.png"
import HeroElement2 from "../images/pngegg1.png"
import BottomElement from "../images/phonepng.png"
import Bottombye from "../images/byebird.gif"
import { useState } from "react";

export function LandingPage(){
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen w-full overflow-x-hidden">

            {/* TOPBAR WRAPPER — fixed, transparent bg handled per-element */}
            <div className="fixed top-0 left-0 right-0 z-50">

                {/* MAIN BAR */}
                <div className="h-[80px] flex justify-between items-center">

                    {/* LEFT PILL */}
                    <div className="bg-[#F1F1F1] flex justify-between items-center gap-4 ml-4 sm:ml-[50px] h-[50px] px-[18px] rounded-4xl">
                        <div className="font-extrabold text-[20px] sm:text-[23px] text-[#272727] cursor-pointer">
                            Frapay
                        </div>
                        <div className="hidden sm:flex gap-5">
                            <div className="font-semibold text-[18px] text-[#272727] cursor-pointer hover:text-[#626262]">Explore</div>
                            <div className="font-semibold text-[18px] text-[#272727] cursor-pointer hover:text-[#626262]">About us</div>
                        </div>
                    </div>

                    {/* RIGHT BUTTONS — hidden on mobile */}
                    <div className="hidden sm:flex items-center gap-4 mr-[50px]">
                        <div className="bg-[#F1F1F1] cursor-pointer hover:bg-[#E8E8E8] font-semibold text-[#272727] h-[45px] flex justify-center items-center w-[90px] rounded-4xl">
                            <button onClick={() => navigate('/signin')}>Log In</button>
                        </div>
                        <div className="bg-[#1ED760] cursor-pointer hover:bg-[#1DB954] font-semibold text-[#272727] h-[45px] flex justify-center items-center w-[120px] rounded-4xl">
                            <button onClick={() => navigate('/signup')}>Get Started</button>
                        </div>
                    </div>

                    {/* HAMBURGER — mobile only */}
                    <div
                        className="relative w-[40px] h-[30px] cursor-pointer flex sm:hidden mr-6"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className={`absolute h-[4px] w-full bg-black rounded-[9px] left-0 transition-all duration-[250ms] ease-in-out origin-left ${menuOpen ? "rotate-45 top-0 left-[5px]" : "top-0"}`} />
                        <span className={`absolute h-[4px] bg-black rounded-[9px] left-0 transition-all duration-[250ms] ease-in-out origin-left top-1/2 -translate-y-1/2 ${menuOpen ? "w-0 opacity-0" : "w-full opacity-100"}`} />
                        <span className={`absolute h-[4px] w-full bg-black rounded-[9px] left-0 transition-all duration-[250ms] ease-in-out origin-left ${menuOpen ? "-rotate-45 top-[28px] left-[5px]" : "top-full -translate-y-full"}`} />
                    </div>
                </div>

                {/* MOBILE DROPDOWN */}
                <div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/90 backdrop-blur-md ${menuOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="flex flex-col items-center gap-4 py-6">
                        <div className="bg-[#F1F1F1] cursor-pointer hover:bg-[#E8E8E8] font-semibold text-[#272727] h-[45px] flex justify-center items-center w-[200px] rounded-4xl">
                            <button onClick={() => navigate('/signin')}>Log In</button>
                        </div>
                        <div className="bg-[#1ED760] cursor-pointer hover:bg-[#1DB954] font-semibold text-[#272727] h-[45px] flex justify-center items-center w-[200px] rounded-4xl">
                            <button onClick={() => navigate('/signup')}>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

        <div className="pt-[50px]">
            {/* HERO ELEMENT */}
            <div className="h-[350px] lg:h-[270px] ">
                <div className="flex flex-col items-center font-bold text-[40px] md:text-[55px] lg:text-[80px] pt-[100px] text-[#181818] leading-none">
                    <span>A Smarter Way</span>
                    <span>to Handle Payments.</span>
                </div>
                <div className="flex flex-col items-center  text-[#7A7A7B] text-[18px] md:text-[23px] lg:text-[30px] pt-[30px]">
                    <span>Secure transfers and real-time balances </span>
                    <span>in one seamless experience.</span>
                </div>
                <div className="flex justify-center pt-[50px] gap-8">
                    <button onClick={()=>{ navigate('/signup')}} className=" bg-[#181818] py-[14px] px-[24px] rounded-4xl text-[20px] font-bold text-white cursor-pointer hover:bg-gray-700">Start for Free</button>
                    <button onClick={()=>{ navigate('/signin')}} className="px-[25px] rounded-4xl text-[20px] font-bold text-[#181818] border cursor-pointer hover:bg-[#F1F1F1]">Login In</button>
                </div>
            </div>

            {/* IMAGE */}
            <div className=" flex items-center justify-center ">
                <img src={HeroElement2} className="w-full max-w-[1500px] pointer-events-none" />
            </div>
        </div>

            {/* TEXT */}
            <div className="flex flex-col items-center pt-[60px] sm:pt-[100px] font-bold text-[28px] sm:text-[40px] lg:text-[55px] text-center px-4">
                <span>Built with secure authentication, transactions,</span>
                <span>and wallet management</span>
            </div>
            
            {/* CARD COMPONENTS */}

            <div className="flex flex-col items-center gap-16 px-4 sm:px-[80px] lg:px-[300px] pt-[80px] sm:pt-[200px] pb-[100px]">

                    {/* ELEMENT 1 */}
                    <div className="flex flex-col xl:flex-row gap-10 lg:gap-20 w-full">
                        <div className="flex flex-col lg:basis-1/2 justify-center gap-2">
                            <span className="font-semibold text-[32px] sm:text-[40px] lg:text-[50px]">Instant Transfers</span>
                            <span className="text-[16px] sm:text-[19px] lg:text-[22px] text-[#7A7A7B]">Send and receive payments instantly with smooth and reliable transaction processing. Built to simulate real-world digital payment workflows.</span>
                            <div className="pt-[25px]">
                                <button onClick={() => navigate('/signup')} className="self-start px-[20px] py-[11px] rounded-4xl text-[18px] sm:text-[20px] font-bold text-[#181818] border cursor-pointer hover:bg-[#F1F1F1]">Try For Free</button>
                            </div>
                        </div>
                        <div className="h-[300px] sm:h-[400px] lg:h-[500px] lg:w-[500px] rounded-2xl bg-[#F3F3F3] lg:basis-1/2 flex items-center justify-center">
                            <img className="h-[260px] sm:h-[340px] lg:h-[420px]" src={Element1} />
                        </div>
                    </div>

                    {/* ELEMENT 2 */}
                    <div className="flex flex-col xl:flex-row gap-10 lg:gap-20 w-full">
                        <div className="flex flex-col lg:basis-1/2 justify-center gap-2">
                            <span className="font-semibold text-[32px] sm:text-[40px] lg:text-[50px]">Secure Authentication</span>
                            <span className="text-[16px] sm:text-[19px] lg:text-[22px] text-[#7A7A7B]">Advanced login and session handling designed for a secure user experience. Modern authentication flows powered by backend validation systems.</span>
                            <div className="pt-[25px]">
                                <button onClick={() => navigate('/signup')} className="self-start px-[20px] py-[11px] rounded-4xl text-[18px] sm:text-[20px] font-bold text-[#181818] border cursor-pointer hover:bg-[#F1F1F1]">Try For Free</button>
                            </div>
                        </div>
                        <div className="h-[300px] sm:h-[400px] lg:h-[500px] lg:w-[500px] rounded-2xl bg-[#F3F3F3] lg:basis-1/2 flex items-center justify-center">
                            <img className="h-[260px] sm:h-[340px] lg:h-[420px]" src={Element3} />
                        </div>
                    </div>

                    {/* ELEMENT 3 */}
                    <div className="flex flex-col xl:flex-row gap-10 lg:gap-20 w-full">
                        <div className="flex flex-col lg:basis-1/2 justify-center gap-2">
                            <span className="font-semibold text-[32px] sm:text-[40px] lg:text-[50px]">Real-Time Balance Tracking</span>
                            <span className="text-[16px] sm:text-[19px] lg:text-[22px] text-[#7A7A7B]">Track wallet balances and transaction activity with live backend updates. Every transfer reflects instantly for a seamless payment experience.</span>
                            <div className="pt-[25px]">
                                <button onClick={() => navigate('/signup')} className="self-start px-[20px] py-[11px] rounded-4xl text-[18px] sm:text-[20px] font-bold text-[#181818] border cursor-pointer hover:bg-[#F1F1F1]">Try For Free</button>
                            </div>
                        </div>
                        <div className="h-[300px] sm:h-[400px] lg:h-[500px] lg:w-[500px] rounded-2xl bg-[#F3F3F3] lg:basis-1/2 flex items-center justify-center">
                            <img className="h-[260px] sm:h-[340px] lg:h-[500px]" src={Element2} />
                        </div>
                    </div>
                </div>

            {/* STEPS COMPONENT */}

                            <div className="flex flex-col items-center px-4 sm:px-[80px] lg:px-[300px] py-[80px] sm:py-[150px]">
                    <div className="flex flex-col gap-[40px] sm:gap-[60px] w-full">
                        <div className="font-bold text-[36px] sm:text-[50px]">Get Started in 3 steps</div>

                        <div className="flex flex-col sm:flex-row gap-10">
                            {[
                                { n: "1", title: "Sign Up & Get Started", desc: "Create your account and access your digital wallet instantly. Get started with a smooth onboarding experience and secure authentication system." },
                                { n: "2", title: "Explore Registered Users", desc: "View all signed-in users directly from the platform dashboard. Browse users seamlessly and interact with a fully backend-powered system." },
                                { n: "3", title: "Transfer Money Instantly", desc: "Send and receive digital payments with real-time balance updates. Experience fast transactions powered by secure APIs and backend processing." },
                            ].map(({ n, title, desc }) => (
                                <div key={n} className="flex flex-col gap-3 flex-1">
                                    <div className="bg-[#EEE9F5] rounded-full h-[55px] w-[55px] flex items-center justify-center font-semibold text-[25px]">{n}</div>
                                    <div className="flex flex-col gap-2">
                                        <span className="font-semibold text-[20px] sm:text-[25px]">{title}</span>
                                        <span className="text-[16px] sm:text-[19px]">{desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 sm:gap-6 flex-wrap">
                            <button onClick={() => navigate('/signup')} className="bg-[#181818] py-[12px] px-[20px] sm:py-[14px] sm:px-[24px] rounded-4xl text-[16px] sm:text-[20px] font-bold text-white cursor-pointer hover:bg-gray-700">Start for Free</button>
                            <button onClick={() => navigate('/signin')} className="px-[20px] sm:px-[25px] py-[12px] sm:py-[14px] rounded-4xl text-[16px] sm:text-[20px] font-bold text-[#181818] border cursor-pointer hover:bg-[#F1F1F1]">Login In</button>
                        </div>
                    </div>
                </div>

            {/* BOTTOM COMPONENT */}

            <div className="h-[550px] md:h-[700px] lg:h-[930px] bg-black flex flex-col relative w-screen">

                <div className="h-[1200px] bg-black flex flex-col ">
                    <div className="flex flex-col items-center pt-[100px] gap-12">
                        <div className="text-white flex flex-col text-center font-semibold text-[25px] md:text-[40px] lg:text-[60px] leading-none">
                            <span>Modern Payments.</span>
                            <span>Developer First.</span>
                        </div>
                        <div>
                            <button onClick={()=>{navigate('/signup')}} className="bg-white py-[14px] px-[20px] md:px-[60px] lg:px-[100px]  rounded-4xl text-[20px] font-bold text-black cursor-pointer hover:bg-gray-300">Try for Free</button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src={BottomElement} className=" h-[250px] md:h-[400px] lg:h-[600px] " />
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[300px] lg:h-[500px] bg-gradient-to-t from-black to-transparent opacity-100 pointer-events-none" />
            </div>

            {/* FULL BOTTOM DIV */}
            <div className="bg-black pt-[200px] w-screen">
                <div className="flex flex-col md:flex-row gap-10 md:gap-0  justify-between px-[18px] mx-[18px]">
                    <div className="flex flex-col">
                        <span className="text-white font-extrabold text-[30px]">Frapay</span>
                        <span className="text-white font-semibold text-[19px]">Make Payments_Easy</span>
                    </div>
                    <div className="flex gap-8 md:gap-20 lg:gap-63 text-[#545455] font-semibold text-[20px] ">
                        <div className="flex flex-col">
                            <span className="">Explore</span>
                            <span onClick={()=>{navigate('/dashboard')}} className="text-white cursor-pointer hover:text-gray-300">Dashboard</span>
                            <span onClick={()=>{navigate('/transfer')}} className="text-white cursor-pointer hover:text-gray-300">Transfer</span>
                            <span onClick={()=>{navigate('/signin')}} className="text-white cursor-pointer hover:text-gray-300">Log In</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="pr-[5px] cursor-pointer hover:text-gray-500">Company</span>
                            <span className="text-white cursor-pointer hover:text-gray-300">About Us</span>
                            <span className="text-white cursor-pointer hover:text-gray-300">Pricing</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="pr-[26px] cursor-pointer hover:text-gray-500">Resources</span>
                            <span className="text-white cursor-pointer hover:text-gray-300">Help and guides</span>
                            <span className="text-white cursor-pointer hover:text-gray-300">Blog</span>
                            <span className="text-white cursor-pointer hover:text-gray-300">Client Stories</span>
                            <span className="text-white cursor-pointer hover:text-gray-300">Releases</span>
                        </div>
                    </div>
                </div>
                    
                <div className="flex flex-col xl:flex-row justify-between px-[18px] pt-[50px] mx-[18px]">
                    <div className="text-white flex gap-5 ">
                        <div className="cursor-pointer">
                            <svg width="40px" height="40px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="#ffffff" stroke-width="1.5"></path><path d="M17.5 6.51L17.51 6.49889" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>    
                        </div>
                        <div className="cursor-pointer">
                            <svg width="40px" height="40px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 17V13.5V10" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7.01L7.01 6.99889" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div className="cursor-pointer">
                            <svg width="40px" height="40px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z" stroke="#ffffff" stroke-width="1.5"></path><path d="M20 3L4 21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path></svg>
                        </div> 
                        <div className="cursor-pointer">
                            <svg width="40px" height="40px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div className="cursor-pointer">
                            <svg width="40px" height="40px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.15039C10.8087 4.15039 9.42076 4.17798 8.06649 4.21628L8.01146 4.21784C6.63265 4.25681 5.52112 4.28823 4.64461 4.43318C3.73199 4.58411 2.97386 4.87211 2.36772 5.49563C1.75996 6.12082 1.49451 6.89404 1.3699 7.81907C1.24996 8.70944 1.24998 9.83697 1.25 11.2382V11.2382V12.7627V12.7627C1.24998 14.1639 1.24996 15.2914 1.3699 16.1818C1.4945 17.1068 1.75996 17.88 2.36771 18.5052C2.97384 19.1287 3.73195 19.4167 4.64456 19.5676C5.52106 19.7126 6.63258 19.744 8.01137 19.783H8.0114L8.06639 19.7846C9.42068 19.8229 10.8087 19.8505 12 19.8505C13.1913 19.8505 14.5793 19.8229 15.9336 19.7846L15.9886 19.783H15.9886C17.3674 19.744 18.4789 19.7126 19.3554 19.5676C20.2681 19.4167 21.0262 19.1287 21.6323 18.5052C22.24 17.88 22.5055 17.1068 22.6301 16.1818C22.75 15.2914 22.75 14.1639 22.75 12.7627V11.2381C22.75 9.83696 22.75 8.70944 22.6301 7.81907C22.5055 6.89404 22.24 6.12082 21.6323 5.49563C21.0261 4.87211 20.268 4.58411 19.3554 4.43318C18.4789 4.28823 17.3674 4.25681 15.9885 4.21784L15.9335 4.21628C14.5792 4.17798 13.1913 4.15039 12 4.15039ZM10.8721 14.6512C10.64 14.7838 10.3548 14.7829 10.1236 14.6487C9.89232 14.5145 9.75 14.2674 9.75 14V10C9.75 9.73265 9.89232 9.48551 10.1236 9.35132C10.3548 9.21713 10.64 9.21617 10.8721 9.34882L14.3721 11.3488C14.6058 11.4823 14.75 11.7309 14.75 12C14.75 12.2691 14.6058 12.5177 14.3721 12.6512L10.8721 14.6512Z" fill="#ffffff"></path></svg>
                        </div>
                    </div>
                    <div className="flex  gap-0 lg:gap-39 text-[#545455] font-semibold text-[20px]">
                        <span className="cursor-pointer hover:text-gray-500 pr-[63px]">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-gray-500 pr-[50px]">Terms of Service</span>
                        <span className="pr-[30px]">2026 Frapay..</span>
                    </div>
                </div>

                <div className="flex justify-center pt-[100px]">
                    <img src={Bottombye} className="h-[120px]"/>
                </div>
            </div>

        </div>
    );
}
