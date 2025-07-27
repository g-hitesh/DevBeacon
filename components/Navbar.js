'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className=' sticky top-0 pt-5' >
            <nav className="w-[80vw] mx-auto z-50  transition-all duration-300 opacity-[0.9] bg-[#fdfdfd]  backdrop-blur-3xl rounded-full shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Logo and primary navigation */}
                        <div className="flex items-center justify-between">
                            <div className="flex-shrink-0 flex items-center">
                                <Link href="/" className="flex items-center">
                                    <div className="h-8 w-8 mr-2 relative">
                                        {/* Replace with your logo */}
                                        <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                            DB
                                        </div>
                                    </div>
                                    <span className="text-xl font-bold text-gray-900 ">DevBeacon</span>
                                </Link>
                            </div>

                            {/* Desktop Navigation Links */}
                            <div className="hidden md:ml-6 md:flex md:space-x-4">
                                <Link href="/explore" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600  ">
                                    Explore
                                </Link>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
                            <div className="w-full">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-100   text-gray-900  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Search articles, people, and tags"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="md:flex">
                                <Link href="/signIn" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    SignIn
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}