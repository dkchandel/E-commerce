import React from 'react'
import Slider from "react-slick";

const TestomonialsData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt optio eos illo quia, deleniti voluptatem similique laboriosam. At veritatis numquam reprehenderit nostrum, earum voluptatibus, hic amet, maxime accusantium expedita optio sed repellendus!",
        img:"https://picsum.photos/200/301",
    },
    {
        id: 2,
        name: "Satya",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt optio eos illo quia, deleniti voluptatem similique laboriosam. At veritatis numquam reprehenderit nostrum, earum voluptatibus, hic amet, maxime accusantium expedita optio sed repellendus!",
        img:"https://picsum.photos/200/302",
    },
    {
        id: 3,
        name: "Vikram",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt optio eos illo quia, deleniti voluptatem similique laboriosam. At veritatis numquam reprehenderit nostrum, earum voluptatibus, hic amet, maxime accusantium expedita optio sed repellendus!",
        img:"https://picsum.photos/200/303",
    },
    {
        id: 4,
        name: "akshay",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt optio eos illo quia, deleniti voluptatem similique laboriosam. At veritatis numquam reprehenderit nostrum, earum voluptatibus, hic amet, maxime accusantium expedita optio sed repellendus!",
        img:"https://picsum.photos/200/304",
    },
    {
        id: 5,
        name: "lalit",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt optio eos illo quia, deleniti voluptatem similique laboriosam. At veritatis numquam reprehenderit nostrum, earum voluptatibus, hic amet, maxime accusantium expedita optio sed repellendus!",
        img:"https://picsum.photos/200/305",
    },
];

const Testimonials = () => {
   
    var  settings={
        dots:true,
        arrows:false,
        Infinite:true,
        speed:500,
        slidesToShow: 1,
        slidesToscroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToscroll:1,
                    Infinite:true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlider:2,
                },
            },
            {
             breakpoint:640,
             settings:{
                slidesToShow:1,
                slidesToScroll:1,
             }
            }
        ],
    };
    return <div className="py-10 mb-10">
        <div className="container">
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos="fade-up" className='text-sm text-primary'>What out customers are saying</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">
                    Testomonials
                </h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, iure? Voluptates harum ipsam libero voluptatum delectus consectetur animi culpa? Quo?</p>
            </div>
            <div data-aos="zoom-in">
                


<Slider {...settings}>
    {TestomonialsData.map((data) => (
        <div key={data.id} className="my-6">  
            <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative'>
                <div className="mb-4">
                    <img src={data.img} alt="" className='rounded-full w-20 h-20'/>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className='space-y-3'>
                        <p className='text-xs dark:text-slate-300 text-gray-500'>{data.text}</p>
                        <h1 className="text-xl font-bold dark:text-slate-300 text-black/80">{data.name}</h1>
                    </div>
                </div>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">“</p>
            </div>
        </div>
    ))}
</Slider>




            </div>
        </div>
    </div>
};

export default Testimonials