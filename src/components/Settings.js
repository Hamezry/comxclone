import React from 'react'
import profile from '../assets/profile.png';

const Settings = () => {
  return (
    <div className="w-full h-screen sm:flex mr-[10px] ml-[100px] mt-16">
       
      {/*GENERAL INFO CONTAINER */}
       
      <div className='bg-white h-[750px] flex ml-[100px] mt-[70px] w-[1400px]'>

        {/*GENERAL INFO 1 */}
        <div className='w-[75%] p-[20px]'>

          <p>General information</p>

          <div className='flex items-center w-[690px] border mt-[20px] p-4'>
            <img src={profile } alt='p-icon'/>
            <p className='ml-4'><span className='text-xs'>Shade Martins</span> <br/> 23746809136</p>
            <div className='p-2 ml-[220px] w-[248px] text-xs bg-[#F6BB5B26] border-2 border-[#F6BB5B]  border-dashed'><p>KYC Incomplete <br/>
             You have incomplete account details.Kindly click here to <a href='www.com' className='text-[#E55541]'>fill the KYC form.</a></p></div>

          </div>

          <div className='flex mt-[40px]'>
            {/* PERSONAL DETAILS */}
            <div className='w-[340px] text-xs h-[300px] p-4 border shadow-slate-900'>
             <p> Personal details</p>

             <div className='flex justify-between mt-4'> 
               <p className='text-[14px]'> <span className='text-[10px] text-[#778CA2] '>FIRST NAME:</span> <br/> Shade</p>
               <p className='text-[14px]'> <span className='text-[10px] text-[#778CA2]'>  LAST NAME:</span> <br/>  Martin</p>
             </div>

             <div className='flex justify-between mt-[40px]'> 
               <p className='text-[14px]'> <span className='text-[10px] text-[#778CA2] '>CLIENT ID:</span> <br/> 454397867543</p>
               <p className='text-[14px]'> <span className='text-[10px] text-[#778CA2]'>  PHONE NUMBER:</span> <br/> 08097867543</p>
             </div>

             <div className='flex justify-between mt-[50px]'> 
               <p className='text-[14px]'> <span className='text-[10px] text-[#778CA2] '>EMAIL ADDRESS: </span> <br/> shademartins@gmail.com</p>
             </div>

            </div>

            {/* MEMBERSHIP */}
            <div className='ml-4 w-[336px] h-[190px] px-3 border '>

             <div className='flex justify-between mt-4'> 
               <p className='text-[14px]'>Membership </p>
               <p className='text-[14px] text-[#00CE7D]'> Upgrade</p>
             </div>

             <div className='flex mt-4'> 
               <p className='text-[12px]'> <span className='text-[10px] text-[#778CA2] '>KYC STATUS:</span> <br/>Incomplete </p>
               <p className='text-[12px] ml-[120px]'> <span className='text-[10px] text-[#778CA2]'>  CATEGORY:</span> <br/> PROMOTER</p>
             </div>


            </div>

          </div>

          {/* BUTTONS */}
          <div className='mt-[150px]'>
            <button className='bg-black text-white p-4'> UPDATE SETTINGS</button>
            <button className=' w-[148px] bg-[#F4F4F6] ml-4 p-4'> CANCEL</button>
          </div>

        </div>
       
        {/*GENERAL INFO 2 */}
        <div className='p-4 border-l-2 '>
          <div className='gap-[50px] text-[#98A9BC]'>
            <p className='text-black'>General information</p>
            <p className='mt-4'>Security</p>
            <p className='mt-4'>Bank details</p>
            <p className='mt-4'>Notifications</p>
          </div>

          <div className='text-[#98A9BC] mt-[450px]'>
            <p>Help center</p>
            <p className='mt-4'>Contact us</p>
            <p className='mt-4'>Close account</p>
          </div>

        </div>



      </div>


    </div>
  )
}

export default Settings