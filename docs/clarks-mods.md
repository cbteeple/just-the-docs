---
layout: default
title: Clark's Upgrades
nav_order: 2
permalink: /docs/upgrades
font_awesome: fas fa-thumbs-up
---

# <i class="{{ page.font_awesome }}"></i> {{ page.title }}
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


## Nicer-looking navigation
- Highlight the active page based on the global color scheme
- Hover effects (seems like this should have been a basic inclusion in the original)
- Font-Awesome icons - super nice!
- Caret indicators (arrows) when nav items have children.
- A generally nice, rounded appearance


## Inclusion of Font-Awesome icons
Use the full name specified in the [website](https://fontawesome.com/icons/thumbs-up?style=solid) 
```yaml
# Include in the YAML front matter in each page

font_awesome: fas fa-thumbs-up
```
The page icon is automatically used in the navigation. Add it to the page using HTML like this:
```html
<i class="{{ page.font_awesome }}"></i>
```

## Modal overlays for pictures
Thanks to [jtebert](https://github.com/jtebert).

![The world is just within reach!]({{ "assets/images/just-the-docs.png" | absolute_url }})


## Smaller Tweaks
1. **Add the site logo in addition to the site name.** In the original theme this option replaces the site name (which I didn't like all that much)
2. **Bold headers.** This makes them more visually distinct from text
3. **"Lato" font** Lato is a nice, easy-to-read font from [Google Fonts](https://fonts.google.com/specimen/Lato) with a variety of weights to choose from.
4. **Smooth scrolling within the page.** This makes moving to a section from the table of contents visually consistent. No longer an abrupt page jump.
