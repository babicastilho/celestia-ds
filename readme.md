# 🌌 Celestia

> **Where Logic Meets Aesthetics**

![Version](https://img.shields.io/github/package-json/v/babicastilho/celestia-ds)
![License](https://img.shields.io/github/license/babicastilho/celestia-ds)
![CI](https://img.shields.io/github/actions/workflow/status/babicastilho/celestia-ds/release.yml?label=release)

## The Vision

Celestia is a high-performance Design Engineering ecosystem. It represents the intersection between rigorous backend logic—rooted in electronics and distributed systems—and a refined, fluid frontend aesthetic.

This project is a living showcase of a **Senior Lead Engineer's** technical philosophy: that architecture is a promise of stability, and design is the interface through which that promise is kept.

## Getting Started

```bash
pnpm install
pnpm dev
```

## Identity & Design Tokens

- **Logotype:** A modular "C" formed by nodes and connections, symbolizing constellations and data graphs.
- **Typography (The Trinity):**
  - **Authority (Serif):** *Lora* – Used for headings and editorial narratives.
  - **Interface (Sans):** *Geist Sans* – Optimized for UI clarity.
  - **Engineering (Mono):** *Geist Mono* – Precision-focused for documentation and code.
- **Color System:** A dynamic gradient implemented using the **OKLCH** color space for maximum perceptual fidelity.

## Technical Stack

- **Architecture:** Monorepo with `workspaces` (Astro + Next.js).
- **Core Systems:**
  - **Frontend:** Astro (Documentation) & Next.js (Web Platform).
  - **Backend:** Go (Business Logic) & Python (AI modules).
  - **Database:** PostgreSQL with `pgvector`.
  - **CMS:** Payload CMS (TypeScript-native).
- **Localization (i18n):** Native support for English, Portuguese, and Spanish.

## Packages

| Package | Description |
|---|---|
| `@celestia/core` | Design tokens, components, styles |
| `apps/docs` | Interactive docs, lab & cookbook |

## Repository Structure

```text
celestia-ds/
├── apps/
│   └── docs/          # Interactive Documentation, Lab & Cookbook
├── packages/
│   └── core/          # Pure Design System (Tokens, Components, Styles)
└── README.md          # Project Manifesto & Root Entry
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for release history.
---

**Built with precision. Driven by logic.**
