import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  styled,
  IconButton,
  Drawer,
  List,
} from "@mui/material";
import Searchbar from "./SearchBar";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import { Height, Menu } from "@mui/icons-material";

const useStyles = () => {
  return {
    navBar: {
      backgroundColor: `#2874f0`,
      position: "static",
    },
    headingContainer: {
      marginLeft: "12%",
      textDecoration: "none",
      color: "inherit",
    },
    subHeadingContainer: { fontSize: 12, fontStyle: "italic" },
  };
};

const CustomButtonWrapper = styled("span")(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Header = () => {
  const styles = useStyles();
  const logoURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tcsNp6vOG9IKp9AQnbdLPP3q9mPzHP0wKA&usqp=CAUSeller:";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const list = () => (
    <Box
      style={{ width: 250, display: "flex", margin: 30 }}
      onClick={handleClose}
    >
      <List>
        <listItem button>
          <CustomButtons />
        </listItem>
      </List>
    </Box>
  );
  return (
    <AppBar style={styles.navBar}>
      <Toolbar>
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Link to="/" style={styles.headingContainer}>
          <img
            src={logoURL}
            alt="Logo Name"
            style={{ width: 75, height: 30 }}
          />
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Typography style={styles.subHeadingContainer}>Explore</Typography>
          </Box>
        </Link>

        <Searchbar />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
