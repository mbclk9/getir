import React from 'react'

function Category({ category:{id , title , image}  }) {
  return (
    <a href='#' className='flex flex-col items-center group rounded-md gap-y-4 mx-1   text-center px-2 py-4 transition hover:bg-purple-50'>
        <img src={image} alt={title} className='w-12 h-12 rounded border  border-gray-200' ></img>
        <span className='text-sm text-[#3E3E3E] font-semibold  group-hover:text-regal-blue tracking-tight' > {title}  </span>
    </a>
  )
}

export default Category