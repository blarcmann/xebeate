import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ScrollToTop from '../shared/utils/Scrolltotop';

import Feeds from './screens/feeds';
import Profile from './screens/Profile';
import Shop from './screens/shop';

export default function Routes() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Switch>
        <Route path="/" exact component={Feeds} />
        <Route path="/profile" component={Profile} />
        <Route path="/shop" component={Shop} />
        <Route path="**" component={Feeds} />
      </Switch>
    </Router>
  );
};