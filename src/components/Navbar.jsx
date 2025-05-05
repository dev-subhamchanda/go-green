import React, { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);  // Toggle the mobile menu state
    };

    return (
        <nav className="bg-emerald-600 bg-opacity-80 text-white shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold">Go Green</div>
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    <a href="/" className="hover:text-green-400 font-medium">
                        Home
                    </a>
                    <a href="/gallery" className="hover:text-green-400 font-medium">
                        Gallery
                    </a>
                    <a
                        href="#plantation"
                        className="text-gray-400 cursor-not-allowed"
                        onClick={(e) => e.preventDefault()}
                    >
                        Plantation
                    </a>
                    <a href="/about-developer" className="hover:text-green-400 font-medium">
                        About Developer
                    </a>
                    <a href="/contact" className="hover:text-green-400 font-medium">
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        id="menu-btn"
                        className="text-white focus:outline-none focus:ring-2 focus:ring-green-300"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - This dropdown only appears when isMobileMenuOpen is true */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-emerald-600 bg-opacity-80 text-white">
                    <a href="/" className="block px-4 py-2 hover:bg-green-500">
                        Home
                    </a>
                    <a href="/gallery" className="block px-4 py-2 hover:bg-green-500">
                        Gallery
                    </a>
                    <a
                        href="#plantation"
                        className="block px-4 py-2 text-gray-400 cursor-not-allowed"
                        onClick={(e) => e.preventDefault()}
                    >
                        Plantation
                    </a>
                    <a href="/about-developer" className="block px-4 py-2 hover:bg-green-500">
                        About Developer
                    </a>
                    <a href="/contact" className="block px-4 py-2 hover:bg-green-500">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
