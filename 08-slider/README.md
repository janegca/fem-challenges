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
  - pattern-bg.svg for the image bg - cover for all screen sizes
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

## Issues

- ✔️ FIX: the attribution links in the footer are not recognized as links when
  `text-align: center` is applied to `footer`

  - this had me totally puzzled, and then I ran into the same problem when I
    shifted the buttons to the left, all of a sudden the hover stopped working
    and the buttons stopped being clickable...the problem turned out to be the
    `z-index`. The `testimony` section has a z-order of 2 so the blockquote text
    can overlay the photo. When the footer was centered and the buttons were
    moved they ended up being **underneath** the `testimony` element so while
    they were visible they could not be interacted with; increasing their
    `z-index` to 5 fixed the problem _after_ I positioned the `footer` (z-index
    has no effect on elements that still have the default `static` position)

- ✔️ FIX: while the mobile size looks ok in the browser, an actual test on my
  Android phone had the image squished; set the min-height to 700px to see if it
  will improve things

  - problems due to setting heights, had to tweak the body, slide, photo and
    testimony min-height values using the `target/context = result` formula
    described in the Ben Frain book (see below) to get things to work ok.

## Notes

- had all kinds of difficulties with positioning the graphics and buttons
  correctly, had to do a deep dive into positioning and image handling to get a
  handle on what was happening, the references below were a great help
- ended up creating a number of
  [notes and examples](https://janegca.github.io/examples/css/positioning/) to
  help me understand the concepts

## References

- [Ahmad Shadeed: Image Techniques on the Web](https://ishadeed.com/article/image-techniques/#css-background-image)
- [W3 Schools: CSS Styling Images](https://www.w3schools.com/css/css3_images.asp)
- [Positioning in CSS by Eric A Meyer](https://www.oreilly.com/library/view/positioning-in-css/9781491930366/)
- [CSS Tricks: box-shadow](https://css-tricks.com/almanac/properties/b/box-shadow/)
- [Set and get CSS styles of elements](https://plainjs.com/javascript/styles/set-and-get-css-styles-of-elements-53/)
- [Responsive Web Design with HTML5 and CSS - Third Edition by Ben Frain](https://www.packtpub.com/product/responsive-web-design-with-html5-and-css-third-edition/9781839211560)
