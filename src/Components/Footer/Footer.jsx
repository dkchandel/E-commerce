import React from 'react';
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import {
    FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow,
    FaMobileAlt,
}  from "react-icons/fa";
import {IoCall} from "react-icons/io5";

const FooterLinks=[
    {
        title:"Home",
        link:"/#",
    },
    {
        title:"About",
        link:"/#about",
    },
    {
        title:"Contact",
        link:"/#contact",
    },
    {
        title:"Blog",
        link:"/#blog",
    },
]

const FooterLink=[
{
        title:"Services",
        link:"/#Services",
    },
    {
        title:"Support",
        link:"/#",
    },
    {
        title:"Terms & Condition",
        link:"/#",
    },
    {
        title:"FAQ",
        link:"/#",
    },
]

const Footer=()=>{
    return <div className='text-white bg-[#212529]'>
        <div className="container">
            <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
                <div className="py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold 
                    sm:text-left text-justify mb-3 flex items-center gap-1">
                        <FiShoppingBag size="30"/>
                        ShopMe
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur adipisci reiciendis eveniet optio voluptatem eum quibusdam sit minima modi natus nesciunt totam, ad eius ut temporibus iusto numquam animi magni nostrum.</p>
                </div>
                 <div>
                    <div className="py-8 px-4">
                        <h1 className='sm-text-xl text-xl 
                        font-bold sm:text-left text-justify mb-3'>
                            Important Links
                        </h1>
                        <ul className="flex flex-col gap-3">
                            {FooterLinks.map((link)=>(
                                <li className="cursor-pointer 
                                hover:text-primary hover:translate-x-1 
                                duration-300 text-gray-200" key={link.title}>{link.title}</li>
                            ))}
                        </ul>
                        
                    </div>
                 </div>
                 <div>
                    <div className='py-8 px-4'>
                    <h1 className='sm-text-xl text-xl 
                        font-bold sm:text-left text-justify mb-3'>
                         Links
                        </h1>
                        <ul className="flex flex-col gap-3">
                            {FooterLink.map((link)=>(
                                <li className="cursor-pointer 
                                hover:text-primary hover:translate-x-1 
                                duration-300 text-gray-200" key={link.title}>{link.title}</li>
                            ))}
                        </ul>
                        </div>
                 </div>
                 <div>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="https://www.instagram.com/dheeraj_chandel376/?next">
                            <FaInstagram className='text-3xl' />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100070903990396">
                            <FaFacebook className='text-3xl' />
                        </a>
                        <a href="https://www.linkedin.com/in/dheeraj-chandel-532070260">
                            <FaLinkedin className='text-3xl' />
                        </a>
                    </div>
                    <div className='mt-6'>
                       <div className="flex items-center gap-3">
                        <FaMapLocationDot />
                    <p>Jaipur, Rajasthan</p>
                       </div>
                       <div className="flex items-center gap-3 mt-3">
                        <IoCall/>
                        <p>+91 9079098666</p>
                       </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
}



export default Footer