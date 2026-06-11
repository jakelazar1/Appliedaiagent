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
      row.innerHTML =
        '<span class="df-time">' + ev.time + '</span>' +
        '<div class="df-body">' +
          (ev.who ? '<div class="df-who">' + ev.who + '</div>' : '') +
          '<div class="df-text">' + ev.text + '</div>' +
        '</div>';
      feed.appendChild(row);
    });

    const rows = feed.querySelectorAll('.df-event');

    if (reduced) {
      rows.forEach(r => r.classList.add('on'));
      punch.classList.add('on');
      return;
    }

    s.events.forEach((ev, i) => {
      timers.push(setTimeout(() => rows[i].classList.add('on'), ev.t + 400));
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
