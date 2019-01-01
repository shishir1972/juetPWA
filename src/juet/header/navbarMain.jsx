import React, { Component } from 'react';
import './styles/header.css';
import FirstNavbar from "./firstNavbar";
import SecondNavbar from "./secondNavbar";

class NavBarPackage extends Component{
    render()
    {
        return (
            <div>
            <FirstNavbar />
            <SecondNavbar />
            </div>
        )
    }
}

export default NavBarPackage;