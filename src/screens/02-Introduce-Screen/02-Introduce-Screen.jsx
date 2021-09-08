import { useStyles } from './style'
import { IconButton, Typography } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FadeIn from 'react-fade-in';
import Button from '@material-ui/core/Button';
const Data = [
    {
        id: 1,
        name: ' National Academy of Education Management',
        detail:'Currently, I am a student in NAEM University, majoring in information technology and communication',
        image: 'https://i.ibb.co/3z1GqJB/logo-School.png'
    },
    {
        id: 2,
        name: 'MindX Technology',
        detail:'I have successfully completed Mobile App Development Course at mindX school',
        image: 'https://i.ibb.co/Gcv49Kz/logo.png'
    },
    {
        id: 3,
        detail:'React Native - ReactJS Developer: Build project related to 2 frameworks and Javacript',
        name: 'React Native-ReactJS',
        image: 'https://i.ibb.co/P9rp89t/react.png'
    }
]
const CartComponent = ({ item, classes }) => {
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.image}
                    title="theme-image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.detail}>
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.detail2}>
                        {item.detail}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
const IntroduceScreen02 = () => {
    const classes = useStyles()
    return (
        <div className={classes.cover}>
            <div className="container">
                {/** */}
                <div className={classes.containCategory}>
                    <Typography variant="h4" className={classes.header}>
                        About me
                    </Typography>
                </div>
                {/** */}
                <FadeIn delay={10} transitionDuration={2000}>
                    <div className={classes.containCard}>
                        {
                            Data.map((item, index) => <CartComponent
                                key={index.toString()}
                                item={item}
                                classes={classes}
                            />)
                        }
                    </div>
                </FadeIn>

            </div>
        </div>
    )
}

export default IntroduceScreen02