---
title: Hot tips CSS
date: 2018-06-21 11:17:50
thumbnail: cover.png
featured_image: cover.png
tags:
  - Css
  - Tips
---

Here a curated collection of css snippets that you can use for determinate situations or just for fun. Let's start.

<br><br><br>

**Image rendering**
```css
img.QRcode {
  image-rendering: pixelated;
}
```
<small class="image-caption">This property is useful to render QR codes and image thumbnails to increase their quality.</small>

<br><br><br>

**Run style on Safari 11+**

```css
@supports (padding: env(safe-area-inset)) {
  /* Your code for Safari 11+ */
}
```
<small class="image-caption">The `env()` function and the `environment variables` is implemented by Safary 11+ to support Apple iPhone X screens. You can read more info <a title="Designing Websites for iPhone X" href="https://webkit.org/blog/7929/designing-websites-for-iphone-x/" >here</a></small>

<br><br><br>

**Check empty nodes**

```css
my-component:empty {
  display: none;
}
```
<small class="image-caption">Hide your element when have no content inside. `Returns` and `white spaces` are considered as content.</small>

<br><br><br>

**Shape your text**

```css
p {
  shape-outside: polygon(0 0, 0 200px, 300px 600px);
}
```
<small class="image-caption">Change the way how content will wrap around your floated elements.</small>

<br><br><br>

**Plain SVG as background**

```css
my-component {
  background-image: url('data:image/svg+xml;utf8,<svg>...</svg>');
}
```
<small class="image-caption">Use `<svg>` as css background without convert it to base64.</small>

<br><br><br>

**Disable all user interactions**

```css
[data-untouchable] {
  pointer-events: none;
}
```
<small class="image-caption">Disable all user interactions, even js events, with just one property.</small>

<br><br><br>

**Clean and self-contained component**

```css
my-component {
  all: initial;
  contain: content;
}
```
<small class="image-caption">Create a style-cleaned and self-contained component with two properties. With `contain: content` will be created a new stacking-context and position fixed coordinates will reference to this property.</small>

<br><br><br>

**Overflow snapping**

```css
my-component {
  scroll-snap-type: mandatory;
  scroll-snap-destination: 50% 50%;
}
```
<small class="image-caption">Control scroll snapping for elements with overflow.</small>

<br><br><br>

**System Font Stack**

```css
my-component {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                Helvetica, Arial, Ubuntu, sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```
<small class="image-caption">Use the system font to provide a consistent typography experience.</small>

<br><br><br>

**Check if input have a value**

```css
.Note {
  opacity: 0;
  transition: opacity 200ms ease-out;
}

input:not(:placeholder-shown) + .Note {
  opacity: 1;
}
```
<small class="image-caption">This pseudo class allows you to check if the input have a value. <a href="https://jsfiddle.net/equinusocio/9hdm3fLc/embedded/result/" target="_blank">Live demo.</a></small>

<br><br><br>

**Repeat Gradients**

```css
.repeat-linear {
  background:
    repeating-linear-gradient(
      45deg,
      lime,
      lime 10px,
      pink 10px,
      pink 20px
    );
}

.repeat-radial {
  background:
    repeating-conic-gradient(
      circle at 0 0,
      tomato,
      limegreen 50px
    );
}
```
<small class="image-caption">You can repeat gradients instead of mess with mixins.</small>

<br><br><br>

**Vector icons as mask**

```css
button {
  background: linear-gradient(to right, #d2ff52 0%,#30A85A 100%);
  height: 40px;
  width: 100px;
  mask: url(https://cdn.onlinewebfonts.com/svg/img_529012.svg);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 24px;
}
```
<small class="image-caption">Use svg icons as mask and keep color manipilation. <a href="https://jsfiddle.net/equinusocio/2jekbdas/embedded/result/" target="_blank">Live demo.</a></small>

