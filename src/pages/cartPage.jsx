import LinkComponent from "../components/Link"
import { useCart } from '../Cart.jsx'
import NavBar from "../components/NavBar.jsx"
import { useNavigate } from 'react-router'

export default function CartPage() {
    const navigate = useNavigate()
    //const [total, setTotal] = useState()
    const {cart, UpdateQuantity, RemoveFromCart, ClearCart} = useCart()
     
    
    //const total = cart.reduce((item, sum) => sum + item.price * item.numOfItems, 0)
    const totalPrices = cart.map(item => (item.price * item.numOfItems))
    const unroundedTotal = totalPrices.reduce((acc, curr) => acc + curr, 0)

    const total = Math.round(unroundedTotal * 100) / 100
   
    

    return (
        <>
        <NavBar />
        
        {cart.length !== 0 ? (
<h1 className="cart-header" >Your Cart</h1> ) : ( <> </>)
        }

    
        {cart.length === 0 ? (
            <>
        <div className="default-cart-container">
            <h1 className="default-cart-header">Nothing To See Here!</h1>
            <h2 className="default-cart-subheader">Your Cart is Empty.</h2>
            <button className="homepage-link" id="shop-link" onClick={() => navigate('/shopPage')}>Explore Products</button>
            </div>
            </>
        ) : ( <></>)}

        {cart.length !== 0 ? (
            <>
            <div className="cart-page-container">
<div className="all-shop-items" style={{display: 'flex', flexWrap: 'wrap', gap: '2vw', justifyContent: 'center'}}>
        

        {cart.map(cartItem => (
    
            <>
            
            <div key={cartItem.id}  style={{ width: 'clamp(250px, 300px, 25vw )'}} className="shop-item-container">
            <div className="item-image-container">
       <img className="shop-image" src={cartItem.img}></img>
       </div>
            <div className="bottom-item-container">

            <h3 className="item-title">{cartItem.title}</h3>

            <div className="rating-price-container">
            <h2 className="price">${cartItem.price}</h2>


<div className="rating-container">
       <img className="star-icon" src="https://cdn-icons-png.flaticon.com/128/2893/2893811.png"></img>
       <h4 className="rating-text">{cartItem.rating} ({cartItem.count})</h4>
       </div>

       </div>
             <div className="add-to-cart-container">
            
            <button className="add-to-cart-button"  onClick={() => RemoveFromCart(cartItem.id)}>Remove From Cart</button>

            <div className="num-of-items-container">
            
            <button  className="increment-items-button" onClick={() => { UpdateQuantity(cartItem.id, 1); AddItems();}}>+</button>
            <p className="num-of-items-p">{cartItem.numOfItems}</p> 
            <button className="increment-items-button" onClick={() =>{ UpdateQuantity(cartItem.id, -1); RemoveItems(); }}>-</button>
        
          </div> 
            </div>
            </div>
            </div>
            </>
        ))}
        </div>
        <div className="payment-container">
            <div className="total-container">
<h2 className="total"id="total-h2">Total</h2>
<h2 id="total-num">${total}</h2>
</div>
        <button className="pay-button" onClick={() => {ClearCart()}}>Place Your Order</button>
        </div>
        </div>
        </>
    ) : (<></>)}

       
        
   </>   
       
    )
}