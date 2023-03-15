import { Add, BugReport, Create, Mail, NotificationImportant } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, Button, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent:'space-between'
})

const Search = styled('div')({
  background:'white',
  borderRadius:5,
  width:'40%',
  padding:'0 10px'
  

})

const MyBadge = styled(Badge)({
  margin:'0 10px'
})


const Icons = styled(Box)(({theme})=>({
  // background:'white',
  display:'flex',
  justifyContent:'space-evenly',
  alignItems:'center',
  gap:20,
  [theme.breakpoints.up]:{
    display:'flex'
  }
}))

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
      <CustomToolbar>
      <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>
        Bugbytes
      </Typography>


      <BugReport sx={{display:{xs:'block', sm:'none'}}}/>

      <Search>
        <InputBase placeholder='Search...'/>
      </Search>

      <Icons>
        <Badge badgeContent={6} color='error'>
          <Mail/>
        </Badge>

        <Badge badgeContent={20} color="error">
          <NotificationImportant/>
        </Badge>
        <Button onClick={(e)=>{setOpen(true)}}>
        <Avatar src='' width={30} height={30}/>
        </Button>

      
      </Icons>
      </CustomToolbar>

      <Menu open={open} onClose={(e)=>{setOpen(false)}}
      sx={{marginTop:5}}
      anchorOrigin={{
        vertical:'top',
        horizontal:'right'
      }}

      transformOrigin={
        {
          vertical:'top',
          horizontal:'right'
        }
      }
      
      >
          <MenuItem>Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}
