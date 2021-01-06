# Profile Card

## The Challenge and Finished Project

[Frontend Mentor Profile Card Component Challenge](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ)

[Finished Project](https://janegca.github.io/fem-challenges/01-profile-card/index.html)
[Refactored Project](https://janegca.github.io/fem-challenges/01-profile-card/index_v2.html)

## Presentation and Components

- there is a _presentation wrapper_, a _card_ component, an attribution
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
- the attribution is not part of the card, is part of the presentation

## Technical Questions

### Presentation Wrapper

#### How are the background graphics loaded and made responsive?

- use `::before ::after` pseudo-elements
- `postion: absolute` (the wrapper itself must be `position: relative`)

#### How is the component most easily centered?

- whole screen is involved, set the body and wrapper to viewport size
- use `flex` in column mode to allow attribution to be displayed
- Ref:
  [Viewport Height/Width CSS Code](https://www.exeideas.com/2013/09/viewport-height-width-css-code.html)

#### How should the child elements/components be spaced?

- the `attribution` will be positioned under the card
- create a `flex-gap` utility class to create a spacer that can be applied to
  the `footer` holding the attribution

### Card

#### How is the card responsive but also constrained to its min/max widths?

- use `clamp()`
- Ref:
  [MDN: clamp()](<https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()>)

#### How is the avatar image presented framed in a circle?

- `border-radius: 50%` turns boxes into circles

#### How is the avatar offset from the background graphic?

- `transform: translate(x,y)` positions an element relative to its normal
  position in the document flow

#### What is the best way to structure the identity?

- use `p` elements combined with `span` for text that requires additional
  formatting

#### What is the best way to structure the statistics section and each stat?

- as a list, will keep them together and `ul` can be used to apply layout
  styling
- each stat will be a list item formatted similar to identity objects, using `p`
  and `span`

## Naming Decisions

- identify what needs a classname, for styling purposes

| Class       | Description              |
| ----------- | ------------------------ |
| pc          | the Profile Card         |
| pc-Wrapper  | the Presentation Wrapper |
| pc-Avatar   | background and photo     |
| pc-Identity | name and title           |
| pc-Stats    | statistics list          |

## Thoughts

- the Presentation Wrapper is only concerned with the positioning of its
  children, not their visual appearance, so the contained items should be
  _agnostic_ with regard to their presentation; they might be placed anywhere.
  As a result, they should not be setting their margins; hence, the need for the
  `flex-gap` utility class
- the Card component is _opinionated_ as to the layout of its children, it
  creates a context that the children participate in so they are allowed to
  establish their own spacing rules i.e. the _component_ acts as _container_,
  not simply as a presentation wrapper.
- set the CSS Variables in the `pc` class itself rather than the `root` element
  in an effort to keep it as self-contained as possible (the `flex-gap` util
  does mean the `pc-Wrapper` is not fully self-sufficient)
