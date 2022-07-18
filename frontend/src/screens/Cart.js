import { useDispatch, useSelector } from 'react-redux';
import './Cart.css'

import { removeFromCart } from "../redux/actions/cartActions";

function Cart(products) {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  
  const removePFromCart = (event) => {
    dispatch(removeFromCart(event.currentTarget.id));
  }

  const getPrice = (products) => {
    let price = 0;

    products.map((product) => price = price + product.price * product.quantity);

    return price;
  }

  return (
    <div>
      <div class='container'>
        <div class='navBar childContainer'>
          <h1>Important data:</h1>

          <div class='inputs'>
            <div class='inputSection'>
              <h2>Name</h2>
              <input class='input'></input>
            </div>

            <div class='inputSection'>
              <h2>Email</h2>
              <input class='input'></input>
            </div>

            <div class='inputSection'>
              <h2>Phone</h2>
              <input class='input'></input>
            </div>

            <div class='inputSection'>
              <h2>Address</h2>
              <input class='input'></input>
            </div>
          </div>
        </div>
        <div class='productList childContainer'> 
          <h1>Products:</h1>

          <div class='cartProducts'>
              {cartItems.map((product) => {
                return (
                  <div class='cartProduct'>
                    <img src={product.image}></img>
                    <p>{product.name}: {product.price}$</p>
                    <p>Count</p>
                    <input type='number' min='1' value={product.quantity}></input>
                    <p>Final price: {product.quantity * product.price}$</p>
                    <div id={product.id} class='removeFromCart' onClick={removePFromCart}>Remove from cart</div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>

      <div class='submitBack'>
        <p>{getPrice(cartItems)}$</p>
        <div class='submit'>
          <div>Submit</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
