import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-gray-900 text-white shadow-md`}
      style={{ backgroundColor: '#00517a' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-white">
          Sebastian Colina
        </Link>
        <div className="flex space-x-4">
          <SocialIcon
            url="https://www.linkedin.com/in/sebastian-colina8/"
            style={{ height: 30, width: 30 }}
            target="_blank"
            fgColor="#fff"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/SebaColina"
            style={{ height: 30, width: 30 }}
            target="_blank"
            fgColor="#fff"
            bgColor="transparent"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;