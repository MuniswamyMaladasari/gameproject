import { useCallback, useContext, useRef } from "react"
import { CartContext } from "../context/cart-context"
import useRazorpay from "react-razorpay"
function Cart(){
    const {cartData}=useContext(CartContext)
    const total=useRef()
    const RazorPay=useRazorpay()
    const razorpayDisplay=useCallback(async(total)=>{
        const options={
           key:"rzp_test_cAobvZfel2q8b5",
           amount:total*100,
           currency:"INR",
           name:"game-project",
           description:"gaming Transaction",
            handler:(res)=>{
             console.log(res);
            },
            prefill:{
            name:"Muniswamy Maladasari",
            email:"muniswamyanil143@gmail.com",
            contact:"9381286077"
            },
            notes:{
                adress:"1-31/a,lakkasagaram,krishnagiri,Kurnool"
            },
            theme:{
                color:"#3399cc"
            }

        }
        const rzp1= new RazorPay(options)
        rzp1.open();
    },[RazorPay])

    // total.current.price=0
return (
<>
<section>
    <section>
       {cartData.map((cartItem)=>{
        return(
            <article>
                <img src="" alt="" />
                <article>{cartItem.title}</article>
                <article>{cartItem.price}</article>
                <button >Remove from Cart</button>
            </article>
        )
      
        
       })}
    </section>
    
    <section>
        <article>Billing Information</article>
        {cartData.map((cart)=>{
            // total.current.price = total.current.price + cart.price
            return <article>
              <span>{cart.title}</span>
              <span>{cart.price}</span>
            </article>
        })}
        <article>total:3000</article>
        <button onClick={()=>{razorpayDisplay(6000)}}>checkout</button>
    </section>
   
</section>
</>
)
}
export default Cart