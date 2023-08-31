import React from "react";
import { navData } from "../../constants/data";
import { Box, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: 20,
        overflow: "overlay",
      }}
    >
      {navData.map((e) => {
        return (
          <a href={`#${e.text}`}>
            <img src={e.url} alt="" style={{ width: 80 }} />,
            <Typography
              style={{ fontSize: 14, textDecoration: "none", color: "inherit" }}
            >
              {e.text}
            </Typography>
          </a>
        );
      })}
    </Box>
  );
};

export default NavBar;
 