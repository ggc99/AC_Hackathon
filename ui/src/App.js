import React from 'react';
import UserScan from './UserScan';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
          <Router>
            <Routes>
            <Route path="/" element={<UserScan></UserScan>} />
              <Route path="/admin" element={<UserScan></UserScan>} />
            </Routes>
          </ Router>
    )}
}

export default App;
