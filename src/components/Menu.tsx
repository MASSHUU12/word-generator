import { Button, ButtonGroup } from "@mui/material";

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
    <ButtonGroup variant="outlined" aria-label="Main action buttons">
      <Button onClick={onGenerateClick}>Generate</Button>
      <Button onClick={onMutateClick}>Mutate Selected</Button>
      <Button onClick={onClearClick}>Clear</Button>
    </ButtonGroup>
  );
}

export default Menu;
