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

- The graphics appear to scale correctly except for the box, why??

References:

- [MDN: details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [MDN: linear-gradient()](<https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient()>)
- [Stackoverflow: Making Gradient Fill the Page with CSS](https://stackoverflow.com/questions/16841323/making-gradient-background-fill-page-with-css)
- [Dev ED: CSS Position Tutorial](https://www.youtube.com/watch?v=gD3G67oPg-w&list=PLDyQo7g0_nsUjf046cCHKJ16U1SoXrElZ&index=3)
- [Codrop CSS Reference: animation, @keyframes](https://tympanus.net/codrops/css_reference/keyframes/)
- [MDN: Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
