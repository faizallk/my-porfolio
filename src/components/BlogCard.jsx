import React from 'react'

function BlogCard({ blog }) {
  return (
    <div className='shadow-lg bg-[#f8fafc] text-[#0f172a] hover:shadow-xl transition-shadow duration-300 p-4 rounded-md'>
      <h3 className='text-sm text-zinc-700 tracking-tight mb-2'>{blog.date}</h3>
      <h1 className='text-xl text-zinc-700 font-bold'>{blog.title}</h1>
      <p className='mt-2 text-sm text-zinc-500 mb-2'>{blog.description}</p>
      <a href={blog.readMoreLink} className='text-[#8b5cf6] hover:underline duration-150'>Read More</a>
    </div>
  )
}

export default BlogCard