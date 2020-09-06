import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import hexToRgb from 'components/hexToRGB';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    //background: `linear-gradient(45deg, ${theme.palette.primary.dark} 20%, ${theme.palette.primary.main} 95%)`,
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.light,
    boxShadow: `0 4px 20px 2px rgba(${hexToRgb(theme.palette.secondary.light)}, .3)`,
 
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    //textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
  },

}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textPrimary" variant="h5" component="h2">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
