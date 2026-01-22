"use client";

import { motion, AnimatePresence } from "framer-motion";
import SignUpModal from "./SignUpModal";

interface SignUpModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModalWrapper = ({ isOpen, onClose }: SignUpModalWrapperProps) => {
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
            <SignUpModal 
              onBack={onClose}
              onClose={onClose} 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignUpModalWrapper;