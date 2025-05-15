'use client';

import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import logo from "../../../public/image/logo.png";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-12 px-6">
            <div className="max-w-7xl mx-auto mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Column 1: Logo & Contact */}
                <div>
                    <Image src={logo} alt="Temonk Logo" width={200} height={50} />
                    <div className="flex items-start mb-2 text-sm mt-5">
                        <MapPinIcon className="w-5 h-5 mr-2 mt-1 text-[#209dd8]" />
                        <p>G, 56/7, Laxmi Park Rd, Aman Puri, Block B, Lakshmi Park, Nangloi, Delhi, 110041</p>
                    </div>
                    <div className="flex items-center mb-2 text-sm py-3">
                        <PhoneIcon className="w-5 h-5 mr-2 text-[#209dd8]" />
                        <p>+91 82736 43002</p>
                    </div>
                    <div className="flex items-center text-sm">
                        <EnvelopeIcon className="w-5 h-5 mr-2 text-[#209dd8]" />
                        <p>contact@temonk.com</p>
                    </div>
                </div>

                {/* Column 2: Useful Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/">Home</Link></li>
                        <li className="py-2"><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li className="py-2"><Link href="/industries">Industries</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/services">Permanent Staffing</Link></li>
                        <li className="py-2"><Link href="/services">Background Checks</Link></li>
                        <li><Link href="/services">Payroll Processing</Link></li>
                        <li className="py-2"><Link href="/services">Facility Management</Link></li>
                        <li><Link href="/services">Compliance Management</Link></li>
                    </ul>
                </div>

                {/* Column 4: Industries */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Industries</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/industries">Healthcare</Link></li>
                        <li className="py-2"><Link href="/industries">IT</Link></li>
                        <li><Link href="/industries">FMCG</Link></li>
                        <li className="py-2"><Link href="/industries">Training</Link></li>
                        <li><Link href="/industries">Logistics</Link></li>
                    </ul>
                </div>
            </div>
            <hr className="border-gray-700" />

            <div className="text-center py-4 text-sm text-gray-400 py-3">
                © {new Date().getFullYear()} Temonk. All rights reserved.
            </div>
        </footer >
    );
}
