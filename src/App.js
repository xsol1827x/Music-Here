import React, { Fragment } from 'react';
import { Home } from './pages/Home';
import { Layout } from './UI/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Featured from './pages/Featured';
import { New } from './pages/New';
import Discover from './pages/Discover';

function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path="/featured" element={<Featured />} />
              <Route exact path="/new-releases" element={<New />} />
              <Route exact path="/discover" element={<Discover />} />
            </Routes>
          </Layout>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
