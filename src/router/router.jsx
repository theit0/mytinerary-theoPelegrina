import {createBrowserRouter } from 'react-router-dom'
import Index from '../pages/Index'
import Main from '../layouts/Main'
import Cities from '../pages/Cities'
import NotFound from '../pages/NotFound'
import Login from '../components/Login'
import CityDetail from '../pages/CityDetail'
import SignIn from '../pages/SignIn'
import ProtectedRoute from './ProtectedRoute'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children: [
            {
                path:'/',
                element: <Index/>
            },
            {
                path:'/cities',
                element:<Cities/>,
            },
            {
                path:'/cities/:id',
                element: <CityDetail/>
            },
            {
                path:'/*',
                element:<NotFound/>
            },
            {
                path:'/login',
                element:(
                    <ProtectedRoute path='/'>
                        <SignIn/>
                    </ProtectedRoute>
                )
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    }
    
])

export default router
