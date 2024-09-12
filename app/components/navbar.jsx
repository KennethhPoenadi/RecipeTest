'use client';

import  { Bars3Icon, XMarkIcon}  from "@heroicons/react/24/solid";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Permanent_Marker } from "next/font/google";


const perm = Permanent_Marker({
    subsets: ['latin'], 
    weight: '400',
  });


const NavBar = () => {

    const [navbarOpen, setnavbarOpen] = useState(false);
    const router = useRouter();

    return ( 
        <nav className={perm.className}>
            <div className="fixed top-0 right-0 left-0 z-10 bg-white bg-opacity-90 flex items-center justify-between mx-auto p-2">
                <div className="font-extrabold text-3xl">
                    RecipeTest
                </div>
                <div className="block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setnavbarOpen(true)}
                            className="text-black flex items-center border rounded border-slate-200 hover:text-black p-1" 
                        >
                            <Bars3Icon className="h-5 w-5"/>

                        </button>
                    ) : (
                        <button 
                            onClick={() => setnavbarOpen(false)}
                            className="text-black flex items-center border rounded border-slate-200 hover:text-black p-1"
                        >
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                    )
                }
                </div>
                <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6`} id="navbar">
                <ul className="flex flex-col md:flex-row md:space-x-6 md:mt-0 items-center md: justify-between">
                        <li className="mt-1 md:mt-0">
                            <button 
                                onClick={() => router.push("/")}
                                className="text-black hover:text-blue-600"
                            >
                                Home
                            </button>
                        </li>
                        <li className="mt-1 md:mt-0">
                            <button 
                                onClick={() => router.push("/about")} 
                                className="text-black hover:text-blue-600"
                            >
                                About
                            </button>
                        </li>
                        <li className="mt-1 md:mt-0">
                            <button 
                                onClick={() => router.push("/projects")} 
                                className="text-black hover:text-blue-600"
                            >
                                Projects
                            </button>
                        </li>
                        <li className="mt-1 md:mt-0">
                            <button 
                                onClick={() => router.push("/contact-us")} 
                                className="text-black hover:text-blue-600"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;

