import './Shop.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts as listProducts } from "../redux/actions/productActions";
import { addToCart } from '../redux/actions/cartActions';

function Shop(props) {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const selectCompany = (event) => {
    setSelectedCompany(event.currentTarget.textContent);
  };

  const addToCartHandler = (event) => {
    console.log(event.currentTarget.id);
    dispatch(addToCart(event.currentTarget.id, 1));
    //history.push("/cart");
  }

  function getCompanies (products){
    let companies = [];
  
    products.map((product) => {
        if(companies.includes(product.company) == false) {
          companies.push(product.company);
        }
    });
  
    return companies;
  }

  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => { dispatch(listProducts()); }, [dispatch]);

  return (
    <div class='container'>
      <div class='navBar childContainer'>
        <h1>Shops:</h1>
        
        {getCompanies(products).map((company) => {
          return(
            <div class='companySlot' onClick={selectCompany}>{company}</div>
          )
        })}
      </div>

      <div class='productList childContainer'> 
        <h1>Products:</h1>

        <div class='products'>
          {products.map((product) => {
            if(selectedCompany != null){
              if(selectedCompany == product.company){
                return(
                  <div class='product'>
                    <img src={product.image}></img>
                    <p>{product.name}: {product.price}$</p>
                    <div id={product._id} onClick={addToCartHandler}>Add to cart</div>
                  </div>)
              }
            }
            else{
              return(
                <div class='product'>
                  <img src={product.image}></img>
                  <p>{product.name}: {product.price}$</p>
                  <div id={product._id} onClick={addToCartHandler}>Add to cart</div>
                </div>)
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
