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
    { name: 'Client eight', logo: '/image/15.png' },
    { name: 'Client nine', logo: '/image/16.png' },
    { name: 'Client ten', logo: '/image/17.jpg' },
    { name: 'Client eleven', logo: '/image/19.png' },
    { name: 'Client twelve', logo: '/image/20.png' },
    { name: 'Client thirteen', logo: '/image/34.png' },
];

// Duplicate the list for seamless looping
const allClients = [...clients, ...clients];

export default function ClientSection() {
    return (
        <section className="bg-white py-16 overflow-hidden">
            <h2 className="text-4xl mb-10 text-center">
                Our Trusted Partnerships: <br />
                Redefining Your Experience with Global Brands
            </h2>
            <div className="w-full overflow-hidden relative">
                <div className="flex animate-scroll whitespace-nowrap">
                    {allClients.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-1/5 flex justify-center items-center p-4"
                        >
                            <div className="w-24 h-24">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={96}
                                    height={96}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
