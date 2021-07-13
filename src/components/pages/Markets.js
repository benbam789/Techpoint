import React from 'react';
import { Grid } from '@material-ui/core';
//import '../../App.css'
import Market from './Market';

const markets = [
  {id: 1, name: 'Food 1', description: 'Grapes.', price: '$5'},
  {id: 2, name: 'Food 2', description: 'Corn.', price: '10'},
];


const Markets = () => {
  return (
    <main>
      <Grid container justify = "center" spacing={4}>
        {markets.map((market) => (
          <Grid item key ={market.id} xs={12} sm={6} md ={4} lg={3}>
            <Market market={market} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Markets