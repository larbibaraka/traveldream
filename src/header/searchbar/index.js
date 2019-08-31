import React, { Component } from 'react';
import { Row, Col , Button , Input , DatePicker } from 'antd';

import './searchbar.scss';
class index extends Component {
    
    render() {
        const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
        return (
             <section className="searchbar">
                <div>
                    <Row>
                    <Col span={8}>
                        <div className="gutter-box"> <input placeholder="Where are you leaving from ?" /></div>
                    </Col>
                    <Col span={8}>
                        <div className="gutter-box"> <input placeholder="Where do you want to go ?" /></div>
                    </Col>
                    <Col span={4}>
                        <div className="gutter-box"> <DatePicker className="my-datepicker"/></div>
                    </Col>
                    <Col span={2}>
                        <div className="gutter-box"><button>Search</button></div>
                    </Col>
                    </Row>
                </div>
             </section>
        );
    }
}

export default index;