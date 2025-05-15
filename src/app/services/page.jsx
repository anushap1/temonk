"use client";


import Header from '../components/Header';
import Footer from '../components/Footer';
import bg from '../../../public/image/testi-banner.png';
import Image from 'next/image';
import whatwedoImg from "../../../public/image/img2.jpg";
import img1 from "../../../public/image/img.jpg";
import img2 from "../../../public/image/img3.jpg";


function Banner() {
    return (
        <section className="bg-blue-600 text-white py-20 px-6 text-center"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <h1 className="text-5xl font-bold mb-4">Services we offer</h1>
            <p className="max-w-3xl mx-auto text-lg">
                We are trusted by companies worldwide, having successfully placed top talent in critical roles across various industries. Our reputation for delivering effective staffing solutions is reflected in the fact that nearly 90% of our contract staffing clients return for further engagements with us.
            </p>
        </section>
    );
}

function ContractStaffing() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <Image
                        src={whatwedoImg}
                        alt="What We Do"
                        className="w-full  rounded"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-4xl text-gray-800 mb-4">Contract Staffing</h2>
                    <p className="text-lg text-gray-600">
                        Temonk Services provides tailored Contract Staffing solutions across a wide range of industry sectors, including Technology & Digital, Life Sciences, Healthcare, Retail, Consumer Packaged Goods (CPG), Oil & Gas, and Banking & Financial Services.

                        We specialize in connecting companies with the right talent for project-based roles and temporary assignments. Whether you need warehouse management experts, developers, engineers, or healthcare professionals, we efficiently match skilled individuals to meet your organization’s time-sensitive needs.

                        Our expertise extends to staffing for Technology, HR, Finance, Accounts, Legal, and other critical corporate functions. We also assist recent graduates in securing job opportunities that align with their career goals.

                    </p>
                </div>
            </div>
        </section>
    );
}
function PermanentHiring() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

                <div className="md:w-1/2">
                    <h2 className="text-4xl text-gray-800 mb-4">Permanent Hiring</h2>
                    <p className="text-lg text-gray-600">
                        At Temonk Services, we understand that hiring the right permanent talent is critical to your organization’s long-term success. Our Permanent Hiring solutions are designed to help you build a strong, stable workforce that aligns with your company’s culture, goals, and vision.

                        We specialize in sourcing pre-screened, high-caliber professionals across domains like Technology, Finance, HR, Sales, Marketing, Legal, and more. Whether you’re scaling a startup or strengthening an enterprise team, we ensure you get access to the best-fit candidates who are ready to contribute from day one.

                    </p>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src={img1}
                        alt="What We Do"
                        className="w-full  rounded"
                    />
                </div>
            </div>
        </section>
    );
}
function DigitalHiring() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <Image
                        src={img2}
                        alt="What We Do"
                        className="w-full rounded"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-4xl text-gray-800 mb-4">Digital Hiring</h2>
                    <p className="text-lg text-gray-600">
                        In today’s fast-evolving digital landscape, having the right tech talent is key to staying ahead. Temonk Services offers specialized Digital Hiring solutions to help you find and attract skilled professionals across the technology and digital ecosystem.

                        We connect organizations with experts in areas such as Software Development, Data Science, UI/UX Design, Cloud Computing, Cybersecurity, AI & ML, DevOps, and more. Our team understands the nuances of digital roles and leverages a vast network to deliver agile, future-ready talent.

                    </p>
                </div>
            </div>
        </section>
    );
}
function RecruitmentProcess() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

                <div className="md:w-1/2">
                    <h2 className="text-4xl text-gray-800 mb-4">Recruitment Process</h2>
                    <p className="text-lg text-gray-600">
                        At Temonk Services, we follow a structured and transparent recruitment process to ensure the right talent is matched with the right opportunity. Our approach is built on speed, quality, and precision:
                    </p>
                    <ol>
                        <li>
                            <strong>Understanding Client Needs :</strong>
                            We begin by understanding your business goals, company culture, and specific job requirements to ensure alignment from day one.


                        </li>
                        <li><strong>Talent Sourcing :</strong>
                            Using a mix of job portals, social media, referrals, and our internal database, we identify and attract top-tier candidates across various domains.
                        </li>
                        <li>

                            <strong>Screening & Evaluation :</strong>
                            Each candidate goes through a rigorous screening process, including resume shortlisting, telephonic interviews, and skill assessments, to ensure the best fit.

                        </li>
                        <li>

                            <strong>Client Interview Coordination :</strong>
                            We coordinate interviews between the client and shortlisted candidates, ensuring smooth communication and timely feedback.


                        </li>
                        <li>
                            <strong>Offer Management & Follow-up :</strong>
                            Once a candidate is selected, we assist with offer negotiation, documentation, and onboarding support to ensure a seamless transition.

                        </li>
                        <li>
                            <strong>Post-Placement Support :</strong>
                            Our relationship doesn’t end at hiring. We stay in touch post-placement to ensure satisfaction for both clients and candidates.</li>
                    </ol>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src={whatwedoImg}
                        alt="What We Do"
                        className="w-full rounded"
                    />
                </div>
            </div>
        </section>
    );
}
export default function ServicesPage() {
    return (
        <>
            <Header />
            <Banner />
            <ContractStaffing />
            <PermanentHiring />
            <DigitalHiring />
            <RecruitmentProcess />
            <Footer />
        </>
    );
}
