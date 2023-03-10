import { List, Paper } from "@mui/material";
import React from "react";
import { EntryCard } from "./";

export const EntryList = () => {
  return (
    // TODO drop
    <div>
 
      <Paper
        sx={{
          height: "calc(100vh - 100px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {/* TODO: cambiara dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: 1 }}>
          <EntryCard/>
        </List>
      </Paper>
    </div>
  );
};
