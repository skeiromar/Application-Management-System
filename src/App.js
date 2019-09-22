import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import LoginFormContainer from './components/auth/loginFormContainer';
import CreateCampaign from './components/form/createCampaign';
import CampaignsAll from './components/campaigns/CampaignsAll';
import CampaignSingle from './components/campaigns/CampaignSingle';
import SubmissionSingle from './components/campaigns/SubmissionSingle1';


import { AuthRoute, ProtectedRoute, FeedRoute } from './utils/routeUtils';
import CampaignShow from './components/form/campaignShow';

import Navbar from './components/Navbar'
import './styles/removeStyles.css';
import ThankYou from './components/campaigns/thankYou';

class App extends Component {

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Route component={Navbar} />
        <Switch>
          {/* <ProtectedRoute exact path="/campaigns" component={  } /> */}

          <Route exact path="/" component={LoginFormContainer} />
          <Route exact path="/campaigns" component={CampaignsAll} />
          <Route exact path="/formCreate" component={CreateCampaign} /> 
          <Route exact path="/campaignForm/:id" component={ CampaignShow } />
          <Route exact path="/campaigns/:id" component={CampaignSingle} />
          <Route exact path="/campaigns/:id/submissions/:subid" component={SubmissionSingle} />

          <Route exact path="/thankyou" component={ThankYou} />
        </Switch>


      </div>
    )
  }
}

export default App;
