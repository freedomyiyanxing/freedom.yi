import { createMuiTheme } from '@material-ui/core/styles';
import {
  orange,
  blue,
  yellow,
  lightGreen,
  red,
} from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

export const themeOrange = createMuiTheme({
  palette: {
    primary: orange,
  },
});

export const themeGreen = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
});

export const themeRed = createMuiTheme({
  palette: {
    primary: red,
  },
});

export const themeYellow = createMuiTheme({
  palette: {
    primary: yellow,
  },
});

export default {
  theme,
  themeOrange,
  themeYellow,
  themeGreen,
  themeRed,
};
