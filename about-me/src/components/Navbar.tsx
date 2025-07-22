import React, { useMemo } from 'react';

type NavbarProps = {
  title?: string;
  navItems?: readonly string[];
};

const NAV_ITEMS = ['Home', 'Work', 'About', 'Contact'] as const;

const Navbar: React.FC<NavbarProps> = React.memo(({ title = 'My Portfolio', navItems = NAV_ITEMS }) => {
  const items = useMemo(() => navItems, [navItems]);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold" tabIndex={0} aria-label="Portfolio Title">{title}</div>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          {items.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-700"
                tabIndex={0}
                aria-label={`Navigate to ${item}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
