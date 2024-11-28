"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-black/30 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#4ADE80]">
              DebtDive
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/features" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                Pricing
              </Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                Dashboard
              </Link>
              <button className="bg-[#4ADE80] hover:bg-[#22c55e] text-black px-4 py-2 rounded-lg transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
