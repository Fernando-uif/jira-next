import { List, Paper } from "@mui/material";
import { EntryStatus } from "interfaces";
import React, { FC, useContext, useMemo } from "react";
import { EntryCard } from "./";
import { EntriesContext } from "../../context/entries/EntriesContext";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(() => entries.filter((entry) => entry.status === status),[entries]);
  

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
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
