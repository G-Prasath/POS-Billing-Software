import { CheckSquareIcon, Minus, Plus, Printer, PrinterCheck, ShoppingBasket, Trash2 } from "lucide-react";

const CartSideBar = ({ cart, onClear, onUpdate, onPrint }) => {
  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subTotal * 0.01; // Assuming 5% tax
  const total = subTotal + tax;

  return (
    <div className="flex flex-col h-full bg-white border-l border-slate-400 p-6">
      {/*  Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-slate-800 font-bold">New Order</h2>
        <button
          disabled={cart.length === 0}
          onClick={(e) => onClear()}
          className="flex items-center gap-1 text-xs text-rose-500 font-medium bg-rose-50 hover:bg-rose-100 px-3 py-1 rounded-full transition-colors"
        >
          <Trash2 size={16} /> Clear All
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto py-6 custom-scroll-bar">
        {cart.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 ">
            <div className="h-12 flex items-center justify-center">
              <ShoppingBasket size={32} />
            </div>
            <p className="font-medium">No items in the cart.</p>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4"
              >
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-slate-800">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {item.quantity} x &#8377; {item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-4 text-sm">
                  <button
                    onClick={() => onUpdate(item, -1)}
                    className="p-1 rounded-full bg-red-100 hover:bg-red-200"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="">{item.quantity}</span>
                  <button
                    onClick={() => onUpdate(item, 1)}
                    className="p-1 rounded-full bg-green-100 hover:bg-green-200"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Cart subTotal, Total, Tax, and Checkout */}
      {cart.length > 0 && (
        <div className="border-t border-slate-200 pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-slate-600">Subtotal</span>
            <span className="text-xs font-medium text-slate-600">₹{subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-xs text-slate-600">Tax (1%)</span>
            <span className="text-xs font-medium text-slate-600">₹{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4 border-t border-slate-200 pt-2">
            <span className="text-md font-bold text-slate-800">Total</span>
            <span className="text-md font-bold text-slate-800">₹{total.toFixed(2)}</span>
          </div>
          <button onClick={onPrint} className="cursor-pointer w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold transition-colors">
            <PrinterCheck className="inline font-bold" size={18} /> Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSideBar;
