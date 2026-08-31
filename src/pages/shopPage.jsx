import LinkComponent from "../components/Link"
import ShopItem from "../components/ShopItem"
import NavBar from "../components/NavBar"

export default function ShopPage() {

    return (
        <>
       <NavBar />
       <h2 className="all-products">All Products </h2>
<div className="all-shop-items">

        <ShopItem index = "0" />
        <ShopItem index = "1"/>
        <ShopItem index = "2" />
        <ShopItem index = "3" />
        <ShopItem index = "4" />
        <ShopItem index = "5" />
        <ShopItem index = "6" />
        <ShopItem index = "7" />
        <ShopItem index = "8" />
        <ShopItem index = "9" />
        <ShopItem index = "10" />
        <ShopItem index = "11" />
       
        
        
       </div>
        </>
    )
}