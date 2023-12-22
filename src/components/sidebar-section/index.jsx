import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export default function SidebarSection({ title, children, more }) {
   return (
      <section className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)]">
         
         <h5 className=" py-3 px-4 text-xl   leading-6 font-extrabold flex items-center">
            {title}   
         </h5>
         <div className="grid  ">
            {children}
         </div>
         {more && (
            <Link 
               to={more} 
               className=" h-[52px] flex rounded-b-2xl items-center px-4 text-[15px] text-[color:var(--color-primary)] hover:bg-white/[0.05] transition-colors "
            >
               Show more
            </Link>
         )}

      </section>
   )
}

SidebarSection.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired,
   more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defaultProps = {
   more: false
}