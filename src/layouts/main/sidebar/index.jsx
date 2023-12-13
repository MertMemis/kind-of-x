import Account from "./account"
import Logo from "./logo"
import Menu from "./menu"


export default function Sidebar() {
   return(
      <aside className="w-[268px] min-h-screen max-h-screen flex flex-col sticky top-0">
         <Logo />
         <Menu />
         <Account />
      </aside>
   )
}