# Sonu Kumar Sah — Portfolio Website

React + Vite se banaya gaya portfolio. Minimal, clean, responsive.

## Naye project add karne ka tarika

`src/projects.js` file kholiye — har project ek object hai. Copy-paste karke
naya add karo, ye fields bharo:

- `title` — project ka naam
- `category` — "Marketing" | "Design" | "AI" | "Web" | "Social Media" | "Copywriting" | "Research"
- `date` — "YYYY-MM" format
- `summary` — ek line
- `what` — kya banaya
- `why` — kyun banaya
- `result` — kya outcome mila
- `link` — live link (optional, khali chhod sakte ho)
- `tags` — array of short labels

File save karo, website automatically update ho jayegi.

## Local pe chalane ke liye

```
npm install
npm run dev
```

Browser me `http://localhost:5173` khulega.

## Free Hosting + Domain Connect (sonukumarsah.in)

**Step 1 — Vercel pe deploy (free)**
1. https://vercel.com pe GitHub se signup karo
2. Ye project GitHub repo me push karo
3. Vercel dashboard me "New Project" → apna repo select karo
4. Build command: `npm run build`, Output directory: `dist` (Vercel Vite ko auto-detect kar leta hai)
5. Deploy dabao — 1 minute me live ho jayega (xxx.vercel.app pe)

**Step 2 — Apna domain (sonukumarsah.in) connect karo**
1. Vercel project → Settings → Domains → apna domain daalo: `sonukumarsah.in`
2. Vercel jo DNS records dega (A record + CNAME), unhe apne domain registrar
   (jahan se domain khareeda — GoDaddy, Namecheap, Hostinger etc.) ke DNS
   settings me jaake add karo
3. 10-30 minute me domain live ho jayega, free SSL (https) bhi auto milega

**Alternative — Netlify** bhi bilkul isi tarah free hai agar Vercel pasand na aaye.

## Manage / Update

Jab bhi naya project add karna ho:
1. `src/projects.js` edit karo
2. GitHub pe push karo
3. Vercel automatically naya version deploy kar dega — kuch aur karne ki zaroorat nahi
