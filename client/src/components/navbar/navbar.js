import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebardata';
import './navbar.css';
import { IconContext } from 'react-icons';


const Navbar = () => {
  const [sidebar , setSidebar] = React.useState(false)

// function Navbar() {
//   const [sidebar, setSidebar] = useState(true);

//   const showSidebar = () => setSidebar(!sidebar);
  


  // const [sidebar, laySidebar] = useState(false);
  // const hideSidebar = () => laySidebar(sidebar);
  
  return (
    <>
      {/* <IconContext.Provider onClick={() => setSidebar(false)} value={{ color: 'black' }}> */}
        <div className='navbar' >
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={() => setSidebar(true)} />
            {/* <span>Menu</span> */}
          </Link>
        </div>
        <nav className='navbarbody' onClick={() => setSidebar(false)}></nav>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={() => setSidebar(false)}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars' onClick={() => setSidebar(false)} >
                <AiIcons.AiOutlineClose onClick={() => setSidebar(false)} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
    </>
  )
}

export default Navbar;
