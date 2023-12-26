import React from 'react'

const SideNavLinks = ({ name, icon, className, action }) => {
  return (
    <div className={'w-auto flex items-center gap-3 text-sm text-white py-[10px] pl-3 pr-10 max-lg:py-[5px]  max-lg:px-5 max-lg:bg-white/10 max-lg:m-1 max-lg:rounded-full max-sm:text-sm   rounded-lg hover:bg-white/10 cursor-pointer ' + className}
      onClick={action}
    >
      <span className='text-lg max-lg:hidden'>{icon}</span>
      {name}
    </div>
  )
}

export default SideNavLinks