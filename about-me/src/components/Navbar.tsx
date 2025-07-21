import React from 'react';

const Navbar: React.FC = () => {
    const navItems = ['Home', 'Work', 'About', 'Contact'];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
        <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
            <div className="text-xl font-bold">My Portfolio</div>
            <ul className="nidden md:flex space-x-6 text-gray-700">
                {navItems.map((item) => (
                    <li key={item}>
                        <a href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-500">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
