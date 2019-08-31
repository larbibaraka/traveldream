import React, { Component } from 'react';
import { Table, Icon, Switch, Radio, Form, Divider } from 'antd';
import './flights.scss';
class index extends Component {
    render() {
        const dataSource = [
            {
              key: '1',
              Airline: 'Vueling',
              Date: '03/11/2019',
              Departure: 'Paris (CDG)',
              Arrival: 'Miami',
              Time: '08:45',
              Price: '870$',
            },
            {
                key: '2',
                Airline: 'Vueling',
                Date: '03/11/2019',
                Departure: 'Paris (CDG)',
                Arrival: 'Miami',
                Time: '08:45',
                Price: '870$',
              }
          ];
          
          const columns = [
            {
              title: 'Airline',
              dataIndex: 'Airline',
              key: 'Airline',
            },
            {
              title: 'Date',
              dataIndex: 'Date',
              key: 'Date',
            },
            {
              title: 'Departure',
              dataIndex: 'Departure',
              key: 'Departure',
            },
            {
              title: 'Arrival',
              dataIndex: 'Arrival',
              key: 'Arrival',
            },
            {
              title: 'Time',
              dataIndex: 'Time',
              key: 'Time',
            },
            {
              title: 'Price',
              dataIndex: 'Price',
              key: 'Price',
              render: text => <a className="price_tag">{text}</a>,
            }
          ];
        return (
            <section className="flights">
                    <Table dataSource={dataSource} columns={columns} />;
            </section>
        );
    }
}

export default index;