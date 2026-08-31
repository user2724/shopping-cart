import {useEffect,  useState } from "react";
import { useCart } from "../Cart.jsx"

const getShopItem = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [imageNum, setImageNum] = useState(0);
    const [results, setResults] = useState([]);
    const [price, setPrice] = useState(null)
    const [title, setTitle] = useState(null)
    const [rating, setRating] = useState(null)
    const [count, setCount] = useState(null)
    const [ids, setIds] = useState(null)

 

useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        //console.log(data); 
        setResults(data.map(item => item.image))
       setPrice(data.map(item => item.price))
       setTitle(data.map(item => item.title))
       setRating(data.map(item => item.rating.rate))
       setCount(data.map(item => item.rating.count))
       setIds(data.map(item => item.id))
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
}, [imageNum])

return {loading, error, results, price, title, rating, count, ids }
}

export default function ShopItem({ index = 0, addCart = true}) {
  //const [cartVisible, setCartVisible] = useState(false)
   
  //const [numOfItems, setNumOfItems] = useState(0)
  const { loading, error, results, price, title, rating, count, ids } = getShopItem()

    if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  
  const numIndex = parseInt(index, 10)
   

  const { cart, AddToCart, UpdateQuantity, RemoveFromCart } = useCart()

const itemId = ids[numIndex]
const cartItem = cart.find(item => item.id === itemId)
const numOfItems = cartItem ? cartItem.numOfItems : 0;
const cartVisible = Boolean(cartItem)
  
function HandleAddToCart() {
  console.log(cartItem)
  AddToCart({
    id: itemId,
    title: title[numIndex],
    price: price[numIndex],
    rating: rating[numIndex],
    count: count[numIndex],
    img: results[numIndex]

  })

  if (cartVisible == true) {
    
    //setNumOfItems(0)
    RemoveFromCart(itemId)

 } else { 

    //setNumOfItems(numOfItems + 1)
   

    //setCartVisible(true)

//AddToCart(cartItem) // Find correct item
console.log(cart)
   

 }
}  



function RemoveItems() {
    //setNumOfItems(numOfItems - 1)
    

}

function AddItems() {
    //setNumOfItems(numOfItems + 1)
}
    return (
        <>
        
        <div className="shop-item-container">
          <div className="item-image-container">
       <img  src={results[numIndex]} className="shop-image" alt="Shop Item" />
       </div>
       <div className="bottom-item-container">
       <h3 className="item-title">{title[numIndex]}</h3>
       <div className="rating-price-container">
         <h2 className="price">${price[numIndex]}</h2>

         <div className="rating-container">
       <img className="star-icon" src="https://cdn-icons-png.flaticon.com/128/2893/2893811.png"></img>
       <h4 className="rating-text">{rating[numIndex]} ({count[numIndex]})</h4>
       </div>
      
       </div>
       <div className="add-to-cart-container">
       {addCart ? 
       <button className="add-to-cart-button" onClick={HandleAddToCart}>
        {cartVisible ? 'Remove From Cart' : 'Add To Cart'}</button> : <button className="remove-cart-btn" style="font-size: 10px" >Remove From Cart</button> }
        <div className="num-of-items-container">
            
            <>
            <button  className="increment-items-button" onClick={() => { UpdateQuantity(itemId, 1); AddItems();}}>+</button>
            <p className="num-of-items-p">{numOfItems}</p> 
            <button className="increment-items-button" onClick={() =>{ UpdateQuantity(itemId, -1); RemoveItems(); }}>-</button>
            </>
          </div> 
            </div>
        </div>
       
       
</div>
       
       </>

    )
}
