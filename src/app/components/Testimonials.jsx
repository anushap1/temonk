'use client';
import { useRef } from 'react';
import bg from '../../../public/image/background-2.jpg'

const testimonials = [
    {
        id: 1,
        videoSrc: '/image/testi.mp4',
        poster: '/image/tourist-testimonial-poster.webp',
        name: 'Amit Sharma',
        role: 'CEO, HR Solutions',
    },
    {
        id: 2,
        videoSrc: '/image/testi.mp4',
        poster: '/image/tourist-testimonial-poster.webp',
        name: 'Priya Mehta',
        role: 'HR Manager, FinCorp',
    },
    {
        id: 3,
        videoSrc: '/image/testi.mp4',
        poster: '/image/tourist-testimonial-poster.webp',
        name: 'Ravi Verma',
        role: 'Recruitment Lead, TechBiz',
    },
    {
        id: 4,
        videoSrc: '/image/testi.mp4',
        poster: '/image/tourist-testimonial-poster.webp',
        name: 'Sneha Patel',
        role: 'Talent Partner, StartX',
    },
];

export default function Testimonial() {
    const videoRefs = useRef([]);

    const handleMouseEnter = (index) => {
        const video = videoRefs.current[index];
        video.muted = true;
        video.play();
    };

    const handleMouseLeave = (index) => {
        const video = videoRefs.current[index];
        video.pause();
        video.currentTime = 0;
    };

    return (
        <section className="py-16 px-6 bg-gray-100"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <h2 className="text-4xl mb-10 text-center">
                What Our Clients Say
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {testimonials.map((item, index) => (
                    <div
                        key={item.id}
                        className={`rounded-xl overflow-hidden transition-all  p-4 ${index % 2 !== 0 ? 'mt-10' : ''
                            }`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={item.videoSrc}
                            poster={item.poster}
                            muted
                            playsInline
                            className="w-full h-100 object-cover rounded-md"
                        />
                        <div className="mt-4 text-center">
                            <h3 className="text-lg">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
