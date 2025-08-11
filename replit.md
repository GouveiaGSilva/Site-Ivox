# Overview

This is a modern digital marketing consultancy website built with React and TypeScript. The project provides a professional frontend-only site for "Ivox Scale," a digital marketing agency specializing in scaling businesses through innovative digital strategies. The application features a responsive design with dark/light theme support and internationalization (Portuguese and English).

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application follows a component-based React architecture with TypeScript for type safety. It uses a single-page application (SPA) structure with client-side routing via Wouter. The codebase is organized into clear separation of concerns:

- **Components**: Reusable UI components organized in `/client/src/components/`
- **Pages**: Route-specific page components in `/client/src/pages/`
- **Contexts**: React Context providers for global state management (theme and language)
- **Hooks**: Custom React hooks for reusable logic
- **UI Components**: Comprehensive UI component library using Radix UI primitives with shadcn/ui styling

## Styling and Design System
The project uses Tailwind CSS for utility-first styling with a custom design system:
- CSS custom properties for theme variables supporting light/dark modes
- Responsive design with mobile-first approach
- Inter font family for consistent typography
- Component variants using class-variance-authority for systematic styling

## State Management
Local state management is handled through React Context API:
- **ThemeContext**: Manages light/dark mode with localStorage persistence
- **LanguageContext**: Handles Portuguese/English internationalization with localStorage persistence
- No external state management library is used, keeping the frontend lightweight

## Internationalization
Custom translation system using JSON-based language files:
- Support for Portuguese (Brazil) and English (US)
- Translation hook (`useTranslation`) for easy access to localized strings
- User preference persistence in localStorage

## Data Layer
Currently frontend-only with no active backend integration:
- TanStack Query configured for future API integration
- Mock storage interface prepared for potential database operations
- User schema defined with Drizzle ORM for future PostgreSQL integration

## Backend Infrastructure (Prepared but Inactive)
The project includes a prepared but unused Express.js backend:
- Server structure ready for API endpoints
- Drizzle ORM configuration for PostgreSQL
- Session management setup with connect-pg-simple
- Vite development server integration for full-stack development

## Build and Development
Vite-based build system optimized for development and production:
- Hot module replacement for fast development
- TypeScript compilation with strict type checking
- ESM module format throughout the codebase
- Separate client and server build processes

# External Dependencies

## UI and Styling
- **Radix UI**: Comprehensive collection of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: Pre-built component library based on Radix UI and Tailwind
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating component variants

## Development and Tooling
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking for enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds

## Routing and Navigation
- **Wouter**: Lightweight client-side routing library

## State and Data Management
- **TanStack Query**: Server state management (configured but not actively used)
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation library

## Potential Database Integration
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **@neondatabase/serverless**: PostgreSQL database driver for Neon
- **connect-pg-simple**: PostgreSQL session store for Express

## Fonts and Assets
- **Google Fonts**: Inter font family loaded via CDN
- **date-fns**: Date utility library for potential future use

The architecture is designed to be scalable and maintainable, with clear separation between frontend presentation and prepared backend infrastructure, allowing for easy expansion to full-stack functionality when needed.