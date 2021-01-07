# FAQ Accordian Card (Newbie)

## The Challenge, Finished Project, and Refactored Project

[Frontend Mentor FAQ Accordian Card Challenge](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam)

[Finished Project](https://janegca.github.io/fem-challenges/02-faq-card/index.html)

[Refactored Project](https://janegca.github.io/fem-challenges/02-faq-card/index_v2.html)

## Presentation and Components

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

### How to handled layer graphic and offset?

- setup a `div` and load them as background graphics
- position the `div` with respect to the FAQ

### How to build the FAQ Component?

- `h1` for heading
- `summary` and `detail` element for question and answers
  - automatically collapsible

### How to add arrow icon and rotate it when details revealed?

- add as a `pseudo-element`
- use `transform` to rotate

## Naming Decisions

| Class         | Description         |
| ------------- | ------------------- |
| wrapper       | generic positioning |
| panel         | presentation panel  |
| panel_left    | left side of panel  |
| panel_right   | right side of pane  |
| graphic       | layered graphic     |
| faq           | the FAQ             |
| faq_Header    | text header for faq |
| faq_Questions | list of questions   |
