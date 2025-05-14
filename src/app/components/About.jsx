"use client";

const About = () => {
    return (
        <section className="w-full py-16 px-6"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 h-100">
                {/* Left content */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text7xl font-bold mb-4">
                        Empowering Businesses With Smart HR Solutions
                    </h2>
                    <p className="text-xl mb-6">
                        Temonk Services is committed to transforming the hiring landscape with tailored recruitment and workforce management solutions. We specialize in IT and Non-IT hiring, bulk recruitment, and vendor empanelment, ensuring businesses find the right talent efficiently. Our expertise spans multiple industries, streamlining hiring processes to enhance workforce productivity. With a client-centric approach and deep industry knowledge , we help organizations build skilled, high-performing teams that drive success.
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex-1">
                    <video
                        src="/image/demo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-120 rounded"
                    ></video>

                </div>
            </div>
        </section>
    );
};

export default About;
