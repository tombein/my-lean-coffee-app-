import {
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Card(props) {
  const [isEditMode, setIsEditMode] = useState(false);

  function enableEditMode() {
    setIsEditMode(true);
  }

  function disableEditMode() {
    setIsEditMode(false);
  }

  return (
    <MuiCard>
      {isEditMode ? (
        <CardEditMode {...props} onDisableEditMode={disableEditMode} />
      ) : (
        <CardShowMode {...props} onEnableEditMode={enableEditMode} />
      )}
    </MuiCard>
  );
}

function CardShowMode({ id, name, content, onEnableEditMode }) {
  return (
    <>
      <CardContent>
        <Typography variant="h5">{content}</Typography>
        <Typography>{name}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={async () => {
            const response = await fetch("/api/card/" + id, {
              method: "DELETE",
            });
            console.log(await response.json());
          }}
        >
          Delete
        </Button>
        <Button size="small" onClick={onEnableEditMode}>
          Edit
        </Button>
      </CardActions>
    </>
  );
}

function CardEditMode({ name, content, id, onDisableEditMode }) {
  const [contentValue, setContentValue] = useState(content);
  const [nameValue, setNameValue] = useState(name);

  async function submit(event) {
    event.preventDefault();

    console.log(id, nameValue, contentValue);

    const response = await fetch("/api/card/" + id, {
      method: "PUT",
      body: JSON.stringify({
        content: contentValue,
        name: nameValue,
      }),
    });
    console.log(await response.json());

    onDisableEditMode();
  }

  return (
    <form onSubmit={submit}>
      <CardContent>
        <TextField
          name="content"
          label="content"
          fullWidth
          multiline
          row={2}
          value={contentValue}
          onChange={(event) => {
            setContentValue(event.target.value);
          }}
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          name="name"
          label="name"
          fullWidth
          value={nameValue}
          onChange={(event) => {
            setNameValue(event.target.value);
          }}
        />
      </CardContent>
      <CardActions>
        <Button size="small" type="submit">
          Save
        </Button>
      </CardActions>
    </form>
  );
}
