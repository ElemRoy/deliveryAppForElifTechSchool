import './Cart.css'

function Cart(products) {
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
            <div class='cartProduct'>
              <img src="https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"></img>
              <p>Item A: 50$</p>
              <p>Count</p>
              <input type='number' min='1'></input>
              <p>Final price: 200$</p>
              <div class='removeFromCart'>Remove from cart</div>
            </div>
            <div class='cartProduct'>
              <img src="https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"></img>
              <p>Item A: 50$</p>
              <p>Count</p>
              <input type='number' min='1'></input>
              <p>Final price: 200$</p>
              <div class='removeFromCart'>Remove from cart</div>
            </div>
          </div>
        </div>
      </div>

      <div class='submitBack'>
        <p>Price</p>
        <div class='submit'>
          <div>Submit</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
