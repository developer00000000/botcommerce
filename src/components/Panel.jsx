import React, { useState } from 'react';
import {
  FaShoppingBag,
  FaQuestionCircle,
  FaMoon,
  FaBell,
} from 'react-icons/fa';

const Panel = () => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('🇺🇿 Uz');

  const handleLangSelect = (lang, label) => {
    setSelectedLang(`${lang} ${label}`);
    setIsLangDropdownOpen(false);
  };

  const handleProfileToggle = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-[#012874] fixed top-0 w-[1260px]">
      <div className="flex items-center space-x-3">
        <FaShoppingBag className="text-white text-2xl" />
        <span className="text-white">Hello</span>
      </div>

      <div className="flex items-center space-x-6">
        <FaQuestionCircle className="text-white text-2xl" />
        <FaMoon className="text-white text-2xl" />
        <FaBell className="text-white text-2xl" />

        <div className="relative">
          <button
            className="text-white flex items-center"
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
          >
            <span className="mr-1">{selectedLang}</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {isLangDropdownOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white rounded shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                onClick={() => handleLangSelect('en', 'En')}
              >
                En
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                onClick={() => handleLangSelect('🇷🇺', 'Ru')}
              >
                Ru
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                onClick={() => handleLangSelect('🇺🇿', 'Uz')}
              >
                Uz
              </a>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="flex items-center text-white bg-pink-600 rounded-full w-8 h-8 justify-center"
            onClick={handleProfileToggle}
          >
            AA
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white rounded shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Panel;
