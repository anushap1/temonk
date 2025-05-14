"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Right from "../../../public/image/banner-video.gif";
import bg from "../../../public/image/bg-video.gif";

const Banner = () => {
    return (
        <section className="w-full py-16 px-6"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 h-100">
                {/* Left content */}
                <div className="flex-1 text-center md:text-center">
                    <h1 className="text-7xl md:text7xl font-bold mb-4 text-white">
                        We help you hire right talent
                    </h1>
                    <p className="text-3xl mb-6 text-white">
                        We find the perfect candidate for your company who can help you achieving all the business goals
                    </p>
                    <p className="text-3xl mb-6 text-white">
                        We're serving for all industries:
                    </p>
                    <h3 className="text-3xl md:text-3xl font-bold mb-4 text-white">
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
                    {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
                        Get Started
                    </button> */}
                </div>

                {/* Right Image */}
                {/* <div className="flex-1">
                    <Image
                        src={Right} // ✅ place your gif in public/your-animation.gif
                        alt="Animated Demo"
                        width={500}
                        height={400}
                    />
                </div> */}
            </div>
        </section>
    );
};

export default Banner;
