import React from 'react'

const Others = ({title, desc, icon}) => {
  return (
    <div className='flex justify-center'>
    {/* -------------{ Icon section  }---------------- */}
      <div className="icon w-1/12 pt-2 text-violet-900">
        {icon}
      </div>

    {/* -------------{ Description section  }---------------- */}
      <div className="desc w-10/12 ml-3">
        <h2 className='text-xl font-bold text-black pb-2 pl-1'>{title}</h2>
        <p className='justify text-sm w-10/12 pl-3'>{desc}</p>
      </div>
    </div>
  )
}

export default Others
