import React, { Component } from "react";
import { Row, Col, Card, Avatar, Icon } from "antd";
import "./hotels.scss";
class index extends Component {
  render() {
    const { Meta } = Card;
    return (
      <section className="hotels">
        <Row>
          <Col className="gutter-row" span={4}>
            <h1 className="title">Hotels</h1>
          </Col>
          <Col className="actions" span={8}>
            <a className="actionButtons active">Best Price</a>
            <a className="actionButtons">Distance</a>
          </Col>
        </Row>
        <Row  gutter={48} className="hotelswrapper">
          <Col className="gutter-row" span={8} >
            <Card
            //   style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
            <div className="HotelName">

            </div>
            <div className="HotelAdvantages">
                <h5>12,3Km</h5>
                <h5>Free Wi-Fi</h5>
            </div>
            <div className="HotelPricePerNight">
                <a>30$</a>
            </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={8}>   
             <Card
            //   style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
            <div className="HotelName">

            </div>
            <div className="HotelAdvantages">
                <h5>12,3Km</h5>
                <h5>Free Wi-Fi</h5>
            </div>
            <div className="HotelPricePerNight">
                <a>30$</a>
            </div>
            </Card></Col>
          <Col className="gutter-row" span={8}>    
            <Card
            //   style={{ width: 3580 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
            <div className="HotelName">

            </div>
            <div className="HotelAdvantages">
                <h5>12,3Km</h5>
                <h5>Free Wi-Fi</h5>
            </div>
            <div className="HotelPricePerNight">
                <a>30$</a>
            </div>
            </Card></Col>
        </Row>

        <Row  gutter={48} className="hotelswrapper">
          <Col className="gutter-row" span={8} >
            <Card
            //   style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
            <div className="HotelName">

            </div>
            <div className="HotelAdvantages">
                <h5>12,3Km</h5>
                <h5>Free Wi-Fi</h5>
            </div>
            <div className="HotelPricePerNight">
                <a>30$</a>
            </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={8}>   
             <Card
            //   style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
            <div className="HotelName">

            </div>
            <div className="HotelAdvantages">
                <h5>12,3Km</h5>
                <h5>Free Wi-Fi</h5>
            </div>
            <div className="HotelPricePerNight">
                <a>30$</a>
            </div>
            </Card></Col>
          <Col className="gutter-row" span={8}>    
            <Card
            //   style={{ width: 3580 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
            <div className="HotelName">

            </div>
            <div className="HotelAdvantages">
                <h5>12,3Km</h5>
                <h5>Free Wi-Fi</h5>
            </div>
            <div className="HotelPricePerNight">
                <a>30$</a>
            </div>
            </Card></Col>
        </Row>

        <div className="actions">
             <a className="see_all" >See all hotels</a>
        </div>      
      </section>
    );
  }
}

export default index;
