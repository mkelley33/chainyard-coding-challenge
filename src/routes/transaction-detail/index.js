import React from 'react';
import TransactionDetail from '../../components/TransactionDetail';
import Layout from '../../components/Layout';

function action(ctx, { hash }) {
  return {
    title: 'Chainyard Coding Challenge: ',
    chunks: ['transaction-detail'],
    component: (
      <Layout>
        <TransactionDetail hash={hash} />
      </Layout>
    ),
  };
}

export default action;
