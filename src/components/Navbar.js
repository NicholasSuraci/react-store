import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {ButtonContainer} from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link className="navbar-brand" to="/">
          Baseline
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item">
            <Link to="/" className="nav-link align-items-center">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`