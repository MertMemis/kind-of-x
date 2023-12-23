import classNames from "classnames";
import { createElement } from "react";
import PropTypes from 'prop-types';

export default function Button({ as, size, variant, className, children, ...props }) {
   return createElement(as, {
      className: classNames("rounded-full flex items-center justify-center font-bold transition-all", {
         "px-4 h-8 text-sm": size === 'small',
         "px-4 h-9": size === 'normal',
         "px-4 text-[17px] h-[52px] w-[90%]": size === 'large',
         "bg-[color:var(--color-primary)] hover:opacity-85 text-white": variant === 'primary',
         "bg-[color:var(--color-base)] text-[color:var(--background-primary)] hover:bg-[#d7dbdc]": variant === 'white',
         "border border-[#b4b4b4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]": variant === 'white-outline',
         [className]: true
      }),
      ...props
   }, children)
}

Button.propTypes = {
   as: PropTypes.any,
   size: PropTypes.oneOf(['small', 'normal', 'large']),
   variant: PropTypes.oneOf(['primary', 'white', 'white-outline']),
   props: PropTypes.object,
   className: PropTypes.string
}

Button.defaultProps = {
   as: 'button',
   size: 'normal',
   variant: 'primary'
}