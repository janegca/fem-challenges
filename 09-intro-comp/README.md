# Intro Component with Sign-up Form (newbie)

[Frontend Mentor Intro component with sign-up form challenge](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1)

[Finished Project](https://janegca.github.io/fem-challenges/09-intro-comp/index.html)

## Criteria

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field
    Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address
    should have this structure: `name@host.tld`). The message for this error
    should say _"Looks like this is not an email"_

## Design Overview

- Mobile (375px) and Desktop (1440px) layouts
- Background images for both, two sizes available
- 3 sections: Intro, TryIt, Form
  - rounded edges with matching, un-blurred shadows on bottom edge only
- hover action on form button
- error highlighting on form fields
  - red outline, error icon

## Colours

- Red: hsl(0, 100%, 74%) (bg)
- Green: hsl(154, 59%, 51%) (buttons)
- Blue: hsl(248, 32%, 49%) (accent/heading)
- Dark Blue: hsl(249, 10%, 26%)
- Grayish Blue: hsl(246, 25%, 77%)

## Fonts

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 400, 500, 600, 700
- Body Font size: 16px

## Notes

- trying out a modified version of
  [Enduring CSS (ECSS)](https://ecss.benfrain.com/) naming convention

### Issues

1. ✔️ Just discovered the error handling technique I used DOES NOT WORK on
   Chrome, Samsung Galaxy internet browser or Firefox on Android. It does work
   on Firefox (both developer and regular editions) on the desktop.
   Disappointing. They don't appear to recognize the `:placeholder-shown`
   property.

   FIX: Discovered (on reading a WebDev Tricks article) that I was using the
   `:not()` function incorrectly, now error messages work on Chrome and Android
   😄

### Form Validation

The browser validation hints kick in when the button is clicked, the CSS styling
will be ignored if it is not already showing. Did find
[a script on Stackoverflow](https://stackoverflow.com/questions/5478800/override-css-for-html5-form-validation-required-popup)
to disable the browser hints:

```javascript
 document.addEventListener(
      "invalid",
      (function () {
        return function (e) {
          //prevent the browser from showing default error bubble/ hint
          e.preventDefault();
          // optionally fire off some custom validation handler
          // myvalidationfunction();
        };
      })(),
      true
```

but I decided against using it as the hints are helpful.

References:

- [CoreLangs box shadow](http://www.corelangs.com/css/box/shadow.html)
- [MDN "input type = text"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
- [WebDev Tricks HTML CSS Form Validation](https://webdevtrick.com/html-css-form-validation/)
