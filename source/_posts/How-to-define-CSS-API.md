---
title: How to define CSS API
date: 2018-04-05 22:08:27
thumbnail: https://image.ibb.co/kGDsBc/css.png
featured_image: https://image.ibb.co/kGDsBc/css.png
tags:
- Css
- Custom Properties
---

We **build building–blocks** to **build** the web. When you build a collection of distributable components you must probably define the component API and write the documentation to share with the component consumer. We have a lot of ways to do that in 2018, but what about CSS? While Javascript is the most growing language, CSS is still the best — and only — way to handle and define component style, even if you write it inside the js, you will get CSS and no one can save you from learn it!

With the latest CSS specifications, we can use a lot of awesome features to handle our styles, behaviors and responsive things. Say _Hello!_ to [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) and CSS API.

## Define the element

Let's start defining our `html` component with a simple attribute binding.

```html
<progress my-progress value="50" max="100"></progress>
```
_You can also use classes to bind the element to the CSS_


Now let's add some style to our element following the native css nesting syntax:

```css
[my-progress] {
  position: relative;
  width: 100%;
  border: none;
  vertical-align: baseline;
  appearance: none;
  overflow: hidden;
  display: block;
  height: 5px;
  border-radius: 10px;
  background: hsl(0, 0%, 97%);
  box-shadow: inset 0 0 0 1px hsl(0, 0%, 89%);

  &::-webkit-progress-bar {
    border-radius: 10px;
    background: hsl(0, 0%, 97%);
    box-shadow: inset 0 0 0 1px hsl(0, 0%, 89%);
  }

  &::-webkit-progress-value {
    border-radius: 10px;
    background: hsl(0, 0%, 89%);
  }

  &::-moz-progress-bar {
    border-radius: 10px;
    background: hsl(0, 0%, 89%);
  }
}

```

Now we have a fancy progress bar using the native html element, but **how can we allow customisations and handle the style without make consumers entering in a mess of classes and specificity issues?**

## Custom properties and API

We can define at this point a bunch of [Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) and let consumers know how they can customise our component without facing issues and integrate it with their custom classes.

Let's pick our previous CSS example and then add some custom properties. We have to define properties that you want to be customisable/accessible from the ”outside" and convert them into custom properties.


```css
[my-progress] {
  position: relative;
  width: 100%;
  border: none;
  vertical-align: baseline;
  appearance: none;
  overflow: hidden;
  display: block;
  height: var(--progressHeight);
  border-radius: var(--progressBorderRadius);
  background: var(--progressBackground);
  box-shadow: inset 0 0 0 1px var(--progressBorderColor);

  &::-webkit-progress-bar {
    border-radius: var(--progressBorderRadius);
    background: var(--progressBackground);
    box-shadow: inset 0 0 0 1px var(--progressBorderColor);
  }

  &::-webkit-progress-value {
    border-radius: var(--progressBorderRadius);
    background: var(--progressFilledColor);
  }

  &::-moz-progress-bar {
    border-radius: var(--progressBorderRadius);
    background: var(--progressFilledColor);
  }
}
```


Now we have a beautiful way to customise our element without worrying about classes and conflicting css scopes, but we forgot something...

**What about decoupling internal custom properties from the public ones?**

Right now we have coupled css properties on which consumers can directly work. This is not a good move if you want to extend/refactor your component without making breaking changes everytime, or, if you don't want consumers know about what you are using inside. Another issue with this example is the lack of custom properties fallbacks.

So, we can do better and improve our code:

```css
[my-progress] {
  --progressBorderColor: var(--my-progress-border-color, hsl(0, 0%, 89%));
  --progressBackground: var(--my-progress-background, hsl(0, 0%, 97%));
  --progressFilledColor: var(--my-progress-filled-color, var(--progressBorderColor));
  --progressHeight: var(--my-progress-height, 5px);
  --progressBorderRadius: var(--my-progress-radius, 10px);

  position: relative;
  width: 100%;
  border: none;
  vertical-align: baseline;
  appearance: none;
  overflow: hidden;
  display: block;
  height: var(--progressHeight);
  border-radius: var(--progressBorderRadius);
  background: var(--progressBackground);
  box-shadow: inset 0 0 0 1px var(--progressBorderColor);

  &::-webkit-progress-bar {
    border-radius: var(--progressBorderRadius);
    background: var(--progressBackground);
    box-shadow: inset 0 0 0 1px var(--progressBorderColor);
  }

  &::-webkit-progress-value {
    border-radius: var(--progressBorderRadius);
    background: var(--progressFilledColor);
  }

  &::-moz-progress-bar {
    border-radius: var(--progressBorderRadius);
    background: var(--progressFilledColor);
  }
}
```

Making another internal layer, we can now decouple public and internal css api and then expose a set of namespaced custom properties that will be applied directly to the element root tag. We can also define fallback values inside the properties list in one place, at the top of our code, and not scattered into the code.

## Using and customising

We have now our component with his shiny css api, let's go on and see how to use them.

```css
progress {
  --my-progress-filled-color: linear-gradient(to right, deeppink, tomato);
}

.mySpecialProgress {
  --my-progress-filled-color: linear-gradient(to right, lightgreen, greenyellow);
}
```

{% jsfiddle p375dkp3 result,css light?accentColor=00e2bc&bodyColor=FFF %}


## Extra
If you work with **Web Components** and the **Shadow DOM** (and you should) you can use this method to expose css properties outside your component `shadow root` and then make them editable because custom properties pierce the shadow dom boundary.
There are a lot of tool around that help you working with web components, like [Polymer Skeleton](https://github.com/PolymerX/polymer-skeleton), the most complete starter kit to build PWA based on Polymer 3.

If you are interested to this article check my [Native Elements](https://github.com/equinusocio/native-elements) project. It is just in a WIP status but you can already see something live.