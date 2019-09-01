import React from 'react';
import Header from '../header';
import Flights from '../flights';
import Hotels from '../hotels';
import 'antd/dist/antd.css';
import './app.scss';
 
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Flights/>
        <Hotels/>
      </div>
    </div>
  );
}

export default App;
