# Huddle Landing Page (newbie)

[Huddle landing page with a single introductory section](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0)

## Criteria

Your challenge is to build out this landing page from the designs provided in
the starter code.

## Design Overview

- 2 layouts:
  - mobile: 375px x 800px
  - desktop: 1440px x 800px
- content:
  - background graphic: 2 sizes, mobile and desktop
  - logo
  - graphic (illustrations mockup)
  - intro
    - header
    - detail
    - button (register) w/hover effect
  - social icons w/hover effect
    - Facebook, Twitter, Instagram

## Colours

- Violet: hsl(257, 40%, 49%) (background, button)
- Soft Magenta: hsl(300, 69%, 71%) (hover)

## Fonts

Two fonts are used:

### Headings

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 400, 600

## Body

- Family: [Open Sans](https://fonts.google.com/specimen/Open+Sans)
- Weights: 400

## Icons

Free to choose which social icons are used, suggestions are:

- [Font Awesome](https://fontawesome.com/)
- [IcoMoon](https://icomoon.io/)
- [Ionicons](https://ionicons.com/)

## Notes and Issues

### Graphic and Intro

Had some problems with these two for the desktop layout until I came across
Stephanie Eckles
[Modern CSS Solutions #16](https://moderncss.dev/3-popular-website-heroes-created-with-css-grid-layout/)
on styling hero sections using a one cell grid.

### Social Icons

Used Ionicons. The design widths are 27.5px for mobile, 40px for desktop;
however, I've opted to use 48px for both as that is the recommended size for
accessible 'hit' targets on touch screens.

🌞 Woot! Figured out a very easy way to colour the icons using a mask and the
`aria-label` attribute based on reading
[CSS-Tricks: Change Color of SVG on Hover](https://css-tricks.com/change-color-of-svg-on-hover/)
by Chris Coyier and a concept from Ben Frain's
[Enduring CSS](https://ecss.benfrain.com/) methodology, about using WIA-Aria
attributes for progressive enhancements.

However, Chrome requires a polyfill `-webkit-mask-image: url(...)`
([Stackoverflow](https://stackoverflow.com/questions/44100139/css-mask-not-working-on-chrome-webkit))
