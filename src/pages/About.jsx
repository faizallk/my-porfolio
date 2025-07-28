import React from 'react'
import SkillCard from '../templates/SkillCard'
function About() {
  const skills = [ {name: "HTML", icon: <i className="text-[#8b5cf6] text-xl ri-html5-fill"></i>},{name: "CSS", icon: <i className="text-[#8b5cf6] text-xl ri-css3-fill"></i>},{name: "JavaScript", icon: <i className="text-[#8b5cf6] text-xl ri-javascript-fill"></i>}, {name: "React", icon: <i className="text-[#8b5cf6] text-xl ri-reactjs-fill"></i>}, {name: "Node.js", icon:<i className="text-[#8b5cf6] text-xl ri-nodejs-line"></i>}, {name: "Express", icon: <i className="text-[#8b5cf6] text-xl ri-server-line"></i>}, {name: "MongoDB", icon: <i className="text-[#8b5cf6] text-xl ri-database-2-line"></i>}, {name: "Git", icon:<i className="text-[#8b5cf6] text-xl ri-git-branch-line"></i>}, {name: "Tailwind CSS", icon: <i className="text-[#8b5cf6] text-xl ri-tailwind-css-fill"></i>}];
  return (
    <div className='w-full h-screen p-15'>
      <h1 className='text-5xl font-semibold'>About Me</h1>
      <div className='w-full h-full flex  gap-10'>
      <div className='w-1/2 py-10'>
        
        <p className='text-zinc-800 mb-3'>Hello! I'm Faizal, a passionate full stack developer with over 5 years of experience building web applications. I enjoy creating elegant solutions to complex problems.</p>
        <p className='text-zinc-800 mb-3'>My journey in web development started when I built my first website at the age of 16. Since then, I've worked with various technologies and frameworks to deliver high-quality applications that meet business needs.</p>
        <p className='text-zinc-800 '>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on software architecture.</p>
      </div>
       
      <div className='w-1/2'>
<h1 className='text-2xl font-semibold mb-2'>My Skills</h1>
 <div className='w-[100%] flex flex-wrap gap-4 mt-4'>
  {skills.map((skill, index) => (
    <SkillCard key={index} name={skill.name} icon={skill.icon} /> 
  ))}
    </div>
    </div>
    </div>
</div>
  )
}

export default About