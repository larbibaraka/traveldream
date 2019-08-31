import React from 'react';
import Header from '../header';
import Flights from '../flights';
import 'antd/dist/antd.css';
import './app.scss';
 
function App() {
  return (
    <div className="App">
      <Header/>
      <Flights/>
    </div>
  );
}

export default App;
