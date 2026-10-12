# Sameer Tahasildar — Developer Portfolio ("Goa Postcard")

A highly distinctive, editorial, print-inspired single-page portfolio for **Sameer Tahasildar**, Full Stack Developer from **Old Goa, India**.

Designed intentionally to avoid generic dark-mode, purple-gradient, particle-background developer templates. Rooted in Goa's rich visual identity: warm cream paper backgrounds (`#F6EFE3`), deep ocean teal (`#0E4D52`), terracotta/laterite orange (`#C8553D`), sunset gold (`#E9A23B`), and a "night in Goa" deep navy variant (`#0B1522`).

---

## 🌴 Key Features & Signature Interactions

1. **Cmd/Ctrl + K Command Palette (`cmdk`)**: Quick keyboard-driven navigation to all sections, direct live project links, resume download, theme switching, and instant email copy.
2. **Hero Typewriter Resolution**: The opening headline types out `const sameer = { role: 'Full Stack Developer', base: 'Goa' };` and smoothly resolves into `"I build fast, reliable web products, from React interfaces to NestJS APIs."`
3. **Live Goa Clock & Status**: Real-time IST clock (`Asia/Kolkata`) displaying current time in Old Goa alongside an active "Open to work" status pill.
4. **Skills Tide Chart**: Mandovi estuary hydrographic chart with undulating harmonic skill waves for Languages, Frontend, Backend, Databases, Cloud & DevOps, CRM & Automation, and Testing.
5. **Konkan Train Journey Timeline**: Experience rendered as a route line with railway station markers:
   - Margao Junction (Risban Pvt. Ltd · Nov 2025 to Present)
   - Chennai Central (Worley Ventures · Jun 2025 to Nov 2025)
   - Verna Outpost (Creative Capsule · Nov 2024 to Apr 2025)
6. **Postcard Projects**: Interactive cards with slight rotations, authentic postmark franking cancellation seals, and perforated stamps that straighten and elevate on hover.
7. **Nautical Compass Cursor**: Desktop custom cursor that morphs into a brass compass over interactive elements (automatically disabled on touch devices).
8. **Single Source of Truth**: All portfolio facts, experience, education, skills, and links reside in `src/data/portfolio.ts` for clean, isolated edits without touching component markup.
9. **Accessible & Responsive**: Semantic HTML5, WCAG AA compliant contrast, reduced-motion compatibility, and mobile-friendly layouts.

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 with custom Goa Postcard color tokens
- **Typography**: Fraunces (Display Serif), Manrope (Body Sans), JetBrains Mono (Monospace labels)
- **Command Palette**: `cmdk`
- **Animations**: `motion` (Framer Motion)
- **Icons**: `lucide-react`

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and `npm` installed.

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables (Optional)

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

To enable Formspree form submission for the contact section, add your Formspree endpoint:

```env
VITE_FORM_ENDPOINT="https://formspree.io/f/your_form_id"
```

*(Note: If left unset, the form runs in safe client-side simulation mode).*

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your console) to view the portfolio.

---

## 🏗 Production Build

To build the optimized static production bundle:

```bash
npm run build
```

This compiles your application into the `dist/` folder with minified JavaScript, optimized CSS, and static assets.

To test the production build locally:

```bash
npm run preview
```

---

## 🌐 Netlify Deployment Steps

Deploying this portfolio to Netlify takes less than 2 minutes:

### Option A: Via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Option B: Via Git Integration (Recommended)

1. Push this repository to GitHub or GitLab.
2. Log into [Netlify Dashboard](https://app.netlify.com) and click **"Add new site"** → **"Import an existing project"**.
3. Select your repository.
4. Configure Build Settings:
   - **Base directory**: `.` (leave blank or root)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Under **Environment variables**, optionally add:
   - `VITE_FORM_ENDPOINT`: Your Formspree URL.
6. Click **Deploy Site**. Netlify will provide an SSL certificate and automatic continuous deployment on every Git push.

---

## 📝 Updating Content

To update any content (projects, experiences, skills, education, bio, or links):
Edit the typed file:
```
src/data/portfolio.ts
```
All components automatically consume data from this single source of truth.

---

## 📄 License & Credits

Built for Sameer Tahasildar. "Made in Goa" · 2026.
