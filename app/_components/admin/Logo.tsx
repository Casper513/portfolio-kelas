import React from 'react';

const Logo: React.FC = () => (
  <a href="https://flowbite.com" className="flex ms-2 md:me-24">
    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
);

export default Logo;
