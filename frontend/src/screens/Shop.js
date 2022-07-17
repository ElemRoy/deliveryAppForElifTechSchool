import './Shop.css'

const selectCompany = (event) => {
  console.log(event.currentTarget.textContent);
}

function Shop(products) {
  return (
    <div class='container'>
      <div class='navBar childContainer'>
        <h1>Shops:</h1>

        <div class='companySlot' onClick={selectCompany}>Company A</div>
        <div class='companySlot' onClick={selectCompany}>Company B</div>
        <div class='companySlot' onClick={selectCompany}>Company C</div>
        <div class='companySlot' onClick={selectCompany}>Company D</div>
      </div>

      <div class='productList childContainer'> 
        <h1>Products:</h1>

        <div class='products'>
          {console.log("hey")}
          {products.map((product) => {
            <div class='product'>
              <img src='${product.image}'></img>
              <p>${product.name}: ${product.price}$</p>
              <div>Add to cart</div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
