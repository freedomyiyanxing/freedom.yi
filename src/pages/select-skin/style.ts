import { Theme } from '@material-ui/core/styles';

const indexStyle = (theme: Theme) => {
  console.log(theme.palette.primary.main);
  return {
    root: {
      padding: 20,
    },
    container: {
      background: theme.palette.primary.main,
      fontSize: theme.typography.fontSize,
    },
  };
};

const skinStyle = (theme: Theme) => {
  console.log(theme.palette.primary.main);
  return {
    root: {
      padding: 20,
    },
    container: {
      background: theme.palette.primary.light,
      fontSize: theme.typography.fontSize,
      position: 'relative',
      opacity: 0.6,
      color: theme.typography.body1.color,
      '&:before': {
        top: 0,
        width: '100%',
        height: '100%',
        content: '""',
        display: 'block',
        zIndex: 3,
        position: 'absolute',
      },
    },
  };
};

export {
  indexStyle,
  skinStyle,
};
