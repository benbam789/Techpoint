import React from 'react';
import './cards.css';
import '../App.css';
import CardItem from './CardItem';

/*<ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>*/

function Cards() {
  return (
    <div className='cards'>
      <h1>ADDITIONAL FEATURES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/datavisual.jpg'
              text='Already Have An account: Track how many people have viewed your market '
              label='Farmer'
              path='/sign-up'
            />
            <CardItem
              src='/images/Card2.jfif'
              text='Rack up points for using our market that can be used as discounts on later purchases'
              label='Customer'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;