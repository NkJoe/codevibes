# Dev Mood → Playlist 🎵

A playful, aesthetic web app that matches your coding mood with the perfect playlist. Because your code vibes need a soundtrack.

## Framework

Vite 6.x + React 19.x

## Features

- 🎭 **6 Developer Moods**: Focused, Burnt Out, 2am Hustle, Bug Fixing Rage, Soft Life Coding, and Debugging Detective
- 🎲 **Shuffle Mode**: Can't decide? Let fate choose your vibe
- 📋 **Share Function**: Copy mood + playlist to clipboard
- 🥚 **Easter Egg**: Click the same mood 3 times...
- 🌊 **Ambient Animations**: Subtle background pulses for that cozy feel
- 📱 **Fully Responsive**: Looks great on mobile, tablet, and desktop

## Theme

Cozy Dark with soft purple/pink/blue gradients, designed for late-night coding sessions and good vibes only.

## Preview

Configured to run on `0.0.0.0:8080` for k8s HTTPRoute access.

## Development

```bash
npm install
npm run dev
```

Server will be available at:
- Local: http://localhost:8080
- Network: http://0.0.0.0:8080
- k8s: http://*.nodeops.app (or your HTTPRoute domain)

## Build

```bash
npm run build
npm run preview
```

## How It Works

1. Select your current coding mood
2. Get an instant playlist recommendation with a sarcastic description
3. Click the Spotify link to start vibing
4. Share with friends or shuffle for a new mood

## Tech Stack

- React 19 (functional components + hooks)
- Vite 6 (blazing fast dev server)
- Tailwind CSS (utility-first styling)
- No backend, no auth, no BS

## Deployment

Ready to deploy on:
- Vercel
- Netlify
- Any static hosting platform

Just run `npm run build` and deploy the `dist` folder.

---

made with ☕ and procrastination