import React from 'react';
import { Rules } from './rules';
import { Game } from './game'
import '../App.css';

export class Mastermind extends React.Component {
    render() {
      return (
      <div className='container'>
        <h2 className='title'> MasterMind </h2>
        <Rules />
        <Game />      
      </div>
      );
    }
  }