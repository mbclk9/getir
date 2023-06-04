import React from 'react'

function Footer() {
  return (
    <div className='footer  max-w-screen box-border text-sm pt-12' >
        <nav className='flex w-full pb-5 '>
            <div className=' max-w-[1232px] flex h-full mx-auto w-full '> 
                <div className=' mr-6 flex-1 p-0 font-semibold '>
                    <div className=' mb-4 font-normal text-lg leading-6 text-primary-regal-blue '>Getir'i İndirin</div>
                    <ol type='number' className=' py-0 list-none m-0'>
                      <li className='pb-4'>
                        <img className=' w-40 truncate cursor-pointer  h-full flex items-center justify-center ' src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'></img>
                      </li>
                      <li  className='pb-4'>
                        <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'></img>
                      </li>
                      <li  className='pb-4'>
                        <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'></img>
                      </li>
                    </ol>
                </div>
                <div className='flex-1 p-0 font-semibold text-sm leading-5'>
                    <div className=' mb-4 font-normal text-lg leading-6 text-primary-regal-blue '>Getir'i keşfedin</div>
                    <ol type='number' className='py-0 font-normal text-[#191919] '>
                      <li className='pb-4 '>
                        <a href='#' className='leading-5 hover:text-regal-blue '>Hakkımızda</a>
                      </li>
                      <li className='pb-4'>
                        <a href='#' className='  leading-5  hover:text-regal-blue '>Kariyer</a>
                      </li>
                      <li className='pb-4'>
                        <a href='#' className='  leading-5  hover:text-regal-blue '>Teknoloji Kariyerleri</a>
                      </li>
                      <li className='pb-4'>
                        <a href='#' className='  leading-5  hover:text-regal-blue'>İletişim</a>
                      </li>
                      <li className='pb-4'>
                        <a href='#' className='  leading-5  hover:text-regal-blue'>Sosyal Sorumluluk Projeleri</a>
                      </li>
                    </ol>
                </div>
                <div className='flex-1 p-0 font-semibold text-sm leading-5'>
                    <div className=' mb-4 font-normal text-lg leading-6 text-primary-regal-blue '>Yardıma mı ihtiyacınız var?</div>
                    <ol type='number' className='py-0 font-normal text-[#191919]'>
                      <li className='pb-4'>
                        <a href='#' className='leading-5  hover:text-regal-blue'>Sıkça Sorulan Sorular</a>
                      </li>
                      <li className='pb-4'>
                        <a href='#' className='leading-5  hover:text-regal-blue'>Kişisel Verilerin Korunması</a>
                      </li>
                      <li className='pb-4'>
                        <a href='#' className='leading-5  hover:text-regal-blue'>Gizlilik Politikası</a>
                      </li>
                      <li className='pb-4'>
                        <a href='#' className='leading-5  hover:text-regal-blue'>Kullanım Koşulları</a>
                      </li>
                      <li className='pb-4'>
                        <a href='#' className='leading-5  hover:text-regal-blue'>Çerez Politikası</a>
                      </li>
                    </ol>
                </div>
                <div className='flex-1 p-0 font-semibold text-sm leading-5'>
                    <div className=' mb-4 font-normal text-lg leading-6 text-primary-regal-blue '>İş Ortağımız Olun</div>
                    <ol type='number' className='py-0 font-normal text-[#191919]'>
                      <li className='pb-4'>
                        <a href='#' className='leading-5  hover:text-regal-blue '>Bayimiz Olun</a>
                      </li>
                      <li className='pb-4'>
                        <a href='#' className='leading-5  hover:text-regal-blue '>Deponuzu Kiralayın</a>
                      </li>
                      <li className='pb-4'>
                        <a href='#' className='leading-5  hover:text-regal-blue '>GetirYemek Restoranı Olun</a>
                      </li>
                      <li className='pb-4'>
                        <a href='#' className='leading-5  hover:text-regal-blue '>GetirÇarşı İşletmesi Olun</a>
                      </li>
                      <li className='pb-4'>
                        <a href='#' className='leading-5  hover:text-regal-blue '>Zincir Restoranlar</a>
                      </li>
                    </ol>
                </div>
                <div className='p-0 font-semibold'>
                      <div className=' relative  rounded-lg bg-white flex items-center text-center justify-center '>
                        <img className=' w-16 h-20' src='https://cdn.getir.com/getirweb-images/common/etbis.png'></img>
                      </div>
                </div>
            </div>
        </nav>
        <article className='flex items-center ] box-border '>
          <div className='flex items-center py-6 border-t-[1px] max-w-[1232px] mx-auto  w-full  border-[#f3f'>  
                <span className=' text-sm font-normal mr-3 text-[#525252]'>© 2023 Getir</span>
                <div>
                  <a className=' text-regal-blue text-sm' href='#'> · Bilgi Toplumu Hizmetleri</a>
                </div>
                <div className='flex-1'>
                  <ol type='number' className=' justify-end flex'>
                    <li className=' w-8'>
                      <a href='#' className='w-full h-full flex items-center justify-center'></a>
                    </li>
                    <li className=' w-8'></li>
                    <li className=' w-8'></li>
                    <li className=' w-8'></li>
                  </ol>
                </div>
          </div>
        </article>
    </div>
  )
}

export default Footer