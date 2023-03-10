import { Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { ChangeEvent, useState } from "react";

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const onTextFieldChanged = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (!inputValue.length) return;
    
    console.log(inputValue,'Contenido del input');
  };

  return (
    <>
      <Box sx={{ marginBottom: 2, paddingX: 2 }}>
        {isAdding ? (
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
              onClick={() => setIsAdding(true)}
            >
              Agregar Tarea
            </Button>
          </>
        )}
      </Box>
    </>
  );
};
