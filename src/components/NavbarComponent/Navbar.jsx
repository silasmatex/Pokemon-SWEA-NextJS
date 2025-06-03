import { FaHeart } from "react-icons/fa"
import Link from "next/link"


const Navbar = () => {
  return (
    <div className=" h-[70px] bg-amber-100 w-full px-[60px] flex items-center justify-between shadow-md">
        <Link href={'/'}><img src="/poko.png" alt="" width={150} className="cursor-pointer"/></Link>
        <div className="flex items-center gap-5">
            <div className="relative">
                <FaHeart size={40} color={"#FDC900"}/>
                <p className="absolute top-5 right-0 rounded-full bg-red-500 px-2 ">0</p>
            </div>
            <Link href={"/contact"} className="font-bold text-gray-700">Contact</Link>
            
        </div>
    </div>
  )
}

export default Navbar