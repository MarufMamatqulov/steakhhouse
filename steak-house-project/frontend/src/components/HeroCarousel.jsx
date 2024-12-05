import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: "Welcome to The Ultimate Steak House!",
            subtitle: "SUPER DELICIOUS, Steaks!",
            description:
                "Savor the finest cuts of meat, expertly grilled to perfection, with flavors that melt in your mouth, and love poured into every dish.",
            image: "https://cdn.builder.io/api/v1/image/assets/0e60d26ffe404316aa35b6241738714a/2aef3bcfb0815b747c3a227d3446356a867ed057a3dc64611cb17077a9f8435e?apiKey=0e60d26ffe404316aa35b6241738714a&",
        },
        {
            title: "Steak Perfection Awaits!",
            subtitle: "SUPER DELICIOUS, Exquisite Steaks!",
            description:
                "Experience a journey of taste with every bite. Our steaks are handpicked, aged to perfection, and grilled to deliver an unforgettable flavor.",
            image: "/header1.png",
        },
        {
            title: "Indulge in Steak Bliss!",
            subtitle: "Juicy, Tender, and Irresistible Steaks!",
            description:
                "Let the sizzle on the grill ignite your senses. Our steaks are more than just a meal; they are an experience crafted with passion and care.",
            image: "/header3.png",
        }
    ];

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
    };

    const subtitleVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <main className="px-9 my-5 pt-14 pb-4 max-w-full rounded-3xl mx-auto bg-white bg-opacity-50 shadow-[0px_0px_10px_rgba(0,0,0,0.25)] w-full max-md:px-5">
            <motion.section
                initial="hidden"
                animate="visible"
                className="flex gap-5 max-md:flex-col"
            >
                <article className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start mt-2.5 text-sm text-neutral-700 max-md:mt-10 max-md:max-w-full">
                        <motion.h2
                            className="font-semibold tracking-widest leading-none uppercase max-md:ml-1"
                            variants={textVariants}
                        >
                            {slides[currentSlide].title}
                        </motion.h2>

                        <motion.h1
                            className="self-stretch text-left mt-2 text-6xl font-black uppercase leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-10"
                            variants={textVariants}
                        >
                            <motion.span
                                className="font-extrabold"
                                variants={subtitleVariants}
                            >
                                {slides[currentSlide].subtitle.split(",")[0]},{" "}
                            </motion.span>
                            <motion.span
                                className="font-extrabold text-amber-400"
                                variants={subtitleVariants}
                            >
                                {slides[currentSlide].subtitle.split(",")[1]}
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="mt-1.5 font-light text-lg text-left leading-6 text-neutral-500 max-md:max-w-full"
                            variants={textVariants}
                        >
                            {slides[currentSlide].description}
                        </motion.p>
                    </div>
                </article>

                <aside className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                    <motion.img
                        loading="lazy"
                        key={currentSlide}
                        src={slides[currentSlide].image}
                        alt="Delicious steak presentation"
                        className="object-contain w-full h-80 aspect-[1.46] max-md:mt-10 max-md:max-w-full"
                        variants={imageVariants}
                    />
                </aside>
            </motion.section>

            <div className="flex justify-center mt-4">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 mx-1 rounded-full cursor-pointer transition-all ${
                            index === currentSlide ? "bg-amber-400 scale-125" : "bg-amber-100"
                        }`}
                    />
                ))}
            </div>
        </main>
    );
};

export default HeroCarousel;
