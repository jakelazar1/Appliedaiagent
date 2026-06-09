# Magic UI Dashboard Template — React Component Structure

Quick reference for building client dashboards. Use this as a starting point for every new client.

---

## Directory Structure

```
src/
├── components/
│   ├── Dashboard.tsx (main container)
│   ├── MetricCard.tsx (primary KPI display)
│   ├── Timeline.tsx (recent activity)
│   ├── StatusBadge.tsx (execution status)
│   ├── ActionButton.tsx (trigger workflow, pause, etc.)
│   ├── NextUpSection.tsx (scheduled actions)
│   └── IssueAlert.tsx (error messages)
├── hooks/
│   ├── useExecutionLogs.ts (fetch from backend)
│   ├── useRealTime.ts (WebSocket or polling)
│   └── useVerticalConfig.ts (tour ops vs home services, etc.)
├── styles/
│   └── tailwind.config.js (color palette, spacing)
└── pages/
    └── client-dashboard.tsx (entry point)
```

---

## Core Components

### MetricCard (Primary KPI)

```tsx
<MetricCard
  title="Booking Confirmations"
  value={234}
  subtitle="This month"
  trend="+18% vs last month"
  lastRun="2 hours ago"
  status="success"
/>
```

**Outputs:**
- Large, centered number
- Context (time period)
- Trend (if data available)
- Last execution timestamp
- Color (green for success, amber for warning)

### Timeline (Recent Activity)

```tsx
<Timeline events={[
  { date: "Jun 9", action: "47 emails sent", status: "success" },
  { date: "Jun 8", action: "31 leads synced", status: "success" },
  { date: "Jun 7", action: "12 follow-ups", status: "success" },
]} />
```

**Outputs:**
- Vertical timeline (newest first)
- Emoji icons (✓, ⚠, ✉, etc.)
- Human-readable action
- Status badge

### NextUpSection (Scheduled Actions)

```tsx
<NextUpSection schedules={[
  { time: "Tomorrow 9 AM", action: "Weekly digest email", icon: "📧" },
  { time: "Wednesday", action: "Auto-sync calendar", icon: "📅" },
  { time: "Friday", action: "Monthly report", icon: "📊" },
]} />
```

**Outputs:**
- Upcoming events in natural language
- Next occurrence date
- Emoji for quick visual scan

### ActionButton (Trigger Workflow)

```tsx
<ActionButton 
  label="Send Confirmation Now"
  onClick={handleManualTrigger}
  loading={isLoading}
  disabled={lastRunWasRecent}
/>
```

**Outputs:**
- Prominent button (green or blue)
- Clear label (action-oriented)
- Loading state
- Disabled if workflow ran too recently (avoid spam)

### IssueAlert (Error Messages)

```tsx
<IssueAlert 
  severity="warning"
  message="1 email bounced yesterday. We'll retry tomorrow."
  action="View Details"
  onAction={() => setShowDetails(true)}
/>
```

**Outputs:**
- Amber/red background (severity-based)
- Human-friendly message (no stack traces)
- Optional action button
- Dismissible

---

## Data Flow

```
┌─────────────────────────────────────────────┐
│ Claude Code Routine Execution               │
│ (runs, logs metadata to DB)                 │
└──────────────┬──────────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────────┐
│ Backend API (Supabase or Express.js)        │
│ GET /api/executions (paginated, recent)     │
│ GET /api/schedule (next upcoming runs)      │
│ POST /api/trigger (manual workflow run)     │
└──────────────┬──────────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────────┐
│ Frontend (React)                            │
│ useExecutionLogs() hook (fetch + cache)     │
│ useRealTime() hook (poll every 30s)         │
│ renders: MetricCard, Timeline, etc.         │
└─────────────────────────────────────────────┘
```

---

## Styling Utilities (Tailwind)

