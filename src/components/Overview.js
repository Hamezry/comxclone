
import {BsFillCircleFill} from 'react-icons/bs';
import {IoIosStar } from 'react-icons/io';
import {FaWallet} from 'react-icons/fa'
import{BiCheck} from 'react-icons/bi';
import {RiChat4Fill} from 'react-icons/ri';
import asset from '../assets/asset.png';
import soyabeans from '../assets/soyabeans.png';
import paddy from '../assets/paddy.png';
import maize from '../assets/maize.png';
import soorghum from '../assets/soorghum.png';
import dot from '../assets/dot-icon.png';
import pie from '../assets/pie.png';

function Overview() {

    return (
        <div className="sm:w-full overflow-y-auto sm:flex mr-[10px] ml-[55px] mt-16">
          {/*SECTION 1 */}
          <div className="sm:w-[45%] ml-8  sm:h-[100%]"> 
            <div className="sm:flex justify-between w-[100%]">
              
              <div className="flex flex-col mb-3 items-center bg-white w-[100%] sm:w-[50%] sm:mb-0 p-4 mr-[300px] sm:mr-2 ">

                <div className='flex items-center p-4'>
                  <div className='flex items-center bg-slate-200 mr-5 p-4'> <FaWallet className="h-[15px] text-red-500"/> </div>
                  
                  <p> <span className='text-[#778CA2] font-medium text-[12px]'>WALLET BALANCE</span> <br /><strong className="text-2xl font-bold text-[#1E1E1E]">₦1,352,739.65</strong> </p>
                </div>
                
                <div className="flex text-center pt-3 text-red-500">
                  <p className="text-[12px]">FUND WALLET</p>
                </div>
              </div>

              <div className="flex flex-col items-center bg-white sm:w-[50%] p-4 ">

                <div className='flex items-center p-4'>

                  <div className='flex items-center bg-slate-200 mr-5 p-4'>
                    <img className="h-[15px]"src={asset} alt='icon'/> 
                  </div>
                  
                  <p> <span className='text-[#778CA2] text-[12px]'>ASSET VALUE</span> <br /><strong className="text-2xl text-[#1E1E1E]">₦2,352,739.65</strong> </p>
                </div>
                
                <div className="flex text-center pt-3 text-red-500">
                  <p className="text-[12px]">VIEW PORTFOLIO</p>
                </div>
              </div>

    

            </div>

            {/*PORTFOLIO */}

            <div className="bg-white mt-2 p-1">
              <div className="h-[10%] text-[#778CA2] text-xs border-b-2 p-3">
                <p>PORTFOLIO POSITIONS</p>
              </div>
              <div className="flex sm:justify-evenly items-center">
                <div className="flex flex-col sm:m-[60px]">

                  <div className="flex justify-evenly items-center bg-slate-200 sm:w-[100px]  m-2 rounded-2xl p-1">  <BsFillCircleFill className='h-[15px] text-[#FDBF5F]'/>< p>SMAZ</p> </div>
                  <div className="flex justify-evenly items-center bg-slate-200 sm:w-[100px]  m-3 rounded-2xl p-1"> <BsFillCircleFill className='h-[15px] text-[#4D7CFE]'/> <p>SPRL</p> </div>
                  <div className="flex justify-evenly items-center bg-slate-200 sm:w-[100px]  m-3 rounded-2xl p-1"> <BsFillCircleFill className='h-[15px] text-[#FC5D68]'/> <p>SSGM</p> </div>
                  <div className="flex justify-evenly items-center bg-slate-200 sm:w-[100px]  m-3 rounded-2xl p-1"> <BsFillCircleFill className='h-[15px] text-[#3DD598]'/><p>SBBS</p> </div>

                </div>

                <div className='mt-[20px]'>
                  <img src={pie} alt="pie-chat"/>
                </div>

              </div>

            </div>

            {/*WATCHLIST */}

            <div className="bg-white overflow-y-auto mt-2 p-1">
              <div className="flex items-center h-[60px] text-xs text-[#778CA2] border-b-2 p-3">
                <p>WATCH LIST</p>
              </div>

              <div className=" p-5">
                <table className=" w-full">
                  <tbody>

                    <tr className="border-b-2">

                      <td class="px-4 py-3">
                        <p className="flex items-center text-[#1E1E1E] "> <IoIosStar className='sm:text-[20px] text-[#F6BB5B] mr-4'/> Soybeans (SBBS)</p>
                      </td>
                      <td class="px-4 py-3 text-sm"><p>2,804.12</p></td>
                      <td class="px-4 py-3 text-xs">
                        <p className="px-2 text-[#00CE7D] py-1">+13.13% </p>
                      </td>
                      <td class="px-4 py-3 text-sm"> <p>&gt;</p> </td>
                    </tr>
                    <tr className="border-b-2">
                      <td class="px-4 py-3">
                        <p className="flex items-center  text-[#1E1E1E]"> <IoIosStar className='sm:text-[20px] text-[#F6BB5B] mr-4'/> Paddy Rice (SPRL)</p>
                      </td>
                      <td class="px-4 py-3 text-sm"><p>2,792.67</p></td>
                      <td class="px-4 py-3 text-xs">
                        <p className="text-[#00CE7D] px-2 py-1">+17.79% </p>
                      </td>
                      <td class="px-4 py-3 text-sm"> <p>&gt;</p> </td>
                    </tr>
                    <tr className="border-b-2">
                      <td class="px-4 py-3">
                        <p className="flex items-center  text-[#1E1E1E]"> <IoIosStar className='sm:text-[20px] text-[#F6BB5B] mr-4'/> Soybeans (SBBS)</p>
                      </td>
                      <td class="px-4 py-3 text-sm"><p>2,804.12</p></td>
                      <td class="px-4 py-3 text-xs">
                        <p className="text-[#00CE7D] px-2 py-1">+13.13% </p>
                      </td>
                      <td class="px-4 py-3 text-sm"> <p>&gt;</p> </td>
                    </tr>
                    <tr className="border-b-2">
                      <td class="px-4 py-3">
                        <p className="flex items-center  text-[#1E1E1E]"> <IoIosStar className='sm:text-[20px] text-[#F6BB5B] mr-4'/> Soybeans (SBBS)</p>
                      </td>
                      <td class="px-4 py-3 text-sm"><p>2,804.12</p></td>
                      <td class="px-4 py-3 text-xs">
                        <p className="px-2 text-[#E55541] py-1">+13.13% </p>
                      </td>
                      <td class="px-4 py-3 text-sm"> <p>&gt;</p> </td>
                    </tr>
                    <tr className="border-b-2">
                      <td class="px-4 py-3">
                        <p className="flex items-center  text-[#1E1E1E]"> <IoIosStar className='sm:text-[20px] text-[#F6BB5B] mr-4'/> Soybeans (SBBS)</p>
                      </td>
                      <td class="px-4 py-3 text-sm"><p>2,804.12</p></td>
                      <td class="px-4 py-3 text-xs">
                        <p className="text-[#00CE7D] px-2 py-1">+13.13% </p>
                      </td>
                      <td class="px-4 py-3 text-sm"> <p>&gt;</p> </td>
                    </tr>
                    <tr className="border-b-2">
                      <td class="px-4 py-3">
                        <p className="flex items-center  text-[#1E1E1E]"> <IoIosStar className='text-[20px] text-[#F6BB5B] mr-4'/> Soybeans (SBBS)</p>
                      </td>
                      <td class="px-4 py-3 text-sm"><p>2,804.12</p></td>
                      <td class="px-4 py-3 text-xs">
                        <p className="text-[#00CE7D] px-2 py-1">+13.13% </p>
                      </td>
                      <td class="px-4 py-3 text-sm"> <p>&gt;</p> </td>
                    </tr>

                  </tbody>

                </table>

              </div>
                
              

            </div>


            
              
          </div>

          {/*SECTION 2 */}
          
          <div className=" ml-[32px] mt-3 sm:mt-0 sm:ml-2 sm:w-[25%] sm:h-[100%]"> 
            
            <div className='flex sm:h-[320px] p-2 flex-col bg-white'>
              
              <div className='flex justify-between items-center h-[50px] text-[#778CA2] text-xs border-b-2 p-3'>
                <p>QUICK ACTIONS</p>
                <img src={dot} alt='icon' />
              </div>

              <div className='flex items-center sm:h-[80px] p-3'>
                 <div className='flex items-center bg-slate-200 mr-5 p-4'> <FaWallet className="h-[15px] text-red-500"/> </div>
                 <p className='text-[12px] sm:text-[15px]'> Fund wallet <br/> <span className='text-[#778CA2]'>Add Funds to your wallet</span> </p>
                 <p className=' ml-[50px]'><span> &gt; </span></p>
              </div>

              <div className='flex items-center sm:h-[80px] p-3'>
                 <div className='flex items-center bg-slate-200 mr-5 p-4'> <BiCheck className="sm:h-[15px] text-red-500"/> </div>
                 <p className='text-[12px] sm:text-[15px]'> Complete Registration <br/> <span className='text-[#778CA2]'>Add your information</span> </p>
                 <p className='ml-[50px] sm:ml-[70px]'><span> &gt; </span></p>
              </div>

              <div className='flex items-center sm:h-[80px] p-3'>
                 <div className='flex items-center bg-slate-200 mr-5 p-4'> <RiChat4Fill className="h-[15px] text-red-500"/> </div>
                 <p className='text-[12px] sm:text-[15px]'> Get support <br/> <span className='text-[#778CA2]'>Connect with our team</span>  </p>
                 <p className='ml-[50px] sm:ml-[70px]'><span > &gt; </span></p>
              </div>  

            </div>

            <div className='bg-white mt-2'>
              
              <div className='flex justify-between items-center text-[#778CA2] border-b-2 p-3'>
                <p className=''>FEATURED SECURITIES</p>
                <img src={dot} alt='icon' />
              </div>

              <div className='flex items-center sm:h-[80px] p-3'>
                 <div className='flex items-center mr-5 p-4'> <img src= {soyabeans } alt='ssb' className='rounded-md'/> </div>
                 <p> Soybeans (SBBS) <br/> <span className='text-[#778CA2]'>6547.00</span> </p>
                 <p className='ml-[40px] sm:ml-[80px]'><span > &gt; </span></p>
              </div>

              <div className='flex items-center h-[80px] p-3'>
                 <div className='flex items-center mr-5 p-4'> <img src= {paddy } alt='pdy' className='rounded-md'/> </div>
                 <p> Paddy Rice (SPRL) <br/> <span className='text-[#778CA2]'>6544.09</span>  </p>
                 <p className='ml-[40px] sm:ml-[70px]'><span > &gt; </span></p>
              </div>

              <div className='flex items-center h-[80px] p-3'>
                 <div className='flex items-center mr-5 p-4'> <img src= {maize } alt='smz' className='rounded-md'/>  </div>
                 <p> Maize (SMAZ) <br/> <span className='text-[#778CA2]'>6468.98</span> </p>
                 <p className='ml-[40px] sm:ml-[100px]'><span > &gt; </span></p>
              </div>  

              <div className='flex items-center h-[80px] p-3'>
                 <div className='flex items-center mr-5 p-4'> <img src= {soorghum } alt='ssgrm' className='rounded-md'/>  </div>
                 <p> Soorghum (SBBS) <br/> <span className='text-[#778CA2]'>3686.98</span> </p>
                 <p className='ml-[40px] sm:ml-[70px]'><span > &gt; </span></p>
              </div> 

              <div className='h-[50px] text-center text-md border-t-2 p-3'><p> VIEW MORE</p> </div>

            </div>
          
          </div>

          {/*SECTION 3 */}

          <div className="ml-[32px] mt-3 sm:mt-0  sm:ml-2 sm:w-[30%] mb-[100px] ">

            <div className='bg-white p-2 text-[15px] '>

              <div className='flex text-[#778CA2] sm:text-xs justify-around text-[11px] sm:h-[80px] border-b-2 sm:p-4 items-center'>

                 <p  className='font-bold text-[#1E1E1E] border-b-2 border-b-black p-[10px] sm:p-[30px]'> <strong>LATEST NEWS</strong> </p>
                 <p> LEARN TO TRADE</p> 
                 <p> CHAT</p> 
                 <img src={dot} alt='icon' />

              </div>

              <div className='flex justify-evenly border-b-2 p-3'>

                <div className='flex items-center sm:mr-5 p-4'> <img src= {soyabeans } alt='ssb' className='w-[180px] h-[100px]'/> </div>

                <p> <strong>Stocks - Wall Street Jumps on Trump</strong> <br/> 
                  <span className='text-sm text-[#98A9BC]'>45 minutes ago</span>  <br/> 
                  <span className='text-[#778CA2] mt-5'> By Shreyashi Sanyal (Reuters) - Shares of technology and industrial companies </span>
                </p>

              </div>

              <div className='flex justify-evenly border-b-2 p-3'>

                <div className='flex items-center mr-5 p-4'> <img src= {soyabeans } alt='ssb' className='w-[180px] h-[100px]'/> </div>

                <p> <strong>Kenya regulator urges monitoring </strong> <br/> 
                  <span className='text-sm text-[#98A9BC]'>3 hours ago</span>  <br/> 
                  <span className='mt-5 text-[#778CA2]'> By Ginger Gibson WASHINGTON (Reuters) - A political group backing </span>
                </p>

              </div>

              <div className='flex justify-evenly  border-b-2 p-3'>

                <div className='flex items-center mr-5 p-4'> <img src= {soyabeans } alt='ssb' className='w-[180px] h-[100px]'/> </div>

                <p> <strong> How U.S. retailers turn their bane into </strong> <br/> 
                  <span className='text-sm text-[#98A9BC]'></span>4 hours ago  <br/> 
                  <span className='mt-5 text-[#778CA2]'> By Nivedita Balu and Siddharth Cavale (Reuters) - As retail casualties such as </span>
                </p>

              </div>

              <div className='flex justify-evenly border-b-2 p-3'>

                <div className='flex items-center mr-5 p-4'> <img src= {soyabeans } alt='ssb' className='w-[180px] h-[100px]'/> </div>

                <p> <strong> Top 5 Things to Know in The Market </strong> <br/> 
                  <span className='text-sm text-[#98A9BC]'>45 minutes ago</span>  <br/> 
                  <span className='mt-5 text-[#778CA2]'> WASHINGTON (Reuters) - Nearly 60 former senior U.S. national security  </span>
                </p>

              </div>

              <div className='flex justify-evenly border-b-2 p-3'>

                <div className='flex items-center mr-5 p-4'> <img src= {soyabeans } alt='ssb' className='w-[180px] h-[100px]'/> </div>

                <p> <strong> Nestle hires Rothschild to run Herta sale</strong> <br/> 
                  <span className='text-sm text-[#98A9BC]'>4 minutes ago</span>  <br/> 
                  <span className='mt-5 text-[#778CA2]'>By Martinne Geller LONDON (Reuters) - Packaged food giant Nestle has hired  </span>
                </p>

              </div>

              <div className='h-[60px] text-center  text-md p-3'><p>LEARN MORE</p> </div>


            </div>

          </div>


        </div>
       
    
    );

}
export default Overview; 