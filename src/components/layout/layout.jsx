import React, { useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Topnav from '../topnav/TopNav';
import Routes from '../Routes';
import { BrowserRouter, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ThemeAction from '../../redux/actions/ThemeAction';

import './layout.css';

const Layout = () => {
   const ThemeReducer = useSelector(state => state.ThemeReducer);

   const dispatch = useDispatch();

   useEffect(() => {
      const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');
      const colorClass = localStorage.getItem('colorMode', 'theme-color-blue');

      dispatch(ThemeAction.setMode(themeClass));
      dispatch(ThemeAction.setColor(colorClass));
   }, [dispatch]);

   return (
      <BrowserRouter>
         <Route
            render={props => (
               <div className={`layout ${ThemeReducer.mode} ${ThemeReducer.color}`}>
                  <Sidebar {...props} />
                  <div className='layout__content'>
                     <Topnav></Topnav>
                     <div className='layout__content-main'>
                        <Routes></Routes>
                     </div>
                  </div>
               </div>
            )}
         />
      </BrowserRouter>
   );
};

export default Layout;
