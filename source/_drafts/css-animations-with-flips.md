---
title: CSS Animations with FLIP
thumbnail: cover.png
featured_image: cover.png
tags:
  - Css
  - Animations
---

Le animazioni CSS sono un ottimo modo per aggiungere dinamicità e migliorare l'esperienza complessiva dell'utente, ma possono anche incrementare il senso di frustrazione e rallentamento se non sono gestite correttamente. Per questo motivo un'animazione deve essere **ben studiata**, **bilanciata** e **performante**.

Esistono diversi approcci per gestire al meglio le animazioni, ma in linea di massima conviene sempre sfruttare l'accelerazione **GPU** del dispositivo ed evitare cambiamenti al *layout* o che scatenano la fase di *repaint* del browser. Animando la proprietà [transform](https://csstriggers.com/transform) e [opacity](https://csstriggers.com/opacity) si possono già ottenere risultati soddisfacenti ed è consigliato non intervenire su altre proprietà salvo casi specifici. Ma se vogliamo che le nostre animazioni vengano eseguite a **60*fps*** possiamo fare di più e migliorare il modo in cui disegnamo i vari keyframes che compongono la nostra timeline.

## Il medoto FLIP