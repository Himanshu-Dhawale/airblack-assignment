import React from "react";
import FooterImage from "../assets/FooterImage.png";

const LandingPage = () => {
  return (
    <div className="w-full">
      <img
        src="Image.png"
        alt="bg-img"
        className=" h-[124px] bg-[#000000] w-full"
      />
      <div className="min-h-[670.4px] h-auto pt-5 pr-6 pb-[30px] pl-6 flex flex-col gap-6 bg-[#0F1014]">
        <div className="w-[327px] flex flex-col gap-[7.09px]">
          <h1 className="w-[327px] h-[60px] text-white font-normal text-3xl leading-[30px]">
            Professional Online Makeup Course
          </h1>
        </div>
        <div className="w-[327px] h-[24.22px] flex gap-[10px]">
          <div className="bg-[#FFFFFF24] w-full h-[24.22px] items-center justify-center flex gap-[7px]">
          <img src="SVG.png" alt="vector" className="w-[9px] h-[12.14px]"/>
          <p className=" h-[13px] font-normal text-xs leading-[12.36px] text-white">Certification Programme</p>
          </div>
          <div className="flex items-center w-full">
          <img src="framer.png" alt="framer" className="w-[9px] h-[12.14px]"/>
          <p className=" h-[13px] font-normal text-xs leading-[12.36px] text-[#F7C852]">Rated 4.85/5</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <img src="tick.png" alt="check" />
              <p className="text-white text-sm leading-[16.8px]">India’s No.1 Online Makeup Course</p>
            </div>
            <div className="flex gap-2">
              <img src="tick.png" alt="check" />
              <p className="text-white text-sm leading-[16.8px]">Learn by LIVE Do-it-Together Classes</p>
            </div>
            <div className="flex gap-2">
              <img src="tick.png" alt="check" />
              <p className="text-white text-sm leading-[16.8px]">Unlimited Practise Session to master skills</p>
            </div>
          </div>
        {/* form */}
        <div>
          <div className="rounded-t-[10px] p-1.5 bg-[#E84D84]">
            <p className="text-xs leading-[14.4px] font-bold text-center text-white">
              Fill the form below to enquire
            </p>
          </div>
          <div className="flex flex-col gap-5 rounded-b-[10px] bg-white p-2.5 pb-4">
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="name">*Enter your name</label>
                <input
                  name="name"
                  className="pt-[7px] px-3 pb-[9px] border border-[#D9D9D9] rounded-sm"
                  placeholder="Eg. Aneesha Mehra"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="phone">*Enter your WhatsApp Number</label>
                <div className="flex gap-[11px]">
                  <select
                    name="phone"
                    id="phone"
                    className="w-[60px]  pt-[7px]  pb-[9px] border border-[#D9D9D9] rounded-sm"
                  >
                    <option value="volvo">+91</option>
                  </select>
                  <input
                    name="mob"
                    className="w-full pt-[7px] px-3 pb-[9px] border border-[#D9D9D9] rounded-sm"
                    placeholder="Eg. 0000000000"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="profession">*Select your profession</label>
                <select
                  name="profession"
                  defaultValue={"Choose the most relevant option"}
                  id="profession"
                  required
                  className="pt-[7px] px-3 pb-[9px] border border-[#D9D9D9] rounded-sm"
                >
                  <option
                    value="Choose the most relevant option"
                    disabled
                    hidden
                  >
                    Choose the most relevant option{" "}
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="goal">*Select your goal</label>
                <select
                  name="goal"
                  defaultValue={"Choose the most relevant option"}
                  id="profession"
                  required
                  className="pt-[7px] px-3 pb-[9px] border border-[#D9D9D9] rounded-sm"
                >
                  <option
                    value="Choose the most relevant option"
                    disabled
                    hidden
                  >
                    Choose the most relevant option{" "}
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="city">*Select your city</label>
                <select
                  name="city"
                  defaultValue={"Choose the most relevant option"}
                  id="profession"
                  required
                  className="pt-[7px] px-3 pb-[9px] border border-[#D9D9D9] rounded-sm"
                >
                  <option
                    value="Choose the most relevant option"
                    disabled
                    hidden
                  >
                    Choose the most relevant option{" "}
                  </option>
                </select>
              </div>
            </div>
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      </div>
      <div className=" bg-[url('SecondImage.png')] min-h-[296.14px] pt-[30px] pr-[24px] pb-[30px] pl-[24px] flex flex-col items-center bg-[#050505] relative second-image">
        <div className="w-[327px] h-[60px] flex items-center gap-[25px] text-center absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="gradient-1.png"
            alt="gradient-vector"
            className="w-[44.5px] h-[5.62px]"
          />
          <h1 className="font-normal text-2xl  leading-[30px] text-[#f5f5f5]">
            Why Should You Join Airblack?
          </h1>
          <img
            src="gradient-2.png"
            alt="gradient-vector"
            className="w-[44.5px] h-[5.62px]"
          />
        </div>
        <div className="w-[327px] h-[76.14px] flex gap-[11px] absolute bottom-24">
          <div className="w-[104px] h-[76.14px] flex flex-col items-center gap-2 text-center">
            <img
              src="Frame1.png"
              alt="Frame"
              className="w-[34.14px] h-[34.14px]"
            />
            <h2 className="w-[104px] h-[34px] font-normal text-sm leading-[17.05px] text-white">
              Do-it-together, live on zoom
            </h2>
          </div>
          <div className="w-[104px] h-[76.14px] flex flex-col items-center gap-2 text-center">
            <img
              src="Frame1.png"
              alt="Frame"
              className="w-[34.14px] h-[34.14px]"
            />
            <h2 className="w-[104px] h-[34px] font-normal text-sm leading-[17.05px] text-white">
              4.8 /5 Rated Classes
            </h2>
          </div>
          <div className="w-[104px] h-[76.14px] flex flex-col items-center gap-2 text-center">
            <img
              src="Frame1.png"
              alt="Frame"
              className="w-[34.14px] h-[34.14px]"
            />
            <h2 className="w-[104px] h-[34px] font-normal text-sm leading-[17.05px] text-white">
              35000+ Members
            </h2>
          </div>
        </div>

        <button className="w-[327px] h-9 apply-btn">Apply Now</button>
      </div>
      <div className='py-[30px] px-[24px] flex flex-col gap-[14px] bg-[#000000]'>
     <div className='w-[327px] h-[90px] !ml-4 flex gap-[25px] items-center'>
      <img src="gradient-1.png" alt="gradient" className='w-[31.5px] h-[5.62px]'/>
     <h1 className='w-[214px] h-[90px] font-normal text-center text-2xl leading-[30px] text-[#f5f5f5]'>
  Get Certified From India's Biggest Beauty Platform
</h1>
<img src="gradient-2.png" alt="gradient" className='w-[31.5px] h-[5.62px]'/>
     </div>
    <img src="certification.png" alt="Certification" className='w-[361px] h-[252px]'/>
   </div>
   <div className=" min-h-[296.14px] pt-[30px] pr-[24px] pb-[30px] pl-[24px] flex flex-col items-center bg-[#050505] relative footer" style={{ backgroundImage: `url(${FooterImage})` }}>
       <h1 className=" text-white font-normal text-2xl text-center leading-[30px]">Join our growing 
community of 
35,000+ alumni</h1>
<button className="w-[296px] h-9 apply-btn absolute top-28">Apply Now</button>
<div className="flex justify-center items-center gap-[17.35px] w-[186px] absolute bottom-14">
 <img src="Instagram.png" alt="Instagram" className="w-[22.15px] h-[22.15px]" />
 <img src="facebook.png" alt="Facebook" className="w-[22.15px] h-[22.15px]" />
 <img src="Linkedin.png" alt="LinkedIn" className="w-[22.15px] h-[22.15px]" />
 <img src="twitter.png" alt="Twitter" className="w-[22.15px] h-[22.15px]" />
</div>

   </div>
    </div>
  );
};

export default LandingPage;