<template>
  <div class="banana">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Bananas',
      message: 'I like Nanabas'
    }
  }
};
</script>

<style>
  .banana {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: yellow;
  }
</style>
 