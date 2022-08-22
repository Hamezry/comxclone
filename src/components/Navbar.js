import React from 'react'
import btn from '../assets/toggle-btn.png';

function Navbar() {
    return (
        <div className="w-full h-14 z-10 fixed flex bg-white items-center p-2">
            <div className="flex justify-between items-center p-1 sm:border-r-2 w-[40%]">
               <img src="https://comx2.netlify.app/assets/comx-logo.svg" 
                alt="new"/>
                <img src={btn} className='hidden sm:block h-[35px]'
                alt="button"/>

            </div>

            <div className="hidden sm:flex justify-evenly items-center py-2 text-right text-base  border-r-2 w-[40%]">
                <p> <span className="text-xs text-[#778CA2]">CASH BALANCE</span> <br /><strong>₦8,374,763</strong> </p>
                <p><span className="text-xs text-[#778CA2]">SECURITIES VALUE </span> <br /> <strong>₦8,374,763</strong></p>
                <p> <span className="text-xs text-[#778CA2]">LOAN BALANCE</span> <br /><strong>₦7,542,246</strong> </p>
            </div>

            <div className="hidden sm:flex border-r-2 justify-center items-center py-3 text-right border-r-2 w-[15%]">
                <button className="bg-black text-[10px] text-white w-40 p-2" >COMPLETE REGISTRATION</button>
            </div>

            <div className="flex w-[5%] ml-[175px] sm:ml-0 justify-center items-center ">
            <button className="bg-green-500 text-white px-4">Live</button>
            </div>
                
        </div>
    
    );

}
export default Navbar;