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
            }
        ]
    },
    {
        path: '/search',
        meta: {
            isAuth: false
        },
        component: () => import('@/pages/search')
    },
    {
        path: '/city',
        meta: {
            isAuth: false
        },
        component: () => import('@/pages/city')
    },
    {
        path: '/login',
        meta: {
            isAuth: false
        },
        component: () => import('@/pages/auth/login')
    }
]