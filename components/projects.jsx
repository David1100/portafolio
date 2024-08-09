"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import '../app/style.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function Sliderprojects() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                centeredSlides={false}
                navigation={true}
                loop={true}
                modules={[Navigation]}
                breakpoints={{
                    769: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide className='relative cursor-pointer group'>
                    <Link href={'https://web-wmsas.vercel.app/'} target='_blank'> <div className='bg-[#00000091] group-hover:bg-transparent w-full h-full absolute transition-colors duration-300 ease-in-out'></div>
                        {/* <h1 className='absolute left-6 bottom-7 lg:text-2xl text-ba text-gray-300 font-semibold group-hover:text-gray-200'>GRAPHICON</h1> */}

                        <img src="/imagenes/projects/project_01.png" /></Link></SwiperSlide>
                <SwiperSlide className='relative cursor-pointer group'>
                    <Link href={'https://proyectobitacoranextjs-david1100s-projects.vercel.app/'} target='_blank'><div className='bg-[#00000091] group-hover:bg-transparent w-full h-full absolute transition-colors duration-300 ease-in-out'></div>
                        {/* <h1 className='absolute left-6 bottom-7 lg:text-2xl text-ba text-gray-300 font-semibold group-hover:text-gray-200'>PARASOL RETRACTIL</h1> */}

                        <img src="/imagenes/projects/project_02.png" /></Link> </SwiperSlide>
                <SwiperSlide className='relative cursor-pointer group'>
                    <Link href={'https://parasolesmontagut.vercel.app/'} target='_blank'><div className='bg-[#00000091] group-hover:bg-transparent w-full h-full absolute transition-colors duration-300 ease-in-out'></div>
                        {/* <h1 className='absolute left-6 bottom-7 lg:text-2xl text-ba text-gray-300 font-semibold group-hover:text-gray-200'>PARASOL RETRACTIL</h1> */}

                        <img src="/imagenes/projects/project_03.png" /></Link></SwiperSlide>
                <SwiperSlide className='relative cursor-pointer group'>
                    <Link href={'https://cu4rtoproducciones.com/'} target='_blank'><div className='bg-[#00000091] group-hover:bg-transparent w-full h-full absolute transition-colors duration-300 ease-in-out'></div>
                        {/* <h1 className='absolute left-6 bottom-7 lg:text-2xl text-ba text-gray-300 font-semibold group-hover:text-gray-200'>PARASOL RETRACTIL</h1> */}

                        <img src="/imagenes/projects/project_04.png" /></Link></SwiperSlide>
                <SwiperSlide className='relative cursor-pointer group'>
                    <Link href={'https://ofaibucaramanga.org/'} target='_blank'><div className='bg-[#00000091] group-hover:bg-transparent w-full h-full absolute transition-colors duration-300 ease-in-out'></div>
                        {/* <h1 className='absolute left-6 bottom-7 lg:text-2xl text-ba text-gray-300 font-semibold group-hover:text-gray-200'>PARASOL RETRACTIL</h1> */}

                        <img src="/imagenes/projects/project_05.png" /></Link></SwiperSlide>
                <SwiperSlide className='relative cursor-pointer group'>
                    <Link href={'https://www.sexualmente.com.co/'} target='_blank'><div className='bg-[#00000091] group-hover:bg-transparent w-full h-full absolute transition-colors duration-300 ease-in-out'></div>
                        {/* <h1 className='absolute left-6 bottom-7 lg:text-2xl text-ba text-gray-300 font-semibold group-hover:text-gray-200'>PARASOL RETRACTIL</h1> */}

                        <img src="/imagenes/projects/project_06.png" /></Link></SwiperSlide>

            </Swiper>
        </>
    );
}

