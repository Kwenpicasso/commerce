import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useRef } from 'react';
import { Link } from 'react-router-dom';






const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }
  
  return (
   <div className="wrapper">
    <div className="header flex justify-between items-center py-3 px-5 sm:py-1 md:py-0 w-full h-20 fixed z-[100] bg-white shadow-2xl">
      <div className="logo w-[6%] font-bold font-poppins text-lg sm:text-sm">
        <h1>BLURB</h1>
        
       
      </div>
       
       <nav ref={navRef}>
        <ul className='flex gap-5 items-center'>
          <li className='animate-pulse'><a href=""><Link to='/men'>Men</Link></a></li>
          <li className='animate-pulse'><a href=""><Link to='/women'>Women</Link></a></li>
          <li className='animate-pulse'><a href=""><Link to='/accessories'>Accessories</Link></a></li>
          <div className='nav-btn nav-close-btn' onClick={showNavbar}>
          <CloseIcon/>
           </div>
        </ul>
        

       </nav> 

       
       <div className=" flex items-center justify-center gap-1">
        <div className='w-[25px] h-[25px] sm:w-[20px] sm:h-[20px] md:w-[20px] md:h-[20px]'>
        <img src="usa.jpg" alt="" />
        </div>
        <a href=""><PersonOutlineOutlinedIcon/></a>

       <div className="cart  relative">
        
        <a href=""><LocalMallIcon /></a>
        <span className='animate-pulse text-sm rounded-full bg-back w-[21px] h-[21px] absolute flex items-center justify-center top-[-10px] right-[-10px]'>0</span>
        </div>

        <div className='nav-btn ml-1' onClick={showNavbar}>
        <MenuIcon/>

       </div>
        
       </div>


      



      

 
    </div>
    
   
   </div>
   
  )
}

export default Navbar
