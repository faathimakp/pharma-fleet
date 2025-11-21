"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@public/pf-logo-2.png";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#097969] text-white font-serif sticky top-0 z-[500]">
      <div className=" px-6 md:px-8 py-2 md:py-3 flex items-center justify-between">
        <Link href="/">
          {" "}
          <Image
            src={Logo}
            alt="pharmafleet Logo"
            className="h-12 w-36 md:w-52  md:h-16 object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-lg">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;

            return (
              <div key={index} className="relative">
                <Link
                  href={item.path}
                  className={`hover:text-white transition ${
                    isActive ? "text-white font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>

                {/* underline when active */}
                {isActive && (
                  <div className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white rounded" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#097969] text-white px-6 py-4 space-y-4">
          <Link
            href="/"
            className="block hover:text-green-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:text-green-200"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block hover:text-green-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
