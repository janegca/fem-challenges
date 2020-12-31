# Pod Request Access Landing Page (newbie)

[Frontend Mentor Pod request access landing page Challenge](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG)

[Finished Project](https://janegca.github.io/fem-challenges/10-pod-request/index.html)

## Criteria

Your users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your
    email"

## Design Overview

- layouts are in 3 sizes:
  - mobile: 375px
  - tablet: 768px
  - desktop: 1440px
- images:
  - image-host.jpg files in 3 sizes although the Figma mobile layout does not
    appear to use the file (bg image?)
  - a `bg-pattern-dots.svg` used in the desktop and tablet layouts
  - a number of .svg social media icons
  - the logo and social media icon images include their related text
- 2 basic sections:
  - logo
  - callout
    - lede
      - header (uppercase)
      - text
    - social media links
    - sign-up
      - email input
      - button
- mobile: single column layout in order given, all contents centered
- tablet: single column, contents left-aligned with following changes:
  - image-host as right aligned bg image
  - logo / cta / bg-pattern left aligned
  - in the cta:
    - social media links appear as a footer below the sign-up
    - the button overlaps right-edge of email input field
- desktop: as the tablet with following changes:
  - more of the image-host image is seen in the bg
  - the bg-pattern shifts to bottom right corner, 50% overlay of bg image

### Active State

- hover on button changes cursor to pointer
- email error message on invalid input appears in red, left-aligned below input
  field

## Colours

- Error Msg: #FB3E3E (red)
- Button: #B3FFE2 (light green)
- CTA bg, Btn Text: #121725 (neutral dark grey?)
- Social Media: #5A668A (light grey?)
- Paragraph: #C2CBE5 (a grey)
- Header highlight: #54E6AF (cyan?) (matches logo fill)
- Email text: #FFF (white)
- Email bg: #2C344B

## Fonts

- Font family: Chivo, incl Chivo Light
- Header:
  - mobile: 26px, line-height: 38px (light)
  - tablet: 48px, line-height: 56px (light)
  - desktop; 52px, line-height: 62px (light)
- Paragraph:
  - mobile: 15px, line-height: 25px (light)
  - tablet and desktop: 18px, line-height: 28px (light)
- Social:
  - mobile: 11px
- Email and Button:
  - mobile, tablet, desktop: 14px, line-height: 28px (bold)
- Error Message: 12px, bold, default line-height

## Notes

Took a fair bit of planning, and re-planning, to get this done but at least on
this one when I ran into a snag I had an easier time identifying the problem
than before; all the practice is beginning to pay off, learning wise ☀️

## Issues

- ISSUE: difficulty sizing .svg icons in .cta-Social when they are links
  - ✔️ FIX: need to set `min-width: 0` for the link and the image and give the
    image a specific height
- ISSUE: thought I could get away without a page wrapper, wrong 😒
  - ✔️ REFACTOR: added a wrapper around the #Logo and .cta in the HTML then
    refactored the layouts for mobile (style.css) and tablet (mq-tablet.css)
    before completing the desktop (mq-desktop.css) layout

References:

- [Autosizing images and inline SVG as flex children](https://github.com/philipwalton/flexbugs/issues/184)
- [CSS Flex Positioning Gotchas](https://medium.com/@gaurav5430/css-flex-positioning-gotchas-child-expands-to-more-than-the-width-allowed-by-the-parent-799c37428dd6)
- [Philip Walton's flexbugs Repo](https://github.com/philipwalton/flexbugs)
