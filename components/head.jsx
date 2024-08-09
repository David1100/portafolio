"use client"
import Link from "next/link";
import { useState } from "react";
import { RiCloseLargeFill, RiFacebookCircleFill, RiLinkedinBoxLine, RiMailOpenLine, RiMenu2Fill } from "react-icons/ri";

export default function Header() {

     const [showMenu, setShowMenu] = useState(false)

     const toggleMenu = (data) => {
          setShowMenu(data)
     }

     return (
          <nav className="fixed w-full lg:px-20 px-8 py-5 flex justify-between items-center z-20">
               <div className="text-4xl font-bold"><span className="text-blue-300">[D]</span>dev</div>
               <div className="flex gap-10 items-center">
                    <ul className="hidden lg:flex gap-2">
                         <li>
                              <button className="hover:scale-125 transition-all"><RiFacebookCircleFill className="text-xl" /></button>
                         </li>
                         <li>
                              <button className="hover:scale-125 transition-all"><RiLinkedinBoxLine className="text-xl" /></button>
                         </li>
                         <li>
                              <button className="hover:scale-125 transition-all"><RiMailOpenLine className="text-xl" /></button>
                         </li>
                    </ul>
                    <button className="text-2xl" onClick={() => toggleMenu(true)}><RiMenu2Fill /></button>
               </div>
               {/* menu movil */}
               <div className={`w-full h-full bg-[#000000f5] fixed left-0 top-0 transition-transform duration-300 ease-in-out ${showMenu ? 'transform translate-x-0' : 'transform -translate-x-full'} `} >
                    <div className="relative w-full bg-red-600">
                         <button className="absolute right-0 mt-7 mr-8 text-3xl" onClick={() => toggleMenu(false)}><RiCloseLargeFill /></button>
                    </div>
                    <div className="w-full h-full flex justify-center flex-col gap-20 items-center">
                         <ul className="flex flex-col text-center text-2xl cursor-pointer">
                              <Link href="#s_1" onClick={() => toggleMenu(false)} className="p-3 hover:border-b-[2px]">Acerca de mi</Link>
                              <Link href="#s_2" onClick={() => toggleMenu(false)} className="p-3 hover:border-b-[2px]">Curriculum</Link>
                              <Link href="#s_3" onClick={() => toggleMenu(false)} className="p-3 hover:border-b-[2px]">Proyectos</Link>
                              <Link href="#s_4" onClick={() => toggleMenu(false)} className="p-3 hover:border-b-[2px]">Contacto</Link>
                         </ul>
                         <div>
                              <ul className="flex gap-2">
                                   <li>
                                        <Link href="https://www.facebook.com/profile.php?id=100093306525415" target="_blank" onClick={() => toggleMenu(false)}><button className="hover:scale-125 transition-all" ><RiFacebookCircleFill className="text-xl" /></button></Link>
                                   </li>
                                   <li>
                                        <Link href="https://www.linkedin.com/in/david-leonardo-acevedo-pereira-60206a1b9/" target="_blank" onClick={() => toggleMenu(false)}><button className="hover:scale-125 transition-all" ><RiLinkedinBoxLine className="text-xl" /></button></Link>
                                   </li>
                                   <li>
                                        <Link href="mailto:acevdo22@hotmail.com" onClick={() => toggleMenu(false)}><button className="hover:scale-125 transition-all" ><RiMailOpenLine className="text-xl" /></button></Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </nav>
     );
}