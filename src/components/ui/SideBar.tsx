import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const menuItems: string[] = ["Inbox", "Starred", "Send email", "Drafts"];

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
          <List>
            {menuItems.map((text, index) => (
              <ListItem>
                <ListItemIcon>
                  {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineIcon />}
                  <ListItemText primary={text} />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
        <List>
          {menuItems.map((text, index) => (
            <ListItem>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineIcon />}
                <ListItemText primary={text} />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
