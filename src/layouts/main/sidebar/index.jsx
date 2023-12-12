import Account from "./account"
import Logo from "./logo"
import Menu from "./menu"


export default function Sidebar() {
   return(
      <aside className="w-[268px] min-h-screen">
         <Logo />
         <Menu />
         <Account />
      </aside>
   )
}