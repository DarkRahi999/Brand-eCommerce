import React from 'react'

const Testimonial = ({img, intro, desc, imgCl}) => {
  return (
    <div>
      <div className=" py-12 flex justify-center px-32 ">
          <img src={img} alt="Feedback" className={imgCl} />
        <div className="ml-10">
        <h1 className='quote text-black mb-4'><i class="fa-solid fa-quote-left"></i></h1>
        <p className='text-xl text-gray-800 ml-5 mb-4 italic'>{desc}</p>
        <span className='text-black text-md italic font-bold'>{intro}</span>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;