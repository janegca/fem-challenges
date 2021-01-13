# Social Proof Section (Newbie)

[Frontend Mentor Social Proof Section Challenge](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA)

[Finished Project](https://janegca.github.io/fem-challenges/03-social-proof/index.html)

[Refactored Solution](https://janegca.github.io/fem-challenges/03-social-proof/refactor/index.html)

## Criteria

Your users should be able to:

- View the optimal layout for the section depending on their device's screen
  size

## Design Overview

- 3 sections: intro, stars, reviews
- desktop:
  - grid 2 rows, top row has two cells, bottom row 3 cells
  - 1,1 - text, left-aligned, large head, smaller details
  - 1,2 - 3 staggered rows, each left aligned with padding
    - each row has two parts: 5 stars, rating and source in bold text, small
      font
    - use flex - easy to stagger with flex-start, -center, -end and convert to
      center for mobile
  - 2,1-3 - a card with content centered and left-aligned
    - user profile picture, name, status; name and status grouped
      - use a 2 x 2 grid, profile image spans rows 1 and 2
      - might be good usecase for grid template
    - user quote, 4 lines
- mobile: one column, sections stacked in order
  - top section formatting is centered byx left-aligned
- section 1 heading, card background, and rating text in same colour (dark
  purple)
- stars in yellow
- user status text in a lighter purple
- user card text in pinkish shade
- intro section in detail text in small font, grey
- doesn't appear to be any animation or effects

## Font and Colours from the Style Guide

### Fonts

- Body Copy font size: 15px
- Family: [Spartan](https://fonts.google.com/specimen/Spartan)
- Weights: 400, 500, 700

### Colours

#### Primary

- Very Dark Magenta: hsl(300, 43%, 22%)
- Soft Pink: hsl(333, 80%, 67%)

#### Neutral

- Dark Grayish Magenta: hsl(303, 10%, 53%)
- Light Grayish Magenta: hsl(300, 24%, 96%)
- White: hsl(0, 0%, 100%)

## Design Decisions/Steps

1. HTML - setup structure, assign class names or ids as necessary
1. CSS
   - define custom properties for colours, fonts
   - get basic layout working
   - focus on general styling
   - add enhancements

References:
