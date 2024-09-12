'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    '/image1.png',
    '/image2.png',
    '/image3.png', 
];

const SliderComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval); 
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000, // 2 seconds
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <Card className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto my-8 shadow-lg bg-gradient-to-r from-blue-300 via-purple-300 to-green-200 sm:mt-20 overflow-hidden">
                <CardHeader className="items-center">
                    <CardTitle className="text-3xl font-semibold">Food Recipes</CardTitle>
                    <CardDescription>Enjoy the recipes that we provide!</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    <Slider {...settings}>
                        {images.map((src, index) => (
                            <div key={index} className="flex justify-center">
                                <Image
                                    src={src}
                                    width={600}
                                    height={600}
                                    className="rounded-md border-4 border-gray-300"
                                    alt={`Food image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </Slider>
                </CardContent>
                <CardFooter className="text-center">
                    <p>We are providing the best recipes for you to try at home!</p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default SliderComponent;
