import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ScrollToTop from '../shared/utils/Scrolltotop';

import Feeds from './screens/feeds';
import Profile from './screens/Profile';

export default function Routes() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Switch>
        <Route path="/" exact component={Feeds} />
        <Route path="/profile" component={Profile} />
        <Route path="**" component={Feeds} />
      </Switch>
    </Router>
  );
};