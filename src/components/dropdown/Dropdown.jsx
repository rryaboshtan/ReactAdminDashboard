import React from 'react';
import { useRef } from 'react';

import './dropdown.css';
import clickOutsideRef from '../../helpers/clickOutsideRef';

const Dropdown = props => {
   const dropdown_toggle_el = useRef(null);
   const dropdown_content_el = useRef(null);

   clickOutsideRef(dropdown_content_el, dropdown_toggle_el);

   return (
      <div ref={dropdown_toggle_el} className='dropdown'>
         <button className='dropdown__toggle'>
            {props.icon ? <i className={props.icon}></i> : ''}
            {props.badge ? <span className='dropdown__toggle-badge'> {props.badge} </span> : ''}
            {props.customToggle ? props.customToggle() : ''}
         </button>

         {/* props.originClass is the .origin-top in dropdown.css */}
         <div ref={dropdown_content_el} className={`dropdown__content ${props.originClass}`}>
            {props.contentData && props.renderItems ? props.contentData.map(item => props.renderItems(item)) : ''}
            {props.renderFooter ? <div className='dropdown__footer'>{props.renderFooter()}</div> : ''}
         </div>
      </div>
   );
};

export default Dropdown;
