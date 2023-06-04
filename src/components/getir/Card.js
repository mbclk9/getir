import React from 'react'

function Card() {
  return (
     <div className=' bg-[#fafafa] py-10  h-[450px]'>
         <div className='container max-w-[1232px] flex mx-auto gap-x-6  '>
           <div className=' w-[400px] h-[353px] bg-white  rounded-md p-7 '>
                <div className=' flex flex-col px-4 items-center text-center mt-7'>
                    <img className='' src='https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg'></img>
                    <h2 className=' text-lg font-semibold text-primary-regal-blue mt-6 '>Her siparişinize bir kampanya</h2>
                    <p className=' text-[#697488] text-base leading-6 font-normal mt-2' >Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.</p>
                </div>
           </div>
           <div className=' w-[400px] h-[353px] bg-white  rounded-md pt-7 '>
                <div className=' flex flex-col px-4 items-center text-center mt-7 '>
                    <img className=' ' src='https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg'></img>
                    <h2 className=' text-lg font-semibold text-primary-regal-blue mt-6 '>Dakikalar içinde kapınızda</h2>
                    <p className=' text-[#697488] text-base leading-6 font-normal mt-2' >Getir’le siparişiniz dakikalar içinde kapınıza gelir.</p>
                </div>
           </div>
           <div className=' w-[400px] h-[353px] bg-white  rounded-md p-7 '>
                <div className=' flex flex-col px-4 items-center text-center mt-7'>
                    <img className='' src='	https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg'></img>
                    <h2 className=' text-lg font-semibold text-primary-regal-blue mt-6 '> Binlerce çeşit mutluluk</h2>
                    <p className=' text-[#697488] text-base leading-6 font-normal mt-2' >Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.</p>
                </div>
           </div>
         </div>
     </div>

 

  )
}

export default Card