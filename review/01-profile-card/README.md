# Profile Card

#TODO: figure out how to structure files

## The Challenge and Finished Project

[Frontend Mentor Profile Card Component Challenge](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ)

[Finished Project](https://janegca.github.io/fem-challenges/01-profile-card/index.html)

## Review

### Presentation and Components

- there is a _presentation wrapper_ and a _card_ component
- the presentation layer has two positioned background images
  - this is essentially optional as we want the card to be available for use in
    other contexts
- the Card size is constrained to:
  - min: 326px x 374px
  - max: 350px x 374px
- the card component has three sections:
  - `avatar`
    - background image
    - avatar image
  - `identity`
    - name
    - age
    - location
  - `statistics` is a list of three components:
    - `stat`
      - stat number
      - label
- the card is centered in the presentation layer BUT it could easily be
  presented in other contexts

### Technical Questions

- What naming rules will work best, keeping in mind that we want to be able to
  easily extract the card for use elsewhere?
- Presentation Wrapper
  - How are the background graphics loaded and made responsive?
  - How is the component most easily centered?
    - Use `grid` layout, no utility class required
- Card
  - How is the background graphic confined to the top half of the card?
  - How is the card responsive but also constrained to its min/max widths?
    - use `clamp()`
  - How is the avatar image presented framed in a circle?
  - How is the avatar offset from the background graphic?
  - What is the best way to structure the identity?
    - Name, Age are displayed on one line
    - Location below
  - What is the best way to structure the statistics section and each stat?
    - statistics presented in one row
    - stat
      - value bold on one line
      - label centered below, regular text

### Naming Decisions

- identify what needs a classname, for styling purposes

| Class         | Description              |
| ------------- | ------------------------ |
| pc            | the Profile Card         |
| pcw           | the Presentation Wrapper |
| pc-Avatar     | background and photo     |
| pc-Identity   | name and title           |
| pc-Stats      | statistics list          |
| pc-Stats_stat | a statistic              |

- identify the need for possible utility classes

| Class | Description                               |
| ----- | ----------------------------------------- |
| ma    | margin auto (for centering the component) |

**Note**: that as the component is _opinionated_ as to the layout of its
children margins and padding can be set on the children. i.e. the _component_
acts as _container_, not simply as a presentation wrapper.

References:

- [MDN: clamp()](<https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()>)
- [Viewport Height/Width CSS Code](https://www.exeideas.com/2013/09/viewport-height-width-css-code.html)
