import classNames from "classnames";
import { createElement } from "react";
import PropTypes from 'prop-types';

export default function Button({ as, size, variant, className, children, ...props }) {
   return createElement(as, {
      className: classNames("rounded-full flex items-center justify-center font-bold transition-colors", {
         "px-4 h-8 text-sm": size === 'small',
         "px-4 h-9": size === 'normal',
         "px-4 text-[17px] h-[52px] w-[90%]": size === 'large'
      })
   }, children)
}

Button.propTypes = {
   size: PropTypes.oneOf(['normal', 'large'])
}

Button.defaultProps = {
   size: 'normal'
}