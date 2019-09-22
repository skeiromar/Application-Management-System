import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import {fetchAllCampaigns} from '../../actions/Actions';

import '../../styles/displayAll.css';
import { fetchAllCampaigns } from '../../utils/otherUtil';

function CampaignsAll(props) {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // fetchAllCampaigns().then(data => {
    //   console.log(data);
    //   window.data = data;
    // })
    fetchAllCampaigns().then((data) => {
      setCampaigns(JSON.parse(data));
      console.log(JSON.parse(data));
    });

  }, []);

  
  const mapCampaigns = campaigns.map(c => (
    <div className="div-link" key={c.id}>
      <Link to={{pathname: `/campaigns/${c.id}`, state: {name: c.name}}} >
        <h2>{c.name}</h2>
        <p>Submissions: {c.submissions.length}</p>
      </Link>
      <div >
        <a className="a-link" href={`http://localhost:3000/#/campaignForm/${c.id}`}>Campaign Link</a>
      </div>
    </div>));

  return (
    <div className="index-container">
      <Link to={'/formCreate'} className="campaign-btn">Create a Campaign</Link>
      {mapCampaigns}
    </div>
  );
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchAllCampaigns: () => dispatch(fetchAllCampaigns())
//   };
// };

// export default connect(null, mapDispatchToProps)(CampaignsAll);

export default CampaignsAll;
