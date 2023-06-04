import React  from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import ReactFlagsSelect from 'react-flags-select';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HeroSection() {

  const [selected, setSelected] = useState('TR');


  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
        },
      },
    ],
  };
  const slides = [
    {
      id: 1,
      image: 'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg',
     
    },
    {
      id: 2,
      image: 'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg',
     
    },
    {
      id: 3,
      image: 'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg',
     
      
    },
    {
      id: 4,
      image: 'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg',
     
      
    },
  ];




  return (
    <div className=" relative hero-section h-[500px]">
    <Slider {...sliderSettings}>
      {slides.map((slide) => (
        <div key={slide.id} className="slide"> 
          <div className="slide-image relative before:bg-gradient-to-r before:from-primary-regal-blue before:to-transparent before:absolute before:inset-0 "> 
            <img className='w-full h-[500px] object-cover ' src={slide.image} alt={slide.title} />
          </div>
         
        </div>
      ))}
    </Slider>
    <div className='container max-w-[1232px] flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full'>
          <div>
            <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg'></img>
              <h1 className='text-4xl leading-10 text-white w-80 font-semibold mt-10 mb-1'>
              Dakilar İçinde <br/> Kapınızda
              </h1>
          </div>
          <div className='w-[400px] rounded-lg bg-login-card py-6'> 
              <h4 className='text-primary-regal-blue font-semibold text-base text-center mb-4 ' >Giriş yap veya kayıt ol</h4>
              <div className='grid gap-y-3'>
              <div className='flex gap-x-2 px-[14px]'> 
                  <ReactFlagsSelect
                      countries={["TR","US", "GB", "FR", "DE", "IT"]}
                      customLabels={{ US: "+1", GB: "+44", FR: "+33", DE: "+49", IT: "+39" , TR: "+90"}}
                      onSelect={code => setSelected(code)}
                      selected={selected}
                      className='flag-select'
                  />
                  <label className='flex-1 relative block'>
                    <input required className=' peer text-base h-14 px-4 border-2 border-gray-200 bg-white rounded outline-none  transition-colors focus:border-primary-regal-blue hover:border-primary-regal-blue w-full'/>
                    <span className='absolute top-0 left-0 h-full flex items-center px-4 text-base  text-[#838287] peer-focus:text-xs peer-focus:h-6 peer-focus:text-primary-regal-blue  peer-valid:text-xs peer-valid:h-6 peer-valid:text-primary-regal-blue transition-all'>Telefon Numarası</span>
                  </label>
              </div>
              <button className='bg-button-yellow text-primary-regal-blue h-12 flex items-center w-[375px]  ml-3 justify-center font-medium rounded hover:bg-primary-regal-blue hover:text-button-yellow transition-colors'>
                Telefon numarası ile devam et 
              </button>
              </div>
          </div>
    </div>
  </div>
  )
}

export default HeroSection