"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HiMenu, HiChevronDown } from "react-icons/hi";
import { HiPhone, HiMail } from "react-icons/hi";
import { NAVIGATION, CONTACT_INFO } from "@/utils/constants";
import { cn } from "@/lib/utils";
import Logo from "../base/Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isActiveDropdown = (item) => {
    if (!item.dropdown) return isActiveLink(item.href);
    return (
      isActiveLink(item.href) ||
      item.dropdown.some((sub) => pathname.startsWith(sub.href))
    );
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-[#101727] text-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center space-x-2 hover:text-sky-400 transition-colors"
              >
                <HiPhone className="w-4 h-4" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-2 hover:text-sky-400 transition-colors"
              >
                <HiMail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
            <span className="text-gray-300">{CONTACT_INFO.hours.weekdays}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky -top-1 z-50 w-full transition-all duration-300 border-b bg-white border-gray-200"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 h-16 items-center">
            <Logo />

            {/* Desktop Nav — centered */}
            <nav className="hidden md:flex items-center justify-center space-x-8 col-start-2">
              {NAVIGATION.main.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors relative after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-sky-400 after:to-blue-600 after:transition-all after:duration-300 hover:after:w-full text-gray-800 hover:text-blue-600",
                        isActiveDropdown(item)
                          ? "text-blue-600 after:w-full font-semibold"
                          : ""
                      )}
                    >
                      {item.name}
                      <HiChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isServicesOpen ? "rotate-180" : ""
                        )}
                      />
                    </Link>

                    {/* Dropdown Panel */}
                    <div
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200",
                        isServicesOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1"
                      )}
                    >
                      <div className="w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.key}
                            href={sub.href}
                            className={cn(
                              "block px-5 py-2.5 text-sm transition-colors",
                              isActiveLink(sub.href)
                                ? "text-blue-600 bg-sky-50 font-semibold"
                                : "text-gray-700 hover:text-blue-600 hover:bg-sky-50"
                            )}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors relative after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-sky-400 after:to-blue-600 after:transition-all after:duration-300 hover:after:w-full text-gray-800 hover:text-blue-600",
                      isActiveLink(item.href)
                        ? "text-blue-600 after:w-full font-semibold"
                        : isScrolled
                        ? ""
                        : "text-gray-800 hover:text-blue-600"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* Get Quote — right aligned */}
            <div className="hidden md:flex justify-end col-start-3">
              <Button
                asChild
                className="bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white font-semibold shadow-md"
              >
                <Link href="/contact-us">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden justify-self-end">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "p-2 rounded-md transition-colors text-gray-700 hover:text-blue-600",
                  isScrolled ? "" : "text-gray-700 hover:text-blue-600"
                )}
              >
                <HiMenu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 border-t pt-4 pb-6 space-y-1 bg-white shadow-md rounded-lg">
              {NAVIGATION.main.map((item) =>
                item.dropdown ? (
                  <div key={item.key}>
                    <button
                      onClick={() =>
                        setIsMobileServicesOpen(!isMobileServicesOpen)
                      }
                      className={cn(
                        "w-full flex items-center justify-between text-base font-medium px-4 py-2 rounded-md transition-colors",
                        isActiveDropdown(item)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      )}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                      <HiChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isMobileServicesOpen ? "rotate-180" : ""
                        )}
                      />
                    </button>

                    {isMobileServicesOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.key}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "block text-sm px-4 py-2 rounded-md transition-colors",
                              isActiveLink(sub.href)
                                ? "text-blue-600 bg-sky-50 font-semibold"
                                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                            )}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block text-base font-medium px-4 py-2 rounded-md transition-colors",
                      isActiveLink(item.href)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="px-4 pt-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white font-semibold shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/contact-us">Get Quote</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;