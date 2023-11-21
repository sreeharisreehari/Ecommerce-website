import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [total,setTotal] = useState(0)
  const getTotal = ()=>{
    if (cartArray.length>0) {
    setTotal(cartArray?.map(item=>item.price).reduce((p1,p2)=>p1+p2))
      
    }
    else{
      setTotal(0)
    }
  }

  const checkout=()=>{
    dispatch(emptyCart())
    alert('Thank You .... Your Order Is Successfully Placed')
    navigate('/')

  }

  useEffect(()=>{
    getTotal()
  },[cartArray])
  return (
   <div style={{marginTop:'150px'}}>
   <div className='row w-100 d-flex'>
    {cartArray?.length>0?

<div className='d-flex border shadow'>
       <div className='col-lg-6 m-5'>
          <table className='table border shadow'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
           {cartArray.map((item,index)=>( <tbody>
              <tr>
                <th>{index+1}</th>
                <th>{item.title}</th>
                <th><img style={{height:'100px',width:'100px'}} src={item.thumbnail} alt="no image" /></th>
                <th>{item.price}</th>
                <th><Button onClick={()=>dispatch(removeFromCart(item.id))}  variant="outline-danger btn rounded"><i class="fa-solid fa-trash"></i></Button>
                </th>
              </tr>
            </tbody>
            ))}
          </table>
       </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
        <h1 className='text-danger'>Cart Summary </h1>
        <h4>Total Number Of Products :<span className='text-primary fw-bolder fs-2 ms-3'>{cartArray.length}</span></h4>
        Total Price : ₹{total}
        <button onClick={checkout} className='btn btn-success rounded w-100 mt-3'>Checkout</button>
       </div>
</div>
     :
     <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
     <img style={{width:'200px'}} src="https://statementclothing.net/images/cart.gif" alt="" />
     <h4 className='text-danger fw-bolder'>Your Cart is empty</h4>
     <button className='form-control' style={{width:'150px'}} ><Link style={{textDecoration:'none'}} to={'/'}>Back TO Home</Link></button>

   </div>
     }
    
   </div>
   </div> )
}

export default Cart