---
name: Vijayasankar Ravindran Portfolio
description: Subtle professional portfolio with factual content and neutral light and dark themes.
colors:
  dark-bg: "#151716"
  dark-surface: "#1d201e"
  dark-surface-raised: "#262a27"
  dark-ink: "#ecede9"
  dark-muted: "#b0b6af"
  dark-line: "#3b413c"
  dark-accent: "#a9c4e8"
  light-bg: "#fafaf8"
  light-surface: "#f0f2ef"
  light-surface-raised: "#e8ece7"
  light-ink: "#252c27"
  light-muted: "#59645c"
  light-line: "#d5dcd5"
  light-accent: "#365f93"
  light-accent-ink: "#ffffff"
typography:
  display:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "clamp(2.35rem, 4.2vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-.035em"
  headline:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "clamp(1.6rem, 2.5vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-.02em"
  title:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: ".95rem"
    fontWeight: 500
  brand:
    fontFamily: '"DM Mono", monospace'
    fontSize: ".9rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  chip: "5px"
  action: "6px"
  control: "8px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 4rem)"
  section: "clamp(3rem, 6vw, 5rem)"
components:
  button-primary:
    rounded: "{rounded.action}"
    padding: ".7rem 1rem"
  button-secondary:
    rounded: "{rounded.action}"
    padding: ".7rem 1rem"
  chip:
    rounded: "{rounded.chip}"
    padding: ".4rem .7rem"
  navigation:
    rounded: "{rounded.control}"
    padding: ".7rem 1rem"
  project-entry:
    padding: "1.75rem 0"
  education-card:
    rounded: "{rounded.control}"
    padding: "1.5rem"
---

# Design System: Vijayasankar Ravindran Portfolio

## Overview

**Creative North Star: "Subtle professional portfolio"**

Present the person's name, role, experience, projects, skills, and contact information with calm typography and factual language. This documents the implemented plain HTML/CSS portfolio and the user's explicit direction: "remove all fancy taglines" and "build a subtle portfolio website."

**The Factual Copy Rule.** Use factual names, roles, section headings, descriptions, and action labels only. Do not add taglines, slogans, metaphors, motivational claims, or clever promotional headings. The hero heading is the person's name.

**Key Characteristics:**
- Factual copy and clear hierarchy.
- Neutral light and dark themes with restrained blue accents.
- Flat sections, thin dividers, and modest rounded controls.
- A large transparent portrait with a vivid animated coral, pink, violet, and teal gradient; this is the only playful area.

## Colors

### Primary

The dark and light accent tokens provide restrained blue selection and keyboard-focus feedback. Primary actions use the current theme's ink and background colors, rather than a saturated promotional accent.

### Neutral

Each theme has background, surface, raised surface, ink, muted text, and line tokens. Match the current CSS custom properties in `index.html`; the frontmatter records both theme palettes. Dark accent ink shares the dark background token; light accent ink has its own token. Preserve portrait transparency. Only the hero image may use a playful animated gradient in coral (#fb9567), pink (#e65baf), violet (#7775e8), and teal (#39bdc5). Use a clean lower crop aligned with the next section divider; do not fade the portrait itself.

**The Theme Pairing Rule.** Resolve colors through the existing theme variables. Keep text, controls, borders, and interaction states legible in both themes.

## Typography

DM Sans with a sans-serif fallback supplies display, headings, body, navigation, and controls. DM Mono with a monospace fallback supplies the compact VNR brand; the current résumé metadata also declares DM Mono. Do not extend monospace styling to headings or prose.

Use the frontmatter's display role for the person's name, headline for factual section headings, and title for job and project names. Body paragraphs use relaxed leading; summary and project text stay around 62–75 characters wide. Smaller metadata ranges from .75rem to .95rem. Use sentence case and natural letter spacing for navigation and labels.

## Layout

The centered content shell is capped at 70rem (1120px) with the responsive gutter token. Sections use the section spacing token and a thin top divider. Desktop uses two-column hero, project, background, and contact layouts; experience entries pair a 180px date column with prose.

At 800px and below, the hero narrows its portrait column to 230px with a 365px image height and background/contact layouts stack. At 700px and below, navigation becomes a button-controlled dropdown beneath the sticky header. At 580px and below, the hero, experience rows, and project grid stack; the portrait follows the copy and actions, and résumé links fill available width. Preserve readable wrapping and usable controls on narrow screens.

## Elevation & Depth

The interface is flat: no shadows, grain, or decorative motion outside the hero portrait. Thin dividers and modest surface differences separate content. The portrait gradient is the sole exception; reduced motion disables its animation and smooth scrolling.

## Shapes

Use the frontmatter's modest corner radii for chips, actions, and controls. Project entries are open rows with top dividers rather than elevated tiles. Contact arrows use small circular outlines. Place the approved transparent portrait over a soft gradient that blends into the page. No rings, dots, frames, badges, or taglines. Keep the rest of the site restrained and factual. Retain the pants-excluding crop, enlarge the portrait by 12%, and align its clean lower edge with the next section divider. Keep the head fully visible. The desktop image area is up to 430px by 510px; mobile is up to 350px by 440px, centered beneath the copy. The gradient uses a 9-second alternating cycle with independently shifting color layers, gentle rotation, and scaling. Do not display a play/pause button, per the user’s explicit preference. Stop the loop when offscreen or the document is hidden, and show a static gradient for reduced motion.

## Components

### Buttons

Primary actions invert ink and background. Secondary actions use an outline. Both have a minimum height of 46px. Hover strengthens the outline or softens the primary fill; visible focus uses an offset outline. Labels describe the action, such as "View projects" and "Open résumé."

### Navigation

The sticky header uses an opaque theme background and bottom divider. Links use muted text, a subtle surface on hover, and inverted ink/background when active. Theme and mobile-menu controls are at least 44px square. Preserve menu expansion state, keyboard access, and theme-specific accessible labels.

### Chips

Skills are static text labels with thin borders, no decorative colors, and no implied interaction.

### Cards / Containers

Project entries use typography and dividers, with an underline and inverted arrow for linked entries on hover. The education card uses a thin outline and modest padding. Contact rows use plain labels, factual values, and outlined arrows. The résumé control carries a clear file type and new-tab note.

## Do's and Don'ts

### Do:
- Do use the person's name, actual role, factual section headings, and explicit action labels.
- Do preserve neutral light and dark theme pairings and visible keyboard focus.
- Do keep the centered shell, responsive stacking, readable line lengths, and simple portrait treatment.

### Don't:
- Don't add fancy taglines, slogans, metaphors, promotional headings, or invented claims.
- Don't reintroduce marquees, stickers, oversized monograms, grain, rotated panels, or decorative gradients outside the approved portrait background.
- Don't replace factual project and experience content with marketing copy.
