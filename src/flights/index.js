import React, { Component } from "react";
import { Table, Row, Col } from "antd";
import "./flights.scss";
import {vuelingLogo} from './companieslogo/vueling.svg';
import { ReactComponent as Logo } from './companieslogo/logo.svg';
import ReactSVG from 'react-svg'
class index extends Component {
  render() {
    const dataSource = [
      {
        key: "1",
        Airline: "Vueling",
        flightId: "V01367",
        Date: "03/11/2019",
        DaysRemain : "In 3 days",
        Departure: "Paris (CDG)",
        DepartureTime : "03:00",
        Arrival: "Miami",
        ArrivalTime : "11:00",
        Time: "08:45",
        LineCode : "CDG - MIA",
        Price: "870$"
      },
      {
        key: "2",
        Airline: "Air France",
        flightId: "AF90",
        Date: "03/11/2019",
        DaysRemain : "In 3 days",
        Departure: "Paris (CDG)",
        DepartureTime : "03:00",
        Arrival: "Miami",
        ArrivalTime : "11:00",
        Time: "08:45",
        LineCode : "CDG - MIA",
        Price: "1023$"
      },
      {
        key: "3",
        Airline: "American",
        flightId: "AA63",
        Date: "03/11/2019",
        DaysRemain : "In 3 days",
        Departure: "Paris (CDG)",
        DepartureTime : "03:00",
        Arrival: "Miami",
        ArrivalTime : "11:00",
        Time: "08:45",
        LineCode : "CDG - MIA",
        Price: "980$"
      },
      {
        key: "4",
        Airline: "Delta",
        flightId: "DL405",
        DaysRemain : "In 3 days",
        Date: "03/11/2019",
        Departure: "Paris (CDG)",
        DepartureTime : "03:00",
        Arrival: "Miami",
        ArrivalTime : "11:00",
        Time: "08:45",
        LineCode : "CDG - MIA",
        Price: "1340$"
      },
      {
        key: "5",
        Airline: "Transavia",
        flightId: "T04330",
        Date: "03/11/2019",
        DaysRemain : "In 3 days",
        Departure: "Paris (CDG)",
        DepartureTime : "03:00",
        Arrival: "Miami",
        ArrivalTime : "11:00",
        Time: "08:45",
        LineCode : "CDG - MIA",
        Price: "930$"
      }
    ];

    const columns = [
      {
        title: "Airline",
        dataIndex: "Airline",
        key: "Airline",
        render: (CompanyName, record) => {
          return (
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
              <Logo />
              </Col>
              <Col span={12}>
                <h3 className="mainInfo">{CompanyName}</h3>
                <h5  className="secondaryInfo">{record.flightId}</h5>
              </Col>
            </Row>
          );
        }
      },
      {
        title: "Date",
        dataIndex: "Date",
        key: "Date",
        render: (date, record) => {
            return (
                <>
                  <h4 className="mainInfo">{date}</h4>
                  <h5  className="secondaryInfo">{record.DaysRemain}</h5>
                </>
            );
          }
      },
      {
        title: "Departure",
        dataIndex: "Departure",
        key: "Departure",
        render: (date, record) => {
            return (
                <>
                  <h4 className="mainInfo">{date}</h4>
                  <h5 className="secondaryInfo">{record.DepartureTime}</h5>
                </>
            );
          }
      },
      {
        title: "Arrival",
        dataIndex: "Arrival",
        key: "Arrival",
        render: (date, record) => {
            return (
                <>
                  <h4 className="mainInfo">{date}</h4>
                  <h5  className="secondaryInfo">{record.ArrivalTime}</h5>
                </>
            );
          }
      },
      {
        title: "Time",
        dataIndex: "Time",
        key: "Time",
        render: (date, record) => {
            return (
                <>
                  <h4 className="mainInfo">{date}</h4>
                  <h5 className="secondaryInfo">{record.DepartureTime}</h5>
                </>
            );
          }
      },
      {
        title: "Price",
        dataIndex: "Price",
        key: "Price",
        render: text => <a className="price_tag">{text}</a>
      }
    ];
    return (
      <section className="flights">
         <Row>
              <Col className="gutter-row" span={4}>
                <h1 className="title">Flights</h1>
              </Col>
              <Col className="actions" span={8}>
                <a className="actionButtons active" >Non stop</a>
                <a className="actionButtons" >Best Price</a>
                <a className="actionButtons" >Airline</a>
                <a className="actionButtons" >Schedule</a>
              </Col>
        </Row>
        <br/>
         <Table pagination={false} dataSource={dataSource} columns={columns} />
        <br/><br/>

        <div className="actions">
             <a className="see_all" >See all flights</a>
        </div>
      </section>
    );
  }
}

export default index;
