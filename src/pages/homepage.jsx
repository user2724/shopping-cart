import LinkComponent from "../components/Link"
import ShopItem from "../components/ShopItem"
import { useNavigate } from 'react-router'
import NavBar from "../components/NavBar"


export default function Homepage() {
    const navigate = useNavigate()

    const funStyle = {
        'grid-template-rows': '1fr 1fr'

    }
    
    return (
        
        <>
        
        
        <NavBar />

        <div className="top-container">
            <div className="left-container">
<h2 className="home-header">Shop for all Your Modern Essentials</h2>
<p className="home-description">Discover our curated collection of high-quality products designed to elevate your lifestyle. Clean lines, premium materials, and unparalleled craftsmanship.</p>

<div className="homepage-links">

    <button className="homepage-link" id="shop-link" onClick={() => navigate('/shopPage')}>Explore Products</button>

    <button className="homepage-link" id="cart-link" onClick={() => navigate('/cartPage')}>View Cart</button>
</div>
</div>
<div className="home-img-container">
<img className="home-img" src="https://plus.unsplash.com/premium_photo-1683121271931-669e09a55414?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob3BwaW5nfGVufDB8fDB8fHww"></img>
</div>
        </div>
<h2 className="featured-products-header">Featured Products</h2>
        <div className="all-shop-items" style={funStyle}>

<ShopItem index = "1"/>
<ShopItem index = "3" />
 <ShopItem index = "9" />
 <ShopItem index = "7"/>
<ShopItem index = "10" />
 <ShopItem index = "4" />

        </div>

        </>
    )
}