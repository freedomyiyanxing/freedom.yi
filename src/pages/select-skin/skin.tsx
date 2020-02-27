import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { skinStyle } from './style';

// @ts-ignore
const useStyles = makeStyles(skinStyle, { name: 'skin' });


const Skin: React.FC = (): React.ReactElement => {
  const classes = useStyles({
    theme: '1',
  });

  return (
    <div className={classes.container}>
      <Checkbox
        color="primary"
        value
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Switch
        color="primary"
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <FormControl>
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
        />
      </FormControl>
    </div>
  );
};

export default Skin;
