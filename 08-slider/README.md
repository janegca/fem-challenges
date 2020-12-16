# Coding Bootcamp Testimonial Slider (newbie)

## Criteria

Your users should be able to:

- View the optimal layout for the component depending on their device's screen
  size
- Navigate the slider using either their mouse/trackpad or keyboard

## Design Overview

- layouts: Mobile: 375px, Desktop: 1440px
- full page layouts with 3 background graphics
  - pattern-curve.svg for page - fixed bottom, left for all screen sizes
  - pattern-bg.svg for the image bg - covers for all screen sizes
  - pattern-quotes.svg for the blockquote (use ::before ?)
    - centered top for mobile
    - offset from top, left edge on desktop
- each layout has 3 sections:
  - image
  - slider that sits on the images bottom border
    - centered on mobile layout
    - left offset on desktop image
  - quote
    - name and title of person
- mobile layout is column with image/slider and quote/name underneath
- desktop layout has quote/name block on left, image/slider on right
  - quote text overflows slightly onto image
- contents of both are centered on the page

## Colours

- Dark Blue: hsl(240, 38%, 20%)
- Grayish Blue: hsl(240, 18%, 77%)

## Fonts

- Family: [Inter](https://fonts.google.com/specimen/Inter)
- Weights: 300, 500, 700
- body font: 32px
