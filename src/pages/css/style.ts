import { Theme } from '@material-ui/core/styles';

const cssStyle = (theme: Theme) => ({
  root: {
    padding: 20,
  },
  container: {
    background: theme.palette.primary.main,
    fontSize: theme.typography.fontSize,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    flex: 1,
    marginBottom: 10,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  it: {
    background: 'red',
  },
  parent: {
    width: 200,
    display: 'flex',
    flexWrap: 'wrap',
  },
  child1: {
    flex: '100%',
    background: '#b25757',
    height: 100,
  },
  child2: {
    flex: '50%',
    background: '#ae6f6f',
    height: 100,
  },
  child3: {
    flex: '50%',
    background: '#4f2222',
    height: 100,
  },
});

export default cssStyle;
