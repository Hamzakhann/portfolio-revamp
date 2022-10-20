import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Box>
        <Navbar />
        {children}
      </Box>
    </Container>
  );
};

export default Layout;
