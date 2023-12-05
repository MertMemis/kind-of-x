import { Link } from "react-router-dom"


export default function Menu() {
    return (
        <nav className="mt-0.5 mb-1">
            <NavLink to="/" className="py-1 block group">
                {({isActive}) =>(
                    <div className={classNames("p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]", {
                        "font-bold": isActive
                    })}>
                        {isActive && (<svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                            <path
                                fill="#fff"
                                d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"
                            />
                        </svg>)}
                        {!isActive && (<svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                            <path
                                fill="#e7e9ea"
                                d="M 21.591 7.146 L 12.52 1.157 c -0.316 -0.21 -0.724 -0.21 -1.04 0 l -9.071 5.99 c -0.26 0.173 -0.409 0.456 -0.409 0.757 v 13.183 c 0 0.502 0.418 0.913 0.929 0.913 h 6.638 c 0.511 0 0.929 -0.41 0.929 -0.913 v -7.075 h 3.008 v 7.075 c 0 0.502 0.418 0.913 0.929 0.913 h 6.639 c 0.51 0 0.928 -0.41 0.928 -0.913 V 7.904 c 0 -0.301 -0.158 -0.584 -0.408 -0.758 Z M 20 20 l -4.5 0.01 l 0.011 -7.097 c 0 -0.502 -0.418 -0.913 -0.928 -0.913 H 9.44 c -0.511 0 -0.929 0.41 -0.929 0.913 L 8.5 20 H 4 V 8.773 l 8.011 -5.342 L 20 8.764 Z"
                            />
                        </svg>)}
                        <div className="pr-4 text-xl">
                            Home
                        </div>
                    </div>
                )}
            </NavLink>

        </nav>
    )
}