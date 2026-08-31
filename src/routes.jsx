import HomePage from './pages/homepage.jsx'
import ShopPage from './pages/shopPage.jsx'
import CartPage from './pages/cartPage.jsx'



const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/shopPage',
        element: <ShopPage />,
    }, 
    {
        path: '/cartPage',
        element: <CartPage />,
    }
    
]

export default routes