# SteamPulse

SteamPulse is a modern, responsive web dashboard built with **Next.js** that tracks and presents real-time Steam player charts, concurrent player metrics, and game trends. Designed for high performance and a native user experience, it features dynamic grid layouts, trending status badges, and instant metric updates without the overhead of a backend database.

---

## Features

* **Live Player Analytics:** Track top games by concurrent players, 24-hour peaks, and all-time highs with localized number formatting.
* **Steam Grid View:** A sleek, dark-mode card layout optimized for Steam 16:9 header art and intuitive visual hierarchy.
* **Dynamic Trending Status:** Built-in indicators and badges showing rank movement and momentum week-over-week.
* **Flexible Sorting & Filters:** Quickly sort through data using robust TypeScript sorting logic for ranks, player counts, and alphabetical order.
* **Zero Database Architecture:** Fast, cache-revalidated data fetching leveraging Next.js capabilities for seamless real-time performance.

---

## Tech Stack

* **Framework:** Next.js (React)
* **Styling:** Tailwind CSS
* **UI Components:** Shadcn/ui & Lucide Icons
* **Language:** TypeScript

---

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/steampulse.git
cd steampulse

```


2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install

```


3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev

```


4. Open [http://localhost:3000](http://localhost:3000?utm_source=gemini) with your browser to see the result.

---

## Project Structure

* `app/` - Next.js app router pages, layouts, and components.
* `components/` - Reusable UI elements (cards, headers, filters).
* `public/` - Static assets, branding, and favicons.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
