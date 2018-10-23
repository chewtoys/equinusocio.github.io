<template>
  <article class="ProjectCard">
    <a :href="url" :title="title" :target="urlTarget">
      <figure>
        <img class="ProjectImage" :src="image" :alt="title" draggable="false">
      </figure>

      <div class="ProjectTitle">
        <span class="ProjectCounter">{{counter}}</span>
        <h1 class="SubTitle">{{title}}</h1>
      </div>
    </a>
  </article>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        default: '#'
      },
      urlTarget: {
        type: String,
        default: '_self'
      },
      title: {
        type: String,
        default: '',
        required: true
      },
      image: {
        type: String,
        required: true
      },
      counter: {
        type: String,
        default: '01',
        required: true
      }
    }
  }
</script>

<style lang="postcss" scoped>
.ProjectCard {
  position: relative;

  & > a {
    display: block;
    text-decoration: none;
  }

  & > a:hover {
    color: var(--callToActionColor, #00E2BC);
  }
}

[data-theme='dark-theme'] .ProjectImage {
  filter: invert(100%);
}


.ProjectTitle {
  text-decoration: none;
  display: grid;
  grid-template-columns: minmax(40px, 60px) auto;
  grid-gap: 24px;
  padding: 24px 0;

  & > * {
    font-weight: inherit;
    margin: 0;
  }
}

.ProjectCounter {
  font-weight: 900;
  font-size: 40px;
  color: var(--callToActionColor, #00E2BC);
}
</style>

