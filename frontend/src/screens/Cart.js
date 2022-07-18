import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './Cart.css'

import { removeFromCart, changeQuantity, resetCart } from "../redux/actions/cartActions";

import { addOrder } from "../redux/actions/orderActions"

function Cart(products) {
  const [_name, setName] = useState('');
  const [_email, setEmail] = useState('');
  const [_phone, setPhone] = useState('');
  const [_address, setAddress] = useState('');

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  
  const removePFromCart = (event) => {
    dispatch(removeFromCart(event.currentTarget.id));
  }

  const changeQtHandler = (event) => {
    dispatch(changeQuantity(event.currentTarget.id, event.currentTarget.value));
  }

  const submit = (event) => {
    dispatch(addOrder({buyer: _name, email: _email, phone: _phone, address: _address, products: cartItems}));
    dispatch(resetCart());
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
              <input class='input' value={_name} onInput={e => setName(e.target.value)}></input>
            </div>

            <div class='inputSection'>
              <h2>Email</h2>
              <input class='input' value={_email} onInput={e => setEmail(e.target.value)}></input>
            </div>

            <div class='inputSection'>
              <h2>Phone</h2>
              <input class='input' value={_phone} onInput={e => setPhone(e.target.value)}></input>
            </div>

            <div class='inputSection'>
              <h2>Address</h2>
              <input class='input' value={_address} onInput={e => setAddress(e.target.value)}></input>
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
                    <div class='inputContainer'><input class='qt' type='number' min='1' defaultValue={product.quantity} id={product.id} onChange={changeQtHandler}></input></div>
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
          <div onClick={submit}>Submit</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
