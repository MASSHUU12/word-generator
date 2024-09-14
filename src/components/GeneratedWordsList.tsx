import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

interface Props {
  words: string[];
  checked: number[];
  onItemToggle: (index: number) => void;
}

function GeneratedWordsList({
  words,
  checked,
  onItemToggle,
}: Props): React.JSX.Element {
  return (
    <Box marginY={2}>
      {words.length === 0 ? (
        <Typography variant="body1">
          Click the Generate button to create new words.
        </Typography>
      ) : (
        <List>
          {words.map((word: string, i: number) => {
            const key = `${word}-${i}`;

            return (
              <ListItem key={key} disablePadding>
                <ListItemButton
                  role="button"
                  onClick={() => onItemToggle(i)}
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
      )}
    </Box>
  );
}

export default GeneratedWordsList;
