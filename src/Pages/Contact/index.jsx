import React, { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
    setEmail("");
  };

  return (
    <div id='Contact' className='w-full max-w-md mx-auto py-10 text-center'>
      <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input 
          type='email' 
          placeholder='Enter your email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
          required
        />
        <button 
          type='submit' 
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'>
          Submit
        </button>
      </form>
    </div>
  );
}
