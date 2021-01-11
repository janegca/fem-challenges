# Social Proof Section (Newbie)

[Frontend Mentor Social Proof Section Challenge](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA)

[Initial Solution](https://janegca.github.io/fem-challenges/03-social-proof/index.html)

## Presentation and Components

The design is described as a _section_ so assume the intent is to always present
the subcomponents together and that the section can appear anywhere on a page.

- the page itself holds the social proof section (sps) and a footer
- the sps has two background images in desktop and mobile sizes
  - going to treat these as part of the overall presentation of the section, ie
    integral to it
- the sps has 3 basic subcomponents: text intro, ratings, reviews
- the Intro has two elements: heading, details
- Ratings consists of a number of rating components:
  - a Rating has two elements:
    - stars (graphics)
    - source (text)
- Reviews consist of a number of review components:
- a Review has 2 visual subcomponents:
  - reviewer identity card
    - a reviewer is identified by an:
      - avatar
      - name and descriptor (keep together)
  - text of the review

## Naming Decisions

| Class         | Description                 | Tag     | Element(s)      |
| ------------- | --------------------------- | ------- | --------------- |
| sps           | Social Proof Section        | article | sps-\* classes  |
| sps-Intro     | the Intro component         | section | h1, p           |
| sps-Ratings\* | a list of ratings           | ul      | sps-Rating      |
| sps-Rating    | the Rating component        | article | img, p          |
| sps-Reviews\* | a list of reviews           | ul      | sps-Review      |
| sps-Review    | the Review component        | article | sps-Reviewer, p |
| sps-Reviewer  | an ID card for the reviewer | article | img, p, p       |

## Technical Questions

## Thoughts

### Component Definitions

The _HTML Living Standard_ states that an `article` can be _"any...independent
item of content"_ and that nested articles are assumed to be _"in principle
related to the contents of the outer article"_. It may or may not have a
heading.

A `section` is _"a thematic grouping of content, typically with a heading"_; it
is not a generic element, _"[w]hen an element is needed only for styling
purposes or as a convenience for scripting, authors are encouraged to use the
`div` element instead"_

> A general rule is that the section element is appropriate only if the
> element's contents would be listed explicitly in the document's outline.

Essentially, _"A section forms part of something else. An article is its own
thing."_

Based on the above, I'm going to start using the `article` tag for any component
that can stand alone or may be reuseable and the `section` tag for any element
that should be part of the document outline, reserving the `div` tag for any
elements that need to be grouped solely for positioning or styling purposes.

[HTML Living Standard](https://html.spec.whatwg.org/multipage/sections.html#the-article-element)

### Wrappers, Containers, and Components, Oh My!

Work on the assumptions that:

1. Wrappers are primarily concerned with _presentation_, they group
   containers/components so they can be positioned together, as a unit and so
   are _opinionated_ about how they themselves relate to what's around them but
   are _agnostic_ as to the way the elements they wrap are positioned within
   them.
1. Containers and Components are basically the same thing, they are opinionated
   as to the relationships that exist between the elements they contain but
   agnostic with regards to their own relationship with what's around them.
1. The design is to be built mobile first in such a way that it will require
   only a rearrangement of components to achieve larger layouts i.e. each
   component is to be responsive in its own right and adjust meaningfully to
   whatever space the layout allots the section as a whole

Build the design with these assumptions in mind. Identify the concerns of each
visual component and define them accordingly. Want to be able to easily
identify, add, move, modify, extend, or extract any individual element or
grouping without breaking the design.
