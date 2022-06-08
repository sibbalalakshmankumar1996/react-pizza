import React, {useState, useEffect, useContext} from 'react'
import { cartContext } from '../App';
import { getPizzaDetails } from '../config/Myservice';
import Header from './Header'
export default function MainSection() {
  const myCart = useContext(cartContext)
  const {changeCartItems} = myCart;
  const [pizzaData, setPizzaData] = useState([]);

  useEffect(()=>{
    getPizzaDetails()
    .then(res=> setPizzaData(res.data))
  })
  function isThere(item){
    console.log(item);
    let arr=JSON.parse(localStorage.getItem('mycart')); 
    let result;
    for(let items of arr){
      console.log(items)
      console.log(item.id)
      console.log(items.id);
      if(items.id===item.id){
        result = true;
        break;
      }
      else{
        result = false;
      }
    }
    return result;
  }

const addToCart = (pizza)=>{
    if(localStorage.getItem('mycart')!=undefined){

      let arr = JSON.parse(localStorage.getItem("mycart"))
      console.log(arr);
      let flag = isThere(pizza)
    if(flag){
          alert("product already in cart");
      }
      else{
          arr.push(pizza);
          changeCartItems(arr)
          localStorage.setItem('mycart', JSON.stringify(arr));
          console.log(arr); 
          alert('Product add to the Cart');
      }

  }
  else{
      let arr = [];
      arr.push(pizza);
      changeCartItems(arr)
      localStorage.setItem('mycart', JSON.stringify(arr));
      alert('Product added to the Cart');
  }
  }
  
  return (
    <>
    <Header/>
    <h1>Menu</h1>
    <div className="container">
      <div className="row">
        {pizzaData.map(pizza=>
        <div className="col-sm-4" key={pizza.id}>
          <div class="card mb-3 px-3 py-3" style={{width: '18rem'}}>
          <img src={pizza.image} class="card-img-top" alt="pizza" />
          <div class="card-body">
            <h5 class="card-title text-center pb-3">{pizza.name}</h5>
            <button className="btn btn-dark text-white me-3" onClick={()=>addToCart(pizza) }>Add to Cart</button>
            <b class="card-text">Price: {pizza.price}</b>
          </div>
        </div>
        </div>
          )}


      </div>
    </div>
    </>
  )
}
