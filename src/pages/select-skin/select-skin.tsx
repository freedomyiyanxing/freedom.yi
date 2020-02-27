import * as React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, ThemeProvider, Theme } from '@material-ui/core/styles';
import uuid from 'uuid';

import {
  themeOrange,
  themeYellow,
  themeGreen,
  themeRed,
} from '@config/theme';
import Skin from '@pages/select-skin/skin';
import { indexStyle } from './style';

const tabs = [
  {
    id: uuid(),
    text: '黄色',
    color: themeYellow,
  },
  {
    id: uuid(),
    text: '橙色',
    color: themeOrange,
  },
  {
    id: uuid(),
    text: '绿色',
    color: themeGreen,
  },
  {
    id: uuid(),
    text: '红色',
    color: themeRed,
  },
];

const { useState } = React;

const useStyles = makeStyles(indexStyle, { name: 'selectSkin' });

const SelectSkin: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const [colors, setColors] = useState(themeYellow);

  const handleClick = (color: Theme): void => {
    setColors(color);
  };

  return (
    <div className={classes.root}>
      <div>
        {
          tabs.map((item) => (
            <Button key={item.id} variant="contained" color="primary" onClick={() => handleClick(item.color)}>
              {item.text}
            </Button>
          ))
        }
      </div>
      <ThemeProvider theme={colors}>
        <div className={classes.container}>
          <Skin />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default SelectSkin;
