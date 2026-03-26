# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio landing page website for an entrepreneurship studies academic, faculty member, researcher, lecturer and design thinking trainer.

## Tech Stack

- Frontend: Next.js 15 (App Router)
- Styling: Tailwind CSS
- Language: TypeScript

## Design Guidelines

Constraints:
- Flat colors only: black, white, + max 2 primary accents (#FF0000, #0000FF, #FFFF00)
- No gradients, shadows, or rounded corners
- Thick borders (2–4px)
- System sans-serif font
- Rigid grid layout, visible structure

Interaction:
- Instant state changes only (no smooth animation)

Tone:
- Direct, functional, no fluff

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production

## Architecture / Important Notes

- Use Tailwind CSS for all styling (no custom external CSS libraries).
- Ensure the layout is mobile-first and responsive.
- Create modular React components (e.g., Hero, About, Portfolio, Contact) inside a `/components` folder.
