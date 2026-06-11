# Applied AI Agent — Outreach Implementation Toolkit

**Practical templates, scripts, and tools for immediate use**

---

## TABLE OF CONTENTS

1. [Prospect Database JSON Template](#prospect-database-json-template)
2. [Email Campaign Calendar](#email-campaign-calendar)
3. [Assessment Call Script (Full Version)](#assessment-call-script-full-version)
4. [Prospect Research Checklist](#prospect-research-checklist)
5. [CRM Data Sync Guide](#crm-data-sync-guide)
6. [Campaign Tracking Spreadsheet (CSV Format)](#campaign-tracking-spreadsheet)
7. [Monthly Review Scorecard](#monthly-review-scorecard)
8. [Follow-Up Automation Rules](#follow-up-automation-rules)

---

## PROSPECT DATABASE JSON TEMPLATE

**File location:** `~/.hermes/prospect_database.json`

This is the base structure. Copy this to create your initial database:

```json
{
  "metadata": {
    "version": "1.0",
    "last_updated": "2026-06-10T14:30:00Z",
    "total_prospects": 0,
    "total_campaigns": 0
  },
  
  "verticals": [
    {
      "id": "tour_operators",
      "name": "Tour Operators & Activity Booking",
      "monthly_wtp_min": 4000,
      "monthly_wtp_max": 8000,
      "ai_opportunity": "booking_agent",
      "prospect_count": 0
    },
    {
      "id": "hvac",
      "name": "HVAC Service & Installation",
      "monthly_wtp_min": 3500,
      "monthly_wtp_max": 7000,
      "ai_opportunity": "call_handling_dispatch",
      "prospect_count": 0
    },
    {
      "id": "real_estate",
      "name": "Real Estate Agents & Teams",
      "monthly_wtp_min": 3500,
      "monthly_wtp_max": 7000,
      "ai_opportunity": "lead_nurturing",
      "prospect_count": 0
    },
    {
      "id": "landscaping",
      "name": "Landscaping & Lawn Care",
      "monthly_wtp_min": 2500,
      "monthly_wtp_max": 5000,
      "ai_opportunity": "quote_scheduling",
      "prospect_count": 0
    },
    {
      "id": "accounting",
      "name": "Accounting & Bookkeeping",
      "monthly_wtp_min": 2000,
      "monthly_wtp_max": 4500,
      "ai_opportunity": "intake_document_collection",
      "prospect_count": 0
    },
    {
      "id": "salons",
      "name": "Salons & Spas",
      "monthly_wtp_min": 2000,
      "monthly_wtp_max": 4500,
      "ai_opportunity": "appointment_noshow_reduction",
      "prospect_count": 0
    },
    {
      "id": "auto_repair",
      "name": "Auto Repair & Service",
      "monthly_wtp_min": 2500,
      "monthly_wtp_max": 5000,
      "ai_opportunity": "service_intake_upsell",
      "prospect_count": 0
    },
    {
      "id": "hospitality",
      "name": "Hospitality & Vacation Rentals",
      "monthly_wtp_min": 2500,
      "monthly_wtp_max": 5000,
      "ai_opportunity": "guest_communication_24_7",
      "prospect_count": 0
    },
    {
      "id": "coaching",
      "name": "Coaching & Consulting",
      "monthly_wtp_min": 2000,
      "monthly_wtp_max": 4000,
      "ai_opportunity": "intake_scheduling_onboarding",
      "prospect_count": 0
    }
  ],
  
  "prospects": [
    {
      "id": "prospect_000001",
      "created_at": "2026-06-10T00:00:00Z",
      "updated_at": "2026-06-10T00:00:00Z",
      "status": "lead",
      "priority": "high",
      
      "contact": {
        "name": "Sample Owner",
        "title": "Owner",
        "email": "sample@company.com",
        "phone": "+1-000-000-0000",
        "email_verified": false,
        "phone_verified": false,
        "linkedin": null
      },
      
      "company": {
        "name": "Sample Company",
        "website": "www.samplecompany.com",
        "vertical": "tour_operators",
        "employee_count": "8",
        "annual_revenue": null,
        "location": "Sonoma, CA",
        "founded_year": null,
        "primary_tool": "FareHarbor",
        "secondary_tools": []
      },
      
      "fit_analysis": {
        "pain_points": ["sample_pain"],
        "estimated_monthly_wtp": 6000,
        "estimated_time_savings_hrs": 15,
        "ai_application": "booking_agent",
        "fit_score": 0.85,
        "fit_rationale": "Team size and booking platform use indicate good fit"
      },
      
      "outreach": {
        "campaign": "q2_2026_tours",
        "stage": "lead",
        "messages_sent": 0,
        "messages_opened": 0,
        "messages_clicked": 0,
        "responses_received": 0,
        "last_contact_date": null,
        "next_scheduled_contact": "2026-06-12T09:00:00Z",
        "days_since_last_contact": null
      },
      
      "engagement_history": [
        {
          "date": "2026-06-10T14:30:00Z",
          "type": "research",
          "method": "web_search",
          "note": "Found in Google search for tour operators in Sonoma",
          "actor": "jake"
        }
      ],
      
      "assessment": {
        "scheduled": false,
        "scheduled_date": null,
        "completed": false,
        "completed_date": null,
        "interviewer": null,
        "notes": null,
        "key_findings": null,
        "outcome": null
      },
      
      "demo": {
        "scheduled": false,
        "scheduled_date": null,
        "completed": false,
        "completed_date": null,
        "demo_type": null,
        "feedback": null
      },
      
      "deal": {
        "status": null,
        "stage": null,
        "estimated_value": 72000,
        "deal_term_months": 12,
        "decision_timeline": null,
        "decision_makers": [],
        "budget_confirmed": false,
        "budget_amount": null
      },
      
      "tags": ["wine_country", "seasonal", "vacation_based"],
      "notes": "Research notes go here. Add findings from website review, cold calls, etc."
    }
  ],
  
  "campaigns": [
    {
      "id": "q2_2026_tours",
      "name": "Q2 2026 - Tour Operators Multi-Channel",
      "vertical": "tour_operators",
      "created_at": "2026-06-01T00:00:00Z",
      "status": "active",
      "target_verticals": ["tour_operators"],
      "target_prospect_count": 25,
      "start_date": "2026-06-01",
      "end_date": "2026-08-31",
      
      "messaging": {
        "primary_angle": "Reclaim 15+ hours/week from booking questions + close bookings you miss overnight",
        "secondary_angle": "Custom AI booking agent integrated with FareHarbor",
        "pain_points_addressed": ["booking_overflow", "after_hours_leads", "data_entry"]
      },
      
      "metrics": {
        "total_prospects": 0,
        "emails_sent": 0,
        "emails_opened": 0,
        "emails_clicked": 0,
        "emails_bounced": 0,
        "responses": 0,
        "assessments_booked": 0,
        "assessments_completed": 0,
        "demos_conducted": 0,
        "proposals_sent": 0,
        "deals_closed": 0,
        "pipeline_value": 0,
        "cost_per_lead": 0
      },
      
      "templates": {
        "message_1": "initial_awareness_v1",
        "message_2": "problem_outcome_v1",
        "message_3": "social_proof_v1",
        "followup_1": "value_add_v1",
        "followup_2": "proof_based_v1",
        "followup_3": "final_close_v1"
      },
      
      "schedule": {
        "weekly_prospect_target": 6,
        "message_1_on_add": true,
        "message_2_days_after": 7,
        "message_3_days_after": 14,
        "followup_1_days_after": 21,
        "followup_2_days_after": 28,
        "followup_3_days_after": 35
      }
    }
  ],
  
  "email_templates": [
    {
      "id": "initial_awareness_v1",
      "name": "Initial Awareness - No Pressure",
      "subject": "Quick question about [Company]",
      "vertical": "all",
      "version": 1,
      "created_at": "2026-06-10",
      "status": "active",
      "performance": {
        "sent": 0,
        "opened": 0,
        "clicked": 0,
        "replied": 0,
        "open_rate": 0,
        "click_rate": 0,
        "reply_rate": 0
      }
    }
  ],
  
  "metrics_snapshots": []
}
```

---

## EMAIL CAMPAIGN CALENDAR

**30-Day outreach calendar template**

```
JUNE 2026 OUTREACH CALENDAR
Campaign: Q2 2026 Multi-Vertical Launch

Week 1 (June 3-7)
├─ June 3 (Mon): Add 25 new prospects (tour operators)
│  └─ Send Message 1 to all 25
├─ June 4 (Tue): Research + add 20 HVAC prospects
│  └─ Send Message 1 to all 20
├─ June 5 (Wed): Research + add 20 real estate prospects
│  └─ Send Message 1 to all 20
├─ June 6 (Thu): Research + add 15 landscaping prospects
│  └─ Send Message 1 to all 15
└─ June 7 (Fri): Weekly metrics review

Week 2 (June 10-14)
├─ June 10 (Mon): Add 20 accounting prospects
│  ├─ Send Message 1 to all 20
│  └─ Send Message 2 to Week 1 tour operators cohort (7-day follow-up)
├─ June 11 (Tue): Research + add 15 salon prospects
│  ├─ Send Message 1 to all 15
│  └─ Send Message 2 to HVAC cohort
├─ June 12 (Wed): Add 15 auto repair prospects
│  ├─ Send Message 1 to all 15
│  └─ Send Message 2 to real estate cohort
├─ June 13 (Thu): Add 15 hospitality prospects
│  ├─ Send Message 1 to all 15
│  └─ Send Message 2 to landscaping cohort
├─ June 14 (Fri): Add 12 coaching prospects
│  ├─ Send Message 1 to all 12
│  └─ Weekly metrics review, prepare assessments for next week
└─ Weekend: Respond to any inbound inquiries

Week 3 (June 17-21)
├─ June 17 (Mon): Send Message 3 (Social Proof) to Week 1 cohort (14-day)
│  └─ Schedule assessment calls for Week 1 respondents
├─ June 18 (Tue): Send Message 3 to HVAC cohort
│  └─ Conduct assessment calls (Tour operators)
├─ June 19 (Wed): Send Message 3 to real estate cohort
│  └─ Conduct assessment calls (Tour operators)
├─ June 20 (Thu): Send Message 3 to landscaping cohort
│  └─ Prepare demo for hot prospects
├─ June 21 (Fri): Send Message 3 to accounting cohort
│  └─ Weekly metrics review
└─ Add 30-40 new prospects (start new verticals or top performers)

Week 4 (June 24-28)
├─ June 24 (Mon): Send Follow-up #1 (Value-Add) to Week 1 cohort (21-day)
│  └─ Share educational content
├─ June 25 (Tue): Send Follow-up #1 to HVAC cohort
│  └─ Conduct assessment calls (HVAC cohort)
├─ June 26 (Wed): Conduct demos for qualified prospects
│  └─ Prepare proposals
├─ June 27 (Thu): Send proposals to demo prospects
│  └─ Begin negotiations if needed
├─ June 28 (Fri): Monthly review
│  ├─ Analyze metrics, wins, losses
│  ├─ Plan July outreach strategy
│  └─ Celebrate wins
└─ Update prospect database with all activity

Month Summary:
├─ Total Prospects Added: 122
├─ Total Messages Sent: 265+ (avg 3-4 per prospect)
├─ Expected Responses: 35-40 (13-15%)
├─ Expected Assessments: 10-15
├─ Expected Demos: 4-6
├─ Expected Proposals: 2-3
└─ Projected Closes: 0-1
```

---

## ASSESSMENT CALL SCRIPT (Full Version)

**Use this for your 15-minute discovery calls**

```
[BEFORE CALL]
Prep checklist:
☐ Read their website thoroughly
☐ Identify 3-4 specific pain points
☐ Know their primary tool/platform
☐ Prepare 2-3 personalized questions
☐ Have case study or example ready
☐ Mute notifications, clear desk
☐ Have prospect notes open
☐ Test audio/video

[0:00-1:00] OPENING (1 min)
────────────────────────────────

"Hi [FirstName], thanks so much for taking the time. I know you're busy.

Here's how I think about our time today: I'm not trying to sell you anything. 
My goal is just to understand your business, where you're feeling the biggest pain, 
and whether there's a real opportunity for us to work together.

Does that sound good? And do you have about 15 minutes?"

[PAUSE - Let them confirm]

"Great. Let me give you a quick context for why I'm reaching out:

I build custom AI systems for [their vertical] owners. I embed with your team, 
learn how you work, and then build something that actually fits your business—
not some template, but something custom.

I noticed [Company], and I thought there might be some opportunities to help. 
So I'd like to learn a bit more first.

Make sense?"

[Listen for: Openness, urgency signals, skepticism you need to address]

────────────────────────────────

[1:00-3:00] WARM-UP QUESTION (2 min)
────────────────────────────────

"Let me start simple: Tell me about [Company]. 

What does a typical day look like for you? What keeps you busy?"

[Listen for: Natural pain points, operational rhythm, team size indicators]

[Follow-ups if needed:]
- "How long have you been running this?"
- "How many people on your team?"
- "How's business been?"

[Goal: Build rapport, get them talking, listen for pain clues]

────────────────────────────────

[3:00-7:00] PROBLEM DEEP-DIVE (4 min)
────────────────────────────────

[Based on their answer above, dig into what sounds like their biggest pain]

You mentioned [X - something they said]. Tell me more about that.

How much time does [pain point] take up? Like, if you think about your week, 
what percentage is spent on [that]?"

[Listen for: Quantifiable time, frustration level, impact on business]

Follow-up questions (pick 1-2 relevant):

"Who on your team is handling that?"

"What happens if that doesn't get done well?"

"How long has this been an issue?"

"Is this something you've tried to solve before?"

"What would change if you could take that off your plate?"

[Goal: Get specific numbers (hours/week, revenue impact, customer satisfaction impact)]

────────────────────────────────

[7:00-10:00] TOOLS & INTEGRATION (3 min)
────────────────────────────────

"I want to understand your tech stack a bit.

What are the main tools you use to run [your business]?
- Booking platform? [Listen: FareHarbor, Vagaro, Mindbody, etc.]
- CRM? [Listen: Salesforce, HubSpot, Pipedrive, or nothing]
- Scheduling? [Listen: Calendly, Acuity, built into booking platform]
- Communication? [Listen: Email, Slack, text]"

[After they list tools]

"Are these all connected? Or is there a lot of manual data entry between them?"

[Listen for: Integration gaps = opportunities for automation]

[Goal: Understand their tech reality, identify where AI could connect]

────────────────────────────────

[10:00-13:00] FIT & OPPORTUNITY (3 min)
────────────────────────────────

[Now bring it together - show you understand their situation]

"Okay, so here's what I'm hearing:

1. You're spending [X] hours/week on [their pain point]
2. Your team is stretched across [tools], and it's manual
3. If you could eliminate that, your team would focus on [their real value-add work]

Is that fair?"

[Wait for confirmation]

"Here's what I build: A custom AI system that takes over [their specific pain point], 
integrated with [their tools], so your team doesn't have to change how they work.

For [companies like yours], that typically looks like [1-2 specific examples]:
- [Example 1: specific to their pain]
- [Example 2: what happens after]

Does that sound interesting?"

[Listen for: Level of interest, objections, questions]

[If interested, proceed. If skeptical, address objection]

[Goal: Confirm fit, gauge true interest]

────────────────────────────────

[13:00-15:00] NEXT STEPS (2 min)
────────────────────────────────

[If they're interested]

"Great. Here's what I'm thinking:

I'd like to go do a deeper analysis of your specific situation—exactly where 
the AI could help, what we'd integrate with, timeline, all that.

Then I'll put together a quick custom brief showing exactly how this would work 
for [Company].

I'll send that to you. If you like what you see, we can talk about next steps—
maybe a demo, or digging into specifics.

Sound good?"

[Close with specific next step]

"I'll send you [custom brief / link to demo / proposal] by [date].
When would be a good time for you to review it?"

────────────────────────────

[If they're NOT interested or seem skeptical]

"I hear you. It's totally fine if this isn't a fit right now.

But I want to ask: Is there something that made this not interesting? 
Is it timing, budget, or just... not something you want to deal with?"

[Listen to their objection]

"That makes sense. Well, here's what I'll do:

I'm going to stay connected—if anything changes or you want to revisit this, 
reach out. No pressure."

[Graceful exit, door stays open]

────────────────────────────────

[AFTER CALL - WITHIN 1 HOUR]

Update prospect record:
☐ Assessment completed date
☐ Key findings (pain points confirmed, tools used, team size)
☐ WTP signals (did they mention budget? Enthusiasm level?)
☐ Next step (demo, proposal, or no fit)
☐ Objections (if any)
☐ Follow-up date

Send within 1 hour:
- If interested: "Thanks for the call. Here's what I heard... Next step: [specific]"
- If not fit: "Thanks for the call. I understand this isn't a priority right now. I'm here if things change."
```

---

## PROSPECT RESEARCH CHECKLIST

**Use this when evaluating and adding new prospects**

```
PROSPECT RESEARCH CHECKLIST
Prospect: [Name] | Company: [Company] | Vertical: [Vertical]

TIER 1: COMPANY BASICS (5 min)
─────────────────────────────────
☐ Company name: ___________________
☐ Website: ___________________
☐ Address/Location: ___________________
☐ Founded year: ___________________
☐ Team size estimate: ___________________
☐ Annual revenue estimate: ___________________

TIER 2: BUSINESS MODEL (10 min)
─────────────────────────────────
☐ Primary service/product: _____________________________
☐ Customer type (B2B / B2C / both): _____________________________
☐ Recurring vs. one-time revenue: _____________________________
☐ Seasonality indicators: _____________________________
☐ Primary revenue drivers: _____________________________
☐ Growth stage (bootstrapped / VC / stable): _____________________________

TIER 3: PAIN POINTS (15 min)
─────────────────────────────────
[Look for these signals on website, blog, reviews, etc.]

☐ Evidence of phone/communication overwhelm:
   ✓ Found mention of: ___________________
   ✓ Confidence level: Low / Medium / High

☐ Evidence of manual/repetitive processes:
   ✓ Found mention of: ___________________
   ✓ Confidence level: Low / Medium / High

☐ Evidence of customer coordination issues:
   ✓ Found mention of: ___________________
   ✓ Confidence level: Low / Medium / High

☐ Evidence of team overwhelm/scaling challenges:
   ✓ Found mention of: ___________________
   ✓ Confidence level: Low / Medium / High

TIER 4: TECHNOLOGY STACK (10 min)
─────────────────────────────────
☐ Primary booking/CRM tool: ___________________
☐ Other tools visible on site: ___________________
☐ Website platform: ___________________
☐ Communication: Email / Phone / Chat / Other: ___________________
☐ Integration level (appears integrated vs. siloed): ___________________
☐ Tech maturity (high / medium / low): ___________________

TIER 5: DECISION MAKER (10 min)
─────────────────────────────────
☐ Owner/Decision maker name: ___________________
☐ Title: ___________________
☐ Email (found/estimated): ___________________
☐ Phone (found): ___________________
☐ LinkedIn profile: ___________________
☐ Found on social media (Instagram, Facebook, etc.): ___________________

TIER 6: ENGAGEMENT SIGNALS (5 min)
─────────────────────────────────
☐ Website updated recently (within 6 months): Yes / No / Unsure
☐ Active on social media: Yes / No / Unsure
☐ Recent reviews/testimonials visible: Yes / No / Unsure
☐ Recent blog posts or content: Yes / No / Unsure
☐ Recent team expansion hints: Yes / No / Unsure

TIER 7: FIT SCORING
─────────────────────────────────

Pain Point Alignment:
☐ Clear fit to AI opportunity: Yes (2 pts) / Possible (1 pt) / No (0 pts)
  Score: ___

WTP Indicators:
☐ Team size suggests good budget: Yes (2 pts) / Possible (1 pt) / No (0 pts)
  Score: ___

Tool Stack:
☐ Uses major platform I can integrate with: Yes (2 pts) / Possible (1 pt) / No (0 pts)
  Score: ___

Decision Maker Accessibility:
☐ Easy to find contact info: Yes (2 pts) / Possible (1 pt) / No (0 pts)
  Score: ___

TOTAL FIT SCORE: ___ / 8
Fit Rating:
  6-8: HIGH FIT (priority outreach)
  4-6: MEDIUM FIT (add to list, lower priority)
  0-3: LOW FIT (pass or research more)

OVERALL ASSESSMENT
─────────────────────────────────
☐ Add to database: Yes / No
☐ Fit score: ___
☐ Priority: High / Medium / Low
☐ Personalization angle: ___________________
☐ Estimated WTP: $_____ - $_____ / month
☐ Best contact method: Email / Phone / LinkedIn
☐ Notes/observations: 
   _________________________________
   _________________________________

RESEARCH TIME LOG
─────────────────────────────────
Start time: _______  End time: _______  Total: _______ min

[Save this for each prospect. Use data to track research efficiency]
```

---

## CRM DATA SYNC GUIDE

**Keeping your prospect database and email tracking in sync**

```
AUTOMATED SYNC CHECKLIST

Every time you take an action, update the database:

ACTION: Send first email
├─ Update prospect.outreach.messages_sent: +1
├─ Update prospect.outreach.last_contact_date: [today]
├─ Update prospect.outreach.stage: "message_1"
├─ Add to engagement_history: 
│  └─ type: "email_sent"
│     date: [today]
│     template: "initial_awareness_v1"
└─ Update campaign.metrics.emails_sent: +1

ACTION: Email opens
├─ Update prospect.outreach.messages_opened: +1
├─ Flag prospect: "Engaged" (higher priority for follow-up)
└─ Update campaign.metrics.emails_opened: +1

ACTION: Email clicks
├─ Update prospect.outreach.messages_clicked: +1
├─ Flag prospect as "Hot lead" (follow up sooner)
└─ Update campaign.metrics.emails_clicked: +1

ACTION: Email reply received
├─ Update prospect.outreach.responses_received: +1
├─ Update prospect.outreach.stage: "qualified"
├─ Update prospect.priority: High (if was medium)
├─ Add to engagement_history:
│  └─ type: "reply_received"
│     date: [received date]
│     content_summary: [key points from reply]
│     sentiment: positive / neutral / negative
└─ Update campaign.metrics.responses: +1

ACTION: Assessment scheduled
├─ Update prospect.assessment.scheduled: true
├─ Update prospect.assessment.scheduled_date: [date/time]
├─ Update prospect.outreach.stage: "assessment_scheduled"
├─ Set next_scheduled_contact: [1 day before call - reminder]
└─ Update campaign.metrics (none yet - internal only)

ACTION: Assessment completed
├─ Update prospect.assessment.completed: true
├─ Update prospect.assessment.completed_date: [date]
├─ Update prospect.assessment.notes: [key findings]
├─ Update prospect.assessment.outcome: [fit assessment]
├─ Update prospect.outreach.stage: "assessment_completed"
├─ Add to engagement_history:
│  └─ type: "assessment_call"
│     date: [date]
│     key_findings: [summary]
│     outcome: high_fit / medium_fit / low_fit
└─ Decide next step:
   ├─ If high fit: Move to demo_scheduled (next action)
   ├─ If medium fit: Add to followup_nurture sequence
   └─ If low fit: Move to "no_fit", mark disqualified

ACTION: Demo scheduled
├─ Update prospect.demo.scheduled: true
├─ Update prospect.demo.scheduled_date: [date/time]
├─ Update prospect.outreach.stage: "demo_scheduled"
├─ Add to engagement_history:
│  └─ type: "demo_scheduled"
│     date: [scheduled date]
└─ Set reminder: [1 day before]

ACTION: Demo conducted
├─ Update prospect.demo.completed: true
├─ Update prospect.demo.completed_date: [date]
├─ Update prospect.demo.feedback: [notes]
├─ Update prospect.outreach.stage: "demo_completed"
├─ Add to engagement_history:
│  └─ type: "demo_conducted"
│     date: [date]
│     feedback: [what they said]
│     enthusiasm_level: low / medium / high
└─ Next step decision:
   ├─ If high enthusiasm: Move to "proposal_sent"
   ├─ If medium: Wait for questions, then propose
   └─ If low: Follow up, understand objections

ACTION: Proposal sent
├─ Update prospect.deal.stage: "proposal_sent"
├─ Update prospect.deal.estimated_value: [if you calculated]
├─ Update prospect.outreach.stage: "proposal_sent"
├─ Add to engagement_history:
│  └─ type: "proposal_sent"
│     date: [date]
│     estimated_value: [amount]
└─ Update campaign.metrics.proposals_sent: +1

ACTION: Deal won
├─ Update prospect.status: "customer"
├─ Update prospect.deal.stage: "closed_won"
├─ Update prospect.deal.status: "active"
├─ Update prospect.outreach.stage: "closed_won"
├─ Add to engagement_history:
│  └─ type: "deal_closed"
│     date: [date]
│     deal_value: [amount]
│     contract_term_months: [months]
└─ Update campaign.metrics.deals_closed: +1

ACTION: Deal lost
├─ Update prospect.status: "disqualified" (or "lost_deal")
├─ Update prospect.deal.stage: "closed_lost"
├─ Update prospect.outreach.stage: "closed_lost"
├─ Add to engagement_history:
│  └─ type: "deal_lost"
│     date: [date]
│     reason: [why they didn't move forward]
└─ Update campaign.metrics (track separately)

MONTHLY SYNC CHECKLIST

Every 1st of month, verify:
☐ All emails sent this month are logged in campaign.metrics
☐ All responses are marked in prospect.outreach.responses_received
☐ All assessments completed are in prospect.assessment.completed
☐ All demos conducted are in prospect.demo.completed
☐ All proposals are in campaign.metrics.proposals_sent
☐ Total prospects in database matches prospect count
☐ Campaign metrics add up (emails_sent, opens, clicks, responses, etc.)
☐ No prospects are in "orphaned" states (sent message but never tracked response)
☐ WTP data is captured for all conversations
☐ Decision timeline data is captured for active deals
```

---

## CAMPAIGN TRACKING SPREADSHEET (CSV Format)

**Copy and save as `campaign_tracking_june2026.csv`**

```csv
Date,Prospect_Name,Company,Vertical,Action,Status,Messages_Sent,Responses,Assessment_Booked,Demo_Booked,Deal_Value,Notes
2026-06-03,John Smith,Sonoma Wine Tours,tour_operators,message_1_sent,lead,1,0,0,0,0,Good fit - high volume bookings
2026-06-04,Jane Doe,Mountain HVAC,hvac,message_1_sent,lead,1,0,0,0,0,Emergency call handling opportunity
2026-06-05,Mike Johnson,Tahoe Realty,real_estate,message_1_sent,lead,1,0,0,0,0,Large team - good WTP
2026-06-08,John Smith,Sonoma Wine Tours,tour_operators,message_2_sent,lead,2,0,0,0,0,7-day follow-up
2026-06-08,Sarah Chen,Green Landscaping,landscaping,message_1_sent,lead,1,0,0,0,0,Seasonal business - summer peak
2026-06-10,Jane Doe,Mountain HVAC,hvac,message_2_sent,lead,2,0,0,0,0,7-day follow-up
2026-06-10,John Smith,Sonoma Wine Tours,tour_operators,email_opened,lead,2,1,0,0,0,Message 2 opened - engaged signal
2026-06-11,Jane Doe,Mountain HVAC,hvac,email_replied,qualified,2,1,1,0,0,Positive response - interested
2026-06-12,Jane Doe,Mountain HVAC,hvac,assessment_scheduled,qualified,2,1,1,0,0,Booked for June 19 at 2pm
2026-06-15,Jane Doe,Mountain HVAC,hvac,assessment_completed,qualified,2,1,1,0,42000,Strong fit - dispatcher overwhelmed 25hrs/week
2026-06-15,Jane Doe,Mountain HVAC,hvac,demo_scheduled,qualified,2,1,1,1,42000,Wants to see system in action
2026-06-15,John Smith,Sonoma Wine Tours,tour_operators,message_3_sent,lead,3,0,0,0,0,14-day social proof follow-up
2026-06-17,John Smith,Sonoma Wine Tours,tour_operators,email_opened,lead,3,1,0,0,0,Message 3 opened - social proof resonating
2026-06-18,Jane Doe,Mountain HVAC,hvac,demo_conducted,qualified,2,1,1,1,42000,Very positive - ready to move forward
2026-06-19,Jane Doe,Mountain HVAC,hvac,proposal_sent,qualified,2,1,1,1,1,42000,3-week build + 1-week deployment
2026-06-22,John Smith,Sonoma Wine Tours,tour_operators,email_replied,qualified,3,1,0,0,0,Wants to schedule assessment
2026-06-22,John Smith,Sonoma Wine Tours,tour_operators,assessment_scheduled,qualified,3,1,1,0,0,Booked for June 29 at 10am
2026-06-25,Jane Doe,Mountain HVAC,hvac,deal_closed_won,customer,2,1,1,1,1,42000,Signed! Implementation starts July 1
```

---

## MONTHLY REVIEW SCORECARD

**Use this template on the 1st of every month**

```
MONTHLY REVIEW SCORECARD — [MONTH/YEAR]

PERIOD: [Start Date] — [End Date]
CAMPAIGN(S) RUNNING: [List active campaigns]

═════════════════════════════════════════════════════════════════

OUTREACH PERFORMANCE
───────────────────────────────────
Total Prospects Added:     ___ / Target: 30
Total Prospects in DB:     ___
Total Messages Sent:       ___
  ├─ Message 1 (Initial):  ___
  ├─ Message 2 (Problem):  ___
  ├─ Message 3 (Proof):    ___
  └─ Follow-ups:           ___

EMAIL METRICS
───────────────────────────────────
Open Rate:                 __% / Target: 35-50%
Click Rate:                __% / Target: 10-20%
Response Rate:             __% / Target: 15-25%
Bounce Rate:               __% / Target: < 2%

ENGAGEMENT
───────────────────────────────────
Responses Received:        ___ / Target: 5-10
Assessment Calls Booked:   ___ / Target: 3-5
Assessment Calls Held:     ___ / Target: 2-4
Demo Calls Scheduled:      ___ / Target: 1-2
Demo Calls Conducted:      ___ / Target: 0-1

CONVERSION PIPELINE
───────────────────────────────────
Assessment → Demo Rate:    __% / Target: 50-70%
Demo → Proposal Rate:      __% / Target: 70-100%
Proposal → Signature Rate: __% / Target: 30-50%

DEALS
───────────────────────────────────
Proposals Sent:            ___
Proposals In Negotiation:  ___
Deals Closed Won:          ___
Deals Closed Lost:         ___
Average Deal Value:        $_____
Total Pipeline Value:      $_____
Forecasted for Q2:         $_____

VERTICAL PERFORMANCE
───────────────────────────────────
[For each vertical, fill in:]

Tour Operators
├─ Prospects Added:    ___
├─ Responses:          ___ (___%)
├─ Assessments Held:   ___
├─ Demos Conducted:    ___
└─ Deals Closed:       ___ (Value: $_____)

HVAC
├─ Prospects Added:    ___
├─ Responses:          ___ (___%)
├─ Assessments Held:   ___
├─ Demos Conducted:    ___
└─ Deals Closed:       ___ (Value: $_____)

Real Estate
├─ Prospects Added:    ___
├─ Responses:          ___ (___%)
├─ Assessments Held:   ___
├─ Demos Conducted:    ___
└─ Deals Closed:       ___ (Value: $_____)

[... repeat for all 9 verticals]

═════════════════════════════════════════════════════════════════

BEST PERFORMERS
───────────────────────────────────
Highest Response Rate:     [Vertical]: __% / [Company]: [Name]
Highest Engagement:        [Company]: [Action]
Most Qualified Lead:       [Company]: [Details]
Closest to Deal:           [Company]: [Stage]
Biggest Deal Won:          [Company]: $_____

═════════════════════════════════════════════════════════════════

LESSONS LEARNED THIS MONTH
───────────────────────────────────
✓ What worked well:
  1. _______________________________________________
  2. _______________________________________________
  3. _______________________________________________

✗ What didn't work:
  1. _______________________________________________
  2. _______________________________________________
  3. _______________________________________________

? What should we test next:
  1. _______________________________________________
  2. _______________________________________________
  3. _______________________________________________

═════════════════════════════════════════════════════════════════

ACTION ITEMS FOR NEXT MONTH
───────────────────────────────────
Priority 1: ________________________________________
Priority 2: ________________________________________
Priority 3: ________________________________________

FORECAST FOR NEXT MONTH
───────────────────────────────────
Prospects to Add:          ___
Target Responses:          ___
Target Assessments:        ___
Target Demos:              ___
Forecasted Deals:          ___
Forecasted Revenue:        $_____

CONFIDENCE LEVEL (1-10):   ___

NOTES FOR IMPROVEMENT
───────────────────────────────────
______________________________________________________________
______________________________________________________________
______________________________________________________________
```

---

## FOLLOW-UP AUTOMATION RULES

**Set up these rules to automate your follow-up sequence**

```
RULE 1: Automatic Follow-Up #2 Timing

Trigger: Email_1_Sent = True AND Date_Difference = 7 days
Action: Send Message_2 (Problem + Outcome)
Conditions:
  ├─ Response NOT received
  ├─ Email_1_Opened = True (higher priority)
  └─ Last contact was exactly 7 days ago

Notification: Alert me that Follow-up #2 going out
Result: Track in prospect.outreach.messages_sent

───────────────────────────────────

RULE 2: Automatic Follow-Up #3 Timing

Trigger: Email_2_Sent = True AND Date_Difference = 7 days
Action: Send Message_3 (Social Proof + Urgency)
Conditions:
  ├─ Response NOT received
  ├─ Email_2_Opened = True (higher priority)
  └─ Last contact was exactly 7 days ago

Notification: Alert me that Follow-up #3 going out
Result: Track in prospect.outreach.messages_sent

───────────────────────────────────

RULE 3: Response Received → Qualification Sequence

Trigger: Email_Reply_Received = True
Action: 
  ├─ Move prospect to "qualified" status
  ├─ Set priority to "High"
  ├─ Send me immediate notification
  ├─ Draft personalized response (template based on vertical)
  ├─ Prepare 2-3 assessment time slots
  └─ Schedule assessment booking template send

Conditions:
  └─ Must be from prospect's email address
  └─ Must not be auto-reply

Result: Inbound inquiries handled within 2 hours

───────────────────────────────────

RULE 4: High-Engagement Flag

Trigger: Email_Opened = True AND Email_Clicked = True
Action:
  ├─ Flag prospect as "Hot Lead"
  ├─ Move to top of follow-up list
  ├─ If no response in 3 days, send personal outreach
  └─ Notify me to prioritize this prospect

Conditions:
  ├─ Both open AND click must occur
  ├─ Must be current prospect (status = "lead")
  └─ No response yet

Result: High-engagement prospects get faster follow-up

───────────────────────────────────

RULE 5: Non-Responder Follow-Up

Trigger: Messages_Sent >= 3 AND Responses_Received = 0 
         AND Date_Difference >= 21 days since last contact
Action:
  ├─ Send Follow-Up #3 (Final Soft Close)
  ├─ Include graceful exit option
  ├─ After this: No more automated emails
  └─ If they reply: Re-engage immediately

Conditions:
  ├─ All 3 messages sent
  ├─ Zero responses to any message
  ├─ 21+ days since initial contact

Result: Non-responders get one final touchpoint with exit option

───────────────────────────────────

RULE 6: Assessment Confirmation Reminders

Trigger: Assessment_Scheduled = True AND Assessment_Date = Tomorrow
Action:
  ├─ Send prospect reminder email (with Zoom link, time, agenda)
  ├─ Notify me to prepare (research, questions ready)
  ├─ Block my calendar (90 minutes: 15 min call + 30 min notes/follow-up)
  └─ Prepare assessment notes template

Conditions:
  ├─ Assessment must be confirmed/scheduled
  └─ Must be within 24 hours

Result: No-shows prevented, both parties prepared

───────────────────────────────────

RULE 7: Demo Preparation Alert

Trigger: Demo_Scheduled = True AND Demo_Date <= 3 days away
Action:
  ├─ Notify me to start demo prep
  ├─ Pull up prospect notes + company research
  ├─ Prepare custom demo talking points
  ├─ Test demo system/environment
  └─ Send prospect: "Here's what you'll see" email

Conditions:
  ├─ Demo must be scheduled
  ├─ Must be within 3 days

Result: Demos are polished, prospects know what to expect

───────────────────────────────────

RULE 8: Proposal Reminder

Trigger: Demo_Conducted = True AND Proposal_Sent = False 
         AND Date_Difference >= 3 days since demo
Action:
  ├─ Notify me to send proposal
  ├─ Draft proposal using current prospect data
  ├─ Include personalized context email
  └─ Set follow-up reminder (3 days after send)

Conditions:
  ├─ Demo must have been completed
  ├─ Proposal not yet sent
  ├─ 3+ days have passed

Result: Proposals sent quickly while prospect memory is hot

───────────────────────────────────

RULE 9: Proposal Follow-Up

Trigger: Proposal_Sent = True AND Response = Null 
         AND Date_Difference >= 5 days
Action:
  ├─ Send soft follow-up: "Any questions about the proposal?"
  ├─ Offer to discuss timeline/pricing if needed
  ├─ Gauge interest: "Still interested, or no fit?"
  └─ Set final follow-up for 3 days later

Conditions:
  ├─ Proposal must be sent
  ├─ No response yet
  ├─ 5+ days have passed

Result: Move stalled deals forward or disqualify

───────────────────────────────────

RULE 10: Monthly Database Cleanup

Trigger: Date = 1st of every month
Action:
  ├─ Review all "no_fit" / "disqualified" prospects
  ├─ Archive prospects who've been dead >90 days
  ├─ Update metrics snapshot for the month
  ├─ Generate monthly review scorecard
  └─ Prepare optimization recommendations

Conditions:
  ├─ Automated monthly
  └─ Manual review recommended

Result: Database stays clean, metrics accurate, trends visible

═════════════════════════════════════════════════════════════════

HOW TO IMPLEMENT (Tool Recommendations)

Option 1: Email Automation Platform
  • Use: Mailchimp, ConvertKit, or Lemlist
  • Set up: Sequences based on rules above
  • Tracking: Built-in open/click tracking
  • Cost: $50-500/month

Option 2: CRM Automation
  • Use: Pipedrive, HubSpot, or Salesforce
  • Set up: Workflows with conditional logic
  • Tracking: Integrated pipeline management
  • Cost: $50-300/month

Option 3: Manual + Calendar Reminders
  • Use: Google Calendar + manual outreach
  • Set up: Weekly reminders for each stage
  • Tracking: Spreadsheet (see template above)
  • Cost: Free

Option 4: Custom Hermes Integration
  • Use: ~/.hermes/prospect_database.json + custom scripts
  • Set up: Python/Node scripts to automate sequences
  • Tracking: All in prospect database
  • Cost: Time investment only
```

---

**These templates are ready to use. Copy, customize, and implement immediately.**

**Next steps:**
1. Seed database with 100+ initial prospects
2. Begin outreach week 1
3. Track all activity daily
4. Review metrics weekly
5. Optimize monthly

Good luck with outreach!
