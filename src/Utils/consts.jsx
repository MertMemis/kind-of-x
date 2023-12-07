export const mainMenu = [
    {
        path: '/',
        title: 'Home',
        icon: {
            active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                    <path
                        fill="#fff"
                        d="M 21.591 7.146 L 12.52 1.157 c 
                        -0.316 -0.21 -0.724 -0.21 -1.04 0 
                        l -9.071 5.99 c -0.26 0.173 -0.409 
                        0.456 -0.409 0.757 v 13.183 c 0 0.502 
                        0.418 0.913 0.929 0.913 H 9.14 c 0.51 
                        0 0.929 -0.41 0.929 -0.913 v -7.075 
                        h 3.909 v 7.075 c 0 0.502 0.417 
                        0.913 0.928 0.913 h 6.165 c 0.511 
                        0 0.929 -0.41 0.929 -0.913 V 7.904 
                        c 0 -0.301 -0.158 -0.584 -0.408 -0.758 Z"
                    />
                </svg>
            ),

            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                    <path
                        fill="#e7e9ea"
                        d="M 21.591 7.146 L 12.52 1.157 c 
                        -0.316 -0.21 -0.724 -0.21 -1.04 0 
                        l -9.071 5.99 c -0.26 0.173 -0.409
                        0.456 -0.409 0.757 v 13.183 c 0 
                        0.502 0.418 0.913 0.929 0.913 h 
                        6.638 c 0.511 0 0.929 -0.41 0.929 
                        -0.913 v -7.075 h 3.008 v 7.075 
                        c 0 0.502 0.418 0.913 0.929 0.913 
                        h 6.639 c 0.51 0 0.928 -0.41 0.928 
                        -0.913 V 7.904 c 0 -0.301 -0.158 
                        -0.584 -0.408 -0.758 Z M 20 20 l -4.5 
                        0.01 l 0.011 -7.097 c 0 -0.502 -0.418 
                        -0.913 -0.928 -0.913 H 9.44 c -0.511 0 
                        -0.929 0.41 -0.929 0.913 L 8.5 20 H 4 V 
                        8.773 l 8.011 -5.342 L 20 8.764 Z"
                     />
                </svg>
            )
        }
    },

    {
        path: '/explore',
        title:'Explore',
        icon: {
            active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                    <path
                        fill="#fff"
                        d="M 10.25 4.25 c -3.314 0 -6 2.686 
                        -6 6 s 2.686 6 6 6 c 1.657 0 3.155 
                        -0.67 4.243 -1.757 c 1.087 -1.088 1.757 
                        -2.586 1.757 -4.243 c 0 -3.314 -2.686 
                        -6 -6 -6 Z m -9 6 c 0 -4.971 4.029 -9 9 
                        -9 s 9 4.029 9 9 c 0 1.943 -0.617 3.744 
                        -1.664 5.215 l 4.475 4.474 l -2.122 2.122 
                        l -4.474 -4.475 c -1.471 1.047 -3.272 1.664 
                        -5.215 1.664 c -4.971 0 -9 -4.029 -9 -9 Z"
                    />
                </svg>
            ),

            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                    <path
                        fill="#e7e9ea"
                        d="M 10.25 3.75 c -3.59 0 -6.5 2.91 
                        -6.5 6.5 s 2.91 6.5 6.5 6.5 c 1.795 
                        0 3.419 -0.726 4.596 -1.904 c 1.178 
                        -1.177 1.904 -2.801 1.904 -4.596 c 
                        0 -3.59 -2.91 -6.5 -6.5 -6.5 Z m 
                        -8.5 6.5 c 0 -4.694 3.806 -8.5 8.5 
                        -8.5 s 8.5 3.806 8.5 8.5 c 0 1.986 
                        -0.682 3.815 -1.824 5.262 l 4.781 
                        4.781 l -1.414 1.414 l -4.781 -4.781 
                        c -1.447 1.142 -3.276 1.824 -5.262 1.824 
                        c -4.694 0 -8.5 -3.806 -8.5 -8.5 Z"
                     />
                </svg>
            )
        }
    },

    {
        path: '/notifications',
        title:'Notifications',
        notification: 4,
        icon: {
            active: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                    <path
                        fill="#fff"
                        d="M 11.996 2 c -4.062 0 -7.49 3.021 
                        -7.999 7.051 L 2.866 18 H 7.1 c 0.463 
                        2.282 2.481 4 4.9 4 s 4.437 -1.718 4.9 
                        -4 h 4.236 l -1.143 -8.958 C 19.48 5.017 
                        16.054 2 11.996 2 Z M 9.171 18 h 5.658 
                        c -0.412 1.165 -1.523 2 -2.829 2 s 
                        -2.417 -0.835 -2.829 -2 Z"
                    />
                </svg>
            ),

            passive: (
                <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                    <path
                        fill="#e7e9ea"
                        d="M 19.993 9.042 C 19.48 5.017 16.054 
                        2 11.996 2 s -7.49 3.021 -7.999 7.051 
                        L 2.866 18 H 7.1 c 0.463 2.282 2.481 
                        4 4.9 4 s 4.437 -1.718 4.9 -4 h 4.236 
                        l -1.143 -8.958 Z M 12 20 c -1.306 0 
                        -2.417 -0.835 -2.829 -2 h 5.658 c 
                        -0.412 1.165 -1.523 2 -2.829 2 Z m 
                        -6.866 -4 l 0.847 -6.698 C 6.364 6.272 
                        8.941 4 11.996 4 s 5.627 2.268 6.013 
                        5.295 L 18.864 16 H 5.134 Z"
                     />
                </svg>
            )
        }
    },

    {
        path: '/messages',
        title: 'Messages',
        icon: {
            active: (
