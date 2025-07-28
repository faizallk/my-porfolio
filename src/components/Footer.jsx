import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='w-full   bg-[#f8fafc] text-zinc-600 flex justify-around items-center px-15 py-5'>
     <div className='w-1/2'>
        <h1 className='font-semibold text-[#8b5cf6]'>Faizal Khan</h1>
        <p className='text-xs mt-1'>A passionat full-stack developer focused on creating exceptional digital experiences that bring your idea to life</p>
         <div className='flex items-center  gap-2'>
        <Link to="https://github.com/faizallk" className='flex items-center gap-2 mt-4'>
          <i className="bg-zinc-200   text-xs px-2 py-1 text-zinc-500 rounded-full ri-github-line"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/faijalkhann/" className='flex items-center gap-2 mt-4'>
          <i className="bg-zinc-200   text-xs px-2 py-1 text-zinc-500 rounded-full ri-linkedin-fill"></i>
        </Link>
         <Link to="#" className='flex items-center gap-2 mt-4'>
          <i className="bg-zinc-200   text-xs px-2 py-1 text-zinc-500 rounded-full ri-twitter-x-line"></i>
        </Link>
         
      </div>
      
     </div>
     <div className='flex flex-col items-start justify-center gap-1 w-1/4 ml-20'>
        <h2 className='font-semibold text-[#0f172a] text-sm mb-2'>Quick Links</h2>
        <Link className='text-xs hover:underline duration-150  text-zinc-600' to="/">Home</Link>
        <Link className='text-xs hover:underline duration-150  text-zinc-600' to="/about">About</Link>
        <Link className='text-xs hover:underline duration-150  text-zinc-600' to="/projects">Projects</Link>
        <Link className='text-xs hover:underline duration-150  text-zinc-600' to="/blog">Blog</Link>
        <Link className='text-xs hover:underline duration-150  text-zinc-600' to="/contact">Contact</Link>
     </div>
       <div className='flex flex-col items-start justify-center gap-1 w-1/4 ml-10'>
        <h2 className='font-semibold text-[#0f172a] text-sm mb-2'>Contact</h2>
        <p className='text-xs'>khanfaijal000@gmail.com</p>
        <p className='text-xs'>Ranchi, Jharkhand, India</p>

        <p className='text-xs mt-3'>Made with ❤️ by Faizal Khan</p>
        <p className='text-xs'>© 2024 All rights reserved</p>
     </div>
    </div>
  )
}

export default Footer