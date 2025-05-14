'use client';
import CountUp from 'react-countup';
import bg from '../../../public/image/counter-bg.webp'

const stats = [
    { end: 35, suffix: '+', title: 'Industries Served', desc: 'With our deep expertise in HR solutions, we help businesses across diverse industries streamline recruitment, workforce planning, and talent management.' },
    { end: 1600, suffix: '+', title: 'Professionals Placed', desc: 'We connect top talent with the right opportunities, ensuring businesses hire skilled professionals who drive growth and success.' },
    { end: 3000, suffix: '+', title: 'Successful Hiring Solutions', desc: 'From bulk hiring to executive search, we have delivered thousands of tailored recruitment solutions that align with our clients’ workforce needs.' },
    { end: 500, suffix: '+', title: 'HR Processes Optimized', desc: 'We enhance HR efficiency by implementing strategic workforce solutions across operations and technology.' },
    { end: 5, prefix: '0', suffix: '+', title: 'Strategic Enterprise Partnerships', desc: 'Collaborating with businesses as a trusted partner to develop scalable, long-term talent solutions.' },
];

export default function Counter() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
                {stats.map((item, id) => (
                    <div key={id} className="border-l px-4 py-6 hover:shadow-lg transition-shadow duration-300 hover:border-l-[3px] hover:border-[#209dd8]">
                        <h3 className="text-4xl text-blue-500 font-bold">
                            <CountUp
                                end={item.end}
                                duration={2}
                                prefix={item.prefix || ''}
                                suffix={item.suffix}
                            />
                        </h3>
                        <h4 className="text-lg  mt-2">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                    </div>
                ))}
                <div className="mt-1 bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between shadow-md"
                    style={{
                        backgroundImage: `url(${bg.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Ready to build a strong workforce?
                        </h3>
                        <p className="text-sm text-gray-600">
                            Partner with us and take your hiring to <br /> the next level.
                        </p>

                        <button className="mt-4 md:mt-2 bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition">
                            Partner With Us
                        </button>
                    </div>
                </div>
            </div>


        </section >
    );
}
