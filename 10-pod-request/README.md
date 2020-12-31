# Pod Request Access Landing Page (newbie)

[Frontend Mentor Pod request access landing page Challenge](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG)

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

## Sizing

### Widths

Mobile:

- cta 327px
- social 315px (content?)
- sign-up 327 px (width 100%)

Tablet:

- cta 635px
  - paragraph constrained to 445px
- social, sign-up (content?)

Desktop:

- max-width: 1275px
- cta 723px
  - paragraph, social, sign-up as for tablet

### Margins

Mobile:

- page top 62px
- logo bottom 57px
- cta left auto
- cta top 57px
  - paragraph top 16px
  - social top 33px
  - sign-up top 48px
    - button top 16px

Tablet:

- page top 50px
- cta left 39px
- cta top 150px
  - paragraph top 33px
  - social top 64px
  - sign-up top 40px

Desktop:

- page top/bottom - vertical alignment in viewport
- left margin 165px (whole abuts the right side)
- cta
  - header top 88px
  - paragraph top 24px
  - sign-up top 40px
  - social top 64px

## Notes

## Issues

- ISSUE: difficulty sizing .svg icons in .cta-Social when they are links
  - ✔️ FIX: need to set `min-width: 0` for the link and the image and give the
    image a specific height
- ISSUE: thought I could get away without a page wrapper, wrong 😒

References:

- [Autosizing images and inline SVG as flex children](https://github.com/philipwalton/flexbugs/issues/184)
- [CSS Flex Positioning Gotchas](https://medium.com/@gaurav5430/css-flex-positioning-gotchas-child-expands-to-more-than-the-width-allowed-by-the-parent-799c37428dd6)
- [Philip Walton's flexbugs Repo](https://github.com/philipwalton/flexbugs)
