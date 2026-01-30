import React from "react";

const MenuTitle = ({ item, onUpdate }) => {
  return (
    <div
      key={item.id}
      className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onUpdate(item, 1)}
    >
      <div className="overflow-hidden rounded-xl shadow-sm mb-2">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full max-h-38 object-cover hover:scale-110 transition-transform duration-500 rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-slate-800">{item.name}</h3>
        <p className="text-slate-400 text-xs">{item.categories}</p>
      </div>
      <p className="text-orange-500 font-bold mt-1">&#8377;{item.price}</p>
    </div>
  );
};

export default MenuTitle;
