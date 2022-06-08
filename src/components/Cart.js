import React, {useContext,useState, useEffect} from 'react'
import { cartContext } from '../App'
import {Link} from 'react-router-dom';
import Header from './Header'


export default function Cart() {
    const [totalPrice, setTotalPrice] = useState(0);
    const myCart = useContext(cartContext)
    const {cartData, changeCartItems} = myCart
    console.log(cartData);

    let result=0;
    useEffect(()=>{
        cartData.map(item=>{
        let itemPrice = item.price;
        //console.log(itemPrice);
        let intValue= parseFloat(itemPrice.substr(1));
        console.log(intValue);
        result += intValue;
        setTotalPrice(result)
    })

    })
    const handler = (event, id)=>{
        console.log(Event.target.value);
    }

    const deleteCartItem = id =>{
        let cartItems = JSON.parse(localStorage.getItem('mycart'));
        console.log(cartItems);
        let deletedCartIndex = cartItems.findIndex(function(eachItem){
            if(eachItem.id === id){
                return true
            }
            else{
                return false
            }
        })

        cartItems.splice(deletedCartIndex,1)
        console.log(cartItems)
        changeCartItems(cartItems);
        localStorage.setItem('mycart', JSON.stringify(cartItems));
    }
  return (
      <>
      <Header/>
      <h1>Shopping Cart</h1>
      <hr/>
      <table className='table table-stripped'>
          <tbody>
          {cartData.map(item=>
            <tr key={item.id}>
                <td><img src={item.image} height={100} width={100} alt="pizza" /></td>
                <td><b>{item.name}</b></td>
                <td><b>{item.price}</b></td>
                <td><input type="number" onChange={(event)=> handler(event, item.id)} value="1" /></td>
                <td><input type="button" className="btn bg-dark text-white" onClick={()=> deleteCartItem(item.id)} value="Delete"/></td>
            </tr>
            )}
            </tbody>
      </table>
      <table className='w-100'>
          <tbody>
            <tr>
            <td className='w-50'></td>
              <td><h3>${totalPrice}</h3></td>
              <td className='w-50'></td>
              <td><Link to="/checkout" className='btn bg-dark text-white'>Checkout</Link></td>
              <td className='w-50'></td>
            </tr>
          </tbody>
        </table>
    
      </>
  )
}
