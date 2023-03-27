import React from 'react';
import Logo from '../assets/logomarco.svg';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img className='logo-marcos' src={Logo} alt='Logo'/>
        </a>
        <button className='btn btn-sm'>Mis trabajos</button>
      </div>
    </div>
  </header>;
};

export default Header;
