// import React, { useState } from 'react';
// import Img1 from "../../assets/women1.png";
// import Img2 from "../../assets/women2.png";
// import Img3 from "../../assets/women3.jpg";
// import Img4 from "../../assets/women4.jpg";
// import Img5 from "../../assets/women5.jpg";
// import ProductCard from '../../components/ProductCard';
// import Header from '../../components/Header';

// const ProductsData = [
//     {
//         id: 1,
//         image: Img1,
//         name: "Women Ethnia",
//         description: "Beautiful ethnic wear",
//         price: 49.99,
//         color: "white",
//         aosDelay: "0",
//     },
//     {
//         id: 2,
//         image: Img2,
//         name: "Women Ethnib",
//         description: "Elegant traditional dress",
//         price: 59.99,
//         color: "red",
//         aosDelay: "200",
//     },
//     {
//         id: 3,
//         image: Img3,
//         name: "Women Ethnic",
//         description: "Stylish and modern",
//         price: 39.99,
//         color: "brown",
//         aosDelay: "400",
//     },
//     {
//         id: 4,
//         image: Img4,
//         name: "Women Ethnid",
//         description: "Comfortable ethnic design",
//         price: 29.99,
//         color: "yellow",
//         aosDelay: "600",
//     },
//     {
//         id: 5,
//         image: Img5,
//         name: "Women Ethnie",
//         description: "Classic traditional outfit",
//         price: 69.99,
//         color: "black",
//         aosDelay: "800",
//     },
// ];

// const Products = () => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (product) => {
//         setCart([...cart, product]);
//         alert(`${product.name} added to cart!`);
//     };

//     return (
//         <div className='mt-14 mb-12'>
//             <div className="container">
//                 <div className="text-center mb-10 max-w-[600px] mx-auto">
//                     <p data-aos="fade-up" className='text-sm text-primary'>TopSelling Products for you</p>
//                     <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
//                     <p data-aos="fade-up" className='text-xs text-gray-400'>Explore the best products at affordable prices.</p>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
//                     {ProductsData.map((product) => (
//                         <div data-aos="fade-up" data-aos-delay={product.aosDelay} key={product.id}>
//                             <ProductCard product={product} addToCart={addToCart} theme="light" />
//                         </div>
//                     ))}
//                 </div>

//                 <div className="flex justify-center">
//                     <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>
//                         View All Products
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Products;












import React, { useState } from 'react';
import Img1 from "../../assets/women1.png";
import Img2 from "../../assets/women2.png";
import Img3 from "../../assets/women3.jpg";
import Img4 from "../../assets/women4.jpg";
import Img5 from "../../assets/women5.jpg";
import ProductCard from '../../components/ProductCard';
import Header from '../../Header';

const ProductsData = [
    { id: 1, image: Img1, name: "Women Ethnia", description: "Beautiful ethnic wear", price: 49.99, color: "white", aosDelay: "0" },
    { id: 2, image: Img2, name: "Women Ethnib", description: "Elegant traditional dress", price: 59.99, color: "red", aosDelay: "200" },
    { id: 3, image: Img3, name: "Women Ethnic", description: "Stylish and modern", price: 39.99, color: "brown", aosDelay: "400" },
    { id: 4, image: Img4, name: "Women Ethnid", description: "Comfortable ethnic design", price: 29.99, color: "yellow", aosDelay: "600" },
    { id: 5, image: Img5, name: "Women Ethnie", description: "Classic traditional outfit", price: 69.99, color: "black", aosDelay: "800" },
];

const Products = () => {
    const [cart, setCart] = useState([]);
    const [theme, setTheme] = useState("light");

    const addToCart = (product) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        alert(`${product.name} added to cart!`);
    };

    const updateQuantity = (id, quantity) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
            <Header
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                total={total}
                theme={theme}
                toggleTheme={toggleTheme}
            />
            <div className='mt-14 mb-12 m-10'>
                <div className="container">
                    <div className="text-center mb-10 max-w-[600px] mx-auto">
                        <p data-aos="fade-up" className='text-sm text-primary'>TopSelling Products for you</p>
                        <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                        <p data-aos="fade-up" className='text-xs text-gray-400'>Explore the best products at affordable prices.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {ProductsData.map((product) => (
                            <div data-aos="fade-up" data-aos-delay={product.aosDelay} key={product.id}>
                                <ProductCard product={product} addToCart={addToCart} theme={theme} />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>
                            View All Products
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;






