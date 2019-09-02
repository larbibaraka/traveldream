import React, { Component } from "react";
import { Row, Col } from "antd";
import "./attractions.scss";
import {effileTower} from './images/eiffle_tower.png';
import {louvres} from './images/louvres.png';
import {NotreDame} from './images/NotredameParis.png';
import {NotreDame} from './images/forume_des_halles.png';
import {NotreDame} from './images/arc_de_triomphe.png';
import {NotreDame} from './images/sacre_coeur.png';
class index extends Component {
  render() {
    return (
      <section className="attractions">
        <Row>
          <Col className="gutter-row" span={4}>
            <h1 className="title">Attractions</h1>
          </Col>
          <Col className="actions" span={12}>
            <a className="actionButtons active">All</a>
            <a className="actionButtons">Shoppings</a>
            <a className="actionButtons">Shows</a>
            <a className="actionButtons">Parks</a>
            <a className="actionButtons">Circuits</a>
            <a className="actionButtons">Museums</a>
            <a className="actionButtons">Monuments</a>
          </Col>
        </Row>
        <div className="attractionswrapper">
          <Row className="row" gutter={8}>
            <Col span={10}>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                </Col>
                <br />
                <Col span={24}>
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row" gutter={8}>
            <Col span={8}>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </Col>
            <Col span={8}>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </Col>
            <Col span={8}>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </Col>
          </Row>
        </div>

        <div className="actions">
          <a className="see_all">See all attractions</a>
        </div>
      </section>
    );
  }
}

export default index;
