// import React from 'react';
import banner from "../../assets/Banner-image.webp";
import "./Banner.css"

const Banner = () => {
    return (
        <div className='mt-6'>
            
            <img src={banner} alt="" />
            <div className="text-overlay container grid md:grid-cols-2  justify-start align-baseline mx-auto  ">
                <div className='mt-28'>
                <p className="overlay-text text-brown-100 text-center">Chowdhurani</p>
                <p className='text-brown-50 text-5xl text-center font-bold uppercase my-3 leading-relaxed'>The Unpologetic Expression <br /> of you</p>
                <p className='uppercase text-brown-300 text-xl text-center'>Live a life You Want. Be Unmistakeably You!</p>
                <p className='text-center'>
                <button className='btn-outline h-10  m-2 bg-brown-300 text-xl font-semibold text-brown-50 w-72'>View Range</button>
                </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;