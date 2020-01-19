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
Thanks to [jtebert](https://github.com/jtebert) for the base code. I've added a few more mods to include captions for your figures using the _alt_ field in HTML.

**Example (Markdown):**

{% raw %}
``` markdown
![This image has transparency]({{ "assets/images/just-the-docs.png" | absolute_url }})
```
{% endraw %}

![This image has transparency]({{ "assets/images/just-the-docs-wide.png" | absolute_url }})


**Example (HTML):**

{% raw %}
``` html
<img alt="This image has a white background"
     src="{{ "assets/images/just-the-docs-white.png" | absolute_url }}"/>

```
{% endraw %}

<img alt="This image has a white background"
     src="{{ "assets/images/just-the-docs-white.png" | absolute_url }}"/>



## Image galleries
Use image galleries to put pictures side-by-side. Don't worry, they will be placed vertically if the screen is too small.

Image widths are be hard-coded in increments of 10%. Use the `gallery` class to put images in a gallery, then use one of the sizeing classes (`gallery-##`) to set the image widths.

**Example (Markdown):**

{% raw %}
``` markdown
![This image has transparency]({{ "assets/images/just-the-docs.png" | absolute_url }}){: .gallery .gallery-50}
![This image has a white background]({{ "assets/images/just-the-docs-white.png" | absolute_url }}){: .gallery .gallery-50}

<!--NOTE: You cannot have lines between images or they will be parsed as new paragraphs-->
```
{% endraw %}

![This image has transparency]({{ "assets/images/just-the-docs.png" | absolute_url }}){: .gallery .gallery-50}
![This image has a white background]({{ "assets/images/just-the-docs-white.png" | absolute_url }}){: .gallery .gallery-50}


**Example (HTML):**

{% raw %}
``` html
<img alt="This image has transparency, and is 40% width"
     src="{{ "assets/images/just-the-docs.png" | absolute_url }}"
     class="gallery gallery-40"/>
<img alt="This image has a white background, and is 60% width"
     src="{{ "assets/images/just-the-docs-white.png" | absolute_url }}"
     class="gallery gallery-60"/>

<!--NOTE: You cannot have lines between images or they will be parsed as new paragraphs-->
```
{% endraw %}

<img alt="This image has transparency, and is 40% width"
     src="{{ "assets/images/just-the-docs.png" | absolute_url }}"
     class="gallery gallery-40"/>
<img alt="This image has a white background, and is 60% width"
     src="{{ "assets/images/just-the-docs-white.png" | absolute_url }}"
     class="gallery gallery-60"/>



## Smaller Tweaks
1. **Add the site logo in addition to the site name.** In the original theme this option replaces the site name (which I didn't like all that much)
2. **Bold headers.** This makes them more visually distinct from text
3. **"Lato" font** Lato is a nice, easy-to-read font from [Google Fonts](https://fonts.google.com/specimen/Lato) with a variety of weights to choose from.
4. **Smooth scrolling within the page.** This makes moving to a section from the table of contents visually consistent. No longer an abrupt page jump.
