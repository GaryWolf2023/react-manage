import { Navigate } from 'react-router-dom'
import React, {lazy} from 'react'

const Home = lazy(() => import('@/pages/home.tsx'))
const About = lazy(() => import('@/pages/about.tsx'))

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
        element: <Navigate to="/home"></Navigate>,
    },
    {
        path: '/home',
        element: withLoadingComponent(<Home />),
    },
    {
        path: '/about',
        element: withLoadingComponent(<About />),
    }
]

export default routes