import React, { Component } from 'react';
import { Button } from '../common/button'
import '../../assets/CSS/navbar.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            menuItems: [
                {
                    title: "Home",
                    url: "#",
                    cName: "nav-links"
                }, {
                    title: "Services",
                    url: "#",
                    cName: "nav-links"
                }, {
                    title: "Products",
                    url: "#",
                    cName: "nav-links"
                }, {
                    title: "Contact Us",
                    url: "#",
                    cName: "nav-links"
                }, {
                    title: "Sign Up",
                    url: "#",
                    cName: "nav-links-mobile"
                },
            ],
            activeMenuIndex: 0
        }
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    setActive = (index) => {
        this.setState({activeMenuIndex:index})
    }

    render() {
        return (
            <nav className={"NavbarItems"}>
                <h1 className={"navbar-logo"}>React <i className={"fab fa-react"}></i></h1>
                <div className={"menu-icon"} onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {this.state.menuItems.map((item, index) => {
                        return (
                            <li key={index} className={this.state.activeMenuIndex == index ? "active-menu" : ""} >
                                <a className={item.cName} href={item.url} onClick={()=>this.setActive(index)}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button childern={"Sign Up"} />
            </nav>
        )
    }
}