"use client";

import { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import bg from '../../../public/image/testi-banner.png';
import Image from 'next/image';
import ContactSection from "../components/Contact";

function Banner() {
    return (
        <section className="bg-blue-600 text-white py-20 px-6 text-center"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="max-w-3xl mx-auto text-lg">
                We’re here to help you with your hiring needs or career goals. Reach out to us today — our team will respond promptly and professionally.
            </p>
        </section>
    );
}


export default function AboutPage() {
    return (
        <>
            <Header />
            <Banner />
            <ContactSection />
            <Footer />
        </>
    );
}
