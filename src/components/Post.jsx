import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

export const Post = () => {
  return (
  
    <Card sx={{margin:5}}>
    <CardHeader avatar={
      <Avatar sx={{background:'red'}} aria-label='recipe'>R</Avatar> }
      action={
        <IconButton>
          <MoreVert/>
        </IconButton>
      }

      title="Tomata Squeilise Dish"
      subheader="A special recipe by Chef Lomgonu"
      ></CardHeader>

      <CardMedia alt='oktoberfest' component='img' height='20%' image='./images/oktoberfest-food-sausage-beer-and-bretzel-BHWM5G4.jpg'></CardMedia>
      <CardContent>
          <Typography variant='body2' color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus saepe accusantium nulla nemo numquam quod molestiae. Nihil, neque quaerat ratione asperiores consequatur rerum pariatur, quia sint, atque minus molestiae.
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
        <Checkbox sx={{color:'red'}} icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}>
       
        </Checkbox>

        <IconButton>
            <Share color='red'></Share>
          </IconButton>
        </CardActions>
  </Card>
  )
}
