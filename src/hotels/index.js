import React, { Component } from 'react';
import { Row, Col } from "antd";
import './hotels.scss';
class index extends Component {
    render() {
        return (
            <section className="hotels">
            <Row>
              <Col className="gutter-row" span={4}>
                <h1 className="title">Hotels</h1>
              </Col>
              <Col className="actions" span={8}>
                <a className="actionButtons active" >Non stop</a>
                <a className="actionButtons" >Best Price</a>
                <a className="actionButtons" >Airline</a>
                <a className="actionButtons" >Schedule</a>
              </Col>
        </Row>
            </section>
        );
    }
}

export default index;