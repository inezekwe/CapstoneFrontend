import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashboardNav from './DashboardNav.jsx';
import DashboardHome from './DashboardHome.jsx';
import DashboardTimeline from './DashboardTimeline.jsx';
import SavedQuotes from './SavedQuotes.jsx';

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    background: {
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: "url(https://images.unsplash.com/photo-1517639493569-5666a7b2f494?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)",
    }
  }));

export default function Dashboard() {
  const classes = useStyles();
  
  let match = useRouteMatch();


  return (
    <div className={classes.root, classes.background}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

      <DashboardNav />
      <Switch >
        <Route exact path={match.path}>
          <DashboardHome />
        </Route>
        <Route path={`${match.path}/timeline`}>
          <DashboardTimeline />
        </Route>
        <Route path={`${match.path}/saved_quotes`}>
          <SavedQuotes />
        </Route>

      </Switch>

    </div>
  );
}