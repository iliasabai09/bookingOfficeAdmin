<script setup lang="ts">
import {useCity} from "./composables/useCity.ts";
import {DataTable, Column, Tag, Select, InputText, Toolbar, Button} from "primevue";

const {cityList, editingRows, statuses, onRowEditSave, createCIty} = useCity()

</script>

<template>
  <Toolbar style="margin: 24px 0">
    <template #end>
      <Button label="New" icon="pi pi-plus" class="mr-2" @click="createCIty()"/>
      <Button label="Delete" icon="pi pi-trash" severity="danger" outlined/>
    </template>
  </Toolbar>

  <DataTable v-model:editingRows="editingRows" :value="cityList" editMode="row" dataKey="id"
             @row-edit-save="onRowEditSave">
    <Column field="id" header="ID" style="width: 20%"></Column>
    <Column field="code" header="Code" style="width: 20%">
      <template #editor="{ data, field }">
        <InputText v-model="data[field]"/>
      </template>
    </Column>
    <Column field="name" header="Name" style="width: 20%">
      <template #editor="{ data, field }">
        <InputText v-model="data[field]" fluid/>
      </template>
    </Column>
    <Column field="isActive" header="Status" style="width: 20%">
      <template #editor="{ data, field }">
        <Select v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value"
                placeholder="Set status" fluid>
          <template #option="slotProps">
            <Tag :value="slotProps.option.value ? 'Активно' : 'Неактивно'"
                 :severity="slotProps.option.value ? 'success' : 'danger'"/>
          </template>
        </Select>
      </template>
      <template #body="slotProps">
        <Tag :value="slotProps.data.isActive ? 'Активно' : 'Неактивно'"
             :severity="slotProps.data.isActive ? 'success' : 'danger'"/>
      </template>
    </Column>
    <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
  </DataTable>
</template>

<style scoped lang="scss">

</style>