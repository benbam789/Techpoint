import React from 'react';
import { Grid } from '@material-ui/core';
import '../../App.css'
import Market from './Market';

const markets = [
  {id: 1, name: 'Soybeans', description: 'Produce', price: 'Prices Available', image:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soya-beans-700-350-7995f02.jpg?webp=true&quality=90&resize=385%2C350 '},
  {id: 2, name: 'Corn', description: 'Produce', price: 'Prices Available', image:'https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg'},
  {id: 3, name: 'Tomatoes', description: 'Produce', price: 'Prices Available', image:'https://cdn.shopify.com/s/files/1/0545/4318/8159/collections/2020-08-22_17.58.14_685x.jpg?v=1613753732'},
  {id: 4, name: 'Cow milk', description: 'Produce', price: 'Prices Available', image: 'https://rawsomedairy.com/wp-content/uploads/2019/01/milk-bottles-300x232.jpg'},
  {id: 5, name: 'Cheese', description: 'Produce', price: 'Prices Available', image: 'https://www.ymcamidtn.org/sites/default/files/styles/media_full/public/legacy/_assets/images/blog/farmers-market-cheese.jpg?itok=eSOKsi1H'},
  {id: 6, name: 'Blueberries', description: 'Produce', price: 'Prices Available', image: 'https://th.bing.com/th/id/OIP.blYHQSO-oZ4PgeZ7yhmJogHaE8?w=256&h=180&c=7&o=5&dpr=1.25&pid=1.7'},
  {id: 7, name: 'Peas', description: 'Produce', price: 'Prices Available', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/soya-beans-700-350-7995f02.jpg?webp=true&quality=90&resize=385%2C350 '},
  {id: 8, name: 'Carrots', description: 'Produce', price: 'Prices Available', image: 'https://th.bing.com/th/id/R.c7bfb94d17855b5e733f37bca17794ce?rik=ZNtxJcNTv4vyxQ&riu=http%3a%2f%2fcdn.onlyinyourstate.com%2fwp-content%2fuploads%2f2015%2f05%2f12-Corn-700x467.jpg&ehk=Ta2%2fAUzb%2bTCrgNHUQq82oErRgTnmmXXJ846%2b6qohxZU%3d&risl=&pid=ImgRaw'},
  {id: 9, name: 'Squash', description: 'Produce', price: 'Prices Available', image: 'https://cdn.shopify.com/s/files/1/0545/4318/8159/collections/2020-08-22_17.58.14_685x.jpg?v=1613753732'},
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