---
title: CSS Animations with FLIP
thumbnail: cover.png
featured_image: cover.png
tags:
  - Css
  - Animations
---

CSS animations are a good way to make dynamic user interfaces and to improve general user experience, but they can also increase a sense of frustration and if not handled properly, users could waste their time. That is the reason why an animation must be **well designed**, **balanced** and **performing**.


There are different ways to better handle good animations, but it is always a good choise to use the device **GPU** acceleration, avoiding **layout** changes and browser **repaint** operations. By animating the [transform](https://csstriggers.com/transform) and [opacity](https://csstriggers.com/opacity) properties you can reach good results and it should not be necessary work on other properties, except in specific cases. If we want to make **60*fps*** animations we can do even more and improve the way we design their keyframes along the timeline. The **FLIP** method presented some years ago by [Paul Lewis](https://aerotwist.com/) might help you to reach the mithological **60*fps*** animations.

## Go FLIP yourself

**FLIP** stands for _**F**irst_, _**L**ast_, _**I**nvert_, _**P**lay_... but let's break them down:

- **First**: Define the initial state of elements
- **Last**: Define the final state of elements
- **Invert**: As you recognized both the states of the elements, you know how they will change along the animation. For example, if you need to move an element along the *X axys* by `-150px`, in this case your final keyframe will become the animation starting point. So, the first keyframe will contain a `transformX` property set to `-150px`, while the last keyframe will reset the transformation with `transform: none`.
- **Play**: Play the animation inverting his direction and remove his changes. The element will have is initial properties but it will appear at the final position. Here you can check a [live demo.](https://jsfiddle.net/equinusocio/psq5g0cd/)

{% blockquote Paul Lewis %}
  FLIP is an approach to animations that remaps animating expensive properties, like width, height, left and top to significantly cheaper changes using transforms. It does this by taking two snapshots, one of the element’s First position (F), another of its Last position (L). It then uses a transform to Invert (I) the element’s changes, such that the element appears to still be in the First position. Lastly it Plays (P) the animation forward by removing the transformations applied in the Invert step.
{% endblockquote%}

{% jsfiddle psq5g0cd result,css ?accentColor=00e2bc&bodyColor=FFF %}

In pratica l'approccio è quello di rimuovere le eventuali trasformazioni invece di applicarle. In questo modo, il browser conoscendo già i keyframes di partenza e arrivo è ingrado di far partire l'animazione più velocemente. **FLIP** è particolarmente utile quando le animazioni vengono scatenate dall'interazione di un utente. Non sempre i vantaggi sono percepibili ma a seconda del dispositivo usato può fare la differenza e dare un senso di reattività.

Another example with a modal..

{% jsfiddle p1atjgx7 result,css ?accentColor=00e2bc&bodyColor=FFF %}

# Animation libraries

Tutti ormai conosciamo il famoso [animate.css](https://daneden.github.io/animate.css/) di [Daniel Eden](https://daneden.me/), ma negli ultimi anni la technologia web si è evoluta molto e gli strumenti che utilizziamo tutti i giorni dovrebbero evolversi di conseguenza. Animate.css offre molte animazioni ma spesso non sono performanti e richiedono grandi risorse per essere eseguite.. e non tutti i dispositivi possono fornirle. Oggi ci sono molte librerie per gestire questi aspetti, alcune basate su **CSS** e altre su **Javascript**:

- [**Bounce.js**](http://bouncejs.com/)
- [**Anime.js**](http://animejs.com/)
- [**Popmotion.js**](https://popmotion.io/pure/)
- [**Repaintless.css**](http://szynszyliszys.github.io/repaintless/)

Se siete interessati all'argomento consiglio anche la lettura di questo articolo di *Paul Lewis* e *Paul Irish*: **[High Performance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/).**

Come sempre anche [Google Fundamentals](https://developers.google.com/web/fundamentals) è una risorsa ottima per ogni sviluppatore e presenta una sezione dedicata alle [animazioni](https://developers.google.com/web/fundamentals/design-and-ux/animations) all'interno del quale vengono anche [confrontati le animazioni via CSS e via CSS](https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript).

