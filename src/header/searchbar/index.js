import React, { Component } from 'react';
import { Input } from 'antd';
import { Row, Col } from 'antd';
import './searchbar.scss';
class index extends Component {
    render() {
        return (
             <section className="searchbar">
                <div>
                    <Row>
                    <Col span={6}>
                        <div className="gutter-box"> <Input placeholder="Basic usage" /></div>
                    </Col>
                    <Col span={6}>
                        <div className="gutter-box"> <Input placeholder="Basic usage" /></div>
                    </Col>
                    <Col span={6}>
                        <div className="gutter-box"> <Input placeholder="Basic usage" /></div>
                    </Col>
                    <Col span={6}>
                        <div className="gutter-box"> <Input placeholder="Basic usage" /></div>
                    </Col>
                    </Row>
                </div>
             </section>
        );
    }
}

export default index;