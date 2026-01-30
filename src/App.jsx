import { Clock, Pizza, Search } from "lucide-react";
import CartSidebar from "./components/CartSideBar.jsx";
import { menuData } from "./data/menu.js";
import { useState } from "react";
import MenuTitle from "./components/MenuTitle.jsx";

const App = () => {
  const categories = [
    "All",
    ...new Set(menuData.map((item) => item.categories)),
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMenu = menuData.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.categories === selectedCategory;
    const matchSearch = item.name
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
    return matchCategory && matchSearch;
  });

  // Load previous CartItem from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  //update Cart Items in localStorage
  const updateCartItems = (item, quantity) => {
    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItem = prevCart.find((i) => i.id === item.id);
      // If item does not exist and quantity is positive, add it to cart
      if(existingItem){
        const newQty = existingItem.quantity + quantity;
        //  Remove item if quantity is zero or less
        if(newQty <= 0) return prevCart.filter((i) => i.id !== item.id);
        // Update item quantity
        return prevCart.map((i) => i.id === item.id ? {...i, quantity: newQty} : i);
      }

      // If item does not exist and quantity is positive, add it to cart
      if(quantity > 0){
        return [...prevCart, {...item, quantity: quantity}];
      }

      // If quantity is zero or negative and item does not exist, do nothing
      return prevCart;
    })
  };

  console.log(cart);
  

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
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
                value={searchTerm}
                placeholder="Search items..."
                className="pl-10 pr-4 py-2 bg-slate-100 border-none outline-none rounded-xl text-sm focus:ring-2 focus:ring-slate-400 w-64 transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* Categories */}
        <div className="px-6 py-4 flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 ${selectedCategory === category ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"} rounded-lg transition-colors font-bold text-sm cursor-pointer whitespace-nowrap outtline-none`}
              onClick={(e) => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Tile */}
        <div className="flex-1 overflow-y-auto p-6 custom-scroll-bar">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 py-4">
            {filteredMenu.map((item) => (
              <MenuTitle key={item.id} item={item} onUpdate={updateCartItems} />
            ))}
          </div>
        </div>
      </div>
      {/* Cart Sidebar */}
      <aside className="w-100 shrink-0">
        <CartSidebar cart={cart} />
      </aside>
    </div>
  );
};

export default App;
