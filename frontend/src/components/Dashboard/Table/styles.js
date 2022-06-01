import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    paper: {
        position: 'absolute',
        width: 400,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    },
  }));