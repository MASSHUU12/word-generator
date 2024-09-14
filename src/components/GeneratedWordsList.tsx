import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
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
  );
}

export default GeneratedWordsList;
