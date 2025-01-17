<script setup lang="ts">
import {IftaLabel, InputText, Button} from "primevue";
import {useCreateCity} from "../composables/useCreateCity.ts";

const {form, createCity} = useCreateCity();
</script>

<template>
  <div class="cityModal">
    <IftaLabel class="w-full">
      <InputText class="w-full" id="username" v-model="form.name"/>
      <label for="username">Название города</label>
    </IftaLabel>
    <IftaLabel class="w-full">
      <InputText class="w-full" id="username" v-model="form.code"/>
      <label for="username">Код города</label>
    </IftaLabel>
    <Button icon="pi pi-plus" label="Добавить" :disabled="!form.name || !form.code" @click="createCity()"/>
  </div>
</template>

<style scoped lang="scss">
.cityModal {
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>