"use client"
import Link from 'next/link';
import { FaHome } from "react-icons/fa";
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { MdLogin } from "react-icons/md";
import { usePathname } from 'next/navigation';
import {cao} from "@/ui/font"
//路由列表链接
const nav = [
  {
    link: '/',
    title: "home",
    icon: <FaHome />
  },
  {
    link: '/about',
    title: 'files',
    icon: <SiAboutdotme />
  },
  {
    link: '/search',
    title: "search",
    icon: <FaSearch />
  },
  {
    link: '/login',
    title: "login",
    icon: <MdLogin />
  }
]
export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="to-teal-600 border-t-4 border-y-cyan-600">
      <nav className="flex items-center">
        <div className='flex-1 ml-4 cursor-pointer'>
          <Image src="/wolf.svg" alt='svg' className='inline-block' width={50} height={50} /><b className={`${cao.className} font-bold text-xl`}>全能口袋奥</b>
        </div>
        <div className='flex-1 w-full py-2'>
          <ul className="hiddel justify-between items-center px-10 md:flex">
            {nav.map((item) => (<li className='w-full h-11 text-center text-black font-bold relative' key={item.title}>
              <Link href={item.link} className={`flex items-center justify-center gap-2 delay-150 duration-300 ease-in-out w-full h-full rounded-md text-sm after:content-[' '] after:absolute after:h-1 after:w-14 after:bg-red-500  after:bottom-0 after:left-[calc(50%-1.75rem)] hover:after:bottom-1 hover:text-lg transition-all md:after:block after:hidden ${pathname == item.link ? "bg-orange-200" : "bg-none"}`}>{item.icon}{item.title}</Link></li>))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
