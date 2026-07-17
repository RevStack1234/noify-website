# Noify Website

Marketing website for Noify Energy, built with React, TypeScript, Vite and Tailwind CSS. Includes contact and commercial fleet integration forms that send emails via a Vercel serverless function.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** for dev server and builds
- **Tailwind CSS v4**
- **React Router** for routing
- **Motion** for animations
- **Nodemailer** (serverless API) for sending enquiry emails
- **Oxlint** for linting

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server (frontend only, no API):

```bash
npm run dev
```

The `/api/send-email` endpoint is a Vercel serverless function and is **not** served by `npm run dev`. To test forms locally, use the Vercel CLI:

```bash
npm i -g vercel
vercel dev
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check and build for production   |
| `npm run preview` | Preview the production build          |
| `npm run lint`    | Run Oxlint                            |

## Environment Variables

The email API (`api/send-email.js`) needs SMTP credentials. Set these locally in a `.env` file and in the Vercel dashboard for production:

| Variable       | Description                              |
| -------------- | ---------------------------------------- |
| `SMTP_SERVICE` | Email service (e.g. `gmail`)             |
| `SMTP_HOST`    | SMTP host (e.g. `smtp.gmail.com`)        |
| `SMTP_PORT`    | SMTP port (e.g. `587`)                   |
| `SMTP_SECURE`  | `true` for port 465, otherwise `false`   |
| `SMTP_USER`    | SMTP username / email address            |
| `SMTP_PASS`    | SMTP password (use an app password)      |
| `SMTP_FROM`    | From address (defaults to `SMTP_USER`)   |
| `SMTP_TO`      | Recipient for enquiries                  |

> For Gmail, enable 2-Step Verification and create an **App Password** — your normal password will not work.

## Project Structure

```
api/               Vercel serverless functions (email)
public/            Static assets (images, icons, favicon)
src/
  components/      UI components (sections, forms, layout)
  config/          Navigation and shared config
  hooks/           Custom React hooks
  motion/          Animation variants
  pages/           Route pages
```

## Deployment

Deployed on **Vercel**. Pushing to the `main` branch triggers a deploy. Make sure the SMTP environment variables are configured in the Vercel project settings.
