/* Applied AI Agent — Demo Engine
   One renderer, nine scripts. A live operations feed that plays a
   timeline of events per vertical. Pauses off-screen, loops with a
   hold on the final frame, renders static under reduced motion. */

const DemoScripts = {

  'tour-operators': {
    agent: 'Booking Agent',
    pillar: 'answer',
    label: 'Tour Operators',
    punchline: 'While the owner was asleep.',
    events: [
      { t: 0,    time: '11:42 PM', type: 'inbound', who: 'Maria S.', text: 'Do you have Saturday tastings for a group of 6?' },
      { t: 1100, time: '11:42 PM', type: 'action',  text: 'Agent replied — 38 seconds' },
      { t: 2100, time: '11:43 PM', type: 'action',  text: 'Calendar checked — Sat 2:00 PM open' },
      { t: 3200, time: '11:44 PM', type: 'result',  text: 'Booking confirmed · 6 guests · $540 paid' },
      { t: 4000, time: '11:44 PM', type: 'action',  text: 'Confirmation + reminder sequence queued' }
    ]
  },

  'salons': {
    agent: 'Front Desk Agent',
    pillar: 'answer',
    label: 'Salons & Spas',
    punchline: 'The gap never happened.',
    events: [
      { t: 0,    time: '7:18 AM',  type: 'inbound', who: 'Dana K.', text: 'So sorry — can I move my 10am color to Thursday?' },
      { t: 1100, time: '7:18 AM',  type: 'action',  text: 'Appointment moved — Thu 10:00 AM with Renee' },
      { t: 2100, time: '7:19 AM',  type: 'action',  text: 'Waitlist checked — 3 clients waiting' },
      { t: 3200, time: '7:21 AM',  type: 'result',  text: 'Gap filled · Jess M. booked into 10:00 AM' },
      { t: 4000, time: '7:21 AM',  type: 'action',  text: 'Both clients confirmed by text' }
    ]
  },

  'hospitality': {
    agent: 'Guest Agent',
    pillar: 'answer',
    label: 'Hospitality',
    punchline: 'Five-star review, already in motion.',
    events: [
      { t: 0,    time: '4:05 PM',  type: 'inbound', who: 'The Walkers', text: 'We land early tomorrow — any chance of check-in before 3?' },
      { t: 1100, time: '4:05 PM',  type: 'action',  text: 'Housekeeping schedule checked — room ready by noon' },
      { t: 2100, time: '4:06 PM',  type: 'result',  text: 'Early check-in confirmed · 12:30 PM' },
      { t: 3200, time: '4:06 PM',  type: 'action',  text: 'Door code + directions sent' },
      { t: 4000, time: '4:07 PM',  type: 'action',  text: 'Wine-country picnic add-on offered — accepted' }
    ]
  },

  'real-estate': {
    agent: 'Lead Agent',
    pillar: 'follow',
    label: 'Real Estate',
    punchline: 'They never called the other agent.',
    events: [
      { t: 0,    time: '9:47 PM',  type: 'inbound', who: 'Zillow lead', text: '"Interested in 1422 Vine St — is it still available?"' },
      { t: 1100, time: '9:49 PM',  type: 'action',  text: 'Replied in 90 seconds — qualified budget + timeline' },
      { t: 2100, time: '9:52 PM',  type: 'action',  text: 'Pre-approval confirmed · buying within 30 days' },
      { t: 3200, time: '9:54 PM',  type: 'result',  text: 'Showing booked · Saturday 11:00 AM' },
      { t: 4000, time: '8:00 AM',  type: 'action',  text: 'You got the full brief with your morning coffee' }
    ]
  },

  'hvac': {
    agent: 'Dispatch Agent',
    pillar: 'follow',
    label: 'HVAC',
    punchline: 'No heat, no panic, no missed call.',
    events: [
      { t: 0,    time: '10:51 PM', type: 'inbound', who: 'Caller', text: 'Our furnace just died and it’s 38° tonight — anyone there?' },
      { t: 1100, time: '10:51 PM', type: 'action',  text: 'Call answered — triaged as urgent, no-heat' },
      { t: 2100, time: '10:53 PM', type: 'action',  text: 'Address, system type, and symptoms collected' },
      { t: 3200, time: '10:54 PM', type: 'result',  text: 'First slot booked · 7:00 AM · Tech notified' },
      { t: 4000, time: '10:55 PM', type: 'action',  text: 'Customer texted confirmation + arrival window' }
    ]
  },

  'auto-repair': {
    agent: 'Service Agent',
    pillar: 'follow',
    label: 'Auto Repair',
    punchline: 'Your advisor walked in already briefed.',
    events: [
      { t: 0,    time: '8:12 PM',  type: 'inbound', who: 'Tom R.', text: 'Hearing a grinding noise when I brake. How soon can you look at it?' },
      { t: 1100, time: '8:12 PM',  type: 'action',  text: 'Intake done — vehicle, mileage, symptoms' },
      { t: 2100, time: '8:13 PM',  type: 'action',  text: 'Flagged as brake safety issue — priority slot offered' },
      { t: 3200, time: '8:14 PM',  type: 'result',  text: 'Drop-off booked · Tomorrow 8:00 AM' },
      { t: 4000, time: '8:14 PM',  type: 'action',  text: 'Advisor briefed with full write-up' }
    ]
  },

  'landscaping': {
    agent: 'Quote Agent',
    pillar: 'follow',
    label: 'Landscaping',
    punchline: 'Quoted before the competition woke up.',
    events: [
      { t: 0,    time: '6:38 AM',  type: 'inbound', who: 'New request', text: 'Need a quote for full yard cleanup + monthly maintenance, half-acre lot.' },
      { t: 1100, time: '6:38 AM',  type: 'action',  text: 'Property looked up — lot size verified' },
      { t: 2100, time: '6:39 AM',  type: 'action',  text: 'Estimate drafted from your price book' },
      { t: 3200, time: '6:40 AM',  type: 'result',  text: 'Quote sent · $2,400 cleanup + $380/mo' },
      { t: 4000, time: '6:41 AM',  type: 'action',  text: 'Site visit offered — Thursday slots open' }
    ]
  },

  'accounting': {
    agent: 'Client Agent',
    pillar: 'office',
    label: 'Accounting',
    punchline: 'Zero interruptions. Zero phone tag.',
    events: [
      { t: 0,    time: '2:14 PM',  type: 'inbound', who: 'Client', text: 'Hi — just checking, any update on our return?' },
      { t: 1100, time: '2:14 PM',  type: 'action',  text: 'Status pulled — in review, one document missing' },
      { t: 2100, time: '2:15 PM',  type: 'result',  text: 'Client answered · ETA given · doc requested' },
      { t: 3200, time: '2:38 PM',  type: 'action',  text: 'Missing 1099 uploaded by client' },
      { t: 4000, time: '2:38 PM',  type: 'action',  text: 'File updated — your team never broke focus' }
    ]
  },

  'coaching': {
    agent: 'Onboarding Agent',
    pillar: 'office',
    label: 'Coaching',
    punchline: 'From signup to scheduled — hands-free.',
    events: [
      { t: 0,    time: '5:02 PM',  type: 'inbound', who: 'New client', text: 'Just signed up for the 12-week program. What’s next?' },
      { t: 1100, time: '5:02 PM',  type: 'action',  text: 'Welcome sequence started — intake form sent' },
      { t: 2100, time: '5:31 PM',  type: 'action',  text: 'Intake completed — goals + availability captured' },
      { t: 3200, time: '5:33 PM',  type: 'result',  text: 'First session booked · Tuesday 9:00 AM' },
      { t: 4000, time: '5:33 PM',  type: 'action',  text: 'Coach briefed — client file ready' }
    ]
  },

  /* ── "A week with your teammate" — scenario scripts.
       Each one includes the ask-first moment: the teammate drafts,
       then waits for the owner's yes. ── */

  'week-winery': {
    agent: 'Your Teammate',
    label: 'Winery & tasting room',
    punchline: 'Your weekend, still yours.',
    events: [
      { t: 0,    time: 'Mon',  type: 'action', text: 'Confirmed a 6-top tasting for Saturday — inquiry came in at 11:48 PM' },
      { t: 1300, time: 'Tue',  type: 'action', text: 'Caught a double-booked patio — moved one party, both confirmed' },
      { t: 2600, time: 'Wed',  type: 'ask',    text: 'The Hendersons’ club shipment card failed twice. I drafted a friendly heads-up. Send it?' },
      { t: 4600, time: '',     type: 'reply',  text: 'Yes' },
      { t: 5500, time: 'Wed',  type: 'result', text: 'Sent. Card updated 20 minutes later — shipment saved' },
      { t: 6600, time: 'Fri',  type: 'action', text: 'Weekly briefing in your inbox: 31 bookings, 4 club signups, 1 thing to read' }
    ]
  },

  'week-home-services': {
    agent: 'Your Teammate',
    label: 'Home services',
    punchline: 'The phone got answered. You stayed on the job.',
    events: [
      { t: 0,    time: 'Mon',  type: 'action', text: 'Answered a no-heat call at 10:51 PM — booked the 7:00 AM slot, tech briefed' },
      { t: 1300, time: 'Tue',  type: 'action', text: 'Quoted a water-heater swap from your price book — 11 minutes after the request' },
      { t: 2600, time: 'Thu',  type: 'ask',    text: 'The Alvarez invoice is 45 days out. I drafted a firm-but-friendly nudge. Send it?' },
      { t: 4600, time: '',     type: 'reply',  text: 'Yes' },
      { t: 5500, time: 'Thu',  type: 'result', text: 'Sent. Paid in full the next morning — $2,340' },
      { t: 6600, time: 'Fri',  type: 'action', text: 'Weekly briefing: 23 calls handled, 9 jobs booked, zero missed' }
    ]
  },

  'week-real-estate': {
    agent: 'Your Teammate',
    label: 'Real estate',
    punchline: 'Every lead answered. Every showing on the books.',
    events: [
      { t: 0,    time: 'Sun',  type: 'action', text: 'Zillow lead at 9:47 PM — replied in 90 seconds, qualified, showing booked' },
      { t: 1300, time: 'Tue',  type: 'action', text: 'Nudged 4 quiet buyers with new listings that match their search' },
      { t: 2600, time: 'Wed',  type: 'ask',    text: 'The Kims went silent after Saturday’s showing. I drafted a check-in with two comparable homes. Send it?' },
      { t: 4600, time: '',     type: 'reply',  text: 'Yes' },
      { t: 5500, time: 'Wed',  type: 'result', text: 'Sent. They replied in an hour — second showing Friday' },
      { t: 6600, time: 'Fri',  type: 'action', text: 'Weekly briefing: 12 leads worked, 5 showings set, 2 warming up' }
    ]
  },

  'week-professional': {
    agent: 'Your Teammate',
    label: 'Professional services',
    punchline: 'Your inbox worked for you this week.',
    events: [
      { t: 0,    time: 'Mon',  type: 'action', text: 'Onboarded a new client end to end — welcome, intake, first meeting booked' },
      { t: 1300, time: 'Tue',  type: 'action', text: 'Chased the two missing documents for the Reyes file — both in by lunch' },
      { t: 2600, time: 'Thu',  type: 'ask',    text: 'Acme’s retainer renewal is due next week. I drafted the renewal note with updated scope. Send it?' },
      { t: 4600, time: '',     type: 'reply',  text: 'Yes' },
      { t: 5500, time: 'Thu',  type: 'result', text: 'Sent. Signed by Friday — renewed at the new rate' },
      { t: 6600, time: 'Fri',  type: 'action', text: 'Weekly briefing: 41 client questions answered, 3 flags, nothing missed' }
    ]
  }
};

