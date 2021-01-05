# Challenge Review

On completing the first twelve available _newbie_ challenges I want to take some
time to review, and consolidate what I've learned from coding the designs.
Essentially, hope to abstract what is reuseable from each challenge and re-vamp
the way I approached the designs.

## Initial Thoughts

### Layout is structure and structure is defined in the HTML

It is necessary to identify visual components in the design, how they relate to
each other, and how they may be extracted for reuse. This requires separating
presentation from components. This has led me to think that:

- visual components should be opinionated as to the layout of their children and
  agnostic with regard to their own position in their parent's layout

  - components should not set their own margins or positions

- wrappers should only be concerned with the positioning of their children
  - they should not define any typographic or visual styles

But, how to make that work? Via utility classes that are confined to
positioning? A components margins and position are only to be set by pairing
them with additional classes as dictated by the context they will appear in.
