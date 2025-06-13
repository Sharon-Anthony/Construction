import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineX, HiChevronDown } from 'react-icons/hi';
import { navItems } from './navItems';
import { useNavigate } from 'react-router-dom';

export const MobileMenu = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const handleNavClick = (item) => {
    if (item.subItems) {
      setOpenDropdown(openDropdown === item.name ? null : item.name);
    } else {
      navigate(item.path);
      onClose();
    }
  };

  const handleSubNavClick = (subItem) => {
    navigate(subItem.path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.3 }}
          className=" bg-white-100 z-[100] w-[400px]  h-full shadow-lg"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
            <img src="/logo.png" alt="" className="h-8" />
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <HiOutlineX className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="px-2 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  {item.name}
                  {item.subItems && (
                    <HiChevronDown
                      className={`w-4 h-4 transform transition-transform ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Sub Items */}
                {item.subItems && openDropdown === item.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="pl-6 pr-2"
                  >
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.name}
                        onClick={() => handleSubNavClick(sub)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-yellow-100 rounded-md"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            {/* CTA */}
            <div className="px-4 pt-6">
              <button
                onClick={() => {
                  navigate('/contact');
                  onClose();
                }}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg"
              >
                Get a Quote
              </button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
