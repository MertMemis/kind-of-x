import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from "./rightbar";
import { useModal } from "../../store/modal/hooks";
import Modal from "../../modals";
import { useEffect } from "react";
import { useDisplay } from "../../store/display/hooks";



export default function MainLayout() {

   const modal = useModal()
   const display = useDisplay()

   useEffect(() => {
      
      document.documentElement.style.setProperty('--background-primary', display.backgroundColor.primary)
      document.documentElement.style.setProperty('--background-secondary', display.backgroundColor.secondary)
      document.documentElement.style.setProperty('--background-third', display.backgroundColor.third)
      document.documentElement.style.setProperty('--background-modal', display.backgroundColor.modal)
      
      document.documentElement.style.setProperty('--color-primary', display.color.primary)
      document.documentElement.style.setProperty('--color-secondary', display.color.secondary)
      document.documentElement.style.setProperty('--color-base', display.color.base)
      document.documentElement.style.setProperty('--color-base-secondary', display.color.baseSecondary)
      
      document.documentElement.style.setProperty('--box-shadow', display.boxShadow)
      
      document.documentElement.style.setProperty('--font-size', display.fontSize + 'px')

      console.log('display', display)
      
   }, [display])

   return (
      <div className="w-[1265px] mx-auto flex">
         {modal && <Modal />}

         <Sidebar />

         <main className="flex-1 flex gap-[30px]">

            <main className="flex-1 max-w-[600px] border-x border-[color:var(--background-third)]">
               <Outlet />
            </main>

         <RightBar />

         </main>

      </div>
   )
}