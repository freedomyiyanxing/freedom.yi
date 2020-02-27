import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    height: '100%',
    width: '100%',
    position: 'relative',
    background: theme.palette.primary.light,
    '&:before': {
      position: 'absolute',
      top: 0,
      zIndex: 3,
      height: '100%',
      width: '100%',
      display: 'block',
      content: '""',
    },
    '&:after': {
      opacity: '.6',
      background: '#000',
      position: 'absolute',
      top: 0,
      zIndex: 3,
      height: '100%',
      width: '100%',
      display: 'block',
      content: '""',
    },
  },
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 4,
  },
  navItem: {
    flex: 1,
    fontSize: theme.typography.h4.fontSize,
    color: theme.palette.primary.contrastText,
  },
  fixedPlugin: {
    position: 'fixed',
    top: '180px',
    right: 0,
    width: '64px',
    padding: '10px 0',
    background: 'rgba(0,0,0,.3)',
    zIndex: 1031,
    borderRadius: '8px 0 0 8px',
    textAlign: 'center',
    cursor: 'pointer',
  },
}), { name: 'sidebar' });

const bgStyles = makeStyles(() => createStyles({
  bgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    transition: 'all 300ms linear',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: (props: any) => `url(${props.images})`,
  },
}), { name: 'sidebar' });

export {
  bgStyles, useStyles,
};
