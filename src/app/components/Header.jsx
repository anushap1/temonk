'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // install lucide-react if needed
import logo from '../../../public/image/logo.png';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/contact', label: 'Contact' },
];

const Header = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Image src={logo} alt="Temonk Logo" width={150} height={40} />

                {/* Hamburger Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex space-x-6 text-md font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-3 py-2 ${pathname === link.href
                                ? 'bg-sky-600 text-white rounded'
                                : 'hover:text-sky-400'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden px-4 pb-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block py-2 px-3 rounded ${pathname === link.href
                                ? 'bg-sky-600 text-white'
                                : 'hover:text-sky-400'
                                }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
