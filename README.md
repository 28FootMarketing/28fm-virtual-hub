# 28 Foot Marketing — Virtual Hub

Immersive branded meeting rooms with Supabase real-time presence.

## Stack
- **Frontend**: Vanilla HTML/CSS/JS (no build step)
- **Backend**: Node.js + Express (serves HTML with env injection)
- **Real-time**: Supabase Postgres + Realtime subscriptions
- **Hosting**: Railway

---

## Deploy to Railway

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial deploy — 28FM Virtual Hub"
git remote add origin https://github.com/YOUR_USERNAME/28fm-virtual-hub.git
git push -u origin main
```

### 2. Create Railway Project
1. Go to [railway.app](https://railway.app)
2. **New Project** → **Deploy from GitHub repo**
3. Select your repo

### 3. Set Environment Variables
In Railway → your service → **Variables**, add:

| Key | Value |
|-----|-------|
| `SUPABASE_URL` | `https://mgtmqucaldkaxvxglguw.supabase.co` |
| `SUPABASE_ANON_KEY` | Your anon key from Supabase Dashboard → Settings → API |

### 4. Add Your Logo
Drop your `logo.png` into the `public/` folder before pushing.

### 5. Custom Domain
In Railway → your service → **Settings** → **Domains**:
- Add `meet.28footmarketing.com`
- Add a CNAME record in your DNS: `meet` → `[your-railway-domain].railway.app`

---

## Local Development
```bash
npm install
SUPABASE_URL=https://mgtmqucaldkaxvxglguw.supabase.co \
SUPABASE_ANON_KEY=your_key_here \
npm start
```
Then open http://localhost:3000

---

## Supabase Schema
Already applied to project `mgtmqucaldkaxvxglguw`:
- `meeting_rooms` — the 4 room definitions
- `room_presence` — live seat occupancy with realtime enabled

---

## Rooms
| Room | Purpose | Color |
|------|---------|-------|
| ⚡ Strategy Room | Client Strategy & Planning | Cyan |
| 🏆 RecruitAble Suite | Athlete Recruiting Sessions | Purple |
| 🎯 FTP Coaching Room | Coach Development & Mentorship | Teal |
| 🤖 Ops Command | CORA / Agent Briefings | Green |
