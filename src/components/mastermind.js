import React from 'react';
import { Rules } from './rules';
import { Game } from './game';
import qr from "./images/QR.jpg";
import '../App.css';

export class Mastermind extends React.Component {
    render() {
      return (
      <div className='container'>
        <span class="span2">QR CODE Du Site</span>
        <img src={qr} alt="" />
        <h2 className='title'> MasterMind </h2>
        <Rules />
        <Game />      
      </div>
      );
    }
  }