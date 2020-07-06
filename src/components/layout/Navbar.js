import React, { Fragment, useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import {
  Menu,
  ArrowBack,
  PersonOutline,
  DeveloperBoard,
  AssignmentOutlined,
  EmailOutlined,
} from "@material-ui/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const useStyles = makeStyles({
    AppBar: {
      backgroundColor: "#2a1a1b",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="sticky" className={classes.AppBar}>
        <Box>
          <IconButton onClick={openDrawer}>
            <Menu fontSize="large" />
          </IconButton>
        </Box>
      </AppBar>

      <Drawer variant="temporary" anchor="left" open={open}>
        <Box style={{ marginLeft: "auto" }}>
          <IconButton>
            <ArrowBack onClick={closeDrawer} />
          </IconButton>
        </Box>
        <List>
          <ListItem button>
            <ListItemIcon>
              <PersonOutline />
            </ListItemIcon>
            <ListItemText>About Me</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DeveloperBoard />
            </ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentOutlined />
            </ListItemIcon>
            <ListItemText>Testimonials</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EmailOutlined />
            </ListItemIcon>
            <ListItemText>Contact Me</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Fragment>
  );
};

export default Navbar;
