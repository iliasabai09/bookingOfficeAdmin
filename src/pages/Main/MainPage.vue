<script setup lang="ts">
import {Button, Column, DataTable, InputText, Toolbar} from "primevue";
import {usePartners} from "./composables";

const {
  partners,
  expandedRows,
  deletePartner,
  createPartner,
  getPartnerAreas
} = usePartners();

</script>

<template>
  <div class="wrapper">
    <Toolbar class="m-4">
      <template #end>
        <Button label="Добавить" icon="pi pi-plus" class="mr-2" @click="createPartner()"/>
      </template>
    </Toolbar>
    <DataTable :value="partners" editMode="row" dataKey="id"
               v-model:expandedRows="expandedRows"
               @rowExpand="getPartnerAreas($event)">
      <Column expander style="width: 5rem"/>
      <Column field="id" header="ID" style="width: 5%"></Column>
      <Column field="organizationName" header="Name" style="width: 20%">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" fluid/>
        </template>
      </Column>
      <Column field="organizationBin" header="Bin" style="width: 20%"></Column>
      <Column field="factAddress" header="FactAddress" style="width: 20%"></Column>
      <Column field="jurAddress" header="JurAddress" style="width: 20%"></Column>
      <Column field="firstContact" header="FirstContact" style="width: 20%"></Column>
      <Column field="email" header="Email" style="width: 20%"></Column>
      <Column :exportable="false">
        <template #body="slotProps">
          <div class="actions">
            <Button icon="pi pi-pencil" outlined severity="primary" @click="createPartner(slotProps.data)"/>
            <Button icon="pi pi-trash" outlined rounded severity="danger" @click="deletePartner(slotProps.data.id)"/>
          </div>
        </template>
      </Column>
      <template #expansion="slotProps">
        <div class="p-4">
          <DataTable :value="slotProps.data.areas" selection-mode="single">
            <Column field="name" header="Name"></Column>
            <Column field="areaType" header="AreaType"></Column>
            <Column field="personCount" header="PersonCount"></Column>
            <Column field="description" header="Description"></Column>
            <template #empty>
              <h3 style="text-align: center">Пусто...</h3>
            </template>
          </DataTable>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  background-color: var(--surface-1);
}

.actions {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>