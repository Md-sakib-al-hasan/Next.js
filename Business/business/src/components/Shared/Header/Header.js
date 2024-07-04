"use client"
import logo from '@/../public/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [Display,SetDisplay] = useState(true);
    
      
    return (
        <div className='flex  w-full fixed h-14   justify-between items-center px-5 bg-gradient-to-r from-cyan-500 to-pink-200 text-black'>
            <div className='w-[50px]'>
              <Image src={logo} alt='logo' />
            </div>
            <div>
                <button className='md:hidden' onClick={()=> SetDisplay(!Display)}>
                
                {
                    Display?<TiThMenu />:<RxCross2 />
                }
                </button>
               <ul className={`${Display? "hidden":" absolute  right-2"} md:flex gap-4 md:relative`}>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/post"}>Post</Link></li>
                <li><Link href={"/"}>About</Link></li>
                <li><Link href={"/contact"}>Contact</Link></li>
               </ul>
            </div>
        </div>
    );
};

export default Header;