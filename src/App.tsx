import {
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { generateWords } from "./lib/WordGenerator";

function App(): React.JSX.Element {
  const [words, setWords] = useState<string[]>([]);
  const [checked, setChecked] = useState<number[]>([]);

  const handleToggle = (index: number): void => {
    const currentIndex = checked.indexOf(index);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleGenerate = (): void => {
    setWords(generateWords(10, 1, 6));
    setChecked([]);
  };

  const handleClear = (): void => {
    setWords([]);
    setChecked([]);
  };

  return (
    <Box
      component="main"
      minHeight={"100svh"}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h1">Word Generator</Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" onClick={handleGenerate}>
          Generate
        </Button>
        <Button variant="contained" onClick={undefined}>
          Mutate Selected
        </Button>
        <Button variant="contained" onClick={handleClear}>
          Clear
        </Button>
      </Stack>
      <List>
        {words.map((word: string, i: number) => {
          const key = `${word}-${i}`;

          return (
            <ListItem key={key} disablePadding>
              <ListItemButton
                role="button"
                onClick={() => handleToggle(i)}
                dense
                disableRipple
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.includes(i)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": key }}
                  />
                </ListItemIcon>
                <ListItemText id={key} primary={word} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default App;
