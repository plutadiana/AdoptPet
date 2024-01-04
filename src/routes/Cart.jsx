import { useContext } from "react";
import "./cart.css";
import { CartContext } from "../contexts/cart.context";

function Cart () {
    const cartContext = useContext(CartContext);

    const removeAll = () => {
        cartContext.removeAll();
    }

    const removeItem = (item) => {
        cartContext.removeItem(item);
        
    }

    return (        
        <section className="cart-section">
             <div className="banner-adoption">
                <div className="container">
                    <h1 className="banner-title cart-title">Your Shopping Cart</h1>
                </div>
            </div>
            <div className="container cart">
                <h2 className="title-adopt">Your Cart</h2>
                <div>
                    <table>
                        <tbody>
                        {cartContext.items.map(item => (
                            <tr key={item.id} className="card ">
                                <td className="img-details"><img src={item.image} className="img-pet"/></td>
                                <td className="name-pet"><h5>{item.name}</h5></td>
                                <td className="btn-pet"><button onClick={() => removeItem(item)} className="btn-blue btn-remove">Remove</button></td>                                                         
                            </tr>                           
                        ))}
                        <tr className="btn-remove-all">
                            <td></td>
                            <td></td>
                            <td><button onClick={() => removeAll()} className="btn-pink">Remove All</button></td>
                        </tr>
                        </tbody>
                    </table>
                       
                </div>
            </div>
        </section>
    )
}

export default Cart;