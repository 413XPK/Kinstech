import React from 'react';
//named imports use curly brackets
import { useRouter } from 'next/router';
import data from '../../utilities/data';
import Layout from '../../components/Layout';
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from '@material-ui/core';
import NextLink from 'next/link';
import useStyles from '../../utilities/styles';
import Image from 'next/image';

export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;

  //fetch product from data.js based on url
  //useRouter from react to get the slug from url
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div> Product not found</div>;
  }

  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>back to products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>Price</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>$ {product.price}</Typography>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>Status</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    $ {product.countInStock > 0 ? 'In Stock' : 'Unavailable'}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Button fullWidth variant="contained" color="primary">
                Add to Cart
              </Button>
            </ListItem>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
