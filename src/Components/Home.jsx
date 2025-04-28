// import React from "react";
// import Header from '../components/Header'
// import ProductCard from '../components/ProductCard'

// const products = [
//     {
//         id:1,
//         name:"Premium Wirless Headphones",
//         price :199.99,
//         description :"High-quality wirless headphones with noise cancellaation",
//         image: "headphone.jpg"
//     },
//     {
//         id:2,
//         name:"Premium Wirless Headphones",
//         price :199.99,
//         description :"High-quality wirless headphones with noise cancellaation",
//         image: "headphone.jpg"
//     },
//     {
//         id:3,
//         name:"Premium Wirless Headphones",
//         price :199.99,
//         description :"High-quality wirless headphones with noise cancellaation",
//         image: "headphone.jpg"
//     },
//     {
//         id:4,
//         name:"Premium Wirless Headphones",
//         price :199.99,
//         description :"High-quality wirless headphones with noise cancellaation",
//         image: "headphone.jpg"
//     },
//     {
//         id:5,
//         name:"Premium Wirless Headphones",
//         price :199.99,
//         description :"High-quality wirless headphones with noise cancellaation",
//         image: "headphone.jpg"
//     },
//     {
//         id:6,
//         name:"Premium Wirless Headphones",
//         price :199.99,
//         description :"High-quality wirless headphones with noise cancellaation",
//         image: "headphone.jpg"
//     },
//     {
//         id:7,
//         name:"Premium Wirless Headphones",
//         price :199.99,
//         description :"High-quality wirless headphones with noise cancellaation",
//         image: "headphone.jpg"
//     },
//     {
//         id:8,
//         name:"Premium Wirless Headphones",
//         price :199.99,
//         description :"High-quality wirless headphones with noise cancellaation",
//         image: "headphone.jpg"
//     }
// ];


// const Home = () => {
//     const [cart, setCart] = useState([]);
//     const [theme, setTheme] = useState("light");

//     const addToCart = (product) => {
//         const existingProduct = cart.find((item) => item.id === product.id);
//         if (existingProduct) {
//             setCart(
//                 cart.map((item) =>
//                     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//                 )
//             );
//         } else {
//             setCart([...cart, { ...product, quantity: 1 }]);
//         }
//     };
//     const removeFromCart = (productId) => {
//         setCart(cart.filter((item) => item.id !== productId));
//     };
//     const updateQuantity = (productId, delta) => {
//         setCart(
//             cart.map((item) => item.id === productId ? { ...item, quantity: Math.max(item.quantity + delta.quantity + delta, 1) } : item)
//         );
//     };
//     const toggleTheme = () => {
//         setTheme((prevTheme) => {
//             const newTheme = prevTheme === "light" ? "dark" : "light";
//             document.documentElement.classList.toggle("dark", newTheme === "dark");
//             return newTheme;
//         });
//     };

//     const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//     return (
//         <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen`}>
//             <products
//                 cart={cart}
//                 updateQuantity={updateQuantity}
//                 removeFromCart={removeFromCart}
//                 total={total}
//                 theme={theme}
//                 toggleTheme={toggleTheme}
//             />
//             <main className="p-4 mx-auto max-w-screen-xl">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
//                     {products.map((product) => {
//                         <ProductCard 
//                         key={product.id}
//                          product={product}
//                          addToCart={addToCart}
//                          theme={theme}/>                    
//                     })}
//                 </div>
//             </main>
//         </div>
//     )
// };

// export default Home;








import React, { useState } from "react";
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
// import headphoneImg from "../assets/headphone.jpg";

const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 199.99,
        description: "High-quality wireless headphones with noise cancellation",
        image: "headphone.jpg"
        // image: require("../assets/headphone.jpg")

    },
    {
        id: 2,
        name: "Premium Wireless Headphones",
        price: 199.99,
        description: "High-quality wireless headphones with noise cancellation",
        image: "headphone.jpg"
    },
    {
        id: 3,
        name: "Premium Wireless Headphones",
        price: 199.99,
        description: "High-quality wireless headphones with noise cancellation",
        image: "headphone.jpg"
    },
    {
        id: 4,
        name: "Premium Wireless Headphones",
        price: 199.99,
        description: "High-quality wireless headphones with noise cancellation",
        image: "headphone.jpg"
    }
];

const Home = () => {
    const [cart, setCart] = useState([]);
    const [theme, setTheme] = useState("light");

    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, delta) => {
        setCart(
            cart.map((item) => 
                item.id === productId 
                ? { ...item, quantity: Math.max(item.quantity + delta, 1) } 
                : item
            )
        );
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            document.documentElement.classList.toggle("dark", newTheme === "dark");
            return newTheme;
        });
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen`}>
            <Header
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                total={total}
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <main className="p-4 mx-auto max-w-screen-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                    {products.map((product) => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                            theme={theme}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Home;
