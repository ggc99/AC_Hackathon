import React from 'react';

import UserScan from './UserScan';
import Admin from './Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
          <Router>
            <Routes>
            <Route path="/" element={<UserScan></UserScan>} />
              <Route path="/admin" element={<Admin></Admin>} />
            </Routes>
          </ Router>
    )}
}

export default App;
