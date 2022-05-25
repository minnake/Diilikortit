import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './DealStyles.css';

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "grey",
};

export default class Navigation extends React.Component {

    render() {
        return (
            <NavUnlisted className="navbar is-fixed-top">
                <Link to="/" className="navbar-item" style={linkStyle}><li>Diilit</li></Link>
                <Link to="/form" className="navbar-item" style={linkStyle}><li>Lisää uusi diili</li></Link>
            </NavUnlisted>
        )
    }
}

