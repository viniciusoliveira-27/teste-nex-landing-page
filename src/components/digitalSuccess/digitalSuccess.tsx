import React from 'react'

const DigitalSuccessSection: React.FC = () => {
    return (
        <section className="font-sans bg-gray-50 py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Coluna Esquerda */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="text-sm font-semibold text-gray-500 tracking-widest mb-4">WHAT SETS US APART</p>
                            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
                                Driving Digital Success With Strategy Design
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We Believe That The Surest Measure Of Success Is When Our Partners With Us More Than Half It's More Than Just The Visuals.
                            </p>
                        </div>
                        <div className="mt-4">
                            <img
                                src="/images/image 2.svg"
                                alt="Team collaborating on a laptop"
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Coluna Direita */}
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-3 gap-6 items-start">
                            {/* Imagem 1 - menor */}
                            <div className="col-span-2">
                                <img
                                    src="/images/image 1.svg"
                                    alt="People in a modern office"
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                                {/* Texto abaixo da imagem */}
                                <div className="mt-4">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Conduct thorough market research to the fast target audience behaviours. Submit as many design tasks
                                    </p>
                                </div>
                            </div>

                            {/* Terceira coluna - textos à direita da imagem 1 */}
                            <div className="flex flex-col gap-4 text-sm text-gray-600">
                                <p className="leading-relaxed">
                                    We Believe That The Surest Measure Of Success Is When Our Partners With Us More Than Half It's More Than Just The Visuals. We're Here To Support Your Growth.
                                </p>
                                <p className="leading-relaxed">
                                    We Believe That The Surest Measure Of Success Is When Our Partners With Us More Than Half It's More Than Just The Visuals.
                                </p>
                            </div>
                        </div>

                        {/* Seção Our Mission e Contact Us */}
                        <div className="grid grid-cols-2 gap-8 items-start">
                            <div className="flex justify-center">
                                <button className="w-28 h-28 rounded-full border-2 border-gray-300 flex items-center justify-center text-center text-gray-800 font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300 text-sm">
                                    Contact Us
                                </button>
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl text-gray-800 mb-4">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Conduct thorough market research to the fast target audience behaviours.
                                </p>
                            </div>

                        </div>

                        {/* Cards "Marketing Strategy" e "UX/UI Solution" (Corrigidos) */}
                        <div className="grid sm:grid-cols-4 gap-6">
                            <div className="relative bg-lime-300 text-black p-6 rounded-2xl overflow-hidden flex items-center col-start-3">
                                <div className="z-10">
                                    <h4 className="font-bold">Marketing</h4>
                                    <h4 className="font-bold">Strategy</h4>
                                </div>
                                <img src="https://placehold.co/150x150/000000/FFFFFF?text=UI" className="absolute -bottom-5 -right-5 w-24 h-24 opacity-10 rounded-full" alt="UI element" />
                            </div>
                            <div className="relative bg-lime-300 text-black p-6 rounded-2xl overflow-hidden flex items-center">
                                <div className="z-10">
                                    <h4 className="font-bold">UX/UI</h4>
                                    <h4 className="font-bold">Solution</h4>
                                </div>
                                <img src="https://placehold.co/150x150/000000/FFFFFF?text=UX" className="absolute -bottom-5 -right-5 w-24 h-24 opacity-10 rounded-full" alt="UX element" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalSuccessSection;