"use client";

import { useState } from "react";
import Image from "next/image";
import { X, HelpCircle } from "lucide-react";
import SignUpModal from "./SignUpModal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

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
    setShowSignUp(true);
  };

  const handleBackToLogin = () => {
    setShowSignUp(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-xl border">
        {!showSignUp ? (
          <>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            {/* Logo */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-500">
                <span className="text-2xl font-bold text-white">S</span>
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
            </div>

            {/* Title */}
            <h2 className="mb-8 text-center text-xl font-medium text-gray-700">
              Welcome back! Please Login
            </h2>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Stay Logged In & Forgot Password */}
              <div className="flex items-center justify-between">
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
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded bg-teal-500 py-3 text-white font-medium hover:bg-teal-600 transition-colors"
              >
                Login
              </button>

              {/* OR Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="text-sm text-gray-500">OR</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* OTP Login Button */}
              <button
                type="button"
                onClick={handleOTPLogin}
                className="w-full rounded bg-teal-500 py-3 text-white font-medium hover:bg-teal-600 transition-colors"
              >
                Login with OTP
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <span className="text-gray-600">New to Shaadi? </span>
              <button 
                onClick={handleSignUpClick}
                className="font-medium text-gray-800 hover:text-gray-900"
              >
                Sign Up Free ›
              </button>
            </div>
          </>
        ) : (
          <SignUpModal 
            onBack={handleBackToLogin}
            onClose={onClose} 
          />
        )}
      </div>
    </div>
  );
};

export default LoginModal;