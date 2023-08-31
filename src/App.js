import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Bluh from './Bluh';
import Bluhh from './Bluhh';
import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/dynamic" element={<DynamicPage />} >
          <Route path="m" element={<Bluh />} />
          </Route>
          <Route path="nested/nest" element={<Bluhh />} />
          <Route element={<NoMatch/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
