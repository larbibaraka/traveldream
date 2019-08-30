import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './navbar.scss';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class index extends Component {
    render() {
        return (
            <section className="navbar">
                <ul className="navbar-left">
                    <li className="logo">
                        <a>TravelDream</a>
                    </li>
                    <li>
                        <a>Flights</a>
                    </li>
                    <li>
                        <a>Hotels</a>
                    </li>
                    <li>
                        <a>Trips</a>
                    </li>
                    <li>
                        <a>Activity</a>
                    </li>
                    <li>
                        <a>Deals</a>
                    </li>   
                </ul>  
                <ul className="navbar-right">
                    <li>
                        <a href="/" className="loginButton" alt="login">login</a>
                    </li>
                </ul>
            </section>
        );
    }
}

export default index;