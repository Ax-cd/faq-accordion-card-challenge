# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Screenshot](#screenshot)
    - [Mobile design](#mobile-design)
    - [Design design](#design-design)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [Frontend Mentor](https://your-solution-url.com)
- Live Site URL: [GitHub Page](https://ax-cd.github.io/faq-accordion-card-challenge/)

### Screenshot

#### Mobile design

![](/src/images/mobile-design-screenshot.png)

#### Desktop design

![](/src/images/desktop-design-screenshot.png)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### Continued development

The last projects I took I styled the elements mainly using either classes or ids, so it was good to practice again styling elements using CSS selectors, to refresh my memory.

```css
details[open] > .question {
  color: hsl(238, 29%, 16%);
  font-weight: 700;
}
details[open] > .question::after {
  transform: rotate(0.5turn);
}
details[open] summary ~ * {
  animation: opened 0.5s ease-in-out;
}
```

### Useful resources

- ["Responsive FAQ Accordion Dropdown In HTML and CSS" by WEBCODEFLOW](https://webcodeflow.com/html-accordion/) - The title is explicit; this article helped me in particular with CSS selectors.

## Author

- Website - [Ax-coding](https://axcoding.blogspot.com/)
- Frontend Mentor - [@Ax-cd](https://www.frontendmentor.io/profile/Ax-cd)
- Instagram - [@ax.coding](https://www.instagram.com/ax.coding/)
