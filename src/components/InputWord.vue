<template>
    <div class="flex flex-col">
        <label :for="props.label" class="mb-2 font-semibold">{{ props.label }}</label>
        <InputText v-model="val" :id="props.label" />
    </div>
</template>
  
<script setup lang="ts">
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const val = ref();
const props = defineProps<{
    label: string
}>()

</script>