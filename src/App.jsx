import { Clock, Pizza, Search } from "lucide-react";
import CartSidebar from "./components/CartSideBar.jsx";

const App = () => {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex max-md:flex-col items-center justify-between max-md:space-y-6">
          {/* Brand Name*/}
          <div className="flex items-center">
            <div>
              <h1 className="text-2xl font-black tracking-tight flex items-center gap-2 text-orange-500 mb-2">
                <Pizza size={32} /> Foodie POS
              </h1>
              <p className="text-slate-400 text-sm font-mendium">
                Table #04 - Cashier : Admin
              </p>
            </div>
          </div>

          {/* History And Search */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors font-bold text-sm cursor-pointer">
              <Clock size={16} /> History
            </button>

            <div className="flex relative items-center">
              <Search size={16} className="absolute w-4 h-4 top-2.5 left-2" />

              <input
                type="text"
                placeholder="Search items..."
                className="pl-10 pr-4 py-2 bg-slate-100 border-none outline-none rounded-xl text-sm focus:ring-2 focus:ring-slate-400 w-64 transition-all"
              />
            </div>
          </div>
        </header>
      </div>
      {/* Cart Sidebar */}
      <aside className="w-100 shrink-0">
        <CartSidebar />
      </aside>
    </div>
  );
};

export default App;
