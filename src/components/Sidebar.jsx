import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from 'react-icons/ri';

import { Headset} from "../assets";

import { links } from "../assets/constants";

const NavLinks =({handleClick}) => (
  <div className="mt-2 ">
    {links.map((item)=>(
      <NavLink 
      key={item.name}
      to={item.to}
      className='flex flex-row my-10
       text-gray-400 hover:text-cyan-400 text-sm font-medium justify-start items-center'
      onClick={()=>  handleClick()}
      >
        <item.icon className="w-4  h-6 mr-2"/>
        {item.name}
      </NavLink>
    ))
    }

  </div>
);


const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

return(
  <div className="md:flex hidden flex-col w-[180px] px-4 bg-[#34005a]">
    <img src={Headset} alt="logo" className="w-36 h-36 object-contain" />
    <NavLinks/>
  </div>
);
};

export default Sidebar;
