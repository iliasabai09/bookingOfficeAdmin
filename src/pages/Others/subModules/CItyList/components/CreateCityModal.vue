<script setup lang="ts">
import {IftaLabel, InputText, Button} from "primevue";
import {useCreateCity} from "../composables/useCreateCity.ts";

const {form, createCity} = useCreateCity();
</script>

<template>
  <div class="cityModal">
    <IftaLabel class="w-full">
      <InputText class="w-full" id="cityName" v-model="form.name"/>
      <label for="cityName">Название города</label>
    </IftaLabel>
    <IftaLabel class="w-full">
      <InputText class="w-full" id="cityCode" v-model="form.code"/>
      <label for="cityCode">Код города</label>
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