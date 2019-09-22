import React, { useState, useEffect } from 'react';

import '../../styles/campaign/campaignShow.css';
import { getCampaign, addSubmission } from '../../utils/otherUtil';

// data form:
// {label: form.label, tagSpecifier: 'input', tagType: 'text', value: form.label} -> with value if checkbox

function CampaignShow(props) {
    const [fields, setFields] = useState([
        {
            label: 'username',
            tagSpecifier: 'input',
            tagType: 'text'
        },
        {
            label: 'cheese',
            tagSpecifier: 'input',
            tagType: 'checkbox',
            value: 'cheese'
        }
    ]);
    const [name, setName] = useState("");

    useEffect(() => {
        // fetchAllCampaigns().then(data => {
        //   console.log(data);
        //   window.data = data;
        // })
        getCampaign(props.match.params.id).then(c => {
            let parsedCampaign = JSON.parse(c);
            setName(parsedCampaign.name);
            setFields(parsedCampaign.fields);
        });
    
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        
        let hasData = fields.filter(e => e.content !== undefined);
        if (hasData.length === fields.length) {
            let name = fields.filter(e => e.label === "Name")[0];
            let email = fields.filter(e => e.label === "Email")[0];        
            
            let submission = {
                campaign_id: props.match.params.id, 
                name: name.content, 
                email: email.content,
                content: fields, 
                status: "NEW",
                comments: []
            };
            addSubmission(submission).then(e => props.history.push('/thankyou'));
        } else {
            alert("please fill out all the fields");
        }
        
    }
    function onChange(type) {
        return (e) => {
            console.log(fields, e.target.value);
            let l = e.target.value;
            setFields(fields => {
                fields[type] = {...fields[type], content: l};
                return fields;
            });
        };
    }

    return (
        <div>
            <form onSubmit={handleSubmit} id="form-itself">
            <h3 id="header">{name}</h3>
                {
                    fields.map((option, index) => {
                        return option.tagType !== 'checkbox' ? (
                            <div key={index} id="new-inp-cont">
                                <label>{option.label}</label>
                                <option.tagSpecifier type={`${option.tagType}`} onChange={onChange(index)} id="itself-inp"/>
                            </div>
                        ) : (
                            <div key={index} style={{'display': 'flex'}}>
                                <option.tagSpecifier type={`${option.tagType}`} value={`${option.value}`} onChange={onChange(index)} id="itself-checkbox"/>
                                <label>{option.label}</label>
                            </div>
                        );
                    })
                }

                <input type="submit" value="Submit Form" id="btn-submit"/>
            </form>
        </div>
    )
}

export default CampaignShow;
