// const Cart = ({ cart, handleShowCart }) => {
//     return (
//       <div className="fixed top-0 right-0 w-[300px] h-full bg-white dark:bg-gray-800 shadow-2xl z-50 p-4 overflow-y-auto">
//         <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//         <button
//           className="absolute top-2 right-2 text-black dark:text-white text-2xl"
//           onClick={handleShowCart}
//         >
//           &times;
//         </button>
  
//         {cart.length === 0 ? (
//           <p className="text-gray-500 mt-10">Your cart is empty.</p>
//         ) : (
//           cart.map((item) => (
//             <div key={item.id} className="mb-4 border-b pb-2">
//               <h3 className="text-lg font-semibold">{item.name}</h3>
//               <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
//               <p className="text-gray-500">Quantity: {item.quantity}</p>
//             </div>
//           ))
//         )}
//       </div>
//     );
//   };
  
//   export default Cart;
  