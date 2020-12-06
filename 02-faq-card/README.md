# FAQ Accordian Card (Newbie)

## Criteria

Your users should be able to:

- View the optimal layout for the component depending on their device's screen
  size (Mobile: 375px, Desktop: 1440px)
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

## Design Decisions/Steps

- designed for mobile (375px) first, media query will handle large page sizes
- decided the graphic was not part of the FAQ itself but a presentation element,
  gave it its own section

- got the mobile design working reasonably well but then had to do a whole
  re-think for the larger design 🙄

## Issues

- ✔️ Details Resizing: in larger sizes, the panel resizes based on contents of
  the opened details item
- ✔️ Roving Box: the graphics appear to scale correctly except for the box
- ✔️ Image Swap: Mobile graphic not being loaded, instead the desktop one
  shrinks
- Image Placement: the above fixes threw off the desktop image placement and
  shadows in both desktop and smaller sizes; probably should have them grouped
  with their related images

### Refactors

#### Fixing the mobile image swap

Modified the HTML to load the images using the `picture`tag. The mobile graphics
now loads correctly when the screen shrinks. (Thanks to the suggestion from
@tediko on Frontend Mentors).

NOTE: the`id`for the woman and pattern are set on the default`img` tag BUT they
still apply when the desktop images are replaced by the mobile images, which is
very cool, thought I would need different id's for the different images.

#### Fixing the roving box

Added another division to wrap the woman and box images, and reset the @media
break to 1000px. Now when the window is resized the box stays with the woman and
the new, smaller mobile image kicks in earlier.

#### Fixing the FAQ Details resizing issue

Setting a width on the details element corrected this at all sizes.

References:

- [MDN: details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [MDN: linear-gradient()](<https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient()>)
- [Stackoverflow: Making Gradient Fill the Page with CSS](https://stackoverflow.com/questions/16841323/making-gradient-background-fill-page-with-css)
- [Dev ED: CSS Position Tutorial](https://www.youtube.com/watch?v=gD3G67oPg-w&list=PLDyQo7g0_nsUjf046cCHKJ16U1SoXrElZ&index=3)
- [Codrop CSS Reference: animation, @keyframes](https://tympanus.net/codrops/css_reference/keyframes/)
- [MDN: Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [MDN: picture tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
