import React from 'react';
import BlockDetail from '../../components/BlockDetail';
import Layout from '../../components/Layout';

function action(ctx, { hash }) {
  return {
    title: 'Chainyard Coding Challenge: ',
    chunks: ['block-detail'],
    component: (
      <Layout>
        <BlockDetail hash={hash} />
      </Layout>
    ),
  };
}

export default action;
