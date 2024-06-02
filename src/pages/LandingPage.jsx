import React from 'react'

const LandingPage = () => {
  return (
    <div className='md:w-full'>
        <img src="src\assets\Image.png" alt="Image" className='w-[375px] h-[124px] bg-[#000000] md:w-full'/>
        <div className='w-[375px] min-h-[670.4px] h-auto pt-5 pr-6 pb-[30px] pl-6 flex gap-6 bg-[#0F1014]'>
          <div className='w-[327px] min-h-[165.4px] h-auto flex flex-col gap-[7.09px]'>
             <h1 className='w-[327px] h-[60px] text-white font-normal text-3xl leading-[30px]'>Professional Online Makeup Course</h1>
             <div className='w-[327px] min-h-[24.22px] flex gap-[10px]'>
              <div className='w-[166px] min-h-[24.22px] rounded-[5px] pw-[166.16px] h-[24.22px] p-[5.11px_11.08px_5.11px_11.08px] gap-[7px] rounded-tl-[5px] relative opacity-0 border-[2px] border-white'>
                 <img src="src/assets/Vector.png" alt="Vector" className='w-[8.66px] h-[11.9px] absolute top-[0.06px] left-[0.21px]  bg-[#fafafa]'/>
                 <p className='w-[128px] h-[13px] font-normal text-xs leading-[12.36px] text-[#fafafa]'>Certification Programme</p>
              </div>
             </div>
             
          </div>
          
        </div>
        <div className="w-[375px] min-h-[296.14px] pt-[30px] pr-[24px] pb-[30px] pl-[24px] flex flex-col items-center bg-[#050505] relative">
  <img 
    src="src/assets/SecondImage.png" 
    alt="Second-Image" 
    className="w-[360px] h-[360px]"
  />
  <div className="w-[327px] h-[60px] flex gap-[25px] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <img 
      src="src/assets/gradient-1.png" 
      alt="gradient-vector" 
      className="w-[44.5px] h-[5.62px]"
    />
    <div className='absolute w-[188px] m-auto'>
    <h1 className="font-normal text-2xl  leading-[30px] text-[#f5f5f5]">
      Why Should You Join Airblack?
    </h1>
    </div>
    <img 
      src="src/assets/gradient-2.png" 
      alt="gradient-vector" 
      className="w-[44.5px] h-[5.62px]"
    />
  </div>
  <div className='w-[327px] h-[76.14px] flex gap-[11px]'>
    <div className='w-[104px] h-[76.14px] flex flex-col items-center gap-2 text-center border'>
      <img src="src\assets\Frame1.png" alt="Frame" className='w-[34.14px] h-[34.14px]'/>
      <h2 className='w-[104px] h-[34px] font-normal text-sm leading-[17.05px] text-white'>Do-it-together, live on zoom</h2>
    </div>
    <div className='w-[104px] h-[76.14px] flex flex-col items-center gap-2 text-center border'>
      <img src="src\assets\Frame1.png" alt="Frame" className='w-[34.14px] h-[34.14px]'/>
      <h2 className='w-[104px] h-[34px] font-normal text-sm leading-[17.05px] text-white'>Do-it-together, live on zoom</h2>
    </div>
    <div className='w-[104px] h-[76.14px] flex flex-col items-center gap-2 text-center border'>
      <img src="src\assets\Frame1.png" alt="Frame" className='w-[34.14px] h-[34.14px]'/>
      <h2 className='w-[104px] h-[34px] font-normal text-sm leading-[17.05px] text-white'>Do-it-together, live on zoom</h2>
    </div>
  </div>
</div>
    </div>
  )
}

export default LandingPage