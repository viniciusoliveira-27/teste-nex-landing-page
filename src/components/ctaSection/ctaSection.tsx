const CtaSection: React.FC = () => {
    return (
        <section className="font-sans bg-[#111111] text-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
                    <div className="max-w-2xl">
                        <h2 className="font-serif text-5xl md:text-7xl leading-tight">Let's Create Something Great</h2>
                        <p className="mt-4 text-gray-400">We Shift You From Today's Reality To Tomorrow's Potential, Ensuring</p>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="relative w-40 h-40 bg-lime-400 rounded-full flex items-center justify-center text-black font-bold text-lg group">
                           <span className="transition-transform group-hover:scale-110">Let's Talk</span>
                           <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;