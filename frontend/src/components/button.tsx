export default function Button({text, onClick}:any){
    return <div>
            <button onClick={onClick} type="button" className="cursor-pointer rounded-lg text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-3 text-center leading-5 w-[315px] my-[8px]">{text}</button>
        </div>
}