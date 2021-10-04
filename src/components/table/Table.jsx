import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './table.css';

const Table = props => {
   const limitDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData;

   const [dataShow, setdataShow] = useState(limitDataShow);

   let pages = 1;
   let range = [];
   let page;

   if (props.limit) {
      page = Math.floor(props.bodyData.length / Number(props.limit));

      pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
      console.log('pages = ', pages);
      range = [...Array(pages).keys()];
   }

   const [currPage, setCurrPage] = useState(1);

   return (
      <div>
         <div className='table-wrapper'>
            <table>
               {props.headData && props.renderHead ? (
                  <thead>
                     <tr>{props.headData.map(item => props.renderHead(item))}</tr>
                  </thead>
               ) : null}
               {props.bodyData && props.renderBody ? <tbody>{dataShow.map(item => props.renderBody(item))}</tbody> : null}
            </table>
         </div>

         {pages > 1 ? (
            <div className='table__pagination'>
               {range.map((item, index) => (
                  <div key={uuidv4()} className={`table__pagination-item ${currPage === index + 1 ? 'active' : ''}`}>{item + 1}</div>
               ))}
            </div>
         ) : null}
      </div>
   );
};

export default Table;
