<script setup lang="ts">
import App from "./layouts/App.vue";
  useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  });
  onMounted(()=>{
    console.log($('body'));
  });
</script>

<script setup>

</script>
<template>
  <App>
    <div class="container">
      <h1>Hoang Tu</h1>
    </div>
  </App>
</template>
