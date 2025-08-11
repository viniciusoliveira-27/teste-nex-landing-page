import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="font-sans bg-white text-gray-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
                    <div className="flex gap-6 text-sm font-medium">
                        <a href="#" className="hover:text-black">About Company</a>
                        <a href="#" className="hover:text-black">Our Careers</a>
                        <a href="#" className="hover:text-black">Services</a>
                        <a href="#" className="hover:text-black">Contact</a>
                    </div>
                    <div className="flex gap-6 text-sm font-medium">
                        <a href="#" className="hover:text-black">Privacy Policy</a>
                        <a href="#" className="hover:text-black">Terms & Conditions</a>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm order-2 md:order-1">&copy; Copyright {new Date().getFullYear()} Nex. All Rights Reserved.</p>
                    <div className="flex gap-4 order-1 md:order-2">
                        <a href="#" className="hover:text-black"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.8.35-1.65.58-2.5.68.9-.54 1.6-1.4 1.92-2.4- .84.5-1.78.86-2.78 1.06C18.26 4.3 17.1 4 15.86 4c-2.4 0-4.35 1.95-4.35 4.35 0 .34.04.67.12 1-3.6-.18-6.8-1.9-8.94-4.52-.37.64-.58 1.38-.58 2.18 0 1.5.76 2.82 1.92 3.6- .7-.02-1.36-.22-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.15-1.14.15-.28 0-.55-.03-.82-.08.55 1.72 2.15 2.98 4.04 3.02-1.48 1.16-3.36 1.85-5.4 1.85-.35 0-.7-.02-1.04-.06 1.92 1.24 4.2 1.95 6.66 1.95 8 0 12.38-6.62 12.38-12.38 0-.19 0-.38-.01-.57.85-.62 1.58-1.4 2.16-2.24z"></path></svg></a>
                        <a href="#" className="hover:text-black"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.5 18.5h-3v-9h3v9zm-1.5-10c-.96 0-1.75-.79-1.75-1.75S6.04 5 7 5s1.75.79 1.75 1.75S7.96 8.5 7 8.5zm11 10h-3v-4.5c0-1.07-.02-2.44-1.5-2.44-1.5 0-1.73 1.17-1.73 2.36V18.5h-3v-9h2.88v1.32h.04c.4-.76 1.37-1.54 2.84-1.54 3.03 0 3.59 1.99 3.59 4.58V18.5z"></path></svg></a>
                        <a href="#" className="hover:text-black"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2zm0 8h2v2h-2z"></path></svg></a>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;