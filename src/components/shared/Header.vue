<template>
  <div class="header">
    <h1 class="titulo">
      <span v-if="text">{{ text }}</span>
      <span v-else>Navita</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    text: String
  }
}
</script>

<style scoped>
.header {
  background-color: white;
}

.titulo {
  color: var(--main-color-active);
  font-size: 1.2rem;
  padding: 15px 25px;
  box-shadow: 0 0 20px var(--shadow-design);
}
</style>
