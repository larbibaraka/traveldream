import React, { Component } from 'react';
import Hero from './hero';
import Searchbar from './searchbar'; 
class index extends Component {
    render() {
        return (
            <>
              <Hero/>
              <Searchbar/>
            </> 
            );
    }
}

export default index;