import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Table from '../components/table/Table';

import customerList from '../assets/JsonData/customers-list.json';

const customerTableHead = ['', 'name', 'email', 'phone', 'total orders', 'total spend', 'location'];

const renderHead = item => <th key={uuidv4()}> {item} </th>;

const renderBody = item => (
   <tr key={uuidv4()}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.total_orders}</td>
      <td>{item.total_spend}</td>
      <td>{item.location}</td>
   </tr>
);

const Customers = () => {
   return (
      <div>
         <h2 className='page-header'>customers</h2>
         <div className='row'>
            <div className='col-12'>
               <div className='card'>
                  <div className='card__body'>
                     <Table
                        limit='10'
                        headData={customerTableHead}
                        renderHead={renderHead}
                        bodyData={customerList}
                        renderBody={renderBody}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Customers;
