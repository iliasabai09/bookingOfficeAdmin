<script setup lang="ts">
import {Tab, TabList, Tabs} from "primevue";
import {ref} from "vue";
import CityList from "./subModules/CItyList/CityList.vue";

const selectedIdx = ref(0);
const components = ref([CityList])
</script>

<template>
  <section>
    <Tabs v-model:value="selectedIdx">
      <TabList>
        <Tab value="0">Города</Tab>
        <Tab value="1">Сервисы</Tab>
        <Tab value="2">Тарифы</Tab>
      </TabList>
      <component :is="components[selectedIdx]"/>
    </Tabs>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  height: 100%;
  background-color: var(--surface-1);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--border);
}
</style>