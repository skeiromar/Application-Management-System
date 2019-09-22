import React from 'react';
import { Link } from 'react-router-dom';
import {getCampaignSubmissions} from '../../utils/otherUtil';

class CampaignSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignName: "",
      submissions: []
    };
    this.campaignDefault = {
      id: 1,
      name: 'Inclusion Hire Campaign',
      fields: [
        { label: 'l1', type: 't1' },
        { label: 'l2', type: 't2' },
        { label: 'l3', type: 't3' },
      ],
      submissions: [
        { id: 'a', campaign_id: 1, name: 'Aaron', email: 'actual@gmail.com', status: 'Under Review', content: ['a', 'b', 'c'] },
        { id: 'A', campaign_id: 1, name: 'Anton', email: 'other@gmail.com', status: 'Accepted', content: ['A', 'b', 'c'] },
        { id: 'C', campaign_id: 1, name: 'Anderson', email: 'other1@gmail.com', status: 'New', content: ['C', 'b', 'c'] },
        { id: 'D', campaign_id: 1, name: 'Paul', email: 'other2@gmail.com', status: 'Denied', content: ['D', 'b', 'c'] },
      ]
    }
  }

  componentDidMount() {
    // if (this.props.location.hasOwnProperty('state')) {
    //   if (this.props.location.state.hasOwnProperty('campaign')) {
    //     console.log('props passed')
    //     this.setState({ campaign: this.props.location.state.campaign })
    //   } else {
    //     console.log('no props')
    //     this.setState({ campaign: campaignDefault })
    //   }
    // } else {
    // }
    console.log(this.props);
    getCampaignSubmissions(this.props.match.params.id).then(subs => {
        console.log(JSON.parse(subs));
        let parsedSubs = JSON.parse(subs);
        this.setState({campaignName: parsedSubs.name, submissions: parsedSubs.subs});
    });
  } 

  render() {
    const campaign = this.campaignDefault;
    const mapSubmissions = this.state.submissions.map(sub => (
      <div className="div-link" key={sub.id}>
      <Link to={{ pathname: `/campaigns/${sub.campaign_id}/submissions/${sub.id}`, state: { campaign: campaign } }}>
        <h3>Name: {sub.name}</h3>
        <h3>Email: {sub.email}</h3>
        <p>Status: {sub.status}</p>
      </Link>
      </div>));

    return (
      <div className="index-container">
      <h2>{this.state.campaignName}</h2>
        {mapSubmissions}
      </div>
    );
  }
}

export default CampaignSingle;
