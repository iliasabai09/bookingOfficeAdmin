<script setup lang="ts">
import {useSetPartner} from "../composables/useSetPartner.ts";
import {Button, IftaLabel, InputText} from "primevue";

const {form, loading, isSave, validForm, createPartner} = useSetPartner();
</script>

<template>
  <div class="setPartnerModal">
    <IftaLabel class="item">
      <InputText class="w-full" id="partnerName" v-model="form.organizationName"/>
      <label for="partnerName">Наименование партнера</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="organizationBin" v-model="form.organizationBin"/>
      <label for="organizationBin">Бин</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="factAddress" v-model="form.factAddress"/>
      <label for="factAddress">Фактичесский адрес</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="jurAddress" v-model="form.jurAddress"/>
      <label for="jurAddress">Второй адрес</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="brandName" v-model="form.brandName"/>
      <label for="brandName">Название бренда</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="brandLogo" v-model="form.brandLogo"/>
      <label for="brandLogo">Лого бренда</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="firstContact" v-model="form.firstContact"/>
      <label for="firstContact">Основной контакт</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="secondContact" v-model="form.secondContact"/>
      <label for="secondContact">Второй контакт</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="generalOpeningHours" v-model="form.generalOpeningHours"/>
      <label for="generalOpeningHours">Время открытия</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="holidayOpeningHours" v-model="form.holidayOpeningHours"/>
      <label for="holidayOpeningHours">Время открытия в праздники</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="whatsapp" v-model="form.whatsapp"/>
      <label for="whatsapp">whatsapp</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="telegram" v-model="form.telegram"/>
      <label for="telegram">telegram</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="instagram" v-model="form.instagram"/>
      <label for="instagram">instagram</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="facebook" v-model="form.facebook"/>
      <label for="facebook">facebook</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="youtube" v-model="form.youtube"/>
      <label for="youtube">youtube</label>
    </IftaLabel>
    <IftaLabel class="item">
      <InputText class="w-full" id="email" v-model="form.email"/>
      <label for="email">email</label>
    </IftaLabel>
  </div>
  <div class="buttons">
    <Button :icon="'pi pi-' + isSave ? 'plus' : 'pencil'"
            :label="isSave ? 'Добавить' : 'Изменить'"
            :loading="loading"
            :disabled="isSave ? validForm : false"
            @click="createPartner()"/>
  </div>
</template>

<style scoped lang="scss">
.setPartnerModal {
  width: 700px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  width: 48%;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>