<script setup lang="ts">
import {useCreateService} from "../composables/useCreateService.ts";
import {IftaLabel, InputText, Button} from "primevue";

const {form, createService} = useCreateService();
</script>

<template>
  <div class="cityModal">
    <IftaLabel class="w-full">
      <InputText class="w-full" id="serviceName" v-model="form.name"/>
      <label for="serviceName">Название сервиса</label>
    </IftaLabel>
    <IftaLabel class="w-full">
      <InputText class="w-full" id="serviceCode" v-model="form.code"/>
      <label for="serviceCode">Код сервиса</label>
    </IftaLabel>
    <IftaLabel class="w-full">
      <InputText class="w-full" id="serviceDescription" v-model="form.description"/>
      <label for="serviceDescription">Описание сервиса</label>
    </IftaLabel>
    <Button icon="pi pi-plus" label="Добавить" :disabled="!form.name || !form.code || !form.description"
            @click="createService()"/>
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