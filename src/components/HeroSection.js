import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

/*<Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onCLick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>*/

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>HEALTHY EATING MADE EASY</h1>
      <p>WHAT ARE YOU WAITING ON</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;
