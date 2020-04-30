import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeclarationCycle from '@pages/css/declaration-cycle';
import cssStyle from './style';

// @ts-ignore
const useStyles = makeStyles(cssStyle, { name: 'css' });

const Css = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DeclarationCycle age={11} />
      <div>Css</div>
      <div className={classes.list}>
        <span className={classes.item}>1</span>
        <span className={classes.item}>2</span>
        <span className={classes.item}>3</span>
        <span className={classes.it}>1111</span>
      </div>
      <div className={classes.parent}>
        <div className={classes.child1} />
        <div className={classes.child2} />
        <div className={classes.child3} />
      </div>
    </div>
  );
};

export default Css;
