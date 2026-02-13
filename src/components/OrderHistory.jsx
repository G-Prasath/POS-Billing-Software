import { ChefHat, Printer, X } from "lucide-react";

const OrderHistory = ({ orders, onClose, onPrint }) => {
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

        <div className="flex-1 overflow-y-auto p-6 custom-scroll-bar">
          {orders.length === 0 ? (
            <>
              <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <ChefHat />
                </div>
                <p className="font-medium">No Order History Found</p>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-4">
                {orders.reverse().map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-slate-100 rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900">
                            #{item.id}
                          </span>
                          <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                            Completed
                          </span>
                        </div>

                        <p className="text-sm text-slate-500 mt-1">
                          {item.date}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-md font-bold text-slate-900">
                          ₹ {item.total.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2 justify-end mt-1">
                          <p className="text-xs text-slate-500">
                            items {item.items.length}
                          </p>
                          <button
                            className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600 transition-colors"
                            title="Print Recipet"
                            onClick={() => onPrint(item)}
                          >
                            <Printer className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-100 rounded-lg p-2">
                      <div className="flex flex-wrap gap-2">
                        {item.items.map((item, index) => (
                          <span
                            className="text-slate-600 text-xs border border-slate-200 bg-white px-2 py-1 rounded"
                            key={index}
                          >
                            {item.quantity} x {item.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-400">
          Showing Last {orders.length} Orders
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
