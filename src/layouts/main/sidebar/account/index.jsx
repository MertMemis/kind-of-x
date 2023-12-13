import { Popover, Transition } from "@headlessui/react"
import { useAccount } from "../../../../store/auth/hooks"
import AccPanel from "./more"


export default function Account () {

   const account = useAccount()

   return(
      <div className=" mt-auto">
         <Popover className="relative">
            <Popover.Button 
            >
               <img src={account.avatar} className=" w-10 h-10 rounded-full" alt="" />
               <div className=" mx-3 text-[15px]">
                  <h6 className=" font-bold">{account.fullName}</h6>

                  <div className="text-[#71767b]">
                     @{account.username}
                  </div>
               </div>

               <svg viewBox="0 0 24 24" className="text-[#e7e9ea] ml-auto" width={18.75}>
                  <path
                     fill="currentColor"
                     d="M 3 12 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 Z m 9 2 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z m 7 0 c 1.1 0 2 -0.9 2 -2 s -0.9 -2 -2 -2 s -2 0.9 -2 2 s 0.9 2 2 2 Z"
                  />
               </svg>
               
            </Popover.Button>
            <Transition
               enter="transition duration-200 ease-out"
               enterFrom="transform opacity-0"
               enterTo="transform opacity-100"
               leave="transition duration-200 ease-out"
               leaveFrom="transform opacity-200"
               leaveTo="transform opacity-0"
            >
               <Popover.Panel className="absolute bottom-[90px] py-3 w-[300px] overflow-hidden left-1/2 -translate-x-1/2 shadow-box bg-black rounded-2xl">
                  {({ close }) => (
                     <AccPanel close={close} />
                  )}
               </Popover.Panel>
            </Transition>
         </Popover>
      </div>
   )
}