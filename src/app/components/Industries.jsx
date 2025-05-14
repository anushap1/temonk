'use client';

import {
    BuildingOffice2Icon,
    BanknotesIcon,
    TruckIcon,
    ShoppingBagIcon,// For Healthcare
    CpuChipIcon,
    AcademicCapIcon       // For Training (more appropriate than ShoppingBagIcon)
} from '@heroicons/react/24/outline';

const industries = [
    { name: 'Manufacturing', icon: BuildingOffice2Icon },
    { name: 'Finance', icon: BanknotesIcon },
    { name: 'Logistics', icon: TruckIcon },
    { name: 'Retail & E-commerce', icon: ShoppingBagIcon },
    { name: 'Healthcare', icon: BuildingOffice2Icon },
    { name: 'IT', icon: CpuChipIcon },
    { name: 'FMCG', icon: TruckIcon },
    { name: 'Training', icon: AcademicCapIcon },
    // Add more as needed
];

export default function Industries() {
    return (
        <section className="py-16 px-6 bg-white">
            <h2 className="text-4xl mb-10 text-center">Industries We Serve</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {industries.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-[#209dd8] transition-all duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                <IconComponent className="w-10 h-10 text-[#209dd8] animate-spin" />
                            </div>
                            <h3 className="text-lg">{item.name}</h3>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