/* ── Renderer ── */
function createDemoFeed(container, scriptId, opts) {
  opts = opts || {};
  const HOLD_MS = 4000;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  container.classList.add('demo-feed');
  if (opts.flat) container.classList.add('demo-feed--flat');

  let timers = [];
  let visible = true;
  let currentId = scriptId;

  function clearTimers() { timers.forEach(clearTimeout); timers = []; }

  function render(id) {
    currentId = id;
    const s = DemoScripts[id];
    if (!s) return;
    clearTimers();

    container.innerHTML =
      '<div class="df-header">' +
        '<span class="df-live-dot"></span>' +
        '<span class="df-agent">Applied AI <span>· ' + s.agent + '</span></span>' +
        '<span class="df-live-label">LIVE</span>' +
      '</div>' +
      '<div class="df-events"></div>' +
      '<div class="df-punchline">' + s.punchline + '</div>';

    const feed = container.querySelector('.df-events');
    const punch = container.querySelector('.df-punchline');

    s.events.forEach(ev => {
      const row = document.createElement('div');
      row.className = 'df-event df-event--' + ev.type;
      if (ev.type === 'ask') {
        // The permission moment: teammate speaks (serif voice), then asks
        row.innerHTML =
          '<span class="df-time">' + ev.time + '</span>' +
          '<div class="df-body">' +
            '<div class="df-text voice">' + ev.text + '</div>' +
            '<div class="df-ask-pills">' +
              '<span class="df-pill df-pill--yes">Yes</span>' +
              '<span class="df-pill">Edit</span>' +
              '<span class="df-pill">No</span>' +
            '</div>' +
          '</div>';
      } else if (ev.type === 'reply') {
        row.innerHTML =
          '<div class="df-body"><div class="df-text">' + ev.text + '</div></div>';
      } else {
        row.innerHTML =
          '<span class="df-time">' + ev.time + '</span>' +
          '<div class="df-body">' +
            (ev.who ? '<div class="df-who">' + ev.who + '</div>' : '') +
            '<div class="df-text">' + ev.text + '</div>' +
          '</div>';
      }
      feed.appendChild(row);
    });

    const rows = feed.querySelectorAll('.df-event');

    // Typing indicator — the teammate "thinks" before it speaks
    const typing = document.createElement('div');
    typing.className = 'df-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    feed.appendChild(typing);

    if (reduced) {
      rows.forEach(r => r.classList.add('on'));
      feed.querySelectorAll('.df-pill--yes').forEach(p => p.classList.add('picked'));
      punch.classList.add('on');
      return;
    }

    s.events.forEach((ev, i) => {
      const fromTeammate = ev.type !== 'inbound' && ev.type !== 'reply';
      if (fromTeammate && ev.t > 0) {
        const prevT = i > 0 ? s.events[i - 1].t : 0;
        const showAt = Math.max(prevT + 550, ev.t - 800);
        timers.push(setTimeout(() => {
          feed.insertBefore(typing, rows[i]);   // dots appear where the message will land
          typing.classList.add('on');
        }, showAt));
      }
      timers.push(setTimeout(() => {
        typing.classList.remove('on');
        rows[i].classList.add('on');
      }, ev.t + 400));
      if (ev.type === 'ask') {
        // owner taps Yes a beat after the question lands
        timers.push(setTimeout(() => {
          const pill = rows[i].querySelector('.df-pill--yes');
          if (pill) pill.classList.add('picked');
        }, ev.t + 1450));
      }
    });
    const last = s.events[s.events.length - 1].t;
    timers.push(setTimeout(() => punch.classList.add('on'), last + 1300));
    timers.push(setTimeout(() => { if (visible) render(currentId); }, last + 1300 + HOLD_MS));
  }

  // Pause when off-screen, restart when back
  if (!reduced && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      const was = visible;
      visible = entry.isIntersecting;
      if (!visible) clearTimers();
      else if (!was) render(currentId);
    }, { threshold: 0.2 }).observe(container);
  }

  render(scriptId);
  return { play: render };
}

/* ── Mission-control dashboard: count-ups + spark/row reveal on scroll-in ── */
function initMcDash(dash) {
  if (!dash) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ease = t => 1 - Math.pow(1 - t, 3);

  function countUp(el) {
    const target = parseFloat(el.dataset.mcCount);
    const prefix = el.dataset.mcPrefix || '';
    const suffix = el.dataset.mcSuffix || '';
    const decimals = parseInt(el.dataset.mcDecimals || '0', 10);
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / 1400, 1);
      el.textContent = prefix + (ease(p) * target).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(performance.now());
  }

  function fire() {
    dash.classList.add('mc-on');
    dash.querySelectorAll('[data-mc-count]').forEach(el => {
      if (reduced) {
        el.textContent = (el.dataset.mcPrefix || '') + el.dataset.mcCount + (el.dataset.mcSuffix || '');
      } else countUp(el);
    });
  }

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { fire(); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(dash);
  } else fire();
}

/* ── Chip wiring helper ── */
function wireDemoChips(chipContainer, feedApi) {
  chipContainer.querySelectorAll('.demo-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chipContainer.querySelectorAll('.demo-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      feedApi.play(chip.dataset.script);
    });
  });
}
