import React, { useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './thememenu.css';
import clickOutsideRef from '../../helpers/clickOutsideRef';

const modeSettings = [
   {
      id: 'light',
      name: 'Light',
      background: 'light-background',
      class: 'theme-mode-light',
   },

   {
      id: 'dark',
      name: 'Dark',
      background: 'dark-background',
      class: 'theme-mode-dark',
   },
];

const colorSettings = [
   {
      id: 'blue',
      name: 'Blue',
      background: 'blue-color',
      class: 'theme-color-blue',
   },
   {
      id: 'red',
      name: 'Red',
      background: 'red-color',
      class: 'theme-color-red',
   },
   {
      id: 'cyan',
      name: 'Cyan',
      background: 'cyan-color',
      class: 'theme-color-cyan',
   },
   {
      id: 'green',
      name: 'Green',
      background: 'green-color',
      class: 'theme-color-green',
   },
   {
      id: 'orange',
      name: 'Orange',
      background: 'orange-color',
      class: 'theme-color-orange',
   },
];

const ThemeMenu = () => {
   const menuRef = useRef(null);
   const menuToggleRef = useRef(null);

   clickOutsideRef(menuRef, menuToggleRef);

   const setActiveMenu = () => menuRef.current.classList.add('active');
   const closeMenu = () => menuRef.current.classList.remove('active');

   const [currMode, setCurrMode] = useState('light');
   const [currColor, setCurrColor] = useState('blue');

   const setMode = mode => {
      setCurrMode(mode.id);
      localStorage.setItem('themeMode', mode.class);
   };
   const setColor = color => {
      setCurrColor(color.id);
      localStorage.setItem('colorMode', color.class);
   };

   useEffect(() => {
      const themeClass = modeSettings.find(item => item.class === localStorage.getItem('themeMode', 'theme-mode-light'));
      const colorClass = colorSettings.find(item => item.class === localStorage.getItem('colorMode', 'theme-color-blue'));

      if (themeClass) setCurrMode(themeClass.id);
      if (colorClass) setCurrColor(colorClass.id);
   }, []);

   return (
      <div>
         <button ref={menuToggleRef} className='dropdown__toggle' onClick={setActiveMenu}>
            <i className='bx bx-palette'></i>
         </button>
         <div ref={menuRef} className='theme-menu'>
            <h4>Theme settings</h4>
            <button className='theme-menu__close' onClick={closeMenu}>
               <i className='bx bx-x'></i>
            </button>

            <div className='theme-menu__select'>
               <span>Choose mode</span>
               <ul className='mode-list'>
                  {modeSettings.map(item => (
                     <li key={uuidv4()} onClick={() => setMode(item)}>
                        <div className={`mode-list__color ${item.background} ${item.id === currMode ? 'active' : ''}`}>
                           <i className='bx bx-check'></i>
                        </div>
                        <span>{item.name}</span>
                     </li>
                  ))}
               </ul>
            </div>

            <div className='theme-menu__select'>
               <span>Choose color</span>
               <ul className='mode-list'>
                  {colorSettings.map(item => (
                     <li key={uuidv4()} onClick={() => setColor(item)}>
                        <div className={`mode-list__color ${item.background} ${item.id === currColor ? 'active' : ''}`}>
                           <i className='bx bx-check'></i>
                        </div>
                        <span>{item.name}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default ThemeMenu;
