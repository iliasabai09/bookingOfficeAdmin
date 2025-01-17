<script setup lang="ts">
import MenuBar from "./components/MenuBar.vue";
import {Button} from "primevue";

function toggle() {
  document.documentElement.classList.toggle("my-app-dark");
}
</script>

<template>
  <main>
    <MenuBar/>
    <section class="content">
      <header>
        <Button icon="pi pi-sun" rounded aria-label="Filter" @click="toggle"/>
      </header>
      <div class="page">
        <router-view/>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
}

header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 80px;
  align-items: center;
  padding: 0 16px;
}
.left{

}
.content {
  flex: 1;
}

.page {
  padding: 0 32px;
}
</style>