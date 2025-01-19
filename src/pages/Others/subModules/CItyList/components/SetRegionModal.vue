<script setup lang="ts">
import {Button, IftaLabel, InputText} from "primevue";
import {useCreateRegion} from "../composables/useCreateRegion.ts";

const {form, isSave, setRegion} = useCreateRegion();
</script>

<template>
  <div class="regionModal">
    <IftaLabel class="w-full">
      <InputText class="w-full" id="regionName" v-model="form.name"/>
      <label for="regionName">Название региона</label>
    </IftaLabel>
    <IftaLabel class="w-full">
      <InputText class="w-full" id="regionCode" v-model="form.code"/>
      <label for="regionCode">Код региона</label>
    </IftaLabel>
    <Button icon="pi pi-plus" :label="isSave ? 'Добавить' : 'Изменить'" :disabled="!form.name || !form.code"
            @click="setRegion()"/>
  </div>
</template>

<style scoped lang="scss">
.regionModal {
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>