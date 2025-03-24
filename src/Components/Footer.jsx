import React from 'react';

export default function Footer() {
  return (
    <footer id='Footer' className='w-full bg-gray-900 text-white py-6 text-center'>
      <div className='max-w-4xl mx-auto'>
        <p className='text-lg'>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className='flex justify-center gap-6 mt-4'>
          <a href='#' className='hover:text-blue-400 transition-colors'>Privacy Policy</a>
          <a href='#' className='hover:text-blue-400 transition-colors'>Terms of Service</a>
          <a href='#' className='hover:text-blue-400 transition-colors'>Contact</a>
        </div>
      </div>
    </footer>
  );
}
