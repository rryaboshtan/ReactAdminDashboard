import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import './topnav.css';

import Dropdown from '../dropdown/Dropdown';
import notifications from '../../assets/JsonData/notification.json';
import userImage from '../../assets/images/MyPhoto.png';
import userMenu from '../../assets/JsonData/user_menus.json';
import ThemeMenu from '../thememenu/ThemeMenu';

const currentUser = {
   displayName: 'Roman',
   image: userImage,
};

const renderNotificationItem = item => (
   <div className='notification-item' key={uuidv4()}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
   </div>
);

const renderUserToggle = () => (
   <div className='topnav__right-user'>
      <div className='topnav__right-user__image'>
         <img src={currentUser.image} alt='' />
      </div>
      <div className='topnav__right-user__name'>{currentUser.displayName}</div>
   </div>
);

const renderUserMenu = item => (
   <Link to='/' key={uuidv4()}>
      <div className='notification-item '>
         <i className={item.icon}></i>
         <span>{item.content}</span>
      </div>
   </Link>
);

const renderFooter = () => <Link to='/'>View All</Link>;

const Topnav = () => {
   return (
      <div className='topnav'>
         <div className='topnav__search'>
            <input type='text' placeholder='Search here...' />
            <i className='bx bx-search'></i>
         </div>
         <div className='topnav__right'>
            <div className='topnav__right-item'>
               <Dropdown
                  originClass={'origin-top'}
                  customToggle={renderUserToggle}
                  contentData={userMenu}
                  renderItems={renderUserMenu}
               ></Dropdown>
            </div>
            <div className='topnav__right-item'>
               <Dropdown
                  icon='bx bx-bell'
                  badge='12'
                  contentData={notifications}
                  renderItems={renderNotificationItem}
                  renderFooter={renderFooter}
               ></Dropdown>
            </div>
            <div className='topnav__right-item'>
               <ThemeMenu></ThemeMenu>
            </div>
         </div>
      </div>
   );
};

export default Topnav;
