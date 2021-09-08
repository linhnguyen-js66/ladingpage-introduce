import { Link } from 'react-scroll'
import { Fragment, useEffect, useState } from 'react'
import { AppBar, Avatar, Button, IconButton, ListItem, Toolbar, Typography, SwipeableDrawer } from '@material-ui/core'
import List from '@material-ui/core/List';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './style';

const DataOption = [
    {
        name: "I'M LINH",
        id: 'intro'
    },
    {
        name: "PROJECT",
        id: 'project'
    },
    {
        name: "AWARDS",
        id: 'awards'
    },
]
const Navbar = () => {
    const classes = useStyles()
    const [state, setState] = useState({
        right: false
    })
    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open })
    }
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                {DataOption.map((item, index) => <Link
                    activeClass="active" to={item.id} smooth={true} offset={0} duration={500} delay={0}
                    key={index.toString()}
                >
                    <ListItem button key={item.name} onClick={toggleDrawer(anchor, false)}>
                        <Typography className={classes.menuTitleMobile}>
                            {item.name}
                        </Typography>
                    </ListItem>
                </Link>)}
                {/* <Divider /> */}
                <ListItem button >
                    <Link
                    activeClass="active" to="contact" smooth={true} offset={0} duration={500} delay={0}
                    >
                        <Button variant="outlined" className={classes.tabBtnMobile}>
                            CONTACT
                        </Button>
                    </Link>
                </ListItem>
            </List>
        </div>
    )
    const [showNav, setShowNav] = useState(false)
    //Neu web co su chinh sua ve size thi se thay doi navbar
    const showDropdown = () => {
        if (window.innerWidth <= 960) {
            setShowNav(false)
        } else {
            setShowNav(true)
        }
    }
    window.addEventListener('resize', showDropdown)
    useEffect(() => {
        showDropdown()
    }, [])
    return (
        <>
            <AppBar position="relative" className={classes.appBarBackground}>
                {showNav ?

                    <Toolbar>
                        <Link
                            exact="true"
                            activeClass="active"
                            to="home"
                            smooth={true}
                            offset={-60}
                            duration={400}
                            delay={0}
                            
                        >
                            <Avatar variant="square" src="https://i.ibb.co/XVt1186/logo1.png"
                                style={{ height: 50, width: 50 }}
                            />
                        </Link>
                        <div className={classes.grow} />
                        <Link exact="true"
                            activeClass="active"
                            to="intro"
                            smooth={true}
                            offset={0}
                            duration={400}
                            delay={0}
                            className={classes.main}
                        >

                            <Typography className={classes.tab} >
                                I'M LINH
                            </Typography>


                        </Link>
                        <Link exact="true"
                            activeClass="active"
                            to="intro"
                            smooth={true}
                            offset={0}
                            duration={400}
                            delay={0}
                            className={classes.main}>
                            <Typography className={classes.tab}>
                                PROJECT
                            </Typography>
                        </Link>
                        <Link exact="true"
                            activeClass="active"
                            to="intro"
                            smooth={true}
                            offset={0}
                            duration={400}
                            delay={0}
                            className={classes.main}>
                            <Typography className={classes.tab}>
                                AWARDS
                            </Typography>
                        </Link>
                        <Link exact="true"
                            activeClass="active"
                            to="intro"
                            smooth={true}
                            offset={0}
                            duration={400}
                            delay={0}
                            className={classes.main}>
                            <Button variant="outlined" className={classes.tabBtn}>
                                Contact
                            </Button>
                        </Link>
                    </Toolbar>
                    :
                    <Toolbar className={classes.sectionMobile}>
                        <div className={classes.row1}>
                            <div className={classes.grow} />
                            <Link
                                exact="true"
                                exact="true"
                                activeClass="active"
                                to="home"
                                smooth={true}
                                offset={0}
                                duration={500}
                                delay={0}
                                className={classes.main}
                            >
                                <Avatar variant="square" src="https://i.ibb.co/XVt1186/logo1.png"
                                    style={{ height: 40, width: 40 }}
                                />
                            </Link>
                            <div className={classes.grow} />
                            {
                                ["right"].map((anchor) => (
                                    <Fragment key={anchor}>
                                        <IconButton
                                            aria-label="menu"
                                            aria-haspopup="true"
                                            className={classes.menuIcon}
                                            onClick={toggleDrawer(anchor, true)}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <SwipeableDrawer
                                            anchor={anchor}
                                            disableSwipeToOpen={false}
                                            open={state[anchor]}
                                            onClose={toggleDrawer(anchor, false)}
                                            onOpen={toggleDrawer(anchor, true)}>
                                            {list(anchor)}
                                        </SwipeableDrawer>
                                    </Fragment>
                                ))
                            }
                        </div>
                    </Toolbar>
                }
            </AppBar>
        </>
    )
}
export default Navbar