import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Footer() {
   return(
      <footer className=" mb-4 px-4 flex flex-wrap gap-2">
         <Link className="text-[#71767b] leading-4 text-[14px] hover:underline" to="/">Terms of Service</Link>
         <Link className="text-[#71767b] leading-4 text-[14px] hover:underline" to="/">Privacy Policy</Link>
         <Link className="text-[#71767b] leading-4 text-[14px] hover:underline" to="/">Cookie Policy</Link>
         <Link className="text-[#71767b] leading-4 text-[14px] hover:underline" to="/">Imprint</Link>
         <Link className="text-[#71767b] leading-4 text-[14px] hover:underline" to="/">Accessibility</Link>
         <Link className="text-[#71767b] leading-4 text-[14px] hover:underline" to="/">Ads info</Link>
         <div className=" w-full flex gap-2">
            <Popover className="relative leading-4">
               <Popover.Button 
                  className="text-[#71767b] text-[14px] hover:underline outline-none inline-flex items-center">
                  More
                  <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
                        <path 
                           fill="CurrentColor"
                           d="M 3 12 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 Z m 9 2 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z m 7 0 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z"
                        />
                  </svg>
               </Popover.Button>
               <Popover.Panel className="w-[150px] max-w-[384px] absolute rounded-xl bottom-0 right-0 bg-black shadow-box grid overflow-hidden">
                  <Link to="/" className=" py-3 px-4 text-white text-[15px] leading-5 transition-colors hover:bg-[#16181c]">
                     About
                  </Link>

                  <Link to="/" className=" py-3 px-4 text-white text-[15px] leading-5 transition-colors hover:bg-[#16181c]">
                     Download the X app
                  </Link>

                  <Link to="/" className=" py-3 px-4 text-white text-[15px] leading-5 transition-colors hover:bg-[#16181c]">
                     Status
                  </Link>

                  <Link to="/" className=" py-3 px-4 text-white text-[15px] leading-5 transition-colors hover:bg-[#16181c]">
                     X for Business
                  </Link>

                  <Link to="/" className=" py-3 px-4 text-white text-[15px] leading-5 transition-colors hover:bg-[#16181c]">
                     Developers
                  </Link>
               </Popover.Panel>
            </Popover>
            <p className="text-[#71767b] leading-4 text-[14px]"> 
               &copy; 2024 Mert Memiş
            </p>
         </div>
      </footer>
   )
}