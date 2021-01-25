# Loopstudios Landing Page (Junior)

[Loopstudios Landing Page](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw)

## Criteria

This challenge focuses mostly on HTML & CSS. There's a tiny bit of JS included
for the mobile navigation toggle. But you could also choose to do this without
JS!

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## Presentation and Visual Components

There are four basic visual components (no shadows or rounded corners):

- hero/header
- intro
- creations
- foot

### Spacing

The components are spaced 96px apart in mobile design The hero and intro are
160px apart, remaining are 184px apart (make proportionate to viewport width?)

### Effects

Links (menu and social icons)

- 3ch centered underline on hover/focus
- cursor pointer

Button

- text and background colours flip on hover/focus
- cursor pointer

Grid Image

- overlay on hover, text set to black

### Hero/Header (.ls-Hero, .ls-Hero_navbar, .ls-Hero_hdr-wrap .ls-HeroNav)

- width: 100vw, all screens
- height: 650px, all screens
- background image covers whole division
  - available in desktop and mobile sizes
- 3 elements:
  - logo
  - header text
  - menu (5 items)
    - collapses to hamburger menu on smaller screens
      - opens as an hero/header overlay with an 'x' for closing

### Intro (.ls-Intro)

- width: 100vw
- height: 500px desktop, 527px mobile
- image
- header and paragraph that slightly overlays the image's bottom right corner

### Creations (.ls-Creations)

- header
- button (see all)
- a 4x4 grid pattern of images
  - images: desktop are 256px by 450px
  - images: mobile 327x120
  - grid gap: 30px
- all the images have a linear overlay and text caption

### Footer (.ls-footer)

- logo
- menu
- social icons
- copyright

## Naming Decisions

| Class        | Description     | Tag     | Element(s)                               |
| ------------ | --------------- | ------- | ---------------------------------------- |
| ls           | Loopstudios     | div     | ls-\* classes                            |
| ls-Hero      | Hero section    | header  | .ls-Hero_navbar                          |
|              |                 |         | .ls-Hero_hdr-wrap [h1 ], .full-bleed     |
| ls-HeroNav   | Hero Navigation | nav     | .toggler .hamburger .menu                |
| ls-Intro     | Introduction    | section | picture, .ls-Intro_details [h2 p]        |
| ls-Creations | Creations       | section | h2, button, img\*                        |
| ls-Footer    | Footer          | footer  | .full-bleed, img, p, .menu, .attribution |

## Colours

- White: hsl(0, 0%, 100%)
- Black: hsl(0, 0%, 0%)
- Dark Gray: hsl(0, 0%, 55%)
- Very Dark Gray: hsl(0, 0%, 41%)

## Fonts

### Body

- Family: [Alata](https://fonts.google.com/specimen/Alata)
- Weight: 400
- default size: 15px

### Headers

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weight: 300

## Icons

Developers choice, suggestions:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)

## References

[Creating a Full-bleed CSS Utility](https://piccalil.li/tutorial/creating-a-full-bleed-css-utility)
[CSS In Depth](https://www.manning.com/books/css-in-depth) by Keith J. Grant
[How to add Gradients to Images with CSS::after](https://peter.coffee/how-to-use-css-pseudo-elements-to-add-a-gradient-to-images)
[Pure CSS Hamburger Menu & Overlay](https://www.youtube.com/watch?v=DZg6UfS5zYg)
[Using nested figure elements](https://developer.paciellogroup.com/blog/2011/11/html5-accessibility-chops-using-nested-figure-elements/)

## Notes

- decided to use SASS for modular capabilities, writing in pure CSS for the
  moment but storing in .scss files for modularity and minification
  - 🔸need to remember to reference images from the project directory and not
    the scss directory
- blah, wasted ages trying to position the `ls-Intro_details` first using
  `flex`, then using negative margins and padding, gave up on the padding and
  switched to using absolute position and a grid and voila!

## Issues

1. The logo needs to be retained at the top of the screen (so the whole navbar
   needs to appear and be fixed, just as on the desktop)
   - ✔️ FIXED: set `z-index: 10` on `.ls-Hero_navbar` to keep it on top, lifts
     the logo with it
1. Close 'x' on open hamburger menu can be scrolled off the top of the page
1. Need a rethink on spacing, padding for sections!!!
   - ✔️ FIXED this by adding Andy Bell's `full-bleed` utility class to
     `ls-Header` and `ls-Footer`, allowed the `ls` class to be used as the
     sizing wrapper for the page which meant I could remove max-width and
     padding from a number of the other classes
