import React from 'react';
import Header from '../header';
import Flights from '../flights';
import Hotels from '../hotels';
import Attractions from '../attractions';
import Trips from '../trips';
import Footer from '../footer';
import 'antd/dist/antd.css';
import './app.scss';
 
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Flights/>
        <Hotels/>
        <Attractions/>
        <Trips/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
