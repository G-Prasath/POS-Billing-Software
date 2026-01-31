import { X } from "lucide-react";

const OrderHistory = ({ orders, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white max-w-4xl w-full max-h-[80vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <p className="text-2xl text-slate-800 font-bold">Order History</p>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scroll-bar"></div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-400">Showing Last {orders.length} Orders</div>
      </div>
    </div>
  );
};

export default OrderHistory;
