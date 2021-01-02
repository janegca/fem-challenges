# Ping Single Column Coming Soon Page (newbie)

[Frontend Mentor Ping single column coming soon page challenge](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da)

[Finished Project](https://janegca.github.io/fem-challenges/11-ping/index.html)

## Criteria

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops!
    It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address
    should have this structure: `name@host.tld`). The message for this error
    should say _"Please provide a valid email address"_

## Design Overview

- 2 layouts: mobile (375px), desktop (1440px)
- both sizes are single column with contents centered
- content:
  - logo, cta with header, detail, email input and button
  - graphic of dashboard
  - footer with social icons and copyright text

## Colors

- Blue: hsl(223, 87%, 63%)
- Pale Blue: hsl(223, 100%, 88%)
- Light Red: hsl(354, 100%, 66%)
- Gray: hsl(0, 0%, 59%)
- Very Dark Blue: hsl(209, 33%, 12%)

## Fonts

- Family: [Libre Franklin](https://fonts.google.com/specimen/Libre+Franklin)
- Weights: 300, 600, 700
- Font size: 20px

## Social Icons

- 3: Facebook, Twitter, and Instagram
- given a choice with following sites suggested:
  - [Font Awesome](https://fontawesome.com)
  - [IcoMoon](https://icomoon.io)
  - [Ionicons](https://ionicons.com)

## Notes/Issues

### Images

#### The Dashboard Image

Included the image width and height in the HTML based on the Barry Pollard
article referenced below; essentially, letting the browser know the image size
helps prevent pages from _jumping_ as each image is loaded.

Wrapped the image to ensure responsive sizing, the wrapper is sized and
positioned on the page, the image then fills the wrapper (width: 100%) and
adjusts its height accordingly (height: auto) regardless of the viewport size.

ISSUE: could not figure out how to apply this correctly the Logo, it does not
grow or shrink with the viewport; even wrapped, not sure what to relate it to
for responsive sizing.

#### Colorizing the SVG Icons

Used _Ionicons_ .svg files for the social media icons.

Appears colorizing cannot be done directly using `fill` or `stroke`, instead,
can apply a series of filters (see article on CSS-Tricks by Cassie Evans
referenced below); an exact colour is difficult to match as you can't assign it
directly. Took the base settings using the suggested filters and a 0deg hue and
then subtracted to get the degrees as close to the desired colour as possible.
Found a Codepen [CSS Filter Generator](https://codepen.io/sosuke/pen/Pjoqqp)
that makes this method it a bit easier although turned out my own approach
looked a bit better to my eye.

### Error Handling - Issue with Firefox

Firefox adds a red box-shadow to the input field when it detects an error. The
shadow stays in place even when the field is cleared. Had to add a specific rule
to turn it off if the placeholder text is showing.

References:

- [Setting Height and Width On Images is Important Again](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
- [CSS Tricks: The Many Ways to Change an SVG Fill](https://css-tricks.com/the-many-ways-to-change-an-svg-fill-on-hover-and-when-to-use-them/)
- [Quackit: CSS hue-rotate()](https://www.quackit.com/css/functions/css_hue-rotate_function.cfm)
- [Quackit: CSS invert()](https://www.quackit.com/css/functions/css_invert_function.cfm)
- [Quackit: CSS sepia()](https://www.quackit.com/css/functions/css_sepia_function.cfm)
