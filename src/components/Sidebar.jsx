import { AccountBox, Group, Home, ModeNight, Pageview, Person,  Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

export const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>

    <Box position="fixed">
    <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary="Homepage"/>
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Pageview/>
            </ListItemIcon>
            <ListItemText primary="Pages"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Group/>
            </ListItemIcon>
            <ListItemText primary="Groups"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Storefront/>
            </ListItemIcon>
            <ListItemText primary="Marketplace"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person/>
            </ListItemIcon>
            <ListItemText primary="Friends"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings/>
            </ListItemIcon>
            <ListItemText primary="Settings"/>
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountBox/>
            </ListItemIcon>
            <ListItemText primary="Profile"/>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNight/>
            </ListItemIcon>
            <Switch/>
          </ListItemButton>
        </ListItem>

        
      </List>
    </Box>
    </Box>



  )
}
