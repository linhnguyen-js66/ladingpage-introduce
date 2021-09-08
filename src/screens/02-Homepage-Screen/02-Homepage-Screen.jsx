import { IconButton, Typography } from "@material-ui/core"
import { useStyles } from "./style"
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import FadeIn from 'react-fade-in';

const HomePageScreen02 = () => {
    const classes = useStyles()
    return (
        <div className={classes.cover}>
            <div className="container">
                <FadeIn delay={10} transitionDuration={2000}>
                    <div className="row" className={classes.row}>
                        {/** */}
                        <div className="col-md-6">
                            <img className={classes.image} src="https://i.ibb.co/vHZ5BTC/IMG-6768-1.jpg" />
                        </div>
                        {/** */}
                        <div className="col-md-6" className={classes.detail}>
                            <Typography variant="h3" className={classes.heading}>
                                Hello Everyone! <br />
                                I'm Linh
                            </Typography>
                            <Typography variant="body1" className={classes.parameter}>
                                Almost all stress, tension, anxiety, and frustration, both in life and
                                in work, comes from doing one thing while you believe and value something completely different.
                            </Typography>
                            <Typography variant="body1" className={classes.parameterChild}>
                                - Brian Tracy
                            </Typography>
                            <div className="col-md-6" className={classes.containIcon}>
                                <IconButton className={classes.iconBtn}>
                                    <GitHubIcon className={classes.icon} />
                                </IconButton>
                                <IconButton className={classes.iconBtn}>
                                    <FacebookIcon className={classes.icon} />
                                </IconButton>
                            </div>
                        </div>
                        {/** */}
                    </div>
                </FadeIn>

            </div>
        </div>
    )
}
export default HomePageScreen02