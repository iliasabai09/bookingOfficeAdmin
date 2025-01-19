<script setup lang="ts">
import { ref} from "vue";
import {Menu} from "primevue";

const items = ref([
  {
    label: 'Партнеры',
    icon: 'pi pi-briefcase',
    route: '/'
  },
  {
    label: 'Other data',
    icon: 'pi pi-microsoft',
    route: '/others'
  },
]);


</script>

<template>
  <section>
    <div class="heading">
      <h1>Booking office</h1>
    </div>
    <div class="content">
      <Menu :model="items" style="border: none">
        <template #item="{ item, props }">
          <router-link v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" style="color: var(--primary)"/>
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </router-link>
        </template>
      </Menu>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: var(--surface-1);
  width: 250px;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.heading {
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
}

.content {
  flex: 1;
  overflow-y: auto;
}
</style>