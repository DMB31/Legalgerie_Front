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
    git clone https://github.com/DMB31/Legalgerie_Front.git
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
npm run start     # start server
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
- push code to `dev` never to main branch without a PR.