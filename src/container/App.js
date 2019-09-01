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
      <Flights/>
      <Hotels/>
    </div>
  );
}

export default App;
