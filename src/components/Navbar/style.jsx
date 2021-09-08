import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    appBarBackground: {
        background: '#000',
        padding:'0.5rem calc((100vw - 1000px) / 2)', 
        borderBottom: '0.5px solid #808080',
        [theme.breakpoints.down('md')]: {
            borderBottom: '1px solid #cccccc',
        },
    },
    main: {
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer',
       
        marginLeft:16,
    },
    tab: {
        color: '#fbfbfb',
        display: 'none',
        fontWeight: 500,
        alignItems: 'center',
        fontFamily: 'Montserrat',
        fontSize: '1.1vw',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            color: '#ffcc00',
            transition: 'all 0.2s ease-in-out',
            paddingBottom:4
        }
    },
    tabBtn: {
        color: '#fbfbfb',
        display: 'none',
        fontWeight: 500,
        lineHeight: '24px',
        fontFamily: 'Montserrat',
        fontSize: '1.1vw',
        borderWidth: 2,
        borderColor: 'white',
        background: '#000',
        transition: 'all 0.2s ease-in-out',
        paddingRight:32,
        paddingLeft:32,
        marginLeft:32,
        '&:hover': {
            transition: 'all 0.2s ease-in-out',
            backgroundColor: 'white',
            borderColor: 'white',
            boxShadow: 'none',
            color: '#000'
        },
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    grow: {
        flexGrow: 1
    },
    sectionDesktop: {
        marginLeft: 150,
        marginRight: 100,
        // marginTop: 50,
        [theme.breakpoints.down('md')]: {
            marginLeft: 5,
            marginRight: 5,
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    sectionMobile: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    row1: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
    },
    menuIcon: {
        color: '#212121',
        [theme.breakpoints.down('md')]: {
            color: '#e5e5e5',
        },
    },
    list: {
        width: '250px',
        height: '100%',
        backgroundColor: 'transparent',
    },
    fullList: {
        width: 'auto'
    },
    menuTitleMobile: {
        paddingLeft: 15,
        fontWeight: 500,
        verticalAlign: 'baseline',
        fontFamily: 'Montserrat',
        textAlign: 'left',
        fontSize: 14,
        paddingTop: 7,
    },
    tabBtnMobile: {
        borderRadius: '30px',
        border: '1px solid #000',
        verticalAlign: 'baseline',
        letterSpacing: '-1px',
        margin: 0,
        color: '#000',
        padding: '7px 10px 7px 10px',
        fontWeight: 500,
        fontSize: '1.1vw',
        textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
            width: 140,
        },
    }
}))
