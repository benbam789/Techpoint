import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
//import { classes } from 'istanbul-lib-coverage';

import useStyles from './styles';

const Market = ({ market }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image='' title={market.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBotttom>
            {market.name}
          </Typography>
          <Typography variant="h5" gutterBotttom>
            {market.name}
          </Typography>
        </div>
        <Typography variant="h2" color="textSecondary">
          {market.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Market
