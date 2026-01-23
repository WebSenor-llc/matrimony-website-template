"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import LoginModal from "../component/LoginModal";
import SignUpModalWrapper from "../component/SignUpModalWrapper";

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      }
    };

    if (isLoginModalOpen || isSignUpModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }
  }, [isLoginModalOpen, isSignUpModalOpen]);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
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
          {/* <Link
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
          </Link> */}

          {/* Login Button */}
          <motion.button
            onClick={handleLoginClick}
            className="flex items-center gap-2 rounded-full border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 hover:text-gray-900 px-6 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            Login
            <ChevronDown size={18} className="text-gray-500" />
          </motion.button>
        </nav>

        {/* Mobile Login Button */}
        <motion.button
          onClick={handleLoginClick}
          className="lg:hidden flex items-center gap-2 rounded-full border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 hover:text-gray-900 px-4 py-1.5 sm:py-2 text-sm font-medium transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.1 }}
        >
          Login
          <ChevronDown size={16} className="text-gray-500" />
        </motion.button>
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
