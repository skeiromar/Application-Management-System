Admin
    username: string
    password: string
    has_many: Comments
Campaign
    name: string
    fields: json
    has_many: Submissions
Submission
    campaign_id: fk
    email: string
    content: json
    status: enum
    belongs_to: Campaign
    has_many: Comments
Comment
    admin_id: fk
    submission_id: fk
    body: text
    
    belongs_to: admin
    belongs_to: submission