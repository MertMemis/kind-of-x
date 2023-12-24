import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Footer() {
   return(
      <footer className=" mb-4 px-4 flex flex-wrap gap-2">
         <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">Terms of Service</Link>
         <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">Privacy Policy</Link>
         <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">Cookie Policy</Link>
         <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">Imprint</Link>
         <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">Accessibility</Link>
         <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">Ads info</Link>

         <div className="inline-flex gap-2 flex-wrap">
            <Popover className="relative leading-4">
               <Popover.Button 
                  className="text-[color:var(--color-base-secondary)] hover:underline outline-none inline-flex items-center">
                  More
                  <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
                        <path 
                           fill="CurrentColor"
                           d="M 3 12 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 Z m 9 2 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z m 7 0 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z"
                        />
                  </svg>
               </Popover.Button>
               <Popover.Panel className="w-[9.375rem] max-w-[24rem] absolute rounded-xl bottom-0 right-0 bg-[color:var(--background-primary)] shadow-box grid overflow-hidden">
                  <Link to="/" className=" py-3 px-4 leading-5 transition-colors hover:bg-[color:var(--background-secondary)]">
                     About
                  </Link>

                  <Link to="/" className=" py-3 px-4 leading-5 transition-colors hover:bg-[color:var(--background-secondary)]">
                     Download the X app
                  </Link>

                  <Link to="/" className=" py-3 px-4 leading-5 transition-colors hover:bg-[color:var(--background-secondary)]">
                     Status
                  </Link>

                  <Link to="/" className=" py-3 px-4 leading-5 transition-colors hover:bg-[color:var(--background-secondary)]">
                     X for Business
                  </Link>

                  <Link to="/" className=" py-3 px-4 leading-5 transition-colors hover:bg-[color:var(--background-secondary)]">
                     Developers
                  </Link>
               </Popover.Panel>
            </Popover>
            <p className="text-[color:var(--color-base-secondary)] leading-4"> 
               &copy; 2024 Mert Memiş
            </p>
         </div>
      </footer>
   )
}