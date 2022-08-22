import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import {BsGraphUp} from 'react-icons/bs';
import {BiShoppingBag} from 'react-icons/bi';
import {BsPeople} from 'react-icons/bs';
import {GrDocument} from 'react-icons/gr';
import {FiSettings} from 'react-icons/fi';


function Sidebar() {

    return (
        <div className="flex fixed bg-white flex-col p-4  text-sm w-20 h-screen">


            <div className='flex justify-evenly flex-col items-center mt-9'>

            <Link to="/" className='hover:text-red-500 active:text-red-500 focus:text-red-500 '><div className="flex flex-col text-xs items-center mt-[30px] sm:mt-[50px] "><MdOutlineDashboard className=' mb-2 text-[35px]'/><p> Overview</p> </div></Link>
                <div className=" flex flex-col text-xs items-center mt-[30px] sm:mt-[50px] text-[#1E1E1E]"> <BsGraphUp className=' mb-2 text-[32px]'/> <p> Market</p></div>
                <div className=" flex flex-col text-xs items-center mt-[30px] sm:mt-[50px] text-[#1E1E1E]"> <BiShoppingBag className=' mb-2 text-[32px]'/> <p> Portfolio</p></div>
                <div className=" flex flex-col text-xs items-center mt-[30px] sm:mt-[50px] text-[#1E1E1E]"> <BsPeople className=' mb-2 text-[32px]'/> <p> Community</p></div>
                <div className="flex flex-col text-xs items-center mt-[30px] sm:mt-[50px] text-[#1E1E1E]"> <GrDocument className=' mb-2 text-[32px]'/><p>  Reports</p></div>
            <Link to="/settings" className='hover:text-red-500 active:text-red-500 focus:text-red-500'>  <div className="flex flex-col text-xs items-center mt-[30px] sm:mt-[50px]"> <FiSettings className=' mb-2 text-[32px]'/><p> Settings</p></div></Link>
            </div>

        
            
        </div>
        
       
    
    );

}
export default Sidebar; 