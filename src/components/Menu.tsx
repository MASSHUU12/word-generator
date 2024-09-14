import { Stack, Button } from "@mui/material";

interface Props {
  onGenerateClick: () => void;
  onMutateClick: () => void;
  onClearClick: () => void;
}

function Menu({
  onGenerateClick,
  onMutateClick,
  onClearClick,
}: Props): React.JSX.Element {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button variant="contained" onClick={onGenerateClick}>
        Generate
      </Button>
      <Button variant="contained" onClick={onMutateClick}>
        Mutate Selected
      </Button>
      <Button variant="contained" onClick={onClearClick}>
        Clear
      </Button>
    </Stack>
  );
}

export default Menu;
