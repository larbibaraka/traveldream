import React, { Component } from "react";
import { Row, Col } from "antd";
import eiffileTower from "./images/eiffle_tower.png";
import louvres from "./images/louvres.png";
import NotreDame from "./images/NotredameParis.png";
import "./trips.scss";
class index extends Component {
  render() {
    return (
      <section className="trips">
        <Row>
          <Col className="gutter-row" span={4}>
            <h1 className="title">Trips</h1>
          </Col>
          <Col className="actions" span={16}>
            <a className="actionButtons active">Best Trips</a>
            <a className="actionButtons">Popularity</a>
          </Col>
        </Row>

        <div className="trips-wrapper">
            <div className="trips-card">
                <div className="card-image">
                    <img src={eiffileTower} />
                </div>
                <div className="card-body">
                       <h1>some title</h1>
                       <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,</p>
                </div>
            </div>
        </div>

        <div className="trips-wrapper">
            <div className="trips-card">
                <div className="card-image">
                    <img src={eiffileTower} />
                </div>
                <div className="card-body">
                       <h1>some title</h1>
                       <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,</p>
                </div>
            </div>
        </div>
        
        <div className="trips-wrapper">
            <div className="trips-card">
                <div className="card-image">
                    <img src={eiffileTower} />
                </div>
                <div className="card-body">
                       <h1>some title</h1>
                       <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,</p>
                </div>
            </div>
        </div>
        
        <div className="actions">
          <a className="see_all">See all trips</a>
        </div>
      </section>
    );
  }
}

export default index;
