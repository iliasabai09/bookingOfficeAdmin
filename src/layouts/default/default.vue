<script setup lang="ts">
import MenuBar from "./components/MenuBar.vue";
import {Button} from "primevue";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

function toggle() {
  document.documentElement.classList.toggle("my-app-dark");
}

const activeHeader = computed(() => {
  if (route.fullPath.includes('/others')) return 'Другие данные'
  return 'Партнеры'
})
</script>

<template>
  <main>
    <MenuBar/>
    <section class="content">
      <header>
        <h2>{{ activeHeader }}</h2>
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
  height: 80px;
  align-items: center;
  padding: 0 32px;
  justify-content: space-between;
}

.left {

}

.content {
  flex: 1;
}

.page {
  padding: 0 32px;
}
</style>