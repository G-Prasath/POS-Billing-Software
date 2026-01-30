import React from 'react'

const CartSideBar = ({cart}) => {
  const subTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subTotal * 0.01; // Assuming 10% tax
  const total = subTotal + tax;
    
  return (
    <div>
      CartSideBar
    </div>
  )
}

export default CartSideBar
