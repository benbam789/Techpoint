import React from 'react';
import { IconButton, Badge } from '@material-ui/core'
//import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import "./productbar.css";

//import { classes } from 'istanbul-lib-coverage';
/*import makeStyles from './styles2';*/

function ProductBar() {
  return (
    <div className="productbarContainer">
      <div className="productbarLeft">
        <span className="productlogo">Market</span>
      </div>
      <div className="productbarCenter" />
      <div className="productbarRight">
        <IconButton aria-label="Show cart items" color="inherit">
          <Badge badgeContent={2} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
    </div>
  )
}

/*const ProductBar = () => {
  const classes = makeStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={'/images/shopping.png'} alt="Commerce.js" height="25px" className={classes.image} />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}*/

export default ProductBar