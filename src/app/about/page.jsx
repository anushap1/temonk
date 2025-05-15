"use client";

import { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import bg from '../../../public/image/testi-banner.png';
import Image from 'next/image';
import teamImage from '../../../public/image/img.jpg';
import whatwedoImg from "../../../public/image/banner-video.gif";
import { Lightbulb, Target } from "lucide-react";
import { motion } from "framer-motion";

function Banner() {
    return (
        <section className="bg-blue-600 text-white py-20 px-6 text-center"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="max-w-3xl mx-auto text-lg">
                Learn more about our journey, mission, and what drives us every day to serve you better.
            </p>
        </section>
    );
}

function WhoWeAre() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative">
                <div className="bg-white p-8 shadow-lg rounded-lg z-10 md:w-1/2 relative md:-mr-16">
                    <h2 className="text-3xl mb-4">Who We Are</h2>
                    <p className="text-gray-600">
                        We are a passionate team of professionals committed to connecting the right talent with the right opportunities. With deep industry insights and personalized service, we help businesses grow through strategic hiring.
                        Our approach goes beyond simply filling positions—we aim to build long-term relationships with both our clients and candidates. We take the time to understand your company culture, goals, and challenges to deliver the best-fit talent for every role.
                    </p>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <Image
                        src={teamImage}
                        alt="Team"
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

function WhatWeDo() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <Image
                        src={whatwedoImg}
                        alt="What We Do"
                        className="w-full"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-4xl text-gray-800 mb-4">What We Do</h2>
                    <p className="text-lg text-gray-600">
                        We help organizations hire smarter and scale faster by offering end-to-end recruitment solutions.
                        Our services include permanent staffing, contract hiring, talent mapping, and industry-specific sourcing strategies tailored to meet your goals.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Permanent staffing</li>
                        <li>Contract hiring</li>
                        <li>Talent mapping</li>
                        <li>Industry-specific sourcing strategies</li>
                        <li>Customized recruitment plans aligned with business goals</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

function Vision() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Trigger animation on mount
        setVisible(true);
    }, []);

    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
                {/* Vision Card */}
                <div
                    className={`bg-white rounded-2xl p-6 shadow-md transition-transform transition-opacity duration-700
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
            hover:shadow-xl`}
                >
                    <div className="flex items-center mb-4">
                        <Lightbulb className="text-indigo-600 w-8 h-8 animate-bounce" />
                        <h2 className="text-xl font-semibold ml-3">Our Vision</h2>
                    </div>
                    <p className="text-gray-600">
                        To inspire progress and innovation by delivering top-tier solutions
                        with integrity and passion.
                    </p>
                </div>

                {/* Mission Card */}
                <div
                    className={`bg-white rounded-2xl p-6 shadow-md transition-transform transition-opacity duration-700
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
            hover:shadow-xl`}
                >
                    <div className="flex items-center mb-4">
                        <Target className="text-green-600 w-8 h-8 animate-spin-slow" />
                        <h2 className="text-xl font-semibold ml-3">Our Mission</h2>
                    </div>
                    <p className="text-gray-600">
                        To empower clients by providing efficient, customized, and scalable
                        solutions through expert consultancy and innovation.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default function AboutPage() {
    return (
        <>
            <Header />
            <Banner />
            <WhoWeAre />
            <WhatWeDo />
            <Vision />
            <Footer />
        </>
    );
}
