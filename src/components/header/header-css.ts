import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    display: 'flex',
  },
  left: {
    flex: '0 0 300px',
    height: '100vh',
  },
  right: {
    flex: 1,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    padding: '20px 100px',
  },
  navItem: {
    flex: 1,
    fontSize: theme.typography.h4.fontSize,
  },
  section: {
    flex: 1,
  },
  footer: {
    flex: '0 0 30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.typography.caption.fontSize,
    backgroundColor: 'rgba(7, 17, 27, 0.4)',
    '& > a': {
      color: theme.palette.common.white,
    },
  },
}), { name: 'header' });

export default useStyles;
