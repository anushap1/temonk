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
                        <p>123 Business Street, New Delhi, India</p>
                    </div>
                    <div className="flex items-center mb-2 text-sm py-3">
                        <PhoneIcon className="w-5 h-5 mr-2 text-[#209dd8]" />
                        <p>+91 9876543210</p>
                    </div>
                    <div className="flex items-center text-sm">
                        <EnvelopeIcon className="w-5 h-5 mr-2 text-[#209dd8]" />
                        <p>info@temonk.com</p>
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
                        <li>Permanent Staffing</li>
                        <li className="py-2">Background Checks</li>
                        <li>Payroll Processing</li>
                        <li className="py-2">Facility Management</li>
                        <li>Compliance Management</li>
                    </ul>
                </div>

                {/* Column 4: Industries */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Industries</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Healthcare</li>
                        <li className="py-2">IT</li>
                        <li>FMCG</li>
                        <li className="py-2">Training</li>
                        <li>Logistics</li>
                    </ul>
                </div>
            </div>
            <hr className="border-gray-700" />

            <div className="text-center py-4 text-sm text-gray-400 py-3">
                © {new Date().getFullYear()} Temonk. All rights reserved.
            </div>
        </footer>
    );
}
