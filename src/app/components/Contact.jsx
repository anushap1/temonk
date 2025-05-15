'use client';

import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('Thank you! Your message has been sent.');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setStatus('An error occurred. Please try later.');
        }
    };

    return (
        <section className="bg-[#209dd8] text-white py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Text */}
                <div>
                    <h2 className="text-4xl mb-4">Our Technology Experts<br /> Are Change <br /> Catalysts</h2>
                    <p className="text-lg">
                        Have questions or want to work with us? Reach out and our team will get back to you shortly.
                    </p>
                </div>

                {/* Right Side - Form */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name*"
                            required
                            className="w-full border-b text-[#000] border-gray-300 focus:outline-none focus:border-[#209dd8] pb-2"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address*"
                            required
                            className="w-full border-b text-[#000] mt-4 border-gray-300 focus:outline-none focus:border-[#209dd8] pb-2"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number*"
                            required
                            className="w-full border-b text-[#000] mt-4 border-gray-300 focus:outline-none focus:border-[#209dd8] pb-2"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={2}
                            required
                            className="w-full bg-transparent text-[#000] mt-4 border-b border-gray-300 focus:outline-none focus:border-[#209dd8] resize-none"
                            placeholder="Describe your requirement*"
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-8 w-full bg-[#209dd8] text-white py-2 rounded-md hover:bg-[#197ca9] transition"
                        >
                            Submit
                        </button>
                        {status && <p className="text-sm mt-2 text-black">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
