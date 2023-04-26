import React from 'react'

import { Delete, DeleteOutlineOutlined } from '@mui/icons-material'
import { DeleteForeverOutlined } from '@mui/icons-material'

import './Cart.scss'
import { useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../Redux/cartReducer'
import { useDispatch } from 'react-redux'

const Cart = () => {
    
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()

    const totalPrice = () => {
        let total = 0
        products.forEach(item => 
            total+=item.quantity * item.price);
        return total.toFixed(2)
    }
  return (
    <div className='cart'>
        <h2 className='titleh2'>Vos produits</h2>
        {products?.map(item=>(
            <div className="item" key={item.id}>
                <div className="first_part">
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                    <div className="details">
                        <h2>{item.title}</h2>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">
                            <h3>{item.quantity} x {item.price} $</h3>
                        </div>
                    </div>
                </div>
                <DeleteOutlineOutlined className='delete' 
                onClick={()=>dispatch(removeItem(item.id))}/>
            </div>
        ))}
        <div className="total">
            <h3>TOTAL</h3>
            <h3>{totalPrice()} $</h3>
        </div>
        <button>checkout</button>
        <a href="#" className='reset' onClick={()=>dispatch(resetCart())}>Reset cart</a>
    </div>
  )
}

export default Cart