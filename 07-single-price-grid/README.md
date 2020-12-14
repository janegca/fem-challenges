# Single Price Grid Component (Newbie)

[Frontend Mentor Single Price Grid Component Challenge](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc)

## Criteria

Your users should be able to:

- View the optimal layout for the component depending on their device's screen
  size
- See a hover state on desktop for the Sign Up call-to-action

## Design Overview

- design is of a component than can be added to a page
- for this challenge, it is displayed centered on the screen regardless of
  device screen size
- 3 sections: Intro, [Sign-up (cta), Why]
  - Intro: header, detail, blurb
  - cta: header, [$, time], detail, button
  - Why: header, list
- the cta and Why sections have the same background colour
  - the cta background darkens on hover
- the component and button have rounded corners and a drop-shadow
- the internal contents of each section have 40px padding on all sides

## Colours

- Cyan: hsl(179, 62%, 43%)
- Bright Yellow: hsl(71, 73%, 54%)
- Light Gray: hsl(204, 43%, 93%)
- Grayish Blue: hsl(218, 22%, 67%)

## Fonts

- Family: [Karla](https://fonts.google.com/specimen/Karla)
- Weights: 400, 700
- body text: 16px

## Notes

Found this one a little discombobulating as there seemed to be little
consistency with the spacing of the elements across the sections; found I had to
keep checking font-sizes, padding and margins on the inner elements. Also, just
assumed that the darker background on the 'Join' (call to action area) was due
to a hover as well the criteria mentioned a hover effect the design images
didn't include an 'active' state.

Used both `grid` and `flex` layouts in this one. Mainly because centering a
single element on the screen with `grid` is easy-peasy and because the bottom
row of elements in the larger screen sizes are easier to line up using `grid`
while `flex` is great for one column on small screens. In all, designed mobile
first and need very little tweaking for the larger screen sizes.
