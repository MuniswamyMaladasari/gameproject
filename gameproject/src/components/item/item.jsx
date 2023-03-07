import { useContext } from "react"
import { CartContext } from "../context/cart-context"

function Item({item}) {
    const {cartData,addCartData}=useContext(CartContext)
    return (
        <>
            <section className="card">
                <img className="card-image" src={item?.image} alt="gamePhoto" />
                <article className="card-title">{item.title}</article>
                <article className="card-description">{item.description}</article>
                <section className="card-footer">
                    <article className="card-price">{item.price}</article>
                    <button className="card-button" onClick={()=>{addCartData(item)}}>add to Cart</button>
                </section>

            </section>
        </>
    )
}
export default Item