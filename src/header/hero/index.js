import React, { Component } from 'react';
 
import { Row, Col } from 'antd';
import './hero.scss';
class index extends Component {
    render() {
        return (
            <section className="hero-image">
                <div className="hero-text">
                <h1 className="title">Do you want to visit Paris ?</h1>
                <h3>why not</h3>
                </div>
          </section>
        );
    }
}

export default index;