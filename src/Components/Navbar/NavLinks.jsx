import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navItems } from './navItems';

export const NavLinks = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (item) => {
    if (item.path) {
      setClickedItem(item.name); 
      navigate(item.path); 
    }
    else if (item.scrollTo) {
      navigate(`/#${item.scrollTo}`);
    }
  };

  const handleSubItemClick = (subItem, parentItem) => {
    navigate(subItem.path);
    setClickedItem(parentItem.name);
  };

  const isActive = (item) => {
  return location.pathname === item.path ||
    (item.subItems && item.subItems.some(sub => location.pathname === sub.path));
};


  return (
    <nav className="hidden lg:flex items-center space-x-5">
      {navItems.map((item, index) => (
        <div
          key={`nav-${item.name}-${index}`}
          className="relative"
          onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div
            onClick={() => handleNavClick(item)} 
            className={`cursor-pointer px-3 py-2.5 font-medium rounded-md transition-all duration-200 group relative ${
              isActive(item)
                ? 'text-yellow-600'
                : 'text-gray-700 hover:text-yellow-600'
            }`}
          >
            <span className="relative inline-flex items-center">
              {item.name}
              {item.subItems && (
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
              <span
                className={`absolute left-1/2 -bottom-1 h-0.5 bg-yellow-500 rounded-full origin-center transition-all duration-300 ease-out ${
                  isActive(item) ? 'w-full scale-100' : 'w-0 scale-0 group-hover:w-full group-hover:scale-100'
                }`}
                style={{ transform: 'translateX(-50%)' }}
              />
            </span>
          </div>

          {item.subItems && activeDropdown === item.name && (
            <div className="absolute left-1/2 transform -translate-x-1/4 w-56 bg-white rounded-lg shadow-2xl py-2 z-50 border border-gray-300">
              {item.subItems.map((subItem, subIndex) => (
                <div
                  key={`sub-${subItem.name}-${subIndex}`}
                  onClick={() => handleSubItemClick(subItem, item)} 
                  className={`cursor-pointer block px-4 py-2.5 text-sm transition-colors ${
                    location.pathname === subItem.path
                      ? 'text-yellow-600 bg-yellow-50 font-medium'
                      : 'text-gray-700 hover:bg-yellow-200'
                  }`}
                >
                  {subItem.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div
        onClick={() => {
          setClickedItem('Contact');
          navigate('/contact');
        }}
        className={`ml-4 font-semibold py-2.5 px-5 rounded-md transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer ${
          location.pathname === '/contact'
            ? 'bg-yellow-600 text-white shadow-inner'
            : 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-md'
        }`}
      >
        Get Quote
      </div>
    </nav>
  );
};
