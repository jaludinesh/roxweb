
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              Rox<span className="text-orange">.</span>
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-300 hover:text-orange transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-orange transition-colors">About</a>
            <a href="#services" className="text-gray-300 hover:text-orange transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-300 hover:text-orange transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-300 hover:text-orange transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Rox. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-orange transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.fiverr.com/users/roxahir" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange transition-colors" aria-label="Fiverr">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.773.813c.767.15 1.45.525 2.01 1.083.56.558.967 1.208 1.124 1.948.23.11.038.23.05.354v.017c-.01.276-.043.558-.124.834-.197.67-.507 1.284-.915 1.833-.182.244-.386.458-.615.645-.058.045-.12.086-.183.124-.024.013-.048.026-.073.038-.035.018-.072.034-.109.051l.001-.036c-.03-.213-.054-.432-.072-.656-.172.42-.467.79-.86 1.086v.001c-.467.354-1.02.624-1.607.75h-.018c-.317.066-.656.097-.969.097-.488 0-.987-.07-1.461-.224l-.031-.01c.346.117.708.149 1.062.08a2.55 2.55 0 0 0 .397-.114c.157-.065.302-.15.437-.245.13-.092.252-.2.357-.322.093-.11.171-.23.231-.359.059-.126.098-.263.115-.403l.007-.062c.01-.073.014-.149.014-.226 0-.173-.034-.347-.102-.51a1.65 1.65 0 0 0-.661-.79c-.212-.148-.457-.247-.716-.296-.457-.09-.94-.062-1.37.115a2.31 2.31 0 0 0-.652.425 2.73 2.73 0 0 0-.515.654c-.131.23-.223.484-.27.748-.047.264-.053.532-.019.797.034.266.103.524.204.767.103.245.237.474.4.683.163.208.356.392.569.545.214.154.452.276.702.36l.016.005c-.434.074-.876.11-1.32.108-.331 0-.665-.02-.997-.06l-.112-.014-.014-.006-.006-.008a1.756 1.756 0 0 1-.173-.428c-.063-.226-.1-.463-.112-.702l-.004-.13c-.006-.27.036-.544.128-.8.092-.258.23-.497.404-.711.101-.12.212-.23.331-.328l.005-.005.078-.067.016-.014c.342-.307.753-.55 1.2-.706a4.55 4.55 0 0 1 1.375-.216c.298 0 .598.028.888.084l.136.027a6.37 6.37 0 0 0-.434-.52 5.39 5.39 0 0 0-.714-.62 4.33 4.33 0 0 0-.934-.498 3.69 3.69 0 0 0-1.06-.208c-.139-.008-.278-.011-.417-.01-.474.007-.948.085-1.398.232a4.1 4.1 0 0 0-1.2.618 3.07 3.07 0 0 0-.87 1.016c-.223.412-.34.874-.346 1.342v.057c.003.43.123.858.356 1.228.232.37.565.665.96.85l.017.008a5.06 5.06 0 0 1-1.197-.425 4.76 4.76 0 0 1-1.027-.664l-.03-.027a5.32 5.32 0 0 1-.834-.881 4.9 4.9 0 0 1-.638-1.086 4.48 4.48 0 0 1-.281-1.278v-.023c0-.038 0-.077.002-.115.013-.51.156-1.015.413-1.462.258-.448.617-.84 1.046-1.15.428-.312.912-.542 1.426-.677.515-.135 1.053-.175 1.585-.12l.034.004C7.152.909 7.803.973 8.371 1.15c.567.176 1.071.454 1.49.824l.031.025c-.136-.38-.34-.729-.603-1.04-.262-.312-.572-.576-.916-.783h.002z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
