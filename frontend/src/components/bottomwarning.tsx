import {Link} from "react-router-dom"

export function BottomWarning({text, buttontext, to} : any){
    return <div>
        <div className="py-2 text-[17px] flex justify-center">
            {text}

            <Link className="pointer underline pl-1 cursor-pointer text-[17px] font-semibold" to={to}>
        {buttontext}
        </Link>
        </div>
        
    </div>
}