import React from 'react';
import { FaCartPlus } from 'react-icons/fa'

const ProductCard = ({ product, addToCart, theme }) => { 
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out 
    ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} max-w-xs mx-auto`}>
      
      {/* Product Image */} 
      <div className="h-56 w-full overflow-hidden">
        <img src={product?.image || "default-image.jpg"} alt={product?.name || "Product"} className='w-full h-full object-cover transition-all duration-300 ease-in-out' />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product?.name || "Unknown Product"}</h2>
        <p className='text-sm text-gray-600 dark:text-gray-400 mt-2'>
          {product?.description || "No description available"}
        </p>

        {/* Price & Add-to-Cart*/}
        <div className="flex items-center justify-between mt-4">
          <span className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            ${product?.price?.toFixed(2) || "0.00"}
          </span>
          <button 
            className="bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-300 ease-in-out" 
            onClick={() => addToCart(product)}>
            <FaCartPlus />Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
