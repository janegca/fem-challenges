# Base Apparel (Newbie)

[Frontend Mentor Base Apparel Challenge](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0)

## Criteria

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

## Design Overview

- two sizes: mobile (375px), desktop (1440px)
- mobile layout is single column: logo, graphic, intro, email input with styled
  button
- desktop layour has the graphic on the right, the logo, intro and input on the
  left (2 column), also a background graphic
- logo: an SVG file, remains at the top in both designs so set in background,
  top, left; will need to work out how to load desktop bg without disturbing it
  - use technique that was used in Profile Card challenge?
- use 2 divs, one for graphic, one for text
  - when switching to desktop, change order of the graphic to push it to the
    right
- email has validation on email entry, error message displays below the input
  area with an error icon appearing in the input area
- the button has gradient colouring and .svg arrow

## Colours

- Desaturated Red: hsl(0, 36%, 70%)
- Soft Red: hsl(0, 93%, 68%)
- Dark Grayish Red: hsl(0, 6%, 24%)

- Linear, 135deg, from hsl(0, 0%, 100%), to hsl(0, 100%, 98%)
- Linear, 135deg, from hsl(0, 80%, 86%), to hsl(0, 74%, 74%)

## Fonts

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weights: 300, 400, 600
- font-size for the body: 16px

References:

- [Advanced CSS Only Form Styling](https://www.jonathan-harrell.com/blog/advanced-css-only-form-styling/)
