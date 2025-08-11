import React from 'react';

interface WorkStepData {
    step: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const HowWeWorkSection: React.FC = () => {
    const workSteps: WorkStepData[] = [
        {
            step: "01",
            title: "Research and Strategy",
            description: "Conduct thorough market of the research to the last target audience behaviors. Submit as many design tasks.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.5 13.5l2-2m9 2l-2-2m-5 5v-9a2 2 0 012-2h2a2 2 0 012 2v9m-6 0h6m-6 0a2 2 0 00-2 2v1h10v-1a2 2 0 00-2-2z"></path></svg>
        },
        {
            step: "02",
            title: "Plan Customization",
            description: "Conduct thorough market of the research to the last target audience behaviors. Submit as many design tasks.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        },
        {
            step: "03",
            title: "Finished & User Testing",
            description: "Conduct thorough market of the research to the last target audience behaviors. Submit as many design tasks.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 1l4 4-4 4"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 11V9a4 4 0 014-4h10"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 23l-4-4 4-4"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13v2a4 4 0 01-4 4H7"></path></svg>
        }
    ];

    return (
        <section className="font-sans bg-white">
            <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/e2e8f0/e2e8f0')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <button className="w-24 h-24 bg-white bg-opacity-90 rounded-full flex flex-col items-center justify-center text-gray-800 font-semibold text-sm shadow-lg transition-transform hover:scale-110">
                        <svg className="w-8 h-8 mb-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4.018 15.132A1 1 0 005 16h10a1 1 0 00.982-.868l1-4A1 1 0 0016 10H4a1 1 0 00-.982 1.132l1 4zM3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                        PLAY VIDEO
                    </button>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-gray-500 tracking-widest mb-2">WORKFLOW</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-900">How We Work</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 items-start relative">
                    {workSteps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center">
                            {index < workSteps.length - 1 && (
                                <div className="absolute top-10 left-1/2 w-full hidden md:block">
                                    <svg className="w-full h-6 text-gray-500" fill="none" viewBox="0 0 100 20">
                                        <path d="M0 10 L100 10" stroke="currentColor" strokeWidth="3" strokeDasharray="4 4" />
                                        <path d="M95 5 l5 5 -5 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>
                            )}
                            <div className="relative z-10 w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center bg-white mb-4">
                                {step.icon}
                            </div>
                            <h3 className="font-serif text-xl text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default HowWeWorkSection;