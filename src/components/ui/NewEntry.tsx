import { ChangeEvent, useState, useContext } from "react";
import SaveIcon from "@mui/icons-material/Save";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { Button, TextField } from "@mui/material";

import { EntriesContext } from "../../context/entries/EntriesContext";
import { UIContext } from "../../context/ui/UIContext";

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  console.log(isAddingEntry, "Tenemos el entry");

  const onTextFieldChanged = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (!inputValue.length) return;
    addNewEntry(inputValue);
    setIsAdding(false);
    setIsTouch(false);
    setInputValue("");
  };

  return (
    <>
      <Box sx={{ marginBottom: 2, paddingX: 2 }}>
        {isAddingEntry ? (
          <>
            <TextField
              fullWidth
              sx={{ marginTop: 2, marginBottom: 1 }}
              placeholder="Nueva Entrada"
              autoFocus
              multiline
              label="Nueva entrada"
              helperText={!inputValue.length && isTouch && "Ingrese un valor"}
              error={!inputValue.length && isTouch}
              value={inputValue}
              onChange={onTextFieldChanged}
              onBlur={() => setIsTouch(true)}
            />
            <Box display={"flex"} justifyContent="space-between">
              <Button
                endIcon={<SaveIcon />}
                variant="outlined"
                color="secondary"
                onClick={onSave}
              >
                Guardar
              </Button>
              <Button onClick={() => setIsAdding(false)}>Cancelar</Button>
            </Box>
          </>
        ) : (
          <>
            <Button
              startIcon={<AddIcon />}
              fullWidth
              variant="outlined"
              onClick={() => setIsAddingEntry}
            >
              Agregar Tarea
            </Button>
          </>
        )}
      </Box>
    </>
  );
};
