import React from 'react'
import { Button } from './Button'

function Hero() {
  return (
    <div className = 'hero-btns'>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
        GET STARTED
      </Button>
    </div>
  )
}

export default Hero;
