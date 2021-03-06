# Article Preview Component (Newbie)

[Frontend Mentor Challenge - Article Preview Component](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT)

[Finished Project](https://janegca.github.io/fem-challenges/04-article-preview/index.html)

## Criteria

Your users should be able to:

- View the optimal layout for the component depending on their device's screen
  size
- See the social media share links when they click the share icon

## Design Overview

- design images: mobile (375px), desktop (1440px)
- centered component is a card with a subtle drop shadow (bottom/right), rounded
  corners
- 2 sections with subsections/groupings:
  1. graphic, top 1/3 in mobile, left 1/3 in desktop version
  1. bottom (right) 2/3 taken up with
     1. preview (80%) - 2 part, header and paragraph
     1. author (20%) - 3 parts: graphic, author name and article date (stacked),
        link icon
- icon has an active state
  - mobile: author/icon section overlaid and social icons are displayed, along
    with the link icon subtly modified to appear as round, raised button
  - desktop: tooltip appears centered over the link icon, bubble with down
    arrow, contains social icons

### New Techniques for hover

- there are 2 hover effects:
  1. mobile: the author area is overlaid with a styled text plus icon list
  1. desktop: the mobile overlay, minus the 'share' icon, is displayed in a
     tooltip box above the share icon

## Issues

- **avatar** - size, pixels or rems?? should it resize?
  - ✔️ checked this out by increasing and decreasing the default font size in
    the browser the image appears ok at various sizes
- **hover effects** - need a separate div for hover effect that will have 2
  variations, the div needs to come directly after the author icon; trouble is,
  `visibility: collapse` does not work in `grid` layouts, the div will be hidden
  but the empty space will not collapse; it will in a `flex` layout so need to
  try a refactor of the author section
  - ✔️ refactored 'author' section to use flex layout
  - ✔️ styled hover for the mobile design
  - ✔️ styled hover for the desktop design
- **social icons** social icons should be links, not divs
  - ✔️ refactored the social icons, made them links
- **icon colour** colour of the last icon on the mobile hover doesn't match
  design, nor does the author icon when hovering

## Fonts and Colours from the Style Guide

### Fonts

- Family: [Manrope](https://fonts.google.com/specimen/Manrope)
- Weights: 500, 700
- body font size: 13px

### Colours

- Very Dark Grayish Blue: hsl(217, 19%, 35%) (accent/active state bg)
- Desaturated Dark Blue: hsl(214, 17%, 51%) (body text)
- Grayish Blue: hsl(212, 23%, 69%) (shadow?)
- Light Grayish Blue: hsl(210, 46%, 95%) (page bg?)

References:

- [MDN: Aligning items in a flex container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
- [MDN: visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
- [W3 Schools: CSS Tooltip](https://www.w3schools.com/css/css_tooltip.asp)
- [Stackoverflow: Show div on hover of other div](https://stackoverflow.com/questions/26072773/show-div-on-hover-of-other-div-that-is-not-parent-with-css-or-js?noredirect=1&lq=1)
