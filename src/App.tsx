import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { generateWords } from "./lib/WordGenerator";
import Menu from "./components/Menu";
import GeneratedWordsList from "./components/GeneratedWordsList";

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
    setWords(generateWords(10, 1, 5));
    setChecked([]);
  };

  const handleClear = (): void => {
    setWords([]);
    setChecked([]);
  };

  const handleMutate = (): void => {};

  return (
    <Box
      component="main"
      minHeight={"100svh"}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h1">Word Generator</Typography>
      <Menu
        onGenerateClick={handleGenerate}
        onMutateClick={handleMutate}
        onClearClick={handleClear}
      />
      <GeneratedWordsList
        words={words}
        checked={checked}
        onItemToggle={handleToggle}
      />
    </Box>
  );
}

export default App;
