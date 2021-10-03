import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './topnav.css';

import Dropdown from '../dropdown/Dropdown';

import notifications from '../../assets/JsonData/notification.json';

const renderNotificationItem = (item, index) => (
   <div className='notification-item' key={uuidv4()}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
   </div>
);

const Topnav = () => {
   return (
      <div className='topnav'>
         <div className='topnav__search'>
            <input type='text' placeholder='Search here...' />
            <i className='bx bx-search'></i>
         </div>
         <div className='topnav__right'>
            <div className='topnav__right-item'>
               <Dropdown icon='ba bx-user'></Dropdown>
            </div>
            <div className='topnav__right-item'>
               <Dropdown icon='bx bx-bell' badge='12' contentData={notifications} renderItems={renderNotificationItem}></Dropdown>
            </div>
            <div className='topnav__right-item'>
               <Dropdown></Dropdown>
            </div>
         </div>
      </div>
   );
};

export default Topnav;
