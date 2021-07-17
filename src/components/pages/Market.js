import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Link} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Market = ({ market }) => {
  const classes = useStyles();
  const onClickHandler = () => {};

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={market.image} title={market.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBotttom>
            {market.name}
          </Typography>
          <Typography variant="h8" gutterBotttom>
            {market.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {market.description}
        </Typography>
        <Link
          component="button" 
          variant="body1"
          style={{marginBottom: 0}}
          onClick={onClickHandler}
        >
          Learn More
        </Link>
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
