# LyricsIt

A music lyrics app for searching songs by artist and title and viewing lyrics, powered by the Genius Song Lyrics API through RapidAPI.

<img width="826" height="517" alt="LyricsIT Commercial Thumbnail" src="https://github.com/user-attachments/assets/ae637708-9151-41b8-8699-8da2d223d3ce" />


## Getting started

### Requirements

- Node.js and npm
- A RapidAPI key with access to the [RapidAPI Hub](https://rapidapi.com/hub)

### Setup

1. Clone the repository and install dependencies:

   ```sh
   npm install
   ```

2. Create a local environment file from the example:

   ```sh
   cp .env.example .env
   ```

3. Add your RapidAPI key to `.env`:

   ```env
   VITE_RAPIDAPI_KEY=your_rapidapi_key_here
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

Open the local URL printed by Vite.

## Available scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build in `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — check JavaScript and JSX with ESLint

## Configuration

The app uses `VITE_RAPIDAPI_KEY` to authenticate API requests. Vite embeds `VITE_*` variables in the client bundle, so this key is visible to users of the deployed app. Do not use a private, privileged key; use an appropriately restricted key and API plan.
