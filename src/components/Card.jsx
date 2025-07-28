import React from 'react'
import { Link } from 'react-router-dom'


function Card({ project }) {
  return (


     <Link to={`/projects/${project.id}`} className='bg-[#f8fafc] text-[#0f172a] h-[30vw] overflow-hidden  rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
           <div className='h-[48%]  bg-zinc-300'> 
      <img src={project.image} alt={project.title} className='w-full h-full object-cover rounded-lg' />
           </div>
           <div className='h-[52%]  p-3'>
            <h2 className='text-md font-semibold'>{project.title}</h2>
            <p className='text-sm text-zinc-500'>{project.description}</p>
            <div className='mt-2 flex flex-wrap gap-2'>
              {project.technologies.map((tech, index) => (
                <span key={index} className='text-xs text-zinc-700 bg-gray-200 px-2 py-1 rounded-full'>{tech}</span>
              ))}  </div>
              <div className='mt-3 flex gap-3 items-center'>
                <Link to={project.liveDemo} className='text-sm bg-[#8b5cf6] text-white px-3 py-2 rounded hover:bg-[#8b5cf6]'>Live Demo</Link>
                <Link to={project.github} className='text-sm bg-transparent border-2 border-[#8b5cf6] text-[#8b5cf6] py-1.5 px-3 rounded-md  hover:bg-[#8b5cf6]/5 duration-150'>GitHub</Link>

              </div>

           </div>
                  </Link>
                 
  )
}

export default Card