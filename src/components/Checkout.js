import React, {useState, useContext, useEffect} from 'react'
import { cartContext } from '../App'
import Header from './Header'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function Checkout() {
    const [cardValue, setCardValue] = useState({number:'', errorMsg:''});
    const [totalvalue, setTotalValue] = useState(0);
    const navigate = useNavigate();
    const priceCart = useContext(cartContext)
    const {cartData, changeCartItems} = priceCart

    let result=0;
    useEffect(()=>{
        cartData.map(item=>{
        let itemPrice = item.price;
        //console.log(itemPrice);
        let intValue= parseFloat(itemPrice.substr(1));
        console.log(intValue);
        result += intValue;
        setTotalValue(result)
    })

    })

    const handler = event=>{
        const {name, value} = event.target 
        setCardValue({...cardValue, [name]:value})
        console.log(cardValue);
    }

    const validateCard = (event)=>{
        event.preventDefault();
        let cardRegex = /^[0-9]{16,16}$/

        if(cardValue.number!==''){
            setCardValue({...cardValue, errorMsg:''})
            console.log(cardRegex.test(cardValue.number))
            if(cardRegex.test(cardValue.number)){
                navigate("/success")


            }
            else{
                setCardValue({...cardValue, errorMsg:"Enter valid 16 digit number"})
            }

        }
        else{
            setCardValue({...cardValue, errorMsg:"Fill the input field"})
        }
        
    }
  return (
    <>
    <Header/>
    <h1 className="mt-4">Checkout</h1>
    {cardValue.errorMsg!=='' &&
    <p style={{color:'red'}}>{cardValue.errorMsg}</p>}
    <form onSubmit={validateCard}>
    <div className="form-group mb-3">
        <label className="font-weight-bold">Credit Card</label>
        <input type="text" className="form-control" name="number" onChange={handler} placeholder="Enter 16 Digit number" />
    </div>
    <p>Order Total: <b>${totalvalue}</b></p>
    <input type="submit" className='btn bg-dark text-white' value="Checkout" />
    </form>
    </>
  )
}

