import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>Hello World of React and Webpack!</p>
      
        <Link to="dynamic">Navigate to Dynamic Page</Link>
           
        <div>
          <Link to="nested/nest">nested/nest</Link>
        </div>
        <textarea className='w-100' id="editor_en" textmode="MultiLine"></textarea>
      
    </Layout>
  );
};

export default Home;