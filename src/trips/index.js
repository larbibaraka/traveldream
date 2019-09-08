import React, { Component } from 'react';
import { Row, Col } from "antd";
import './trips.scss';
class index extends Component {
    render() {
        return (
            <section className="attractions">
            <Row>
              <Col className="gutter-row" span={4}>
                <h1 className="title">Attractions</h1>
              </Col>
              <Col className="actions" span={16}>
                <a className="actionButtons active">All</a>
                <a className="actionButtons">Shoppings</a>
                <a className="actionButtons">Shows</a>
                <a className="actionButtons">Parks</a>
                <a className="actionButtons">Circuits</a>
                <a className="actionButtons">Museums</a>
                <a className="actionButtons">Monuments</a>
              </Col>
            </Row>
    
            <div className="actions">
              <a className="see_all">See all trips</a>
            </div>
          </section>
        );
    }
}

export default index;