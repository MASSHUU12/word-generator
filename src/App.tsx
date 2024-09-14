import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { generateWords, mutateWords } from "./lib/WordGenerator";
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

  const handleMutate = (): void => {
    const selectedWords = words.filter((_, i) => checked.includes(i));
    const mutatedWords = mutateWords(selectedWords);

    const newWords = words.map((word, i) =>
      checked.includes(i) ? (mutatedWords.shift() ?? "") : word,
    );

    setWords(newWords);
  };

  return (
    <Box
      component="main"
      minHeight={"100svh"}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h2" component="h1" marginTop={6}>
        Word Generator
      </Typography>
      <Typography variant="body1" marginBottom={6}>
        Generate words that have no meaning and make them meaningful.
      </Typography>
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
