import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme)=> ({
    cover:{
        minHeight: '80vh',
        color: 'white',
        textShadow: '3px 4px black',
        background:'#000',
        [theme.breakpoints.down('md')]: {
          minHeight: 500,
          marginTop: 0,
          alignItems:'center',
          display:'flex',
          justifyContent:'center'
        },
      },
      image:{
        width:'100%',
        marginBottom:64,
        marginTop:64,
        
        [theme.breakpoints.down('md')]: {
            width:'100%',
            marginTop:0,
            height:'auto',
        },
      },
      row:{
          flexDirection:'row',
          display:'flex',
          padding:'0.5rem calc((100vw - 1000px) / 2)',
          [theme.breakpoints.down('md')]: {
            display:'flex',
            flexDirection:'column',
        },
      },
      heading:{
        marginBottom:64,
        fontFamily: 'Montserrat',
        marginLeft:64,
        [theme.breakpoints.down('md')]: {
            marginTop:16,
            marginLeft:16
        },
      },
      parameter:{
        lineHeight: '30px',
        marginLeft:64,
        // display:'block',
        [theme.breakpoints.down('md')]: {
          marginTop: 16,
          fontSize: 17,
          marginLeft:16,
          marginRight:16
        },
      },
      parameterChild:{
        lineHeight: '30px',
        display:'flex',
        marginRight:12,
        justifyContent:'flex-end',
        [theme.breakpoints.down('md')]: {
            marginTop: 16,
            fontSize: 17,
            marginLeft:16,
            marginRight:16
        },
      },
      containIcon:{
          marginTop:64,
          marginLeft:64,
          [theme.breakpoints.down('md')]: {
            marginTop: 17,
            marginLeft:16
          },
      },
      icon:{
          fontSize:35,
          color:'#a6a6a6',
          marginRight:16,
          [theme.breakpoints.down('md')]: {
            marginTop: 16,
            fontSize: 30,
            color:'#a6a6a6',
          },
      },
      detail:{
         alignSelf:'center'
      },
      iconBtn:{
          margin:0,
          padding:0
      }
}))