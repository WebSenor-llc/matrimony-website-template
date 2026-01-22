"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import LoginModal from "../component/LoginModal";
import SignUpModalWrapper from "../component/SignUpModalWrapper";

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when modals are open
  useEffect(() => {
    if (isLoginModalOpen || isSignUpModalOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Disable scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Re-enable scrolling and restore position
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isLoginModalOpen, isSignUpModalOpen]);

  // Handle Escape key to close modals
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isLoginModalOpen) {
          setIsLoginModalOpen(false);
        }
        if (isSignUpModalOpen) {
          setIsSignUpModalOpen(false);
        }
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isLoginModalOpen || isSignUpModalOpen || isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }
  }, [isLoginModalOpen, isSignUpModalOpen, isMobileMenuOpen]);

  // Handle click outside mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        menuButtonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu when opening modal
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleOpenSignUp = () => {
    setIsLoginModalOpen(false); // Close login modal
    setIsSignUpModalOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className={`fixed top-0 left-0 right-0 w-full border-b z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/70 backdrop-blur-sm" : "bg-white"
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/svg/shaadi_logo.svg" // replace with your logo path
            alt="Shaadi Logo"
            width={80}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link
            href="/about"
            className="hover:text-gray-900 transition-colors"
          >
            About us
          </Link>

          <Link
            href="/help"
            className="hover:text-gray-900 transition-colors"
          >
            Help
          </Link>

          {/* Login Button */}
          <motion.button
            onClick={handleLoginClick}
            className="rounded-full bg-[#ec6665] hover:bg-[#ec6665] text-white px-6 py-2 text-sm font-medium hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            Login
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <div className="relative w-6 h-6">
            <Menu 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
              }`} 
            />
            <X 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        ref={mobileMenuRef}
        className={`lg:hidden border-t bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-4">
          <Link
            href="/about"
            className="text-gray-700 hover:text-gray-900 py-2 transform transition-all duration-200 hover:translate-x-1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About us
          </Link>

          <Link
            href="/help"
            className="text-gray-700 hover:text-gray-900 py-2 transform transition-all duration-200 hover:translate-x-1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Help
          </Link>

          {/* Mobile Login Button */}
          <motion.button
            onClick={() => {
              handleLoginClick();
              setIsMobileMenuOpen(false);
            }}
            className="rounded-full bg-[#ec6665] hover:bg-[#ec6665] text-white px-6 py-2 text-sm font-medium w-full hover:scale-105"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            Login
          </motion.button>
        </nav>
      </div>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={handleCloseModal}
        onOpenSignUp={handleOpenSignUp}
      />

      {/* Sign Up Modal */}
      <SignUpModalWrapper 
        isOpen={isSignUpModalOpen} 
        onClose={handleCloseSignUp}
      />
    </header>
  );
};

export default Header;
