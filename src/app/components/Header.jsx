"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/image/logo.png"; // replace with your logo image path

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/blog", label: "Blog & News" },
    { href: "/contact", label: "Contact" },
];

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src={logo} alt="Temonk Logo" width={200} height={50} />
                </div>
                <nav className="space-x-6 text-md font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-3 py-2 ${pathname === link.href ? "bg-sky-600 text-white" : "hover:text-sky-400"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
