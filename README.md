# Nexora — Your everyday digital toolkit

Nexora is a responsive collection of everyday browser utilities. Calculations and text transformations run locally in your browser. Favorites, recent tools, and the light/dark theme are saved on this device.

## Features

- Search all 20 tools and filter by category.
- Save favorites and revisit recently used tools.
- Light and dark themes, responsive sidebar, and direct links for each tool.
- Clipboard actions where useful; QR output can be downloaded as PNG.

### Tools

**Everyday calculators:** Standard Calculator, Percentage Calculator, Age Calculator, Date Difference, BMI Calculator.

**Text & developer:** Word Counter, JSON Formatter, Base64 Encoder/Decoder, URL Encoder/Decoder, Case Converter.

**Generators & converters:** Password Generator, QR Code Generator, Unit Converter, Currency Converter, Color Converter.

**Productivity & information:** Stopwatch, Countdown Timer, World Clock, Weather Checker, Pomodoro Timer.

## Technology

React 18, Vite, JavaScript, Tailwind CSS, React Router, Lucide React, and the browser's Web Crypto, Clipboard, Intl, and localStorage APIs. QR codes are generated locally using `qrcode`.

## Requirements

Node.js 20.19+ or 22.12+ and npm.

## Install and run

```sh
npm install
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) after the server starts. The Vite dev server is pinned to port 5173 and will report an error if that port is already occupied. No account or environment variables are needed.

## Build and preview

```sh
npm run build
npm run preview
```

The production bundle is written to `dist/`.

## APIs and configuration

- **Weather:** Open-Meteo geocoding and forecast endpoints, no key required. It needs an internet connection; the tool reports network or city lookup errors. Current conditions include the API observation timestamp.
- **Currency:** Frankfurter's latest published reference rates, no key required. This is a reference-rate service rather than a live trading quote, and rate publication can lag. The tool shows the rate date and handles unavailable pairs and network errors.

No private keys are included in this frontend. Neither API requires configuration for local development or deployment.

## Structure

```text
src/
  components/        Brand and reusable tool cards
  data/tools.js      Central registry of tool names, categories, icons, and routes
  pages/             Home, tool, and not found pages
  tools/ToolView.jsx Individual utility interfaces and logic
  utils/helpers.js   Safe local storage, clipboard, and formatting helpers
  App.jsx            Navigation, homepage, route handling, persistence
  main.jsx           React entry point
  styles.css         Theme tokens, responsive styling, Tailwind directives
```

## Deploy to Vercel

Import this repository into Vercel. The Vite defaults are sufficient: build command `npm run build`, output directory `dist`, and no environment variables. Client-side routes should be served through Vite's SPA fallback (Vercel's Vite preset handles this). For a custom static host, configure unknown paths to fall back to `index.html` so direct tool URLs load correctly.

## Limitations

BMI categories use common adult ranges and are not medical advice. Weather coverage depends on Open-Meteo's available geocoding and forecast data. Currency values use the date reported by Frankfurter and may not be today's intraday market rate. Browser clipboard support requires a secure context in some browsers.
