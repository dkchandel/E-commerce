import React, { useState } from 'react';
import Img1 from "../../assets/shirt1.jpg";
import Img2 from "../../assets/shirt2.jpg";
import Img3 from "../../assets/shirt3.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati porro minima necessitatibus nam enim fuga eaque laudantium pariatur nisi possimus.",
        price: 29.99
    },
    {
        id: 2,
        img: Img2,
        title: "Women Shirt",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati porro minima necessitatibus nam enim fuga eaque laudantium pariatur nisi possimus.",
        price: 39.99
    },
    {
        id: 3,
        img: Img3,
        title: "Casual Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati porro minima necessitatibus nam enim fuga eaque laudantium pariatur nisi possimus.",
        price: 34.99
    },
];

const TopProducts = ({ handleOrderPopup }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.title} added to cart!`);
    };

    return (
        <div className="container">
            <div className="text-left mg-24 m-6">
                <p data-aos="fade-up" className='text-sm text-primary text-center mb-[10px] ml-[62px] mx-auto'>
                    Top Rated products for you
                </p>
                <h1 data-aos="fade-up" className='text-3xl font-bold text-center mb-[10px] ml-[62px]'>Best Products</h1>
                <p data-aos="fade-up" className="text-xs text-gray-400 text-center mb-[90px] ml-[62px] mx-auto">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem doloribus minima, cupiditate dignissimos a, quia ab sed saepe repudiandae aliquam perspiciatis.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center mt-10">
                    {ProductsData.map((data) => (
                        <div key={data.id} data-aos="zoom-in" className='rounded-2xl text-center bg-white dark:bg-gray-800 
                        hover:bg-black/80 dark:hover:bg-primary hover:text-white 
                        relative shadow-xl duration-300 group max-w-[300px] p-4'>
                            <div>
                                <img src={data.img} alt="" className='max-w-[140px] block 
                                mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 
                                drop-shadow-md' />
                            </div>
                            <div className='w-full flex items-center justify-center gap-1 mt-[-40px]'>
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                            </div>
                            <h1 className='text-xl font-bold'>{data.title}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                {data.description}
                            </p>
                            <p className="text-sm font-semibold mt-2">${data.price.toFixed(2)}</p>

                            <div className='mt-4 flex justify-center gap-3'>
                                <button
                                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full group-hover:bg-white group-hover:text-black"
                                    onClick={() => addToCart(data)}
                                >
                                    Add to Cart
                                </button>

                                <button
                                    className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded-full"
                                    onClick={handleOrderPopup}
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProducts;
