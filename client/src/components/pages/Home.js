import React, { useContext, useEffect } from 'react';
import Transactions from '../transactions/Transactions';
import TransactionForm from '../transactions/TransactionForm';
import TransactionFilter from '../transactions/TransactionFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <TransactionForm />
      </div>
      <div>
        <Transactions />
      </div>
    </div>
  );
};

export default Home;
