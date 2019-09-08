import React, { Component } from "react";
import { Row, Col } from "antd";
import "./footer.scss";
class index extends Component {
  render() {
    return (
      <footer className="footer">
        <Row gutter={24}>
          <Col span={6}>
            <div className="footer-elements">
              <h1>Cites</h1>
              <ul>
                <li><a href="/">Paris</a></li>
                <li><a href="/">Miami</a></li>
                <li><a href="/">London</a></li>
                <li><a href="/">Madrid</a></li>
                <li><a href="/">Tokyo</a></li>
                <li><a href="/">Pekin</a></li>
              </ul>
            </div>
          </Col>
          <Col span={6}>
            <div className="footer-elements">
              <h1>Explore</h1>
              <ul>
                <li><a href="/">Register</a></li>
                <li><a href="/">Login</a></li>
                <li><a href="/">Assistance</a></li>
                <li><a href="/">Eco</a></li>
             </ul>
            </div>
          </Col>
          <Col span={6}>
            <div className="footer-elements">
              <h1>About us</h1>
              <ul>
                <li><a href="/">About TravelDream</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms of Usage</a></li>
              </ul>
            </div>
          </Col>
          <Col span={6}>
            <div className="footer-elements">
              <h1>Contact</h1>
              <ul>
                <li><a href="/">feel free to get in touch via email</a></li>
                <li className="activelink"><a href="/"  ></a>support@travelgream.com</li>
              </ul>
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default index;
