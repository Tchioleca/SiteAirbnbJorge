# Guest House Website Package Guide

A practical reference for the **Azurara Guest House** website stack so you can quickly remember **what to install** and **when to use it**.

---

## Recommended approach

Keep the package list lean.

For this project, the best setup is a **React + Vite frontend** with only the packages that directly support:

- booking UX
- data fetching
- SEO
- maps
- forms
- UI polish

The goal is to avoid installing too many libraries too early.

---

## Core packages for the MVP

Install these first:

```bash
npm install react-router-dom
npm install axios
npm install @tanstack/react-query
npm install react-hook-form
npm install zod
npm install react-day-picker
npm install date-fns
npm install react-icons
npm install react-helmet-async
```

### What each one is for

#### `react-router-dom`
Use for:
- page routing
- navigation between Home, Rooms, Contact, Booking, etc.

Use it when:
- the site has multiple pages
- you need dynamic routes like `/rooms/:id`

---

#### `axios`
Use for:
- API calls
- sending and receiving booking, contact, or review data

Use it when:
- connecting to an external booking API
- sending form data to a backend
- fetching room availability or reviews

---

#### `@tanstack/react-query`
Use for:
- server state management
- caching API responses
- handling loading and error states cleanly

Use it when:
- you fetch data that may change
- you need availability, reviews, booking info, or room data from an API
- you want cleaner API logic than raw `useEffect`

Best for:
- booking search results
- availability lookups
- review data
- room lists from a server

---

#### `react-hook-form`
Use for:
- building forms with less boilerplate
- form state handling
- better performance than fully controlled inputs

Use it when:
- making booking forms
- making contact forms
- making admin input forms later if needed

Best for:
- booking widgets
- check-in/check-out forms
- inquiry/contact forms

---

#### `zod`
Use for:
- validating form input
- defining clean validation schemas

Use it when:
- you want reliable form validation
- you need to make sure dates, guest counts, emails, or names are valid

Best paired with:
- `react-hook-form`

Example use cases:
- required fields
- email validation
- number of guests
- date rules

---

#### `react-day-picker`
Use for:
- check-in and check-out date selection
- booking calendar UI

Use it when:
- the homepage or booking section needs date pickers
- the user must select one date or a date range

Best for:
- booking search box
- reservation flow UI

---

#### `date-fns`
Use for:
- formatting dates
- comparing dates
- manipulating booking dates

Use it when:
- formatting selected dates for display
- calculating nights stayed
- disabling past dates
- checking date ranges

Best paired with:
- `react-day-picker`

---

#### `react-icons`
Use for:
- lightweight icons across the site

Use it when:
- you need location, phone, calendar, guest, star, or social media icons
- you want fast UI polish without creating custom SVGs

Best for:
- amenity lists
- contact section
- booking UI
- footer/social links

---

#### `react-helmet-async`
Use for:
- page titles
- meta descriptions
- better SEO control per page

Use it when:
- you want each page to have its own SEO metadata
- you need better search engine presentation

Best for:
- Home page SEO
- Rooms pages
- Contact page metadata

---

## Optional visual packages

Install these only if the site actually needs them:

```bash
npm install swiper
npm install react-leaflet leaflet
npm install aos
npm install clsx
```

### What each one is for

#### `swiper`
Use for:
- image sliders
- testimonials
- room galleries
- nearby attractions carousel

Use it when:
- you want polished carousels
- the site has lots of photos or review cards

Best for:
- hero gallery
- room photos
- testimonials section
- nearby places

Do not add it if:
- you only need one static image section

---

#### `react-leaflet` + `leaflet`
Use for:
- interactive maps

Use it when:
- you want a map in the contact/location section
- users should visually see where the guest house is

Best for:
- contact page
- “how to get here” section
- nearby attractions map

Do not add it if:
- a simple embedded Google Map iframe is enough

---

#### `aos`
Use for:
- scroll reveal animations

Use it when:
- you want simple animations without building custom CSS/JS animation logic

Best for:
- fade-in sections
- reveal-on-scroll cards
- subtle homepage polish

Do not add it if:
- you want to keep the site very lightweight
- you are already doing enough with pure CSS

---

#### `clsx`
Use for:
- conditional class names

Use it when:
- styling changes depending on state
- buttons, cards, or booking inputs need different classes based on conditions

Best for:
- active/inactive UI states
- selected dates
- validation styles
- reusable components

---

## Styling option

If you want **Tailwind instead of plain CSS**, install:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

### When to use Tailwind
Use Tailwind when:
- you want to build fast
- you want responsive layouts quickly
- you want consistent spacing and styling
- you prefer utility classes over writing large CSS files

### When to stay with plain CSS
Stay with plain CSS when:
- the site is small
- you want full control over custom styles
- you are more comfortable writing CSS manually

### Recommendation
For this project, Tailwind is a strong option because it is:
- fast
- responsive
- practical for landing pages and booking UIs

Avoid adding a heavy UI component library unless you already know you need one.

---

## Development quality packages

These are worth adding for a better developer experience:

```bash
npm install -D eslint
npm install -D @tanstack/react-query-devtools
```

### `eslint`
Use for:
- catching code issues early
- keeping code consistent

Use it when:
- you want cleaner code
- you want fewer avoidable bugs

Best for:
- maintaining project quality as it grows

---

### `@tanstack/react-query-devtools`
Use for:
- debugging queries
- inspecting cache and fetch behavior

Use it when:
- building and testing booking search state
- debugging API requests with React Query

Best for:
- development only
- checking query keys, cache, loading states, and refetching behavior

---

## Final recommended install set

### Main dependencies

```bash
npm install react-router-dom axios @tanstack/react-query react-hook-form zod react-day-picker date-fns react-icons react-helmet-async swiper react-leaflet leaflet clsx
```

### Dev dependencies

```bash
npm install -D tailwindcss @tailwindcss/vite eslint @tanstack/react-query-devtools
```

---

## Simple decision guide

### Install immediately for MVP
- `react-router-dom`
- `axios`
- `@tanstack/react-query`
- `react-hook-form`
- `zod`
- `react-day-picker`
- `date-fns`
- `react-icons`
- `react-helmet-async`

### Install only if needed
- `swiper`
- `react-leaflet`
- `leaflet`
- `aos`
- `clsx`

### Install for styling if choosing Tailwind
- `tailwindcss`
- `@tailwindcss/vite`

### Install for dev quality
- `eslint`
- `@tanstack/react-query-devtools`

---

## Best practical setup for this project

If you want the cleanest and most useful setup, start with:

- React + Vite
- React Router
- Axios
- TanStack Query
- React Hook Form
- Zod
- React DayPicker
- date-fns
- React Helmet Async
- Tailwind or plain CSS

Then only add:
- Swiper if you need sliders
- Leaflet if you need a real interactive map
- AOS if you want scroll animations
- clsx if your components get more state-based styling

---

## Short version

Use this mindset:

- **Routing** → `react-router-dom`
- **API calls** → `axios`
- **Data fetching + cache** → `@tanstack/react-query`
- **Forms** → `react-hook-form`
- **Validation** → `zod`
- **Date picker** → `react-day-picker`
- **Date utilities** → `date-fns`
- **Icons** → `react-icons`
- **SEO/meta tags** → `react-helmet-async`
- **Sliders** → `swiper`
- **Interactive maps** → `react-leaflet` + `leaflet`
- **Scroll animations** → `aos`
- **Conditional classes** → `clsx`
- **Styling framework** → `tailwindcss`
- **Code quality** → `eslint`


