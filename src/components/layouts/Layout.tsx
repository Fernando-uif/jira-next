import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";
import { NavBar, SideBar } from '../ui/';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout = ({ title = "open jira",children }: Props) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar/>
      <SideBar/>
      <Box sx={{padding:'10px 20px'}}>
        {children}
      </Box>

    </Box>
  );
};
