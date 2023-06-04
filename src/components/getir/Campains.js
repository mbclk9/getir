import React from 'react'

function campains() {
  return (
    <div className=' bg-[#fafafa] py-4 h-[350px] '>
      <div className='container max-w-[1232px] mx-auto '>
        <h3 className=' font-semibold text-sm text-[#191919]'>Kampanyalar</h3>
        <div className='bg-campainsbackground h-72 bg-regal-blue rounded flex items-center justify-between  mt-6'>
            <div className=' ml-12 gap-y-2'>
                <h2 className=' text-2xl text-white  font-bold leading-8 tracking-wide'>Getir'i İndirin!</h2>
                <p className=' text-base text-white mt-3 font-semibold leading-6'>İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.</p>
             <div className=' mt-8 flex gap-x-2'>
                <a href='https://apps.apple.com/app/id995280265'  aria-label='App Store' target='_blank' >
                <img className=' w-40  h-12' src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'></img>
              </a>
              <a href='https://play.google.com/store/apps/details?id=com.getir'  aria-label='Google Play'target='_blank' >
                <img className=' w-40  h-12' src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'></img>
              </a>
              <a href='https://appgallery.huawei.com/#/app/C100954039'  aria-label='AppStore'  target='_blank'>
                <img className=' w-40  h-12' src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'></img>
              </a>
             </div>
            </div>
            
            <img className=' flex items-center justify-center w-[605px]  h-72 bg-no-repeat ' src='https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png'></img> 
            
        </div>
      </div>
    </div>
  )
}

export default campains