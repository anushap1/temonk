'use client';

export default function ContactSection() {
    return (
        <section className="bg-[#209dd8] text-white py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Text */}
                <div>
                    <h2 className="text-4xl  mb-4">Our Technology Experts<br /> Are Change <br /> Catalysts</h2>
                    <p className="text-lg">
                        Have questions or want to work with us? Reach out and our team will get back to you shortly.
                    </p>
                </div>

                {/* Right Side - Form */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Your Name*"
                            className="w-full border-b text-[#000] border-gray-300 focus:outline-none focus:border-[#209dd8] pb-2"
                        />
                        <input
                            type="email"
                            placeholder="Email Address*"
                            className="w-full border-b text-[#000] mt-4 border-gray-300 focus:outline-none focus:border-[#209dd8] pb-2"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number*"
                            className="w-full border-b text-[#000] mt-4 border-gray-300 focus:outline-none focus:border-[#209dd8] pb-2"
                        />
                        <textarea
                            rows={2}
                            className="w-full bg-transparent text-[#000] mt-4  border-b border-gray-300 focus:outline-none focus:border-[#209dd8] resize-none"
                            placeholder="Describe your requirement*"
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-8 w-full bg-[#209dd8] text-white py-2 rounded-md hover:bg-[#197ca9] transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
