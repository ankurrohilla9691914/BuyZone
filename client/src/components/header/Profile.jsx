import React, { useState } from "react";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { PowerSettingsNew } from "@mui/icons-material";

const Profile = ({ userData, setUserData }) => {
  const [openFlyout, setOpenFlyout] = useState(false);
  const handleClick = (event) => {
    setOpenFlyout(event.currentTarget);
  };
  const handleClose = () => {
    setOpenFlyout(false);
  };

  const onLogout = () => {
    setUserData("");
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Typography
          style={{ cursor: "pointer", marginRight: 40, marginTop: 3 }}
        >
          {userData}
        </Typography>
      </Box>
      <Menu
        anchorEl={openFlyout}
        open={Boolean(openFlyout)}
        onClose={handleClose}
      >
        <MenuItem onClick={onLogout}>
          <PowerSettingsNew color="primary" fontSize="small" />
          <Typography style={{ marginLeft: 10 }}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
