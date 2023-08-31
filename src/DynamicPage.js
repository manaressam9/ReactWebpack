import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from './Layout';
import { Link,Outlet } from 'react-router-dom';

const DynamicPage = () => {
  return (
    <Layout>
      <Header as="h2">Dynamic Page 2 </Header>
      <p>This page was loaded asynchronously!!!</p>
      <Link to="/dynamic/m">dynamic/m</Link>
      <Outlet />
    </Layout>
  );
};

export default DynamicPage;