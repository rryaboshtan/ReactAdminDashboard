import React from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Table from '../components/table/Table';
import StatusCard from '../components/statusCard/StatusCard';
import statusCards from '../assets/JsonData/status-card-data.json';

const chartOptions = {
   series: [
      {
         name: 'Online Customers',
         data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
      },
      {
         name: 'Store Customers',
         data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
      },
   ],
   options: {
      color: ['#6ab04c', '#2980b9'],
      chart: {
         background: 'transparent',
      },
      dataLabels: {
         enabled: false,
      },
      stroke: {
         curve: 'smooth',
      },
      xaxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      legend: {
         position: 'top',
      },
      grid: {
         show: false,
      },
   },
};

const topCustomers = {
   head: ['user', 'total orders', 'total spending'],
   body: [
      {
         username: 'John Doe',
         order: '490',
         price: '$15.870',
      },
      {
         username: 'Frank Iva',
         order: '250',
         price: '$12.251',
      },
      {
         username: 'Anthony Baker',
         order: '120',
         price: '$10.840',
      },
      {
         username: 'Frank Iva',
         order: '110',
         price: '$9.251',
      },
      {
         username: 'Anthony Backer',
         order: '80',
         price: '$8.840',
      },
   ],
};

const latestOrders = {
   head: ['order_id', 'user', 'total price', 'date', 'status'],
   body: [
      {
         id: '#0d1711',
         user: 'john doe',
         date: '17 Jun 2021',
         price: '$900',
         status: 'shipping',
      },
      {
         id: '#0d1712',
         user: 'frank iva',
         date: '1 Jun 2021',
         price: '$400',
         status: 'paid',
      },
      {
         id: '#0d1713',
         user: 'anthony baker',
         date: '27 Jun 2021',
         price: '$200',
         status: 'pending',
      },
      {
         id: '#0d1714',
         user: 'frank doe',
         date: '3 Jun 2021',
         price: '$400',
         status: 'paid',
      },
      {
         id: '#0d1715',
         user: 'anthony lasker',
         date: '23 Jun 2021',
         price: '$240',
         status: 'refund',
      },
   ],
};

const orderStatus = {
   shipping: 'primary',
   pending: 'warning',
   paid: 'success',
   refund: 'danger',
};

const renderOrderHead = item => (
   <th key={uuidv4()}>
      {item}
   </th> 
)

const renderOrderBody = (item) => (
   <tr>
      <td>{item.id}</td>
      <td>{item.user}</td>
      <td>{item.price}</td>
      <td>{item.date}</td>
      <td>
         <span>{item.status}</span>
      </td>
   </tr>
);

const renderCustomerHead = (item) => <th key={uuidv4()}>{item}</th>;

const renderCustomerBody = (item) => (
   <tr key={uuidv4()}>
      <td>{item.username}</td>
      <td>{item.order}</td>
      <td>{item.price}</td>
   </tr>
);

const Dashboard = () => {
   return (
      <div>
         <h2 className='page-header'>Dashboard</h2>
         <div className='row'>
            <div className='col-6'>
               <div className='row'>
                  {statusCards.map((item) => (
                     <div className='col-6'>
                        {item.title}
                        <StatusCard icon={item.icon} count={item.count} title={item.title} />
                     </div>
                  ))}
               </div>
            </div>
            <div className='col-6'>
               <div className='card full-height'>
                  <Chart options={chartOptions.options} series={chartOptions.series} type='line' height='100%' />
               </div>
            </div>
         </div>
         <div className='row'>
            <div className='col-4'>
               <div className='card'>
                  <div className='card_header'>
                     <h3>top customers</h3>
                  </div>
                  <div className='card__body'>
                     <Table
                        headData={topCustomers.head}
                        renderHead={renderCustomerHead}
                        bodyData={topCustomers.body}
                        renderBody={renderCustomerBody}
                     ></Table>
                  </div>
                  <div className='card__footer'>
                     <Link to='/'>View all</Link>
                  </div>
               </div>
            </div>
            <div className='col-8'>
               <div className='card'>
                  <div className='card__header'>
                     <h3>latest orders</h3>
                  </div>
                  <div className='card__body'>
                     <Table
                        headData={latestOrders.head}
                        renderHead={renderOrderHead}
                        bodyData={latestOrders.body}
                        renderBody={renderOrderBody}
                     ></Table>
                  </div>
                  <div className='card__footer'>
                     <Link to='/'>view all</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
