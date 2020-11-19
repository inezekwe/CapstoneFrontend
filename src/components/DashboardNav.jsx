import { AppBar, Toolbar, Typography, Link, colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RLink, useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    links: {
      marginRight: theme.spacing(2),
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      colors: 'white'
    },
    title: {
      flexGrow: 1,
    },
  }));

//Nav bar for the user dashboard 
//Will connect to backend and use react-router

export default function DashboardNav() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    let match = useRouteMatch();

    return (
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          
          <Typography className={classes.title} variant="h5" noWrap>
            Hello, User
          </Typography>

          <Typography className={classes.links} variant="body2">
          <RLink to={`${match.url}`} >Home</RLink> 
          <RLink to={`${match.url}/timeline`}>Timeline</RLink>
          <RLink to={`${match.url}/saved_quotes`}>Saved Quotes</RLink>

          </Typography>

        </Toolbar>
        

      </AppBar>
    );
}