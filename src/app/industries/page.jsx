"use client";

import { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import bg from '../../../public/image/testi-banner.png';
import Image from 'next/image';
import Industries from "../components/Industries";

function Banner() {
    return (
        <section className="bg-blue-600 text-white py-20 px-6 text-center"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <h1 className="text-5xl font-bold mb-4">Industries We Serve</h1>
            <p className="max-w-3xl mx-auto text-lg">
                We provide tailored staffing solutions across diverse industries, helping businesses hire the right talent to drive growth, innovation, and success.
            </p>
        </section>
    );
}


export default function AboutPage() {
    return (
        <>
            <Header />
            <Banner />
            <Industries />
            <Footer />
        </>
    );
}
