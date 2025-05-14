"Use Client"

import bg from '../../../public/image/our-services-cta.webp';
import {
    BriefcaseIcon,
    ShieldCheckIcon,
    CloudIcon,
    BuildingOfficeIcon,
    UsersIcon,
    CreditCardIcon,
    ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
// components/OurServices.tsx

const services = [
    { title: "Permanent Staffing Solutions", icon: BriefcaseIcon },
    { title: "Background Checks and Verification", icon: ShieldCheckIcon },
    { title: "HRMS and Payroll On Cloud", icon: CloudIcon },
    { title: "Facility Management & Security Services", icon: BuildingOfficeIcon },
    { title: "Flexi and IT Staffing Solutions", icon: UsersIcon },
    { title: "Payroll Processing", icon: CreditCardIcon },
    { title: "Compliance Management", icon: ClipboardDocumentCheckIcon },
];

export default function Services() {
    return (
        <section className="px-6 py-16 bg-white">
            <h2 className="text-4xl  text-left mb-10">
                Empower Your Workforce With Our HR<br /> Consulting Expertise
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {services.map(({ title, icon: Icon }, i) => (
                    <div
                        key={i}
                        className="bg-white border-1 border-white rounded-xl p-10 shadow-sm hover:shadow-xl hover:border-[1px] hover:border-[#209dd8] transition-all duration-300"
                    >
                        {/* Animated Icon */}
                        <div className="mb-4">
                            <Icon className="w-8 h-8 text-[#209dd8] animate-bounce" />
                        </div>
                        <h3 className="text-2xl  mb-3">{title}</h3>
                        <p className="text-md text-gray-600 leading-relaxed">
                            We build intuitive, responsive mobile apps tailored to meet your
                            specific business needs and enhance user engagement.
                        </p>
                    </div>
                ))}
                {/* Blue CTA Card */}
                <div className="bg-[#209dd8] text-white rounded-xl flex items-center justify-center p-6"
                    style={{
                        backgroundImage: `url(${bg.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <button className="bg-white text-[#000] text-sm px-3 py-2 rounded shadow hover:shadow-md transition hover:text-[#209dd8]">
                        Our Services
                    </button>
                </div>
            </div>
        </section>
    );
}
