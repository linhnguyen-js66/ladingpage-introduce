import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  cover: {
    minHeight: '80vh',
    color: 'white',
    textShadow: '3px 4px black',
    background: '#000',
    [theme.breakpoints.down('md')]: {
      minHeight: 500,
      marginTop: 0,
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('md')]: {
      paddingTop: 64
    }
  },
  root: {
    width:'100%',
    marginRight: 16,
    background: '#000',
    [theme.breakpoints.down('md')]: {
      margin: 0,
      marginBottom: 16,
      width:'100%'
    },
  },
  media: {
    height:220,
  },
  detail: {
    color: 'white',
    fontFamily: 'Montserrat',
  },
  detail2: {
    color: '#bfbfbf',
    
  },
  containCard: {
    flexDirection: 'row',
    display: 'flex',
    padding: '0.5rem calc((100vw - 1000px) / 2)',
    marginTop: 64,
    [theme.breakpoints.down('md')]: {
      marginTop: 64,
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
  }
}))