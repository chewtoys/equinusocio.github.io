---
title: CSS Animations with FLIP
thumbnail: cover.png
featured_image: cover.png
tags:
  - Css
  - Animations
---

Le animazioni CSS sono un ottimo modo per aggiungere dinamicità e migliorare l'esperienza complessiva dell'utente, ma possono anche incrementare il senso di frustrazione e rallentamento se non sono gestite correttamente. Per questo motivo un'animazione deve essere **ben studiata**, **bilanciata** e **performante**.

<!-- more -->

Esistono diversi approcci per gestire al meglio le animazioni, ma in linea di massima conviene sempre sfruttare l'accelerazione **GPU** del dispositivo ed evitare cambiamenti al *layout* e operazioni che scatenano la fase di *repaint* del browser. Animando la proprietà [transform](https://csstriggers.com/transform) e [opacity](https://csstriggers.com/opacity) si possono già ottenere risultati soddisfacenti ed è consigliato non intervenire su altre proprietà salvo casi specifici. Se vogliamo che le nostre animazioni vengano eseguite a **60*fps*** possiamo fare di più e migliorare il modo in cui progettiamo i vari keyframes che compongono la nostra timeline. Non è sempre facile raggiungere una fluidità soddisfacente e comunque dipende da cosa si vuole ottenere, ma il metodo **FLIP** presentato qualche anno fa da [Paul Lewis](https://aerotwist.com/) può aiutare.

## Il medoto FLIP

L'acronimo **FLIP** è composto da _**F**irst_, _**L**ast_, _**I**nvert_, _**P**lay_, qui di seguito descritti:

- **First**: Definisci lo stato iniziale degli elementi.
- **Last**: Definisci lo stato finale degli element.
- **Invert**: Considerando lo stato iniziale e lo stato di arrivo, sappiamo come gli elementi cambiano durante l'animazione. Se vogliamo — ipotizzando — spostare un elemento di `+150px` sull'*asse X*, in questo caso il nostro punto di arrivo diventa il nostro punto di partenza. Lo stato iniziale dell'animazione avrà `transformX` a `150px`, mentre lo stato di arrivo avrà la proprietà `transform` impostata a `none`.
- **Play**: Esegui l'animazione azzerando le proprietà cambiate in modo da portare l'elemento al suo stato inziale, ma visivamente allo stato finale che volevamo. Qui una piccola [live demo.](https://jsfiddle.net/equinusocio/psq5g0cd/)

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

