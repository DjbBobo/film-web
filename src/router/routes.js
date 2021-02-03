export default [
    {
        path: '/',
        component: () => import('@/pages/layout'),
        children: [
            {
                path: '/',
                name: 'home',
                meta: {
                    isAuth: false
                },
                redirect: { name: 'dashboard' }
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                meta: {
                    isAuth: false
                },
                component: () => import('@/pages/dashboard')
            },
            {
                path: 'city',
                name: 'city',
                meta: {
                    isAuth: false
                },
                component: () => import('@/pages/city')
            },
            {
                path: 'search',
                name: 'search',
                meta: {
                    isAuth: false
                },
                component: () => import('@/pages/search')
            },
            {
                path: '/film',
                meta: {
                    isAuth: false
                },
                component: () => import('@/pages/film')
            },
            {
                path: '/cinema',
                meta: {
                    isAuth: false
                },
                component: () => import('@/pages/cinema')
            },
            {
                path: '/mine',
                meta: {
                    isAuth: false
                },
                component: () => import('@/pages/mine')
            },
        ]
    },
    {
        path: '/login',
        meta: {
            isAuth: false
        },
        component: () => import('@/pages/auth/login')
    },
    {
        path: '/ticketCinema',
        meta: {
            isAuth: false
        },
        component: () => import('@/pages/ticketCinema')
    },
    {
        path: '/filmCinema',
        meta: {
            isAuth: false
        },
        component: () => import('@/pages/filmCinema')
    }
]