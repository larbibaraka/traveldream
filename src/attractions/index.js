import React, { Component } from "react";
import { Row, Col } from "antd";
import "./attractions.scss";
import eiffileTower from "./images/eiffle_tower.png";
import louvres from "./images/louvres.png";
import NotreDame from "./images/NotredameParis.png";
import forumeHalles from "./images/forume_des_halles.png";
import arcTriomphe from "./images/arc_de_triomphe.png";
import sacreCoeur from "./images/sacre_coeur.png";

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

        <div class="grid-container">
          <div class="image2">
            <img src={louvres} alt=""/>
          </div>
          <div class="image1">
            <img src={eiffileTower} alt=""/>
          </div>
          <div class="image3">
            <img src={NotreDame} alt=""/>
          </div>
          <div class="image4">
            <img src={forumeHalles} alt=""/>
          </div>
          <div class="image5">
            <img src={arcTriomphe} alt=""/>
          </div>
          <div class="image6">
            <img src={sacreCoeur} alt=""/>            
          </div>
        </div>

        <div className="actions">
          <a className="see_all">See all attractions</a>
        </div>
      </section>
    );
  }
}

export default index;
