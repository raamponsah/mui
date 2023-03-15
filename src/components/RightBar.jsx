import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

export const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:'none', sm:'block'}}}>
      <Box position="fixed" maxWidth={300}>
      <Typography component="h6" fontWeight='100' mt={2} mb={2}>Online Friends</Typography>
      <Box>
        <AvatarGroup max={4}>
          <Avatar alt='' src='./images/oktoberfest-food-sausage-beer-and-bretzel-TY2VSNX.jpg'/>
          <Avatar/>
          <Avatar/>
          <Avatar/>
          <Avatar/>
          <Avatar/>
          <Avatar/>
        </AvatarGroup>
      </Box>

      <Typography component='h6' fontWeight={100}>Latest Photos</Typography>
      <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img src='https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' loading='lazy' alt='' />
        </ImageListItem>
        <ImageListItem>
        <img src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80' loading='lazy' alt='' />
        
          </ImageListItem>

          <ImageListItem>
          <img src='https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' loading='lazy' alt='' />

</ImageListItem>
          <ImageListItem>
          <img src='https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' loading='lazy' alt='' />

</ImageListItem>
          <ImageListItem>
          <img src='https://images.unsplash.com/photo-1670272502307-5539ca02550a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' loading='lazy' alt='' />

</ImageListItem>
          <ImageListItem>
          <img src='https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' loading='lazy' alt='' />

</ImageListItem>


      </ImageList>
      </Box>
    </Box>
  )
}
