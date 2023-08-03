import { Navigate } from 'react-router-dom'
import React, {lazy} from 'react'

const Home = lazy(() => import('@/pages/home.tsx'))
const About = lazy(() => import('@/pages/about.tsx'))
const Layout = lazy(() => import('@/components/Layout/index.tsx'))
const Login = lazy(() => import('@/pages/login/login.tsx'))

const withLoadingComponent = (comp: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {comp}
        </React.Suspense>
    )
}

const routes = [
    {
        path: '/',
        element: <Navigate to="/login" />,
    },
    {
        path: '/login',
        element: withLoadingComponent(<Login />),
    },
    {
        path: '/',
        element: withLoadingComponent(<Layout/>),
        children: [
            {
                path: 'home',
                element: withLoadingComponent(<Home />),
            },
            {
                path: 'about',
                element: withLoadingComponent(<About />),
            },
        ]
    },
]

export default routes