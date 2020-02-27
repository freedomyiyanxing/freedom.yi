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
  },
  root: {
    padding: '20px 100px',
  },
  navItem: {
    flex: 1,
    fontSize: theme.typography.h4.fontSize,
  },
}), { name: 'header' });

export default useStyles;
