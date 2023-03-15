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

        </ImageListItem>
      </ImageList>
      </Box>
    </Box>
  )
}
