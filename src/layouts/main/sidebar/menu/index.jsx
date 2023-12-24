import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { mainMenu } from "../../../../Utils/consts"
import More from "./more"
import NewPost from "./post"
import { useAccount } from "../../../../store/auth/hooks"



export default function Menu() {

	const account = useAccount()

	return (
		<nav key={account}>
			{mainMenu.map((menu, index) => (
				<NavLink key={index} to={typeof menu.path === 'function' ? menu.path() : menu.path} className=" py-[0.188rem] block group">
					{({isActive}) =>(

						<div className={classNames("p-3 rounded-full   transition-colors inline-flex items-center gap-5 group-hover:bg-[color:var(--background-third)]", {
							"font-bold": isActive
						})}>

							<div className="w-[1.641rem] h-[1.641rem] relative">

								{menu?.notification && <span className="w-[1.125rem] h-[1.125rem] rounded-full text-white border border-[color:var(--background-primary)] bg-[color:var(--color-primary)] absolute text-[0.688rem] -top-1.5 -right-1 flex items-center justify-center">{menu.notification}</span>}

								{isActive && menu.icon.active}
								{!isActive && menu.icon.passive}
							</div>

							<div className="pr-4 text-xl">
								{menu.title}
							</div>

						</div> 
					)}
				</NavLink> 
				))}

			<More/>
			<NewPost/>
				
		</nav>
	)
}

