import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './sidebar.css';

import logo from '../../assets/images/favicon.png';

import sidebar_items from '../../assets/JsonData/sidebar_routes.json';
import { Link } from 'react-router-dom';

// function func(icon) {
//    console.log(icon);
// }

const SidebarItem = props => {
   const active = props.active ? 'active' : '';

   return (
      <div className='sidebar__item'>
         <div className={`sidebar__item-inner ${active}`}>
            <i className={props.icon}></i>

            <span>{props.title}</span>
         </div>
      </div>
   );
};

const Sidebar = props => {
   const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname);

   return (
      <div className='sidebar'>
         <div className='sidebar__logo'>
            <img src={logo} alt='company logo' />
         </div>
         {sidebar_items.map((item, index) => (
            <Link to={item.route} key={uuidv4()}>
               {/* <div>{item.display_name}</div> */}
               <SidebarItem title={item.display_name} icon={item.icon} active={index === activeItem}></SidebarItem>
            </Link>
         ))}
      </div>
   );
};

export default Sidebar;
