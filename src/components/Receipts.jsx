import React from "react";

const Receipts = ({ orderRecipet, cart }) => {
  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subTotal * 0.05;
  const total = subTotal + tax;
  const date = orderRecipet?.date || new Date().toLocaleString();
  const orderId = orderRecipet?.id || `POS-${Math.floor(Math.random() * 100000)}`;
  
  return (
    <div
      id="recipt-print"
      className="p-8 bg-white text-slate-800 font-mono text-sm"
    >
      <div className="text-center border-b-2 border-dashed border-slate-300 pb-4 mb-4">
        <h1 className="text-2xl font-bold uppercase tracking-widest">
          Grand Hotel
        </h1>
        <p className="text-xs text-slate-100">123 Food Street, Miayami City</p>
        <p className="text-xs text-slate-100">Tel : +91 98745 63210</p>
      </div>

      <div className="flex justify-between mb-4 text-xs">
        <span>Order #{orderId}</span>
        <span>{date}</span>
      </div>

      <div className="boder-b border-slate-200 pb-2 mb-2">
        <div className="flex justify-between font-bold mb-1">
          <span className="flex-2">Item</span>
          <span className="flex-1 text-center">Qty</span>
          <span className="flex-1 text-right">Price</span>
        </div>

        {cart.map((item) => (
          <div key={item.id}  className="flex justify-between py-1">
            <span className="flex-2">{item.name}</span>
            <span className="flex-1 text-center">X {item.quantity}</span>
            <span className="flex-1 text-right">₹ {item.price * item.quantity}</span>
          </div>
        ))}
      </div>


      <div className="space-y-1 mb-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹ {subTotal.toFixed(2)}</span>
          </div>

           <div className="flex justify-between">
            <span>GST (5%)</span>
            <span>₹ {tax.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg pt-2 border-t-2 border-dashed border-slate-300">
          <span>Total</span>
          <span>₹ {total.toFixed(2)}</span>
          </div>
      </div>

      <div className="text-center text-xs mt-8">
        <p className="font-bold">Thank You!</p>
        <p>Visit Again</p>
      </div>
    </div>
  );
};

export default Receipts;
