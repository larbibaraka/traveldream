import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class index extends Component {
    render() {
        return (
            <section className="navbar">
                <ul className="navbar-left">
                    <li className="logo">
                        <a>eltraveler</a>
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
                        <a className="loginButton">login</a>
                    </li>
                </ul>
            </section>
        );
    }
}

export default index;