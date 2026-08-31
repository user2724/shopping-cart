import { Link } from "react-router"
import { useState } from "react"
import { useCart } from '../Cart.jsx'

const LinkComponent = () => {
//const [cartNum, setCartNum] = useState(0)
const {cart} = useCart()
const cartNum = cart.length

   return (
    <>
    <div className="header-links">
        <Link className="header-link" to="/">Home</Link>
        <Link className="header-link" to="/shopPage">Shop</Link>
        <Link className="header-link" to="/cartPage">Cart</Link>
        <div className="cart-num-container">
           {cartNum > 0 ? <p className="cart-num">{cartNum}</p> : <></>}
        </div>
    </div>
    
    </>
   )
}

export default LinkComponent