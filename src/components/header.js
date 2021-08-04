import React from 'react';
import Tomato from '../assets/images/TOMATO.png'

export default function Header() {

    return(
        <header className="app-header">
            <img className="tomato-graphic" src={Tomato} width="100px"></img>
            <h1 className="pomodoro-heading"><b><span>P</span>om<span>od</span>oro</b></h1>
        </header>
    );




};