# Contact Directory App 📇

Technical assessment: a React Native (Expo) screen that consumes the
[randomuser.me](https://randomuser.me) public API to list and filter a
directory of 1,000 contacts, with real-time search by first or last name.

> **Note on branches**
>
> - **`main`** contains the code exactly as it was at the end of the live
>   2-hour session.
> - **[`feat/test_completed`](../../tree/feat/test_completed)** contains the
>   finished assessment, completed after the session.

<img width="577" height="812" alt="Captura de Pantalla 2026-07-24 a la(s) 8 28 50 p m" src="https://github.com/user-attachments/assets/3e06d0bd-a546-4783-b039-2f73a542619f" />

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

Then open it in [Expo Go](https://expo.dev/go), the iOS simulator, or an
Android emulator.

## Features

- Fetches 1,000 contacts from `https://randomuser.me/api/?results=1000`
- Extracts first name, last name, email, and thumbnail from the nested JSON
- Real-time local search by first or last name (filters on every keystroke)
- Three visual states: Loading (`ActivityIndicator`), Error, and Success

## Architecture

```
src
   ---> types       --> API response and contact models
   ---> api         --> fetch + mapping of the nested JSON (pure functions)
   ---> hooks       --> useContacts: async state 
   ---> theme       --> design tokens (colors, spacing, dimensions, typography)
   ---> components  --> SearchBar, ContactDetail (contact card)
   ---> screens     --> ContactScreen 
```

Data flows in one direction: `api` fetches and maps the raw payload into a
flat `contact` model, `useContacts` exposes it as a state machine, and the
screen renders one branch per state. All styles consume the design tokens
from `src/theme/tokens.ts`, which mirror the spec (background `#F3F4F6`,
16px screen padding, 12px card radius, 50px circular avatars, etc.).

## Tech stack

- Expo SDK 57 / React Native 0.86
- No external state or UI libraries — plain React hooks and StyleSheet
