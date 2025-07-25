# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (opens at http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Architecture

This is a blank Next.js 15 application built with TypeScript and Tailwind CSS. The project follows the App Router architecture and is ready for development.

### Key Structure

- **App Router**: Uses Next.js App Router (`src/app/`) with layout.tsx and page.tsx
- **Styling**: Tailwind CSS with default configuration
- **Fonts**: Geist Sans and Geist Mono (local fonts)

### Current State

The application has been reset to a blank Next.js template:
- `src/app/page.tsx` - Contains basic "Welcome to Next.js!" template
- `src/app/layout.tsx` - Basic layout with Geist fonts
- `src/app/globals.css` - Minimal Tailwind CSS setup with light/dark mode support
- `tailwind.config.ts` - Default Tailwind configuration

### Technical Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans and Geist Mono (local)
- **Dependencies**: Minimal Next.js setup with tailwind-scrollbar-hide plugin