"use client";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between text-gray-400 text-sm">
          {/* Left Column */}
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <p>
              Copyright © 2022{" "}
              <a
                href="#"
                className="text-white font-medium hover:text-[#1CD7A8]"
              >
                Simone
              </a>
              . All Rights Reserved.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex space-x-4 justify-center lg:justify-end">
            <a href="#" className="hover:text-[#1CD7A8]">
              Terms & Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-[#1CD7A8]">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
