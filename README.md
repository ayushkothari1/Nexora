# Nexora

**Your everyday digital toolkit.** Nexora brings 20 useful browser utilities together in one responsive app. Search and filter tools, save favorites, revisit recent tools, and choose a light or dark theme. Calculations and text transformations run locally in your browser.

## Features

- Find tools quickly with search and category filters.
- Save favorite tools and revisit recently used ones.
- Use direct links, responsive navigation, and light or dark themes.
- Copy results where useful and download generated QR codes as PNG.

## Tools included

**Everyday calculators**

Standard Calculator · Percentage Calculator · Age Calculator · Date Difference · BMI Calculator

**Text & developer**

Word Counter · JSON Formatter · Base64 Encoder/Decoder · URL Encoder/Decoder · Case Converter

**Generators & converters**

Password Generator · QR Code Generator · Unit Converter · Currency Converter · Color Converter

**Productivity & information**

Stopwatch · Countdown Timer · World Clock · Weather Checker · Pomodoro Timer

## Technology stack

React 18 · Vite · JavaScript · Tailwind CSS · React Router · Lucide React · `qrcode`

Browser APIs: Web Crypto, Clipboard, Intl, and localStorage.

## API integrations

- **Weather:** Open-Meteo provides geocoding and forecast data. No API key is required; weather features need an internet connection.
- **Currency:** Frankfurter provides the latest published reference exchange rates. No API key is required; rates are reference rates, not live trading quotes.

## Getting started

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/).

## Build

```sh
npm run build
```
