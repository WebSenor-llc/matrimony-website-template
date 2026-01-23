"use client";

import { useState } from "react";
import { X, ArrowLeft, User, AlertCircle, HelpCircle, Shield, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Autocomplete, TextField, Tooltip } from "@mui/material";
import Image from "next/image";

interface SignUpModalProps {
  onBack: () => void;
  onClose: () => void;
}

type ProfileFor = 
  | "Myself" 
  | "My Son" 
  | "My Daughter" 
  | "My Brother" 
  | "My Sister" 
  | "My Friend" 
  | "My Relative";

type Gender = "Male" | "Female";

const SignUpModal = ({ onBack, onClose }: SignUpModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedProfile, setSelectedProfile] = useState<ProfileFor | null>(null);
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [religion, setReligion] = useState("");
  const [community, setCommunity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  // Remove dropdown state since MUI Autocomplete handles it internally
  // const [showReligionDropdown, setShowReligionDropdown] = useState(false);
  // const [showCommunityDropdown, setShowCommunityDropdown] = useState(false);
  // const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const profileOptions: ProfileFor[] = [
    "Myself",
    "My Son", 
    "My Daughter",
    "My Brother",
    "My Sister",
    "My Friend",
    "My Relative"
  ];

  const religionOptions = [
    "Hindu",
    "Muslim", 
    "Christian",
    "Sikh",
    "Buddhist",
    "Jain",
    "Parsi",
    "Jewish",
    "Bahai",
    "Other",
    "No Religion"
  ];

  // Community options based on religion
  const getCommunityOptions = (selectedReligion: string) => {
    const communityMap: { [key: string]: string[] } = {
      "Hindu": [
        "Brahmin", "Kshatriya", "Vaishya", "Shudra", "Agarwal", "Baniya", "Kayastha", 
        "Rajput", "Maratha", "Reddy", "Nair", "Iyer", "Iyengar", "Gujarati", "Punjabi", 
        "Bengali", "Marwari", "Sindhi", "Other"
      ],
      "Muslim": [
        "Sunni", "Shia", "Ahmadiyya", "Sufi", "Bohra", "Ismaili", "Deobandi", 
        "Barelvi", "Ahl-e-Hadith", "Other"
      ],
      "Christian": [
        "Catholic", "Protestant", "Orthodox", "Anglican", "Baptist", "Methodist", 
        "Presbyterian", "Pentecostal", "Lutheran", "Other"
      ],
      "Sikh": [
        "Jat Sikh", "Khatri", "Arora", "Ramgarhia", "Saini", "Labana", "Other"
      ],
      "Buddhist": [
        "Theravada", "Mahayana", "Vajrayana", "Zen", "Pure Land", "Other"
      ],
      "Jain": [
        "Digambar", "Svetambar", "Sthanakwasi", "Terapanthi", "Other"
      ],
      "Parsi": [
        "Parsi", "Irani", "Other"
      ],
      "Jewish": [
        "Orthodox", "Conservative", "Reform", "Reconstructionist", "Other"
      ]
    };
    
    return communityMap[selectedReligion] || ["Other"];
  };

  const countryOptions = [
    "India", "United States", "United Kingdom", "Canada", "Australia", 
    "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Singapore", 
    "Malaysia", "Germany", "France", "Netherlands", "Switzerland", "Sweden",
    "Norway", "Denmark", "New Zealand", "South Africa", "Mauritius", "Fiji",
    "Trinidad and Tobago", "Guyana", "Suriname", "Nepal", "Bangladesh", 
    "Sri Lanka", "Pakistan", "Afghanistan", "Myanmar", "Thailand", "Other"
  ];

  const handleProfileSelect = (profile: ProfileFor) => {
    setSelectedProfile(profile);
    // Auto-set gender for family members, but don't advance step
    if (["My Son", "My Brother"].includes(profile)) {
      setSelectedGender("Male");
    } else if (["My Daughter", "My Sister"].includes(profile)) {
      setSelectedGender("Female");
    } else {
      // Reset gender for profiles that need manual selection
      setSelectedGender(null);
    }
  };

  const handleGenderSelect = (gender: Gender) => {
    setSelectedGender(gender);
  };

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    } else if (step === 3) {
      setStep(4);
    } else if (step === 4) {
      // Show success step
      setStep(5);
    } else {
      // Handle final action (close modal or redirect)
      console.log("Account created successfully!");
      onClose();
    }
  };

  const handleBack = () => {
    if (step === 4) {
      setStep(3);
    } else if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
    } else {
      onBack();
    }
  };

  const handleReligionSelect = (selectedReligion: string | null) => {
    setReligion(selectedReligion || "");
    setCommunity(""); // Reset community when religion changes
  };

  const handleCommunitySelect = (selectedCommunity: string | null) => {
    setCommunity(selectedCommunity || "");
    setCountry(""); // Reset country when community changes
  };

  const handleCountrySelect = (selectedCountry: string | null) => {
    setCountry(selectedCountry || "");
  };

  const canContinue = step === 1 ? selectedProfile && selectedGender : 
                   step === 2 ? firstName && lastName && day && month && year :
                   step === 3 ? religion && community && country :
                   step === 4 ? email && phoneNumber : false;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <motion.div 
        className="flex items-center justify-between mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {step > 1 && step < 6 && (
          <motion.button
            onClick={handleBack}
            className="text-gray-400 hover:text-gray-600 p-1 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
          </motion.button>
        )}
        {(step === 1 || step === 5) && <div></div>}
        
        {step < 5 && (
          <motion.button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={18} className="sm:w-5 sm:h-5" />
          </motion.button>
        )}
        {step === 5 && <div></div>}
      </motion.div>

      {/* Profile Avatar */}
      <motion.div 
        className="flex justify-center mb-4 sm:mb-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <motion.div 
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
            step === 5 ? 'bg-green-100' : 'bg-transparent'
          }`}
          animate={{ 
            backgroundColor: step === 5 ? '#dcfce7' : 'transparent'
          }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {step === 5 ? (
                <CheckCircle size={32} className="text-green-500 sm:w-10 sm:h-10" />
              ) : (
                <Image
                  src={`/svg/step-${step}.svg`}
                  alt={`Step ${step}`}
                  width={64}
                  height={64}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={step}
          className="text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
        {step === 1 && (
          <>
            <motion.h2 
              className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              This Profile is for
            </motion.h2>

            <motion.div 
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
            >
              {profileOptions.map((option, index) => (
                <motion.button
                  key={option}
                  onClick={() => handleProfileSelect(option)}
                  className={`flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border-2 text-sm font-medium transition-all duration-200 ${
                    selectedProfile === option
                      ? "border-[#00bcd5] bg-cyan-50 text-cyan-700 shadow-md"
                      : "border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-sm"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Circular Checkbox inside button */}
                  {selectedProfile === option && (
                    <motion.div 
                      className="w-5 h-5 rounded-full bg-[#00bcd5] flex items-center justify-center"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >
                      <motion.svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-white"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <motion.path
                          d="M2 6L4.5 8.5L10 3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </motion.svg>
                    </motion.div>
                  )}
                  {option}
                </motion.button>
              ))}
            </motion.div>

            {/* Gender Section - Show if profile needs gender selection */}
            {selectedProfile && ["Myself", "My Relative", "My Friend"].includes(selectedProfile) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
              >
                <motion.h3 
                  className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Gender
                </motion.h3>
                
                <motion.div 
                  className="flex justify-center gap-3 mb-6 sm:mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {(["Male", "Female"] as Gender[]).map((gender, index) => (
                    <motion.button
                      key={gender}
                      onClick={() => handleGenderSelect(gender)}
                      className={`flex items-center gap-3 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full border-2 text-sm font-medium transition-all duration-200 ${
                        selectedGender === gender
                          ? "border-[#00bcd5] bg-cyan-50 text-cyan-700 shadow-md"
                          : "border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-sm"
                      }`}
                      initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Circular Checkbox for gender */}
                      {selectedGender === gender && (
                        <motion.div 
                          className="w-5 h-5 rounded-full bg-[#00bcd5] flex items-center justify-center"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                        >
                          <motion.svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            className="text-white"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            <motion.path
                              d="M2 6L4.5 8.5L10 3"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                            />
                          </motion.svg>
                        </motion.div>
                      )}
                      {gender}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <motion.h2 
              className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Your name
            </motion.h2>

            {/* Name Fields */}
            <motion.div 
              className="space-y-3 sm:space-y-4 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:border-[#00bcd5] focus:outline-none focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              />
              <motion.input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:border-[#00bcd5] focus:outline-none focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              />
            </motion.div>

            <motion.h3 
              className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Date of birth
            </motion.h3>

            {/* Date of Birth Fields */}
            <motion.div 
              className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <label className="block text-xs text-gray-500 mb-2">Day</label>
                <input
                  type="text"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  placeholder="DD"
                  maxLength={2}
                  className="w-full rounded-lg border border-gray-300 px-2 sm:px-3 py-2.5 sm:py-3 text-sm text-center focus:border-[#00bcd5] focus:outline-none focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                <label className="block text-xs text-gray-500 mb-2">Month</label>
                <input
                  type="text"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  placeholder="MM"
                  maxLength={2}
                  className="w-full rounded-lg border border-gray-300 px-2 sm:px-3 py-2.5 sm:py-3 text-sm text-center focus:border-[#00bcd5] focus:outline-none focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                <label className="block text-xs text-gray-500 mb-2">Year</label>
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="YYYY"
                  maxLength={4}
                  className="w-full rounded-lg border border-gray-300 px-2 sm:px-3 py-2.5 sm:py-3 text-sm text-center focus:border-[#00bcd5] focus:outline-none focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                />
              </motion.div>
            </motion.div>
          </>
        )}

        {step === 3 && (
          <>
            <motion.h2 
              className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Your religion
            </motion.h2>

            {/* Religion Dropdown */}
            <motion.div 
              className="relative mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Autocomplete
                options={religionOptions}
                value={religion || null}
                onChange={(event, newValue) => handleReligionSelect(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Religion"
                    variant="outlined"
                    size="medium"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        fontSize: '14px',
                        padding: '4px 8px',
                        '& .MuiOutlinedInput-input': {
                          padding: '12px 14px',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#00bcd5',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#00bcd5',
                          borderWidth: '2px',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        fontSize: '12px',
                        color: '#9ca3af',
                        '&.Mui-focused': {
                          color: '#00bcd5',
                        },
                      },
                    }}
                  />
                )}
              />
            </motion.div>

            {/* Community Section - Show when religion is selected */}
            <AnimatePresence>
              {religion && religion !== "No Religion" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div 
                    className="relative mb-3 sm:mb-4 flex items-end gap-2 sm:gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex-1">
                      <Autocomplete
                        options={getCommunityOptions(religion)}
                        value={community || null}
                        onChange={(event, newValue) => handleCommunitySelect(newValue)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Community"
                            variant="outlined"
                            size="medium"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
                                fontSize: '14px',
                                padding: '4px 8px',
                                '& .MuiOutlinedInput-input': {
                                  padding: '12px 14px',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#00bcd5',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#00bcd5',
                                  borderWidth: '2px',
                                },
                              },
                              '& .MuiInputLabel-root': {
                                fontSize: '12px',
                                color: '#9ca3af',
                                '&.Mui-focused': {
                                  color: '#00bcd5',
                                },
                              },
                            }}
                          />
                        )}
                      />
                    </div>

                    {/* Help Icon */}
                    <Tooltip 
                      title="Please select the native language that best represents your family background."
                      arrow
                      placement="top"
                      sx={{
                        '& .MuiTooltip-tooltip': {
                          backgroundColor: '#374151',
                          color: 'white',
                          fontSize: '12px',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          maxWidth: '250px',
                        },
                        '& .MuiTooltip-arrow': {
                          color: '#374151',
                        },
                      }}
                    >
                      <motion.button 
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 shrink-0 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <HelpCircle size={16} className="sm:w-5 sm:h-5" />
                      </motion.button>
                    </Tooltip>
                  </motion.div>

                  {/* Living In Section - Show when community is selected */}
                  <AnimatePresence>
                    {community && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.div 
                          className="relative mb-3 sm:mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <Autocomplete
                            options={countryOptions}
                            value={country || null}
                            onChange={(event, newValue) => handleCountrySelect(newValue)}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Country"
                                variant="outlined"
                                size="medium"
                                sx={{
                                  '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    padding: '4px 8px',
                                    '& .MuiOutlinedInput-input': {
                                      padding: '12px 14px',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#00bcd5',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#00bcd5',
                                      borderWidth: '2px',
                                    },
                                  },
                                  '& .MuiInputLabel-root': {
                                    fontSize: '12px',
                                    color: '#9ca3af',
                                    '&.Mui-focused': {
                                      color: '#00bcd5',
                                    },
                                  },
                                }}
                              />
                            )}
                          />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {step === 4 && (
          <>
            <motion.div 
              className="text-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.h2 
                className="text-base sm:text-lg font-medium text-gray-800 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                An active email ID & phone no.
              </motion.h2>
              <motion.p 
                className="text-sm text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                are required to secure your Profile
              </motion.p>
            </motion.div>

            {/* Email Field */}
            <motion.div 
              className="mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.h3 
                className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4 text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                Email ID
              </motion.h3>
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email ID"
                className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-3 sm:py-4 text-sm focus:border-[#00bcd5] focus:outline-none focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              />
            </motion.div>

            {/* Mobile Number Field */}
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.h3 
                className="text-base sm:text-lg font-medium text-gray-800 mb-3 sm:mb-4 text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                Mobile no.
              </motion.h3>
              <motion.div 
                className="flex gap-2 sm:gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                <motion.div 
                  className="w-20 sm:w-24"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  <select className="w-full rounded-lg border border-gray-300 px-2 sm:px-3 py-3 sm:py-4 text-sm focus:border-[#00bcd5] focus:outline-none focus:ring-2 focus:ring-cyan-200 transition-all duration-200">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+971">+971</option>
                    <option value="+61">+61</option>
                    <option value="+65">+65</option>
                  </select>
                </motion.div>
                <motion.div 
                  className="flex-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.3 }}
                >
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Mobile no."
                    className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-3 sm:py-4 text-sm focus:border-[#00bcd5] focus:outline-none focus:ring-2 focus:ring-cyan-200 transition-all duration-200"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              onClick={handleContinue}
              disabled={!canContinue}
              className={`w-full py-3 sm:py-4 rounded-full text-white font-medium transition-all mb-4 sm:mb-6 ${
                canContinue
                  ? "bg-[#00bcd5] hover:bg-[#00acc1] shadow-lg"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 }}
              whileHover={canContinue ? { scale: 1.02 } : {}}
              whileTap={canContinue ? { scale: 0.98 } : {}}
            >
              Submit
            </motion.button>

            {/* Terms and Privacy */}
            <motion.div 
              className="text-center text-xs text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              By creating account, you agree to our{" "}
              <motion.button 
                className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.button>{" "}
              and{" "}
              <motion.button 
                className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                T&C
              </motion.button>
              .
            </motion.div>
          </>
        )}

        {step === 5 && (
          <>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h2 
                className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Account Created Successfully!
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Welcome to Shaadi.com! Your profile has been created and you can now start exploring matches.
              </motion.p>
              
              <motion.div 
                className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div 
                  className="flex items-center justify-center gap-2 text-green-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle size={18} className="sm:w-5 sm:h-5" />
                  </motion.div>
                  <span className="font-medium text-sm sm:text-base">Profile Setup Complete</span>
                </motion.div>
                <motion.p 
                  className="text-xs sm:text-sm text-green-600 mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  You will receive a verification email shortly at {email}
                </motion.p>
              </motion.div>

              <motion.div 
                className="space-y-2 sm:space-y-3 mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <motion.button
                  onClick={handleContinue}
                  className="w-full py-3 sm:py-4 rounded-full bg-[#00bcd5] hover:bg-[#00acc1] text-white font-medium transition-all shadow-lg text-sm sm:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Exploring Matches
                </motion.button>
                
                <motion.button
                  onClick={onClose}
                  className="w-full py-3 sm:py-4 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:border-gray-400 transition-all text-sm sm:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Complete Profile Later
                </motion.button>
              </motion.div>

              <motion.div 
                className="text-xs text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  Next steps:
                </motion.p>
                <motion.ul 
                  className="mt-2 space-y-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 1.5 }}
                >
                  {["• Verify your email address", "• Add photos to your profile", "• Complete your detailed preferences"].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </>
        )}

        {/* Continue Button - Only show for steps 1-3 */}
        {step >= 1 && step <= 3 && (
          <div className="flex justify-center">
            <motion.button
              onClick={handleContinue}
              disabled={!canContinue}
              className={`px-8 sm:px-12 py-3 sm:py-4 rounded-full text-white font-medium transition-all text-sm sm:text-base ${
                canContinue
                  ? "bg-[#00bcd5] hover:bg-[#00acc1] shadow-lg"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={canContinue ? { scale: 1.02 } : {}}
              whileTap={canContinue ? { scale: 0.98 } : {}}
            >
              Continue
            </motion.button>
          </div>
        )}

        {/* Warning Message - Only show on step 1 */}
        {step === 1 && (
          <motion.div 
            className="mt-4 sm:mt-6 p-3 bg-orange-50 border border-orange-200 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="flex items-start gap-2">
              <AlertCircle size={14} className="text-orange-500 mt-0.5 shrink-0 sm:w-4 sm:h-4" />
              <p className="text-xs text-gray-700 text-left">
                Shaadi.com is built for genuine match-seekers. Any falsification,
                commercial use or marriage bureaus is strictly prohibited & may be
                reported to law enforcement.
              </p>
            </div>
          </motion.div>
        )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SignUpModal;