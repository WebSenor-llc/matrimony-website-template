"use client";

import { useState } from "react";
import Image from "next/image";
import { X, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSignUp?: () => void;
}

const LoginModal = ({ isOpen, onClose, onOpenSignUp }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password, stayLoggedIn });
  };

  const handleOTPLogin = () => {
    // Handle OTP login logic here
    console.log("OTP login requested");
  };

  const handleSignUpClick = () => {
    onClose(); // Close login modal first
    if (onOpenSignUp) {
      onOpenSignUp(); // Open signup modal
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/50" 
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          
          <motion.div 
            className="relative w-full max-w-sm sm:max-w-md rounded-lg bg-white p-6 sm:p-8 shadow-xl border"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  className="absolute right-3 sm:right-4 top-3 sm:top-4 text-gray-400 hover:text-gray-600 p-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.1 }}
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </motion.button>

                {/* Logo */}
                <motion.div 
                  className="mb-4 sm:mb-6 flex justify-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-lg bg-red-500">
                    <span className="text-lg sm:text-2xl font-bold text-white">S</span>
                  </div>
                  {/* 
                  Replace above div with this Image component when you add login-logo.png to public/images/:
                  <Image
                    src="/images/login-logo.png"
                    alt="Shaadi Logo"
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                  */}
                </motion.div>

                {/* Title */}
                <motion.h2 
                  className="mb-6 sm:mb-8 text-center text-lg sm:text-xl font-medium text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  Welcome back! Please Login
                </motion.h2>

                {/* Login Form */}
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  {/* Email/Mobile Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Mobile No. / Email ID
                    </label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Mobile no. / Email ID"
                      className="w-full rounded border border-gray-300 px-3 py-2.5 sm:py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="w-full rounded border border-gray-300 px-3 py-2.5 sm:py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Stay Logged In & Forgot Password */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        checked={stayLoggedIn}
                        onChange={(e) => setStayLoggedIn(e.target.checked)}
                        className="rounded border-gray-300"
                      />
                      Stay Logged in
                      <HelpCircle size={16} className="text-gray-400" />
                    </label>
                    <button
                      type="button"
                      className="text-sm text-blue-500 hover:text-blue-600 self-start sm:self-auto"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Login Button */}
                  <motion.button
                    type="submit"
                    className="w-full rounded bg-teal-500 py-3 sm:py-3 text-white font-medium hover:bg-teal-600 transition-colors text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.1 }}
                  >
                    Login
                  </motion.button>

                  {/* OR Divider */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="text-sm text-gray-500">OR</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                  </div>

                  {/* OTP Login Button */}
                  <motion.button
                    type="button"
                    onClick={handleOTPLogin}
                    className="w-full rounded bg-teal-500 py-3 sm:py-3 text-white font-medium hover:bg-teal-600 transition-colors text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.1 }}
                  >
                    Login with OTP
                  </motion.button>
                </motion.form>

                {/* Sign Up Link */}
                <motion.div 
                  className="mt-6 sm:mt-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <span className="text-gray-600 text-sm sm:text-base">New to Shaadi? </span>
                  <motion.button 
                    onClick={handleSignUpClick}
                    className="font-medium text-gray-800 hover:text-gray-900 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                  >
                    Sign Up Free ›
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  export default LoginModal;