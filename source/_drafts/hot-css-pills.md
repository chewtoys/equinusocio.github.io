---
title: Hot CSS pills
date: 2018-06-19 11:17:50
thumbnail: cover.png
featured_image: cover.png
tags:
  - css
  - tips
---

Here a curated collection of css snippets that you can use for determinate situations or just for fun. Let's start.


**Image rendering**
```css
img.QRcode {
  image-rendering: pixelated;
}
```
<small class="image-caption">This property is useful to render QR codes and image thumbnails to increase their quality.</small>

**Run style on Safari 11+**

```css
@supports (padding: env(safe-area-inset)) {
  /* Your code for Safari 11+ */
}
```
<small class="image-caption">The `env()` function and the `environment variables` is implemented by Safary 11+ to support Apple iPhone X screens. You can read more info <a title="Designing Websites for iPhone X" href="https://webkit.org/blog/7929/designing-websites-for-iphone-x/" >here</a></small>

**Check empty nodes**

```css
my-component:empty {
  display: none;
}
```
<small class="image-caption">Hide your element when have no content inside. `Returns` and `white spaces` are considered as content.</small>

**Shape your text**

```css
p {
  shape-outside: polygon(0 0, 0 200px, 300px 600px);
}
```
<small class="image-caption">Change the way how content will wrap around your floated elements.</small>

**Plain SVG as background**

```css
my-component {
  background-image: url('data:image/svg+xml;utf8,<svg>...</svg>');
}
```
<small class="image-caption">Use `<svg>` as css background without convert it to base64.</small>

**Disable all user interactions**

```css
[data-untouchable] {
  pointer-events: none;
}
```
<small class="image-caption">Disable all user interactions, even js events, with just one property.</small>

**Clean and self-contained component**

```css
my-component {
  all: initial;
  contain: content;
}
```
<small class="image-caption">Create a style-cleaned and self-contained component with two properties. With `contain: content` will be created a new stacking-context and position fixed coordinates will reference to this property.</small>

**Overflow snapping**

```css
my-component {
  scroll-snap-type: mandatory;
  scroll-snap-destination: 50% 50%;
}
```
<small class="image-caption">Control scroll snapping for elements with overflow.</small>

**System Font Stack**

```css
my-component {
  font-family: font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                Helvetica, Arial, Ubuntu, sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```
<small class="image-caption">Use the system font to provide a consistent typography experience.</small>

