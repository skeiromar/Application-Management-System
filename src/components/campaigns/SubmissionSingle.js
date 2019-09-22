import React from 'react';

class SubmissionSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.campaignDefault = {
      id: 1,
      name: 'c1',
      fields: [
        { label: 'l1', type: 't1' },
        { label: 'l2', type: 't2' },
        { label: 'l3', type: 't3' },
      ]
    }
    this.submissionDefault = { id: 'a', campaign_id: 1, email: 'a@a.a', status: 'a', content: ['a', 'b', 'c'] }
  }

  componentDidMount() {


  }

  render() {
    const campaign = this.campaignDefault;
    const submission = this.submissionDefault;

    const mapFields = (parent, sub) => {
      let res = [];
      let temp;

      for (let i = 0; i < sub.content.length; i++) {
        temp = (<div className="div-link" key={'con - ' + i}>
          <p><b>{parent.fields[i].label}</b></p>
          <p>{sub.content[i]}</p>
        </div>)
        res.push(temp)
      }
      return res.map(s => s);
    }

    const displayFields = mapFields(campaign, submission);

    return (
      <div className="index-container">
        {displayFields}
      </div>
    );
  }
}

export default SubmissionSingle;
