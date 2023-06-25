'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { slider } from '@/utils/resources/data';
import Link from 'next/link';
import {AiOutlineArrowRight} from 'react-icons/ai'
import Button from '../button/Button';

const Slider = () => {
	return (
		<div>
			<Swiper
				rewind={true}
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
				pagination={{
					clickable: true
				}}
				navigation={true}
				modules={[  Pagination, Navigation,Autoplay ]}
				className="mySwiper"
			>
				{slider.map((item, index) => (
					<SwiperSlide key={index}>
						<div
							className="h-[610px] bg-gray-300 flex justify-center items-center flex-col gap-5"
							style={{
								backgroundImage: `url(${item.image.src})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
                                backgroundBlendMode: 'multiply'
							}}
						>
                            <p className='text-stone-100 md:text-lg text-base uppercase font-semibold tracking-widest'>{item.title}</p>
                            <h1 className='text-stone-200 font-bold md:text-7xl text-5xl uppercase max-w-4xl text-center md:leading-[84px] leading-[62px]'>{item.heading}</h1>
                            <p className='text-stone-200 text-lg'>{item.subtitle}</p>
							<Button title="Shop Collection" url="shop" color={"text-stone-100"}/>
                        </div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
