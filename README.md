# Legalgerie Frontend

NextJS frontend for the Legalgerie project.

## Contents
- Overview
- Prerequisites
- Setup
- Available scripts
- Environment
- Project structure
- Contributing

## Overview
This repository contains the frontend application for Legalgerie. It is designed as a modern NextJS App. The README assumes standard Node tooling (npm).

## Prerequisites
- Node.js (LTS)
- npm
- Optional: Git

## Setup
1. Clone the repo:
    ```
    git clone <repo-url>
    cd Legalgerie_Front
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Create environment file:
    ```
    cp .env.example .env
    # edit .env to set API endpoints and keys
    ```

## Available scripts
Update package.json scripts as necessary. Typical scripts:
```
npm run dev       # start local dev server
npm run build     # production build
npm run preview   # preview production build (optional)
npm run lint      # run linter
npm run test      # run unit tests
npm run format    # code formatting (prettier)
```

## Environment variables
Add required vars to `.env` you can see `.env.example` for refrence:

## Project structure (suggested)
```
/
├─ public/               # static assets
├─ src/
│  ├─ app/
│  │  └─ api/            # backend routes
│  ├─ components/
│  ├─ lib/
│  ├─ utils/          
│  └─ types.tsx/     
├─ .env.example
├─ package.json
└─ README.md
```

## Contributing
- Follow code style and lint rules.
- Open an issue for significant changes.
- push code to `dev` never main branch without a PR.