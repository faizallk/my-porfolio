import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <div className='w-full px-15 py-10 '>
      <h2 className="text-5xl font-semibold mb-2">Get in Touch</h2>
      <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>
    <div className='flex gap-10 mt-10'>
        <form action="#" className='flex flex-col w-[65%] shadow-lg px-10 py-6 rounded-lg'>
        <label className='font-medium' htmlFor="name">Name:</label>
        <input className='border-zinc-400 border-[1px] rounded outline-[#8b5cf6] px-5 py-2 my-2' type="text" id="name" name="name" placeholder='Your Name' required />

        <label className='font-medium' htmlFor="email">Email:</label>
        <input className='border-zinc-400 border-[1px] rounded outline-[#8b5cf6] px-5 py-2 my-2' type="email" id="email" name="email" placeholder='Your Email' required />

        <label className='font-medium' htmlFor="message">Message:</label>
        <textarea className='border-zinc-400 border-[1px] rounded outline-[#8b5cf6] px-5 py-2 my-2' id="message" name="message" rows={4} placeholder='Your Message' required></textarea>

        <button className='bg-[#8b5cf6] w-1/4 mt-2 cursor-pointer text-white px-4 py-2 rounded-lg' type="submit">Send Message</button>
      </form>
      <div className='w-[35%]'>
        <h2 className="font-semibold text-xl">Contact Information:</h2>
        <p className='text-sm mt-2'>If you have any questions or just want to say hello, feel free to reach out!</p>
        <p className="mt-4 text-sm font-normal">You can also find me on:</p>
      <div>
        <div className='flex items-center gap-2 mt-4'>
         <i className="bg-[#eff4f8]  shadow-md text-md px-3 py-2 text-[#8b5cf6] rounded-full ri-mail-line"></i>
         <div>
          <h3 className='font-semibold text-sm'>Email</h3>
          <p className='text-xs font-normal text-zinc-500'>khanfaijal000@gmail.com</p>
         </div>
        </div>
        <div className='flex items-center gap-2 mt-4'>
         <i className="bg-[#eff4f8]  shadow-md text-md px-3 py-2 text-[#8b5cf6] rounded-full ri-map-pin-line"></i>
         <div>
          <h3 className='font-semibold text-sm'>Location</h3>
          <p className='text-xs font-normal text-zinc-500'>Ranchi, India</p>
         </div>
        </div>
      </div>
      <div className='flex items-center gap-3 mt-4 ml-2'>
        <Link to="https://github.com/faizallk" className='flex items-center gap-2 mt-4'>
          <i className="bg-[#eff4f8]  shadow-md text-md px-2 py-1 text-zinc-500 rounded-full ri-github-line"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/faijalkhann/" className='flex items-center gap-2 mt-4'>
          <i className="bg-[#eff4f8]  shadow-md text-md px-2 py-1 text-zinc-500 rounded-full ri-linkedin-fill"></i>
        </Link>
         <Link to="#" className='flex items-center gap-2 mt-4'>
          <i className="bg-[#eff4f8]  shadow-md text-md px-2 py-1 text-zinc-500 rounded-full ri-twitter-x-line"></i>
        </Link>
         
      </div>
      </div>
    </div>
    </div>
  )
}

export default Contact