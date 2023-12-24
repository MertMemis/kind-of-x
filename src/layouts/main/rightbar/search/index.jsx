import { useRef, useState } from "react"
import { useClickAway } from "react-use"

export default function Search () {

   const [query, setQuery] = useState('')
   const [changeColor, setChangeColor] = useState('color:var(--color-base-secondary)')
   const [focus, setFocus] = useState (false)
   
   const ref = useRef()
   useClickAway(ref, () => {
      setFocus(false)
   })


   function onfcsFunction() {
      setFocus(true);
      setChangeColor('color:var(--color-primary)');
   }

   function onblrFunction() {
      setChangeColor('color:var(--color-base-secondary)');
   }

   return (
      <div 
         ref={ref}
         className=" min-h-[2rem] h-[3.313rem] mb-3 flex items-center sticky top-0 z-[10] bg-[color:var(--background-primary)]">
         <label className=" relative h-[2.688rem] rounded-full bg-[color:var(--background-third)] block w-full group border-2 border-transparent focus-within:border-[color:var(--color-primary)]">
            <div className="w-[3.5rem] h-full flex items-center justify-center absolute top-0 left-0 pointer-events-none">
               <svg 
                  viewBox="0 0 24 24" 
                  className="h-[1.172rem] min-w-[2rem] text-[color:var(--color-base-secondary)] group-focus-within:text-[color:var(--color-primary)]">
                  <path 
                     fill="currentColor"
                     d="M 10.25 3.75 c -3.59 0 -6.5 2.91 -6.5 6.5 s 2.91 6.5 6.5 6.5 c 1.795 0 3.419 -0.726 4.596 -1.904 c 1.178 -1.177 1.904 -2.801 1.904 -4.596 c 0 -3.59 -2.91 -6.5 -6.5 -6.5 Z m -8.5 6.5 c 0 -4.694 3.806 -8.5 8.5 -8.5 s 8.5 3.806 8.5 8.5 c 0 1.986 -0.682 3.815 -1.824 5.262 l 4.781 4.781 l -1.414 1.414 l -4.781 -4.781 c -1.447 1.142 -3.276 1.824 -5.262 1.824 c -4.694 0 -8.5 -3.806 -8.5 -8.5 Z" 
                  />
               </svg>
            </div>
            <input 
               type ="text" 
               className =" w-full h-full bg-transparent rounded-full outline-none pl-[3.5rem] " 
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
                  className=" w-[22px] h-[22px] rounded-full bg-[color:var(--color-primary)] flex items-center justify-center text-color:var(--background-primary) min-w-[22px] right-3 absolute top-1/2 -translate-y-1/2 "
               >
                  <svg viewBox="0 0 15 15" width={10} height={10}>
                     <path 
                        fill="currentColor"
                        d="M 6.09 7.5 L 0.04 1.46 L 1.46 0.04 L 7.5 6.09 L 13.54 0.04 l 1.42 1.42 L 8.91 7.5 l 6.05 6.04 l -1.42 1.42 L 7.5 8.91 l -6.04 6.05 l -1.42 -1.42 L 6.09 7.5 Z" 
                     />
                  </svg>
               </button>
            )}
         </label>
         
         {focus && (
               <div className=" absolute top-full w-[350px] -translate-y-1 bg-[color:var(--background-primary)] shadow-box text-center min-h-[100px] max-h-[calc(80vh -53px)] rounded-lg">
                  <p className=" p-3 pt-5 text-[color:var(--color-base-secondary)]">
                     Try searching for people, lists, or keywords
                  </p>
               </div>
            )}
      </div>
   )
}