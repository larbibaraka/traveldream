import React, { Component } from "react";
import { Row, Col } from "antd";
import './footer.scss';
class index extends Component {
  render() {
    return (
      <footer className="footer">
        <Row gutter={24}>
          <Col span={6}>
              <div className="footer-elements">

              </div>
          </Col>
          <Col span={6}>
              <div className="footer-elements">

              </div>
          </Col>
          <Col span={6}>
              <div className="footer-elements">

              </div>
          </Col>
          <Col span={6}>
              <div className="footer-elements">

              </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default index;
