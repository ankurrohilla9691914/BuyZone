import { useState, useContext } from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Badge,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import LoginDialog from "../login/LoginDialog";
import { LoginDataContext } from "../../context/loginContext";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = (isMobileorTablet) => {
  return {
    loginButton: {
      marginRight: 40,
      color: "#2874f0",
      backgroundColor: `white`,
      textTransform: "none",
      boxShadow: "none",
      fontWeight: 600,
    },
    alignItems: "center",
    headerMenu: { marginRight: 40, marginTop: isMobileorTablet ? 20 : 3 },
    cartContainer: {
      display: "flex",
      marginTop: isMobileorTablet ? 20 : 3,
      alignItems: "center",
    },
  };
};

const CustomButtons = () => {
  const { userData, setUserData } = useContext(LoginDataContext);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  const handleLoginDialog = () => {
    setOpenLoginDialog(true);
  };

  const theme = useTheme();
  const isMobileorTablet = useMediaQuery(theme.breakpoints.down("md"));
  const styles = useStyles(isMobileorTablet);

  const cartDetails = useSelector((state) => state.cart);
  const { data: cartItems } = cartDetails;

  return (
    <Box
      style={{
        display: !isMobileorTablet ? "flex" : "block",
        marginLeft: isMobileorTablet ? "3%" : 0,
      }}
    >
      {userData ? (
        <Profile userData={userData} setUserData={setUserData} />
      ) : (
        <Button
          variant="contained"
          style={styles.loginButton}
          onClick={handleLoginDialog}
        >
          Login
        </Button>
      )}
      <Link to="/cart" style={styles.cartContainer}>
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCart style={{ textDecoration: "none", color: "inherit" }} />
        </Badge>
        <Typography style={{ textDecoration: "none", color: "inherit" }}>
          Cart
        </Typography>
      </Link>
      {openLoginDialog && (
        <LoginDialog open={openLoginDialog} setOpen={setOpenLoginDialog} />
      )}
    </Box>
  );
};

export default CustomButtons;
