import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NavSm from "../components/NavSm/NavSm";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Box>
        <Navbar />
        <NavSm />
        {children}
      </Box>
    </Container>
  );
};

export default Layout;
