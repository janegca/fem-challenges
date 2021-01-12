# FAQ Accordian Card (Newbie)

## The Challenge, Finished Project, and Refactored Project

[Frontend Mentor FAQ Accordian Card Challenge](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam)

[Finished Project](https://janegca.github.io/fem-challenges/02-faq-card/index.html)

[Refactored Project](https://janegca.github.io/fem-challenges/02-faq-card/refactor/index.html)

## Presentation and Components

There are two factors to consider: the design as a whole which represents a _FAQ
Accordian Card_ and the FAQ itself which is presented as a component within the
card

- 2 design sizes:
  - mobile: 375px x 768px
  - desktop: 1440px x 768px
- presentation background (gradient)
  - attribution
- presentation layer (centered)
  - layered graphic
    - woman working: 2 sizes (472px x 359px) ( 266px x 196px)
      - desktop: positioned on left with approx. -45px offset
      - mobile: centered on top of FAQ component (237px x 180px)
    - shadow: 2 sizes (966px x 945px) (240px x 104px),
      - positioned below and offset from woman's image in both layouts
      - 964 x 568, 240 x 145
    - box 191px x 184px (animate) (90px x 106px) (45px x 53px)
  - FAQ component
    - 350px wide
    - header, 32px
    - summary text, 14px
      - icon arrow 10px x 7px
    - detail text, 12px

### Effects

- summary text changes color on hover
- icon arrow rotates up when the details are revealed

## Technical Questions

### How best to size the card so its responsive?

- use a max-height rather than hard coding sizes

### How to handle layered graphics and offsets?

- layered: setup a `div` and load them as image and background graphics
- offset: position the `div` with respect to the FAQ
- in styling the background graphics, found using 'top left' or 'bottom right'
  serves to anchor images to the respective sides but to keep the shadow from
  moving all over in the desktop layout had to use a combination of rem and %
  values; the 'woman' graphic stayed fixed using 'top left' positioning

### How to handle and animate the box graphic?

- add it as an image, hidden for mobile layouts
- use `animate` `@keyframes` to animate

### How to build the FAQ Component?

- `h1` for heading
- `details` and `summary` elements for question and answers
  - automatically collapsible

### How to add arrow icon and rotate it when details revealed?

- add as a `pseudo-element`
- use `transform: scale(-1)` to rotate
- FIXME: caniuse.com claims 'animation and transition' is not recognized on
  `:after` pseudo-element by Safari on iPad, it appears `transform` falls under
  this category as the arrow is not being displayed

### How to collapse open questions when a new selection is made?

- need to do this so text will not overflow the card
- used JS

## Naming Decisions

| Class            | Description        |
| ---------------- | ------------------ |
| fac              | FAQ Accordian Card |
| fac-Card         | presentation panel |
| fac-Card_graphic | layered graphic    |
| fac_Card_faq     | the FAQ wrapper    |
| faq              | the FAQ component  |

# Thoughts

Worked hard on this one to separate visual elements and structure the CSS into
separate, hopefully reuseable, components.

Chose to keep the images used by the components with the component files; not
sure if this is a good or bad idea; time will tell when I hit bigger projects.

Oops... should mention I've been trying to structure the properties based on
this article
[Better Ways to Organise CSS Properties](https://medium.com/swlh/better-ways-to-organise-css-properties-9a066e7ded62)
by Nijin Vinodan.
