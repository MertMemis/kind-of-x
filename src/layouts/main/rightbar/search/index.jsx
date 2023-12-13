import { useRef, useState } from "react"
import { useClickAway } from "react-use"

export default function Search () {

   const [query, setQuery] = useState('')
   const [changeColor, setChangeColor] = useState('#71767b')
   const [focus, setFocus] = useState (false)
   
   const ref = useRef()
   useClickAway(ref, () => {
      setFocus(false)
   })


   function onfcsFunction() {
      setFocus(true);
      setChangeColor('#1d9bf0');
   }

   function onblrFunction() {
      setChangeColor('#71767b');
   }

   return (
      <div 
         ref={ref}
         className=" min-h-[32px] h-[53px] mb-3 flex items-center sticky top-0 z-[10] bg-black">
         <label className=" relative h-[43px] rounded-full bg-[#202327] block w-full group border-2 border-transparent focus-within:border-[#1d9bf0]">
            <div className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0 pointer-events-none">
               <svg viewBox="0 0 24 24" className={`min-w-[32px] text-[${ changeColor }]`} width={18.75} height={18.75}>
                  <path 
                     fill="currentColor"
                     d="M 10.25 3.75 c -3.59 0 -6.5 2.91 -6.5 6.5 s 2.91 6.5 6.5 6.5 c 1.795 0 3.419 -0.726 4.596 -1.904 c 1.178 -1.177 1.904 -2.801 1.904 -4.596 c 0 -3.59 -2.91 -6.5 -6.5 -6.5 Z m -8.5 6.5 c 0 -4.694 3.806 -8.5 8.5 -8.5 s 8.5 3.806 8.5 8.5 c 0 1.986 -0.682 3.815 -1.824 5.262 l 4.781 4.781 l -1.414 1.414 l -4.781 -4.781 c -1.447 1.142 -3.276 1.824 -5.262 1.824 c -4.694 0 -8.5 -3.806 -8.5 -8.5 Z" 
                  />
               </svg>
            </div>
            <input 
               type ="text" 
               className =" w-full h-full bg-transparent placeholder-[#71767b] rounded-full outline-none pl-[56px] text-[15px] focus-within:bg-black" 
               placeholder="Search"
               value = {query}
               onChange={e => setQuery(e.target.value)}
               onFocus = {onfcsFunction}
               onBlur={onblrFunction}
            />
            {(query && focus) && (
               <button 
                  type="button"
                  onClick={() => setQuery('')}
                  className=" w-[22px] h-[22px] rounded-full bg-[#1d9bf0] flex items-center justify-center text-black min-w-[22px] right-3 absolute top-1/2 -translate-y-1/2 "
               >
                  <svg viewBox="0 0 15 15" width={10} height={10}>
                     <path 
                        fill="currentColor"
                        d="M 6.09 7.5 L 0.04 1.46 L 1.46 0.04 L 7.5 6.09 L 13.54 0.04 l 1.42 1.42 L 8.91 7.5 l 6.05 6.04 l -1.42 1.42 L 7.5 8.91 l -6.04 6.05 l -1.42 -1.42 L 6.09 7.5 Z" 
                     />
                  </svg>
               </button>
         </label>
      </div>
   )
}