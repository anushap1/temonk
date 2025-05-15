"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Right from "../../../public/image/banner-video.gif";
import bg from "../../../public/image/bg-video.gif";

const Banner = () => {
    return (
        <section
            className="w-full lg:min-h-screen py-16 px-4 sm:px-6"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-7xl mx-auto mt-5 flex flex-col md:flex-row items-center gap-10">
                {/* Left content */}
                <div className="flex-1 text-center md:text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white leading-tight">
                        We help you hire the<br /> right talent
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-3xl mb-4 mt-10 text-white">
                        We find the perfect candidate for your company who<br /> can help you achieve all your business goals.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-3xl mb-4 text-white">
                        We're serving all industries:
                    </p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                        <TypeAnimation
                            sequence={[
                                "FMCG",
                                2000,
                                "IT & Software Industry",
                                2000,
                                "Healthcare",
                                2000,
                                "Hospitality",
                                2000,
                                "Banking & Finances",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h3>
                </div>

                {/* Right Image (optional) */}
                {/* <div className="flex-1">
                    <Image
                        src={Right}
                        alt="Animated Demo"
                        width={500}
                        height={400}
                        className="mx-auto"
                    />
                </div> */}
            </div>
        </section>
    );
};

export default Banner;
