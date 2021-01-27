<template>
  <div class="footer text-center">
    <h4 class="titulo">
      <span v-if="text">{{ text }}</span>
      <span v-else>Copyright &copy; Navita 2020</span>
    </h4>
    <div class=""></div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    text: String
  }
}
</script>

<style scoped>
.footer {
  background-color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
.titulo {
  color: var(--color-app);
  font-size: 0.8rem;
  padding: 15px 25px;
  box-shadow: 0 0 20px var(--shadow-design);
  margin-bottom: 0;
}
.footer-fake {
  height: 45px; 
}
</style>
