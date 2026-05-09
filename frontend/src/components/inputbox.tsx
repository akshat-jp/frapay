export function InputBox({text, placeholder,onchange} : any){
    return<div className="pb-[15px]">
        <div className="text-lg font-medium text-left py-1">
            {text}
        </div>
        <input onChange={onchange} placeholder={placeholder} className="w-[315px] h-[40px] px-2 border rounded-md "></input>
    </div>
}