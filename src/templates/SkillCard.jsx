

function SkillCard({name, icon}) {
  return (
    <div className='w-[12vw] bg-[#f8fafc] text-[#0f172a] rounded-md  shadow-md mb-2 px-2 py-3 flex flex-col justify-center items-center gap-2 hover:shadow-lg transition-shadow duration-300'>
        {icon && (<>
          {icon}
          <span>{name}</span>
        </>)}
    </div>
  )
}

export default SkillCard