```js
// Tailwind config (tailwind.config.js)
module.exports = {
  theme: {
    extend: {
      colors: {
        'magic-bg': '#F8F9FA',      // dashboard background
        'magic-card': '#FFFFFF',    // card background
        'magic-green': '#4CAF50',   // success
        'magic-amber': '#FFA726',   // warning
        'magic-blue': '#2196F3',    // primary action
        'magic-gray': '#B0BEC5',    // secondary text
      },
      spacing: {
        'card': '24px',             // padding inside cards
        'section': '32px',          // gap between sections
      },
      fontSize: {
        'metric': '48px',           // primary KPI
        'heading': '20px',          // section heading
        'body': '14px',             // regular text
        'label': '12px',            // labels
      },
    },
  },
};
```

**Usage:**
```tsx
<div className="bg-magic-bg p-card space-y-section">
  <h1 className="text-metric font-bold">234</h1>
  <p className="text-body text-magic-gray">Confirmations sent</p>
</div>
```

---

## Real-Time Updates

### Option 1: Polling (Simpler)

```tsx
// hooks/useExecutionLogs.ts
export function useExecutionLogs(interval = 30000) {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      const res = await fetch('/api/executions?limit=7');
      const data = await res.json();
      setLogs(data);
      setLoading(false);
    };

    fetchLogs();
    const timer = setInterval(fetchLogs, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return { logs, loading };
}
```

### Option 2: WebSocket (Advanced, Real-Time)

```tsx
// hooks/useRealTime.ts
export function useRealTime() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const ws = new WebSocket('wss://api.example.com/logs');
    ws.onmessage = (event) => {
      const newLog = JSON.parse(event.data);
      setLogs(prev => [newLog, ...prev.slice(0, 6)]);
    };
    return () => ws.close();
  }, []);

  return { logs };
}
```

---

## Error Handling

**Rule:** Never show technical errors to clients.

❌ **Bad:**
```
Error: ENOTFOUND api.n8n.cloud. Code: ENOTFOUND
```

✅ **Good:**
```tsx
<IssueAlert 
  severity="warning"
  message="Our connection was temporarily slow. We'll try again in 5 minutes."
/>
```

**Mapping:**

| Backend Error | Client Message |
|---|---|
| Webhook timeout | "Connection took too long. We'll retry." |
| Invalid credentials | "We need to update your authorization. Click [Reconnect]." |
| Rate limited | "Pausing briefly to avoid overloading their system." |
| Database error | "We're having trouble saving data. Our team has been notified." |

---

## Performance Checklist

- [ ] Dashboard loads in < 2 seconds
- [ ] Metrics update without full page reload (SPA)
- [ ] Images optimized (lazy load, WEBP)
- [ ] No blocking JavaScript (async scripts)
- [ ] CSS is minified and inlined for critical path
- [ ] API responses cached on client (React Query or SWR)

---

## Accessibility (WCAG AA)

- [ ] Color contrast 4.5:1 for all text
- [ ] Button labels are descriptive ("Send Email Now" not "Click Here")
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Loading states are announced to screen readers
- [ ] Form inputs have labels and error messages

---

## Per-Vertical Variations

### Tour Operator
**Primary Metric:** Booking confirmations sent  
**Key Timeline:** Booking arrival → Confirmation sent → Follow-up  
**Quick Action:** "Send Confirmation Now"  
**Next Up:** Scheduled reminder emails

### Home Services
**Primary Metric:** Leads synced + quoted  
**Key Timeline:** Lead received → Quote sent → Follow-up call reminder  
**Quick Action:** "Sync New Leads"  
**Next Up:** Unquoted leads, follow-up deadlines

### Real Estate
**Primary Metric:** Listings synced + updated  
**Key Timeline:** Listing upload → Social post → Lead capture  
**Quick Action:** "Force Sync All Listings"  
**Next Up:** Weekly open house reminders

---

## Next Steps

1. **Pick your first client vertical**
2. **Design wireframe** (on paper, then Figma)
3. **Clone this template**
4. **Build components** (MetricCard, Timeline, etc.)
5. **Connect to API** (Claude Code logs backend)
6. **Test on mobile** (tablet, phone)
7. **Get client feedback** (does it feel magical?)
8. **Deploy to Vercel**

---

**Version:** 1.0  
**Last Updated:** June 9, 2026
