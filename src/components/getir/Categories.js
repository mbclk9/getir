import React, { useEffect } from 'react'
import { useState } from 'react'
import categoryData from 'Api/categories.json'
import Category from 'components/ui/Category'

function Categories() {
    
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
        setCategories(categoryData);
  } )

  return (
    <div className='bg-white py-4'>
      <div className='container max-w-[1232px] mx-auto'>
        <h3 className=' font-semibold text-sm text-[#191919]  mb-3 '>Kategoriler</h3>
        <div className='grid grid-cols-10 '>
            {categories && categories.map((category, index) => <Category key={index} category={category}/>)}
        </div>
      </div>
    </div>
  )
}

export default Categories