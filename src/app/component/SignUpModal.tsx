"use client";

import { useState } from "react";
import { X, ArrowLeft, User, AlertCircle, ChevronDown, HelpCircle, Shield, CheckCircle } from "lucide-react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

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
  const [showReligionDropdown, setShowReligionDropdown] = useState(false);
  const [showCommunityDropdown, setShowCommunityDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

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
    // Show gender options for certain selections
    if (["Myself", "My Relative", "My Friend"].includes(profile)) {
      setStep(2);
    } else {
      // Auto-set gender for family members
      const autoGender = ["My Son", "My Brother"].includes(profile) ? "Male" : "Female";
      setSelectedGender(autoGender);
      setStep(2);
    }
  };

  const handleGenderSelect = (gender: Gender) => {
    setSelectedGender(gender);
  };

  const handleContinue = () => {
    if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    } else if (step === 4) {
      setStep(5);
    } else if (step === 5) {
      // Show success step
      setStep(6);
    } else {
      // Handle final action (close modal or redirect)
      console.log("Account created successfully!");
      onClose();
    }
  };

  const handleBack = () => {
    if (step === 5) {
      setStep(4);
    } else if (step === 4) {
      setStep(3);
    } else if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
      setSelectedGender(null);
    } else {
      onBack();
    }
  };

  const handleReligionSelect = (selectedReligion: string) => {
    setReligion(selectedReligion);
    setCommunity(""); // Reset community when religion changes
    setShowReligionDropdown(false);
  };

  const handleCommunitySelect = (selectedCommunity: string) => {
    setCommunity(selectedCommunity);
    setCountry(""); // Reset country when community changes
    setShowCommunityDropdown(false);
  };

  const handleCountrySelect = (selectedCountry: string) => {
    setCountry(selectedCountry);
    setShowCountryDropdown(false);
  };

  const canContinue = step === 1 ? selectedProfile : 
                   step === 2 ? selectedProfile && selectedGender :
                   step === 3 ? firstName && lastName && day && month && year :
                   step === 4 ? religion && community && country :
                   step === 5 ? email && phoneNumber : false;

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        {step > 1 && step < 6 && (
          <button
            onClick={handleBack}
            className="text-gray-400 hover:text-gray-600"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        {(step === 1 || step === 6) && <div></div>}
        
        {step < 6 && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        )}
        {step === 6 && <div></div>}
      </div>

      {/* Profile Avatar */}
      <div className="flex justify-center mb-6">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
          step === 6 ? 'bg-green-100' : step === 5 ? 'bg-yellow-100' : step === 4 ? 'bg-green-100' : step === 3 ? 'bg-purple-100' : 'bg-orange-100'
        }`}>
          {step === 6 ? (
            <CheckCircle size={32} className="text-green-500" />
          ) : step === 5 ? (
            <Shield size={32} className="text-yellow-500" />
          ) : (
            <User size={32} className={
              step === 4 ? 'text-green-400' : step === 3 ? 'text-purple-400' : 'text-orange-400'
            } />
          )}
        </div>
      </div>

      {/* Step Content */}
      <div className="text-center">
        {step === 1 && (
          <>
            <h2 className="text-xl font-medium text-gray-800 mb-6">
              This Profile is for
            </h2>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {profileOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleProfileSelect(option)}
                  className={`px-4 py-2 rounded-full border-2 text-xs font-medium transition-all ${
                    selectedProfile === option
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-medium text-gray-800 mb-6">
              This Profile is for
            </h2>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {profileOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => handleProfileSelect(option)}
                  className={`px-4 py-2 rounded-full border-2 text-xs font-medium transition-all ${
                    selectedProfile === option
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Gender
            </h3>
            
            <div className="flex justify-center gap-3 mb-6">
              {(["Male", "Female"] as Gender[]).map((gender) => (
                <button
                  key={gender}
                  onClick={() => handleGenderSelect(gender)}
                  className={`px-6 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                    selectedGender === gender
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-medium text-gray-800 mb-6">
              Your name
            </h2>

            {/* Name Fields */}
            <div className="space-y-4 mb-6">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Date of birth
            </h3>

            {/* Date of Birth Fields */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div>
                <label className="block text-xs text-gray-500 mb-2">Day</label>
                <input
                  type="text"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  placeholder="DD"
                  maxLength={2}
                  className="w-full rounded border border-gray-300 px-3 py-3 text-sm text-center focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-2">Month</label>
                <input
                  type="text"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  placeholder="MM"
                  maxLength={2}
                  className="w-full rounded border border-gray-300 px-3 py-3 text-sm text-center focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-2">Year</label>
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="YYYY"
                  maxLength={4}
                  className="w-full rounded border border-gray-300 px-3 py-3 text-sm text-center focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-xl font-medium text-gray-800 mb-8">
              Your religion
            </h2>

            {/* Religion Dropdown */}
            <div className="relative mb-6">
              <label className="block text-xs text-gray-500 mb-2">Religion</label>
              <button
                onClick={() => setShowReligionDropdown(!showReligionDropdown)}
                className="w-full rounded border border-gray-300 px-4 py-4 text-left text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 flex items-center justify-between"
              >
                <span className={religion ? "text-gray-900" : "text-gray-400"}>
                  {religion || "Religion"}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-400 transition-transform ${
                    showReligionDropdown ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Religion Dropdown Options */}
              {showReligionDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 max-h-60 overflow-y-auto">
                  {religionOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleReligionSelect(option)}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Community Section - Only show if religion is selected */}
            {religion && religion !== "No Religion" && (
              <>
                <h3 className="text-xl font-medium text-gray-800 mb-6">
                  Community
                </h3>

                <div className="relative mb-6 flex items-center gap-3">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-2">Community</label>
                    <button
                      onClick={() => setShowCommunityDropdown(!showCommunityDropdown)}
                      className="w-full rounded border border-gray-300 px-4 py-4 text-left text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 flex items-center justify-between"
                    >
                      <span className={community ? "text-gray-900" : "text-gray-400"}>
                        {community || "Community"}
                      </span>
                      <ChevronDown 
                        size={20} 
                        className={`text-gray-400 transition-transform ${
                          showCommunityDropdown ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    {/* Community Dropdown Options */}
                    {showCommunityDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 max-h-60 overflow-y-auto">
                        {getCommunityOptions(religion).map((option) => (
                          <button
                            key={option}
                            onClick={() => handleCommunitySelect(option)}
                            className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Help Icon */}
                  <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 mt-6">
                    <HelpCircle size={20} />
                  </button>
                </div>

            {/* Country Section - Only show if community is selected */}
            {community && (
              <>
                <h3 className="text-xl font-medium text-gray-800 mb-6">
                  Living in
                </h3>

                <div className="relative mb-8">
                  <label className="block text-xs text-teal-500 mb-2">Country</label>
                  <button
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    className="w-full rounded border-2 border-teal-500 px-4 py-4 text-left text-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-500 flex items-center justify-between"
                  >
                    <span className={country ? "text-gray-900" : "text-gray-400"}>
                      {country || "Country"}
                    </span>
                    <ChevronDown 
                      size={20} 
                      className={`text-gray-400 transition-transform ${
                        showCountryDropdown ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {/* Country Dropdown Options */}
                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 max-h-60 overflow-y-auto">
                      {countryOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleCountrySelect(option)}
                          className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
              </>
            )}
          </>
        )}

        {step === 5 && (
          <>
            <div className="text-center mb-8">
              <h2 className="text-lg font-medium text-gray-800 mb-2">
                An active email ID & phone no.
              </h2>
              <p className="text-sm text-gray-600">
                are required to secure your Profile
              </p>
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Email ID
              </h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email ID"
                className="w-full rounded border border-gray-300 px-4 py-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Mobile Number Field */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Mobile no.
              </h3>
              <div className="flex gap-3">
                <div className="w-24">
                  <select className="w-full rounded border border-gray-300 px-3 py-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+971">+971</option>
                    <option value="+61">+61</option>
                    <option value="+65">+65</option>
                  </select>
                </div>
                <div className="flex-1">
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Mobile no."
                    className="w-full rounded border border-gray-300 px-4 py-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleContinue}
              disabled={!canContinue}
              className={`w-full py-4 rounded-full text-white font-medium transition-all mb-6 ${
                canContinue
                  ? "bg-gray-400 hover:bg-gray-500"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Submit
            </button>

            {/* Terms and Privacy */}
            <div className="text-center text-xs text-gray-600">
              By creating account, you agree to our{" "}
              <button className="text-blue-400 hover:text-blue-500">
                Privacy Policy
              </button>{" "}
              and{" "}
              <button className="text-blue-400 hover:text-blue-500">
                T&C
              </button>
              .
            </div>
          </>
        )}

        {step === 6 && (
          <>
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Account Created Successfully!
              </h2>
              <p className="text-gray-600 mb-8">
                Welcome to Shaadi.com! Your profile has been created and you can now start exploring matches.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <CheckCircle size={20} />
                  <span className="font-medium">Profile Setup Complete</span>
                </div>
                <p className="text-sm text-green-600 mt-2">
                  You will receive a verification email shortly at {email}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <button
                  onClick={handleContinue}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-medium transition-all shadow-lg"
                >
                  Start Exploring Matches
                </button>
                
                <button
                  onClick={onClose}
                  className="w-full py-4 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:border-gray-400 transition-all"
                >
                  Complete Profile Later
                </button>
              </div>

              <div className="text-xs text-gray-500">
                <p>Next steps:</p>
                <ul className="mt-2 space-y-1">
                  <li>• Verify your email address</li>
                  <li>• Add photos to your profile</li>
                  <li>• Complete your detailed preferences</li>
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Continue Button - Only show for steps 1-4 */}
        {step >= 1 && step <= 4 && (
          <button
            onClick={handleContinue}
            disabled={!canContinue}
            className={`w-full py-4 rounded-full text-white font-medium transition-all ${
              canContinue
                ? "bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 shadow-lg"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        )}

        {/* Warning Message - Only show on steps 1 and 2 */}
        {(step === 1 || step === 2) && (
          <div className="mt-6 p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertCircle size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-700 text-left">
                Shaadi.com is built for genuine match-seekers. Any falsification,
                commercial use or marriage bureaus is strictly prohibited & may be
                reported to law enforcement.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUpModal;