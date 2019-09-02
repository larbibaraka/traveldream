import React, { Component } from "react";
import { Row, Col } from "antd";
import "./attractions.scss";
import eiffileTower from './images/eiffle_tower.png';
import louvres from './images/louvres.png';
import NotreDame from './images/NotredameParis.png';
import forumeHalles from './images/forume_des_halles.png';
import arcTriomphe from './images/arc_de_triomphe.png';
import sacreCoeur from './images/sacre_coeur.png';
 
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
            <Col span={8}>
              <img
                alt="eiffile Tower"
                src={eiffileTower}
              />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <img
                    alt="louvres"
                    src={louvres}
                  />
                </Col>
                <br />
                <Col span={24}>
                  <img
                    alt="Notre Dame de paris"
                    src={NotreDame}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row" gutter={8}>
            <Col span={8}>
              <img
                alt="forume des Halles"
                src={forumeHalles}
              />
            </Col>
            <Col span={8}>
              <img
                alt="arc de Triomphe"
                src={arcTriomphe}
              />
            </Col>
            <Col span={8}>
              <img
                alt="sacre Coeur"
                src={sacreCoeur}
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
