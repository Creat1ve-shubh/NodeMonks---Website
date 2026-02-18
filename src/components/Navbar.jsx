import { Abril_Fatface } from "next/font/google"
import Link from "next/link";

const abril_fatface = Abril_Fatface({
    weight: "400",
    subsets: ["latin"],
});
export default function Navbar() {
    return (
        <div className="w-screen max-sm:h-fit max-sm:py-5 h-20 z-100 bg-linear-to-b from-black to-transparent  flex max-sm:flex-col max-sm:gap-4 justify-between items-center px-8 backdrop-blur-sm fixed top-0 left-0">
            <div>
                <Link href={"#landing"} className={`${abril_fatface.className} underline decoration-wavy decoration-amber-500 text-3xl text-white `} >NodeMonks</Link>
            </div>
            <div className="max-sm:hidden w-fit flex gap-4 justify-between items-center">
                <Link href={'#works'} className=" text-amber-500 hover:text-black hover:decoration-wavy hover:underline decoration-amber-500 bg-zinc-900 transition-all duration-300 hover:bg-white font-medium  py-1 px-4 rounded-full" >Work</Link>
                <Link href={"#about"} className="text-amber-500 bg-zinc-900 hover:text-black hover:decoration-wavy hover:underline decoration-amber-500 transition-all duration-300 hover:bg-white font-medium py-1 px-4 rounded-full" >About Us</Link>
                <Link href={"#contact"} className="text-amber-500 hover:text-black hover:decoration-wavy hover:underline decoration-amber-500 bg-zinc-900 transition-all duration-300 hover:bg-white font-medium font-sans py-1 px-4 rounded-full">Contact Us</Link>
            </div>
        </div>
    )
}