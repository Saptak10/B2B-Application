import React, { useState, useEffect } from 'react';
import Menu from '../components/Dashboard/Menu/Menu';

const Dashboard = () => {

  return <div className='rounded' style={{
    // display:'flex',
    backgroundColor: '#283d4a',
  }}>
            <Menu/>
        </div>;
};

export default Dashboard;