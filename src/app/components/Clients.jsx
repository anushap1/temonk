'use client';

import Image from 'next/image';

const clients = [
    { name: 'Client One', logo: '/image/temonk-1.png' },
    { name: 'Client Two', logo: '/image/temonk-2.png' },
    { name: 'Client Three', logo: '/image/temonk-3.jpg' },
    { name: 'Client Four', logo: '/image/temonk-5.jfif' },
    { name: 'Client Five', logo: '/image/temonk-6.png' },
    { name: 'Client Six', logo: '/image/temonk-7.png' },
    { name: 'Client Seven', logo: '/image/temonk-5.png' },
];

export default function ClientSection() {
    return (
        <section className="bg-white py-16 px-6">
            <h2 className="text-4xl  mb-10 text-center">
                Our Trusted Partnerships: <br />Redefining Your Experience with Global Brands
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-8 items-center justify-center">
                {clients.map((client, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 rounded-xl"
                    >
                        <div className="w-24 h-24 mb-2 animate-spin-slow">
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={96}
                                height={96}
                                className="object-contain w-full h-full grayscale hover:grayscale-0 transition duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
